
import './App.css'
import {Ingredient} from "./types.ts";
import baconImg from "./assets/bacon.png";
import cheeseImg from "./assets/cheese.png";
import meatImg from "./assets/meat.png";
import saladImg from "./assets/salad.png";
import BlockButtons from "./components/BlockButtons.tsx";
import {useState} from "react";
import IngredientList from "./components/IngList/IngredientList.tsx";





interface IngredientCount {
  name: string;
  count: number;
}



const App = () => {

  const INGREDIENTS: Ingredient[] = [
    { name: 'Bacon', price: 60, image: baconImg },
    { name: 'Cheese', price: 50, image: cheeseImg },
    { name: 'Meat', price: 80, image: meatImg },
    { name: 'Salad', price: 10, image: saladImg },
  ];



  const [ingredients, setIngredients] = useState<IngredientCount[]>([
    { name: 'Bacon', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Meat', count: 0 },
    { name: 'Salad', count: 0 },
  ]);


  const createIng = (ingredient:Ingredient) => {
    setIngredients((prevIngredients) =>
        prevIngredients.map((ing) =>
            ing.name === ingredient.name ?
                { ...ing,
                  count: ing.count + 1
                } : ing
        )
    );
  }

  const removeIng = (name:string) => {
    setIngredients((prevIngredients) =>
        prevIngredients.map((ing) =>
            ing.name === name && ing.count > 0 ? { ...ing, count: ing.count - 1 } : ing
        )
    );
  }


  return (
    <>
      <div className="burger-app">
      <div className="block-btn">
        {
          INGREDIENTS.map((ingredient) => (
              <BlockButtons key={ingredient.name} ingredient={ingredient} addIng={createIng}></BlockButtons>
          ))
        }

      </div>

        <IngredientList ingredients={ingredients} btnRemove={removeIng}></IngredientList>
      </div>
    </>
  )
};

export default App
