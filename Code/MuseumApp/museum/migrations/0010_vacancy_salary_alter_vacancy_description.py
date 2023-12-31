# Generated by Django 4.2.5 on 2023-09-08 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museum', '0009_vacancy'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancy',
            name='salary',
            field=models.CharField(default='1,500 - 1,700 rub. on hand', help_text='enter salary', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.TextField(help_text='enter vacancy description'),
        ),
    ]
