# Generated by Django 3.2.9 on 2022-07-18 07:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Alumni',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images/Alumni')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phoneno', models.IntegerField(default=0)),
                ('passyear', models.IntegerField(default=0)),
                ('linkedin', models.CharField(max_length=200)),
                ('facebook', models.CharField(max_length=200)),
                ('instagram', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.IntegerField(default=0)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.CharField(blank=True, max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EventName', models.CharField(max_length=100)),
                ('Image', models.ImageField(upload_to='images/Events')),
                ('StartDate', models.DateField(default=0)),
                ('EndDate', models.DateField(default=0)),
                ('time', models.TimeField(default=datetime.time(13, 9, 39, 288845))),
                ('Location', models.CharField(blank=True, max_length=500)),
                ('Link', models.CharField(blank=True, default=' ', max_length=5000)),
                ('Description', models.CharField(blank=True, max_length=5000)),
                ('EventTense', models.CharField(blank=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Image', models.ImageField(upload_to='images/gallery')),
            ],
        ),
        migrations.CreateModel(
            name='sponsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Image', models.ImageField(upload_to='images/sponsers')),
                ('Link', models.CharField(blank=True, default=' ', max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='images')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phoneno', models.IntegerField(default=0)),
                ('post', models.CharField(max_length=100)),
                ('order', models.SmallIntegerField(default=0)),
                ('year', models.IntegerField(default=0)),
                ('linkedin', models.CharField(max_length=200)),
                ('facebook', models.CharField(max_length=200)),
                ('instagram', models.CharField(max_length=200)),
            ],
        ),
    ]
