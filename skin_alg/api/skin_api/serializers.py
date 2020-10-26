from rest_framework import serializers
from .models import Skincare

class CalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skincare
        fields = ['id', 'input']
        extra_kwargs = {'input': {'required': False}}

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skincare
        fields = ['result', 'input']
        extra_kwargs = {'result': {'required': False}}
