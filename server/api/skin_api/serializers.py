from rest_framework import serializers
from rest_framework.fields import ListField
from .models import SkinCare

class CalcSerializer(serializers.ModelSerializer):
    cleanser, serum, moisturizer, sunscreen = (ListField(required=False) for _ in range(4))
    class Meta:
        model = SkinCare
        fields = ['cleanser', 'serum', 'moisturizer', 'sunscreen', 'details', 'name']
        depth = 0

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinCare
        fields = ['cleanser', 'serum', 'moisturizer', 'sunscreen', 'name', 'details']
        depth = 0
