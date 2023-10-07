# forms.py
from dataclasses import fields
from datetime import date
import logging
from typing import Any, Dict
from django import forms
from django.core import validators

from museum.models import Employee, Exhibit, Exhibition, Hall, Promocode, Review

logger = logging.getLogger(__name__)

class ExhibitForm(forms.ModelForm):

    def clean(self):
            admission_date = self.cleaned_data.get('admission_date')
            hall = self.cleaned_data.get('hall')
            observer = self.cleaned_data.get('observer')
            exhibition = self.cleaned_data.get('exhibition')

            if admission_date > date.today():
                logger.error(f'Failed to create exhibit - admission date are incorrect')
                raise forms.ValidationError("Admission date are incorrect")
            
            if hall != observer.hall:
                logger.error(f'Failed to create exhibit - exhibit hall and observer hall are different')
                raise forms.ValidationError("Exhibit hall and observer hall are different")
            
            if exhibition and exhibition.date < admission_date:
                logger.error(f'Failed to create exhibit - admission date are greater then exhibition date')
                raise forms.ValidationError("Admission date are greater then exhibition date")
            
            logger.info(f'user input passed custom validation')
            
            return self.cleaned_data
    
    class Meta:
         model = Exhibit
         fields = '__all__'

class PromocodeForm(forms.ModelForm):
    def clean(self):
        start_date = self.cleaned_data.get('start_date')

        expiration_date = self.cleaned_data.get('expiration_date')
        
        if (start_date > expiration_date):
            raise forms.ValidationError("Invalid promocode start and expiration dates") 
        
        return self.cleaned_data
    
    class Meta:
         model = Promocode
         fields = '__all__'

class ReviewForm(forms.Form):
    reviewer = forms.CharField(max_length=50)
     
    rate = forms.IntegerField(validators=[validators.MinValueValidator(1),validators.MaxValueValidator(10)])
    
    text = forms.CharField()
    
    will_come_back = forms.BooleanField(required=False  )
        

    