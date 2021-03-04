from django.contrib.auth.models import User
from django.db import models


from rest_framework.authtoken.models import Token
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver




class Review(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'review')
    author = models.CharField(max_length=30) #max length for username?
    description = models.TextField(max_length=250)
    date = models.DateField(auto_now_add=True)

    #review_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100) #figure out what these do and what they should be set to
    
    def __str__(self):
        return self.author


class Business(models.Model):
    name = models.CharField(max_length=100) #idk arbitrary number for now
    category = models.CharField(max_length=100, default='')
    #phone number, do I want to install a new package for this?
    address = models.CharField(max_length=100, default='')
    reviews = models.ManyToManyField(Review)
    website = models.CharField(max_length=100, default='')
    
    longitude = models.DecimalField(max_digits=9, decimal_places=6, default = 0.0)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, default = 0.0)


class Walks(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, default = 0.0)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, default = 0.0)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


# Create your models here.
#phone number
#opening hours
#website
#




# class Business(models.Model):
#     name
#     category
#     address
#     location
#     reviews
#     image



#class walks
   #dict of coordinates with directions
    
