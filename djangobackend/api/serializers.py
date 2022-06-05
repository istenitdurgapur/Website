from rest_framework import serializers
from .models import Alumni, Event, Student
class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ['id', 'name','image','phoneno', 'email','facebook','instagram','linkedin','post','year','order']
class AlumniSerializer(serializers.ModelSerializer):
  class Meta:
    model = Alumni
    fields = ['id', 'name','image','phoneno', 'email','facebook','instagram','linkedin','passyear']
class EventsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Event
    fields = ['id', 'EventName','Image','StartDate','EndDate','Location','Link','Description','EventTense']