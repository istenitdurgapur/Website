from django.db import models

# Create your models here.
class Student(models.Model):
  name = models.CharField(max_length=100)
  image=models.ImageField(upload_to='images')
  email = models.EmailField(unique=True)
  phoneno=models.IntegerField(default=0)
  post = models.CharField(max_length=100)
  year = models.IntegerField(default=0)
  linkedin = models.CharField(max_length=100)
  facebook = models.CharField(max_length=100)
  instagram = models.CharField(max_length=100)
  def __str__(self):
         return self.name

class Alumni(models.Model):
  name = models.CharField(max_length=100)
  image=models.ImageField(upload_to='images')
  email = models.EmailField(unique=True)
  phoneno=models.IntegerField(default=0)
  post = models.CharField(max_length=100)
  startyear = models.DateField(default=0)
  passyear = models.DateField(default=0)
  linkedin = models.CharField(max_length=100)
  facebook = models.CharField(max_length=100)
  instagram = models.CharField(max_length=100)
  def __str__(self):
         return self.name

