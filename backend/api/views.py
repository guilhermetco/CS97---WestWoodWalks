from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, ReviewSerializer, BusinessSerializer, WalksSerializer, ProfileSerializer
from .models import Review, Business, Walks, Profile
from django.contrib.auth.forms import UserCreationForm


# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

class WalksViewSet(viewsets.ModelViewSet):
    queryset = Walks.objects.all()
    serializer_class = WalksSerializer
    
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer