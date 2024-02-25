import axios from "axios";

async function getCategoriesList() {
  try {
    const res = await axios.get("http://localhost:8000/category/");
    return res.data;
  } catch (error) {
    throw error;
  }
};

async function getRecipesListForCategory(category) {
  try {
    const res = await axios.get(`http://localhost:8000/category/${category}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

async function getRecipe(recipe) {
  try {
    const res = await axios.get(`http://localhost:8000/recipe/${recipe}/`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getCategoriesList, getRecipesListForCategory, getRecipe };