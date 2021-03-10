from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Review, Business, Walks, Profile


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
    author = serializers.CharField(source='user.username', read_only=True)
    #user_id = serializers.IntegerField(source='user.pk', read_only=True,)
    class Meta:
        model = Review
        fields = ['author', 'description', 'date', 'profile', 'rating', 'business']
    
    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data




class BusinessSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Business
        fields = ['id','name', 'reviews', 'lat', 'lng', 'category', 'address', 'website', 'rating']
        extra_kwargs = {'reviews': {'required': False}}


    def get_reviews(self, instance):
        review_list = instance.reviews.all().order_by('date')
        return ReviewSerializer(review_list, many = True, read_only= False, context=self.context).data


class WalksSerializer(serializers.ModelSerializer):
    coordinates = serializers.JSONField()
    class Meta:
        model = Walks
        fields = ['profile', 'coordinates']

    def get_user(self, instance):
        return UserSerializer(instance.user, many=False, read_only=False, context=self.context).data

class ProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(many = False, read_only = False, queryset=User.objects.all(), source='user')
    reviews = ReviewSerializer(many=True, read_only=True)
    walks = WalksSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['user_id','reviews', 'walks']
    
    def get_reviews(self, instance):
        review_list = instance.reviews.all().order_by('date')
        return ReviewSerializer(review_list, many = True, read_only= False, context=self.context).data
    
    def get_walks(self, instance):
        walks_list = instance.walks.all().order_by('date')
        return ReviewSerializer(walks_list, many = True, read_only= False, context=self.context).data


