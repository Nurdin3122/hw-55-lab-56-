import React from 'react';
import {Ingredient} from "../types.ts";

interface ButtonsIng {
    ingredient: Ingredient;
    addIng:(ingredient :Ingredient) => void;
}

const BlockButtons:React.FC<ButtonsIng> = ({ingredient,addIng}) => {
    return (
        <button onClick={() => addIng(ingredient)}>
            <img src={ingredient.image} alt={ingredient.name} style={{width: '50px', height: '50px'}}/>
        </button>
    );
};

export default BlockButtons;