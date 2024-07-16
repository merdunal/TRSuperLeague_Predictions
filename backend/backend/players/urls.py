from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from players.views import example_view

router = routers.DefaultRouter()

urlpatterns = [
        path('', include(router.urls)),
        path('home/', example_view ,name='home'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
