from django.urls import path
from . import views

urlpatterns = [
    path('category/', views.CategoryList.as_view()),
    path('recipe/', views.RecipeList.as_view()),
    path('category/<int:category_pk>/', views.RecipesForCategory.as_view()),
    path('recipe/<int:recipe_pk>/', views.GetRecipe.as_view()),
    path('category/create/', views.CategoryCreate.as_view()),
    path('recipe/create/', views.RecipeCreate.as_view()),
]
