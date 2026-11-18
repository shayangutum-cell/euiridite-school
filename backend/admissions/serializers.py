from rest_framework import serializers
from .models import AdmissionApplication

class AdmissionApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionApplication
        fields = '__all__' # Iska matlab hai ke model ki saari fields ko translate karna hai