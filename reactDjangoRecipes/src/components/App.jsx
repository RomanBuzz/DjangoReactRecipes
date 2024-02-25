import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Header from "./Header";
import CategorySelector from "./CategorySelector";
import RecipesListForCategory from "./RecipesListForCategory";
import RecipeSelector from "./RecipeSelector";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {
    const headerName = "React Recipes";
    let [categoryName, setCategoryName] = React.useState("");

    return (
        <>
            <Header headerName={headerName} />
            <Routes>
                <Route path="*" element={
                    <CategorySelector setCategoryName={setCategoryName} />
                } />

                <Route path="openapi" element={
                    <SwaggerUI url="http://localhost:8000/openapi/" />
                } />

                <Route path="category/:category_pk" element={
                    <RecipesListForCategory categoryName={categoryName} />
                } />

                <Route path="recipe/:recipe_pk" element={
                    <RecipeSelector />
                } />
            </Routes>
        </>
    );
}

export default App;