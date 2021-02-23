from django.contrib.auth.models import User
from django.db import models


from rest_framework.authtoken.models import Token
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

class Business(models.Model):
    name = models.CharField(max_length=100) #idk arbitrary number for now


class Review(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, related_name = 'review')
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name = 'review')
    author = models.CharField(max_length=30) #max length for username?
    description = models.TextField(max_length=250)
    date = models.DateField(auto_now_add=True)
    #review_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100) #figure out what these do and what they should be set to

    def __str__(self):
        return self.author




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
    
