from django.contrib import admin
from .models import Alumni, Event, Student 
# Register your models here.
admin.site.register(Alumni)
admin.site.register(Student)
admin.site.register(Event)
