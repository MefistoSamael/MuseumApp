# Generated by Django 4.2.5 on 2023-09-08 11:37

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museum', '0010_vacancy_salary_alter_vacancy_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promocode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(help_text='enter Promocode', max_length=50)),
                ('start_date', models.DateTimeField()),
                ('expiration_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reviewer', models.CharField(help_text='enter reviewer', max_length=50)),
                ('rate', models.PositiveIntegerField(help_text='enter rate', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
                ('text', models.TextField(help_text='enter review text')),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]