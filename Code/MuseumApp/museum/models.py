from xmlrpc.client import DateTime
from django.core import validators
from django.core.validators import MinLengthValidator
from django.db import models
from datetime import datetime
from django.core.validators import RegexValidator

class Hall(models.Model):

    number = models.CharField(max_length=3, help_text="Enter hall number")

    name = models.CharField(max_length=20, help_text="Enter hall name")

    floor = models.CharField(max_length=3, help_text="Enter hall floor")

    area = models.PositiveIntegerField(help_text="Enter hall area")

    def __str__(self):
        return self.name




class Position(models.Model):
    name = models.CharField(max_length=20, help_text="Enter a position")

    def __str__(self):
        return self.name



from phonenumber_field.modelfields import PhoneNumberField

class Employee(models.Model):

    user_name = models.CharField(max_length=20, help_text="Enter user name")
    
    photo = models.ImageField(upload_to="images/profile_photos/", help_text="Enter profile photo")

    first_name = models.CharField(max_length=20, help_text="Enter full name")

    last_name = models.CharField(max_length=20, help_text="Enter last name")

    hall = models.ForeignKey('Hall', on_delete=models.CASCADE, related_name="employee")

    num_validator = RegexValidator(regex=r"^\+375 \(29\) \d{3}-\d{2}-\d{2}$")

    phone_number = models.CharField(max_length=20, validators=[num_validator], default='+375 (29) xxx-xx-xx')

    position = models.ForeignKey('Position', on_delete=models.CASCADE,related_name="employee")

    def __str__(self):
        return f"{self.last_name} {self.position}"



import uuid
from django.core.validators import MaxValueValidator, MinValueValidator 

class Excursion(models.Model):

    excursion_code = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="Unique ID for this particular excursion")

    name = models.CharField(max_length=20, help_text="Enter excursion name")

    date = models.DateField()

    group_amount = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)])

    guide = models.OneToOneField('Employee', on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class ArtForm(models.Model):
    name = models.CharField(max_length=20, help_text="enter art form")

    def __str__(self):
        return self.name




class Exhibit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="Unique ID for this particular exhibit")

    name = models.CharField(max_length=20, help_text="enter Xzibit name")

    art_form = models.ManyToManyField('ArtForm')

    admission_date = models.DateField()

    observer = models.ForeignKey('Employee',on_delete=models.DO_NOTHING, related_name="exhibit")

    photo = models.URLField(default='')

    hall = models.ForeignKey('Hall', on_delete=models.CASCADE, related_name="exhibit")

    exposition = models.ForeignKey('Exposition', on_delete=models.DO_NOTHING, related_name="exhibit", null=True, blank=True)

    exhibition = models.ForeignKey('Exhibition', on_delete=models.DO_NOTHING, related_name="exhibit", null=True, blank=True)

    def display_art_form(self):
        return ', '.join([ art_form.name for art_form in self.art_form.all()[:3] ])
    display_art_form.short_description = 'Art form'

    def __str__(self):
        return self.name

class Exposition(models.Model):
    name = models.CharField(max_length=20, help_text="enter exposition name")

    theme = models.ForeignKey('Theme', on_delete=models.CASCADE, related_name="exposition")

    hall = models.ManyToManyField('Hall')

    def __str__(self):
        return self.name
    



class Exhibition(models.Model):
    name = models.CharField(max_length=20, help_text="enter exhibition name")

    theme = models.ForeignKey('Theme', on_delete=models.CASCADE, related_name="exhibition")

    hall = models.ManyToManyField('Hall')

    date = models.DateField()

    def __str__(self):
        return self.name
    


class Theme(models.Model):
    name = models.CharField(max_length=20, help_text="enter exposition name")

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=100, help_text="enter title of the article")
    
    summury = models.TextField(max_length=500, help_text="enter summury of the article")
    
    image =  models.ImageField(upload_to="images/article_photos/", help_text="Enter article photo")
    
    content = models.TextField(help_text="enter content of the article")
    
    creation_date = models.DateTimeField(auto_now_add=True)
    
class Vacancy(models.Model):
    
    position = models.CharField(max_length=50, help_text="enter employee position")

    company_name = models.CharField(max_length=50, help_text="enter company name")
    
    city = models.CharField(max_length=50, help_text="enter city")
    
    job_character = models.CharField(max_length=50, help_text="enter job character")
    
    schedule = models.CharField(max_length=50, help_text="enter schedule")
    
    employment = models.CharField(max_length=50, help_text="enter employement")
    
    experience = models.CharField(max_length=50, help_text="enter experience")
    
    education = models.CharField(max_length=50, help_text="enter education")
    
    description = models.TextField(help_text="enter vacancy description")
    
    salary = models.CharField(max_length=50, help_text="enter salary")
    
    def __str__(self):
        return f"{self.position} {self.company_name}"
    
class Review(models.Model):
    reviewer = models.CharField(max_length=50, help_text="enter reviewer")
    
    rate = models.PositiveIntegerField(validators=[validators.MinValueValidator(1),validators.MaxValueValidator(10)], help_text="enter rate")
    
    text = models.TextField(help_text="enter review text")
    
    creation_date = models.DateTimeField(auto_now_add=True)
    
    will_come_back = models.BooleanField(default=False);
    
class Promocode(models.Model):
    code = models.CharField(max_length=50, help_text="enter Promocode")
    
    start_date = models.DateTimeField()

    expiration_date = models.DateTimeField()
    
    def __str__(self):
        return self.code
    


