# In your views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def example_view(request):
    print('Thats ok')
    data = {"message": "Hello from aa!"}
    return Response(data)
