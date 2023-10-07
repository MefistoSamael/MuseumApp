


from django.views.generic.list import ListView
from django.views.generic import CreateView, DeleteView, UpdateView
from django.urls import reverse_lazy
from django.views.generic.detail import DetailView
from typing import Any
from django.db.models.query import QuerySet
from django.views import View
from django.shortcuts import redirect, render
from django.http import Http404, HttpResponse
from datetime import date, datetime, timezone
from django.contrib.auth.mixins import LoginRequiredMixin
import requests

from museum.forms import ReviewForm
from .models import Article, Employee, Excursion, Exhibit, Exhibition, Exposition, Hall, Promocode, Review, Vacancy
from django.contrib import admin
import logging
from plotly.graph_objects import Bar, Layout, Figure
from django.db import transaction

logger = logging.getLogger(__name__)


class HomeView(View):
    @staticmethod
    def get(request):
        context = {
            'articles' : Article.objects.all().order_by("-creation_date")[:2]
        }

        return render(request, 'museum/index.html', context)
    
    
def about(request):
    return render(
        request,
        "museum/about.html",
        {
            'title' : "About HelloDjangoApp",
            'content' : "Example app page for Django."
        }
    )


class ExcursionListView(ListView):
    model = Excursion

    context_object_name = 'excursion_list'

    template_name = 'museum/excursion.html'
    
class HallListView(ListView):
    model = Hall

    context_object_name = 'hall_list'

    template_name = 'museum/hall.html'

    # ПОМНИ КАК ОБРАЩАТЬСЯ К ПОЛЯМ FOREIGNKEY!
    # def get_queryset(self) -> QuerySet[Any]:
    #     for hall in Hall.objects.all():
    #         print(hall.exhibit.all())
    #     return super().get_queryset()

class HallExibitDetailView(View):
    @staticmethod
    def get(request, id):
        try:
            hall = Hall.objects.filter(id = id).first()

        except:
            logger.error("Hall doesn't exist")
            raise Http404("Hall doesn't exist")
        
        logger.info("render exibits of hall ")
        return render(request, 'museum/exhibits.html', context={'exhibits' : Exhibit.objects.filter(hall= hall), })
        
        
class ExpositionListView(ListView):
    model = Exposition

    context_object_name = 'exposition_list'

    template_name = 'museum/exposition.html'


class ExhibitionListView(ListView):
    model = Exhibition

    context_object_name = 'exhibition_list'

    template_name = 'museum/exhibition.html'

class ExpositionExibitDetailView(View):
    @staticmethod
    def get(request, id):
        try:
            exposition = Exposition.objects.get(id = id)

        except:
            logger.error("Exposition doesn't exist")
            raise Http404("Exposition doesn't exist")
        
        logger.info("render exhibits of exposition")
        return render(request, 'museum/exhibits.html', context={'exhibits' : Exhibit.objects.filter(exposition= exposition), })
    
    
class ExhibitionExibitDetailView(View):
    @staticmethod
    def get(request, id):
        try:
            exhibition = Exhibition.objects.get(id = id)

        except:
            logger.error("Exhibition doesn't exist")
            raise Http404("Exhibition doesn't exist")
        
        logger.info("render Exhibition exhibits")
        return render(request, 'museum/exhibits.html', context={'exhibits' : Exhibit.objects.filter(exhibition= exhibition), })
    
class EmployeeExhibitDetailView(LoginRequiredMixin, View):
    @staticmethod
    def get(request):
        try:
            employee = Employee.objects.get(user_name=request.user.username)
        except:
            logger.error("employee doesn't exist")
            raise Http404("employee doesn't exist")
        
        logger.info("render employee exhibits")
        return render(request, 'museum/exhibits.html', context={'exhibits' : Exhibit.objects.filter(observer= employee), })

class UserAccountView(LoginRequiredMixin, View):
    @staticmethod
    def get(request):
        logger.info("render user account")
        return render(request,'museum/user_account.html', context={'employee': Employee.objects.get(user_name=request.user.username)})
    
class DiagramView(View):
    @staticmethod
    def get(request):
        summer_count = Exhibit.objects.filter(admission_date__month__in=range(6,9)).count()
        autumn_count = Exhibit.objects.filter(admission_date__month__in=range(9,12)).count()
        winter_count = Exhibit.objects.filter(admission_date__month__in=(12,1,2)).count()
        spring_count = Exhibit.objects.filter(admission_date__month__in=range(3,6)).count()

        counts = [summer_count, autumn_count, winter_count, spring_count]
        seasons = ['summer', 'autumn', 'winter', 'spring']

        data = Bar(x=seasons,y=counts)

        layout = Layout(title='Count of exhibits, sorted by admission season',
                        xaxis=dict(title='seasons'),
                        yaxis=dict(title='count of exhibits'))
        fig = Figure(data=data, layout=layout)
        plot_div = fig.to_html(full_html=False)

        return render(request, 'museum/diagram.html', context={'plot_div': plot_div})
    
class ArticlesListView(ListView):
    model = Article
    
    template_name = 'museum/articles.html'
    
class ArticleDetailView(DetailView):
    model = Article

    template_name = 'museum/article.html'
    
class FAQView(View):    
    @staticmethod
    def get(request):
        return render(request, 'museum/faq.html')

class EmployeeListView(ListView):
    model = Employee
    
    template_name = 'museum/contacts.html'

class PrivacyPolicyView(View):    
    @staticmethod
    def get(request):
        return render(request, 'museum/privacy_policy.html')
    
class VacancyListView(ListView):
    model = Vacancy
    
    template_name = 'museum/vacancy_list.html'

class VacancyDetailView(DetailView):
    model = Vacancy
    
    template_name = 'museum/vacancy_detail.html'
    
class PromocodeView(View):
    @staticmethod
    def get(request):
        valid_promocodes=Promocode.objects.filter(start_date__lt=datetime.now(), expiration_date__gt=datetime.now())
        expired_promocodes=Promocode.objects.filter(start_date__lt=datetime.now(), expiration_date__lt=datetime.now())
        inactive_promocodes=Promocode.objects.filter(start_date__gt=datetime.now())

        context = {'valid_promocodes': valid_promocodes, 'expired_promocodes':expired_promocodes, 'inactive_promocodes':inactive_promocodes}
        return render(request, 'museum/promocode_list.html', context)

class InfoView(View):
    @staticmethod
    def get(request):
        halls_count = Hall.objects.all().count()
        exhibits_count = Exhibit.objects.all().count()
        exhibitions_count = Exhibition.objects.all().count()
        expositions_count = Exposition.objects.all().count()
        this_month_excursion_count = Excursion.objects.filter(date__month=date.today().month).count()

        context = {
            'halls_count' : halls_count,
            'exhibits_count' : exhibits_count,
            'exhibitions_count' : exhibitions_count,
            'expositions_count' : expositions_count,
            'this_month_excursion_count' : this_month_excursion_count

        }

        return render(request, 'museum/info.html', context)
    
class ReviewListView(ListView):
    model = Review
    template_name="museum/review_list.html"
    context_object_name = "reviews"
    
class ReviewDetailView(DetailView):
    model = Review
    template_name = "museum/review_detail.html"
  
    

class ReviewCreateView(View):
    @staticmethod
    def get(request):
        form = ReviewForm()
        return render(request, "museum/review_form.html", { 'form': form})
    
    @staticmethod
    def post(request):
        form = ReviewForm(request.POST)
        if form.is_valid():
            with transaction.atomic():
                Review.objects.create(
                    reviewer=form.cleaned_data['reviewer'],
                    rate=form.cleaned_data['rate'],
                    text=form.cleaned_data['text'],
                    will_come_back=form.cleaned_data['will_come_back'],
                    )
            return redirect("review_list")
        else:
            return render(request, "museum/review_form.html", { 'form': form})

class ReviewDeleteView(DeleteView):
    model=Review
    template_name="museum/review_delete.html"
    success_url = reverse_lazy('review_list')
    
class lab_taskView(View):    
    @staticmethod
    def get(request):
        return render(request, 'museum/lab_task.html')
    
class APIView(View):
        @staticmethod
        def get(request):
            response = requests.get('https://dog.ceo/api/breeds/image/random')
            image_url = response.json()['message']

            url = 'https://official-joke-api.appspot.com/random_joke'
            try:
                res = requests.get(url).json()

                joke_setup = res['setup']
                joke_punch = res['punchline']
            except:
                joke_setup = 'There will be no joke('
                joke_punch = ''

            context = {
                'image_url': image_url,
                'setup':joke_setup,
                'punch':joke_punch
            }
            return render(request, 'museum/api.html', context)

