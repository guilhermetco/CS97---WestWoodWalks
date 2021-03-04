from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, ReviewSerializer, BusinessSerializer, WalksSerializer
from .models import Review, Business, Walks
from django.contrib.auth.forms import UserCreationForm


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    #permission_classes = [permissions.IsAuthenticated] #not sure if this is right

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

class WalksViewSet(viewsets.ModelViewSet):
    queryset = Walks.objects.all()
    serializer_class = WalksSerializer
    