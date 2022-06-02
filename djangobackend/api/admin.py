from django.contrib import admin
from .models import Alumni, Student 
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
  list_display = ['id','image', 'name','phoneno', 'email','facebook','instagram','linkedin','post','year']
@admin.register(Alumni)
class AlumniAdmin(admin.ModelAdmin):
  list_display = ['id','image', 'name','phoneno', 'email','facebook','instagram','linkedin','post','startyear','passyear']
