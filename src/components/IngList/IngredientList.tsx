import React from 'react';
import "./list-ing.css"

interface IngredientListProps {
    ingredients: { name: string; count: number }[];
    btnRemove: (name: string) => void;
}


const IngredientList:React.FC<IngredientListProps> = ({ingredients,btnRemove}) => {
    return (
        <div>
            <ul className="">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="list">
                        {ingredient.name} x {ingredient.count}
                        <button className="btn-remove" onClick={() => btnRemove(ingredient.name)}>Remove</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default IngredientList;