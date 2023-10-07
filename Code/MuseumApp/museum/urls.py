
from django.urls import include, path, re_path
import museum.views
from .views import APIView, ReviewListView, ReviewDetailView, ReviewCreateView, ReviewDeleteView, lab_taskView

urlpatterns = [

    path('', museum.views.HomeView.as_view(), name='home'),
    path('home/', museum.views.HomeView.as_view(), name='home'),
    path('about/', museum.views.about, name='about'),
    path('hall/', museum.views.HallListView.as_view(), name='hall'),
    path('excursion/', museum.views.ExcursionListView.as_view(), name='excursion'),
    path('exposition/', museum.views.ExpositionListView.as_view(), name='exposition'),
    path('exhibition/', museum.views.ExhibitionListView.as_view(), name='exhibition'),
    path('hall/exhibits/<int:id>/', museum.views.HallExibitDetailView.as_view(),name='hall_exhibits'),
    path('exposition/exhibits/<int:id>/', museum.views.ExpositionExibitDetailView.as_view(),name='exposition_exhibits'),
    path('exhibition/exhibits/<int:id>/', museum.views.ExhibitionExibitDetailView.as_view(),name='exhibition_exhibits'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('user/',museum.views.UserAccountView.as_view(), name='user_account' ),
    path('user/exhibits/', museum.views.EmployeeExhibitDetailView.as_view(),name='user_exhibits'),
    path('info/', museum.views.InfoView.as_view(), name='info'),
    path('diagram/', museum.views.DiagramView.as_view(), name='diagram'),
    path("articles/", museum.views.ArticlesListView.as_view(), name="article-list"),
    path("article/<int:pk>/", museum.views.ArticleDetailView.as_view(), name="article-detail"),
    path("faq/", museum.views.FAQView.as_view(), name="faq"),
    path("contacts/", museum.views.EmployeeListView.as_view(), name="contacts"),
    path("privacy/", museum.views.PrivacyPolicyView.as_view(), name="privacy_policy"),
    path("vacancy/", museum.views.VacancyListView.as_view(), name="vacancy-list"),
    path("vacancy/<int:pk>/", museum.views.VacancyDetailView.as_view(), name="vacancy-detail"),
    path("promocodes/", museum.views.PromocodeView.as_view(), name="promocodes"),
    path('reviews/', ReviewListView.as_view(), name='review_list'),
    path('reviews/create/', ReviewCreateView.as_view(), name='review_create'),
    path('reviews/<int:pk>/', ReviewDetailView.as_view(), name='review_detail'),
    path('reviews/delete/<int:pk>/', ReviewDeleteView.as_view(), name='review_delete'),
    path('tasks_kabs/', lab_taskView.as_view(), name='lab_task'),
    path('api/', APIView.as_view(), name='api'),

]
