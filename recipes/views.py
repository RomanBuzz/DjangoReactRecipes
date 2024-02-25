from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework import generics
from rest_framework.schemas.openapi import AutoSchema


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    description = 'Get categories list.'


class RecipeList(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    description = 'Get recipes list.'


class RecipesForCategory(generics.ListAPIView):
    serializer_class = RecipeSerializer
    description = 'Get recipes list for a category by category id.'

    schema = AutoSchema(
        operation_id_base='RecipesForCategory',
    )

    def get_queryset(self):
        category_pk = self.kwargs['category_pk']
        return Recipe.objects.filter(category__pk=category_pk)


class GetRecipe(generics.ListAPIView):
    serializer_class = RecipeSerializer
    description = 'Get a recipe by recipe id.'

    def get_queryset(self):
        recipe_pk = self.kwargs['recipe_pk']
        return Recipe.objects.filter(pk=recipe_pk)


class CategoryCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    description = 'Create category.'


class RecipeCreate(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    description = 'Create recipe.'
