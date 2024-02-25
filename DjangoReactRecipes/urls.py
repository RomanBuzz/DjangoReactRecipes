from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('recipes.urls')),
    path('openapi/', get_schema_view(
        title="Django-React Recipes Project",
        version='1.0.0',
        description="API for React App"
    ), name='openapi-schema'),
]
