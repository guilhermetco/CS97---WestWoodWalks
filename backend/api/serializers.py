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
        fields = ['author', 'description', 'date', 'user_id', 'rating'] #review_image
    
    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data

class BusinessSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Business
        fields = ['name', 'reviews', 'lat', 'lng', 'category', 'address', 'website', 'rating']
        extra_kwargs = {'reviews': {'required': False}}


    def get_reviews(self, instance):
        review_list = instance.reviews.all().order_by('date')
        return ReviewSerializer(review_list, many = True, read_only= False, context=self.context).data


class WalksSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(many = False, read_only = False, queryset=User.objects.all(), source='user')
    class Meta:
        model = Walks
        fields = ['lat','lng','user_id']

    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data


