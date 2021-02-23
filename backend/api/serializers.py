from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Review, Business


class UserSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ['url', 'username', 'password', 'email']
        


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    user_id = serializers.PrimaryKeyRelatedField(many = False, read_only = False, queryset=User.objects.all(), source='user')

    class Meta:
        model = Review
        fields = ['author', 'description', 'date', 'business', 'user', 'user_id'] #review_image
    
    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ['name']


    # user_name = models.CharField(max_length=30) #max lenght for username?
    # user_review = models.TextField(max_length=250)
    # review_date = models.DateField(auto_now_add==True)
    # review_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, **options) #figure out what these do and what they should be set to

