from django.db import models
from django.urls import reverse


class Category(models.Model):
    name = models.CharField("Категория блюда", max_length=128, unique=True)

    def get_absolute_url(self):
        return reverse('category', args=[str(self.pk)])

    def __str__(self):
        return self.name


class Recipe(models.Model):
    dish = models.CharField('Название блюда', max_length=255)
    recipe = models.TextField("Рецепт")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True,
                                 related_name="recipe", verbose_name="Категория блюда")

    def get_absolute_url(self):
        return reverse('recipe', args=[str(self.pk)])

    def __str__(self):
        return f'{self.dish}'
