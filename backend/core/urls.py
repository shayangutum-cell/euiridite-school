from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('admissions.urls')), # Admissions ke URLs ko yahan link kar diya
]

# Development ke doran upload ki hui tasweerein/files dekhne ki ijazat
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)