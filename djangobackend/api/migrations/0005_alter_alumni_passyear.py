# Generated by Django 3.2.9 on 2022-06-08 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20220605_1918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alumni',
            name='passyear',
            field=models.IntegerField(default=0),
        ),
    ]