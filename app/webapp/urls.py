from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('userregister',UserRegisterViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
