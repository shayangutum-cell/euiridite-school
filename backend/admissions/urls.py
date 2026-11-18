from django.urls import path
from .views import SubmitApplicationView

urlpatterns = [
    path('apply/', SubmitApplicationView.as_view(), name='apply'),
]