import "./burger.css"
import React from 'react';

interface Burger {
    ingredients: { name: string; count: number }[];
}

const CreateBurger:React.FC<Burger> = ({ingredients}) => {
    return (
        <div className="block-burger">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className={`${ingredient.name}`}></div>
                ))}
                <div className="BreadBottom"></div>
            </div>
        </div>
    );
};

export default CreateBurger;