# Generated by Django 4.2.5 on 2023-09-25 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museum', '0011_promocode_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='will_come_back',
            field=models.BooleanField(default=True),
        ),
    ]