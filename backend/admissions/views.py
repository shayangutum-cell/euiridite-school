from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AdmissionApplicationSerializer

class SubmitApplicationView(APIView):
    def post(self, request, *args, **kwargs):
        # request.data mein React se aane wala text aur Upload ki hui Files dono hoti hain
        serializer = AdmissionApplicationSerializer(data=request.data)
        
        if serializer.is_valid(): # Agar data theek hai
            serializer.save()     # Database mein save kar do
            return Response({"message": "Application submitted successfully!"}, status=status.HTTP_201_CREATED)
            
        # Agar form mein koi ghalti hai toh error wapis React ko bhej do
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)