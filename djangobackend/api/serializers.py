from rest_framework import serializers
from .models import Alumni, Contact, Event, Student, gallery, sponsers
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
    fields = ['id', 'EventName','Image','StartDate','time','EndDate','Location','Link','Description','EventTense']
class gallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = gallery
    fields = ['id','Image']
class sponsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = sponsers
    fields = ['id','Image','Link']


class ContactSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Contact
        fields = ('id',
                  'name',
                  'email',
                  'phone','message')