from .models import Alumni, Event, Student, gallery, sponsers
from .serializers import AlumniSerializer, ContactSerializer, EventsSerializer, StudentSerializer, gallerySerializer, sponsersSerializer
from rest_framework.generics import ListAPIView
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
class StudentList(ListAPIView):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer
class AlumniList(ListAPIView):
  queryset = Alumni.objects.all()
  serializer_class = AlumniSerializer
class EventsList(ListAPIView):
  queryset = Event.objects.all()
  serializer_class = EventsSerializer
class galleryList(ListAPIView):
  queryset = gallery.objects.all()
  serializer_class = gallerySerializer
class sponsersList(ListAPIView):
  queryset = sponsers.objects.all()
  serializer_class = sponsersSerializer



from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 

from rest_framework.decorators import api_view

@api_view([ 'POST'])
def messages(request):
 if request.method == 'POST':
        contact_data = JSONParser().parse(request)
        contact_serializer = ContactSerializer(data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            send_mail(
				      "Message from "+contact_data["name"] +" on ISTE Website",
			        	contact_data["message"],
			        	settings.EMAIL_HOST_USER,
			        	['jnvomprakash121@gmail.com'],
			        	fail_silently = False
			        	)
            send_mail(
				      "Welcome to ISTE NIT Durgapur",
			        	"we have got your message, Our team will reply you as soon as possible.😊",
			        	settings.EMAIL_HOST_USER,
			        	[contact_data["email"]],
			        	fail_silently = False
			        	)
            return JsonResponse(contact_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

