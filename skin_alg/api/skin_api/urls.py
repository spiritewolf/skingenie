from rest_framework import routers
from django.urls import path
from . import views

urlpatterns = [
    path('', views.appOverview, name="api-overview"),
    path('input', views.postSearch, name='input'),
    path('result', views.list_result, name='result')
]
