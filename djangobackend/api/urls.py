from django.urls import path
from api import views

urlpatterns = [
    path('student/', views.StudentList.as_view()),
    path('alumni/', views.AlumniList.as_view()),
    path('events/', views.EventsList.as_view()),
    path('gallery/', views.galleryList.as_view()),
    path('sponsers/', views.sponsersList.as_view()),
]