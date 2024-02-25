import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/CategorySelector.css";
import { getCategoriesList } from "../services/djangoService";

function CategorySelector(props) {
    let [categories, setCategory] = React.useState([]);
    React.useEffect(() => {
        if (!categories.length) {
            getCategoriesList().then((value) => {
                if (value.length) { setCategory(value) };
                console.log('Categories list: ', value);
            });
        }
    }, []);

    return (
        <div className="choose-category" >
            {categories ? (
                <>
                    <p>Выберите категорию блюда:</p>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.pk + category.name}>
                                <Link
                                    to={`category/${category.pk}`}
                                    onClick={e => props.setCategoryName(e.target.text)}
                                >{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (<p>Ожидаем ответа API...</p>)}
        </div >
    );
}

export default CategorySelector;