import * as React from "react";
import { useParams, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import "../styles/RecipesListForCategory.css";
import { getRecipesListForCategory } from "../services/djangoService";

function RecipesListForCategory(props) {
    let [recipes, setRecipes] = React.useState([]);
    const params = useParams();
    React.useEffect(() => {
        if (!recipes.length) {
            getRecipesListForCategory(params.category_pk).then((value) => {
                if (value.length) { setRecipes(value) };
                console.log('Recipes list: ', value);
            });
        }
    }, []);

    return (
        <div className="choose-recipe" >
            {recipes ? (
                <>
                    <p>Блюда в категории{props.categoryName ? (` "${props.categoryName}"`) : ("")}:</p>
                    <Table striped bordered hover className="countries">
                        <thead>
                            <tr>
                                <th>Блюдо</th>
                                <th>Рецепт</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <tr key={recipe.pk + recipe.dish}>
                                    <td>
                                        <Link to={`/recipe/${recipe.pk}`}>{recipe.dish}</Link>
                                    </td>
                                    <td>{recipe.recipe}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            ) : (<p>Ожидаем ответа API...</p>)}
        </div >
    );
}

export default RecipesListForCategory;