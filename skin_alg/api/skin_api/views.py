from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

from .models import Skincare
from .serializers import CalcSerializer, ResultSerializer
from .calculate.skin_script import start

@api_view(['GET'])
def appOverview(request):
    api_urls = {
        'search': '/input/',
        'result': '/result/'
    }
    return Response(api_urls)

@api_view(['GET'])
def list_result(request):
    result = Skincare.objects.all()
    serializer = ResultSerializer(result, many=True)
    print(serializer.data)
    return Response(serializer.data)

@api_view(['POST'])
def postSearch(request):
    input = request.data
    # print(input)
    result = start(input)
    # print(result)
    serializer = ResultSerializer(data=result)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
