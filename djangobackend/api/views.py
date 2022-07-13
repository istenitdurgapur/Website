from .models import Alumni, Event, Student, gallery, sponsers
from .serializers import AlumniSerializer, EventsSerializer, StudentSerializer, gallerySerializer, sponsersSerializer
from rest_framework.generics import ListAPIView

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

