from django.contrib import admin
from .models import Alumni, Event, Student, gallery, sponsers 
# Register your models here.
admin.site.register(Alumni)
admin.site.register(Student)
admin.site.register(Event)
admin.site.register(gallery)
admin.site.register(sponsers)
# admin.site.register(Contact)
