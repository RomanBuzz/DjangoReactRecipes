import * as React from "react";
import { useParams } from "react-router-dom";

import "../styles/RecipeSelector.css";
import { getRecipe } from "../services/djangoService";

function RecipeSelector() {
    let [recipe, setRecipe] = React.useState([]);
    const params = useParams();
    React.useEffect(() => {
        if (!recipe.length) {
            getRecipe(params.recipe_pk).then((value) => {
                if (value.length) { setRecipe(value) };
                console.log('Recipe: ', value);
            });
        }
    }, []);

    return (
        <div className="recipe" >
            {recipe[0] ? (
                <>
                    <div className="column column--left">
                        <div className="column--name">Название блюда:</div>
                        <div className="column--info">{recipe[0].dish}</div>
                    </div>
                    <div className="column column--right">
                        <div className="column--name">Рецепт блюда:</div>
                        <div className="column--info">{recipe[0].recipe}</div>
                    </div>
                </>
            ) : (<p>Ожидаем ответа API...</p>)}
        </div >
    );
}

export default RecipeSelector;