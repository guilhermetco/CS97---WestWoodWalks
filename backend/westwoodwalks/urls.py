"""westwoodwalks URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from rest_framework import routers
import api.views

router = routers.DefaultRouter()
router.register(r'users', api.views.UserViewSet)
router.register(r'review', api.views.ReviewViewSet)
router.register(r'business', api.views.BusinessViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', views.obtain_auth_token),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path(r'rest-auth/', include('rest_auth.urls')),
    path(r'rest-auth/registration', include('rest_auth.registration.urls'))
]


# urlpatterns += [
#     path('api-token-auth/', views.obtain_auth_token)
# ]

# urlpatterns += [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
# ]

"""
When valid username and password is posted to this url will return valid token
"""
