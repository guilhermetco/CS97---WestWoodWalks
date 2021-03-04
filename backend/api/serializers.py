from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Review, Business, Walks


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
    user_id = serializers.PrimaryKeyRelatedField(many = False, read_only = False, queryset=User.objects.all(), source='user')
    author = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Review
        fields = ['author', 'description', 'date', 'user_id'] #review_image
    
    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data

class BusinessSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True)
    class Meta:
        model = Business
        fields = ['name', 'reviews', 'latitude', 'longitude', 'category', 'address', 'website']

    def get_reviews(self, instance):
        review_list = instance.reviews.all().order_by('date')
        return ReviewSerializer(review_list, many = True, read_only= True, context=self.context).data


class WalksSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(many = False, read_only = False, queryset=User.objects.all(), source='user')
    class Meta:
        model = Walks
        fields = ['latitude','longitude','user_id']

    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data


    # user_name = models.CharField(max_length=30) #max lenght for username?
    # user_review = models.TextField(max_length=250)
    # review_date = models.DateField(auto_now_add==True)
    # review_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, **options) #figure out what these do and what they should be set to

