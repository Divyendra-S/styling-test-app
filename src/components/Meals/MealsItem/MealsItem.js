import { Fragment } from "react";
import classes from "./MealsItems.module.css";
import MealItemForm from "./MealItemForm";

const MealsItem = (props) => {
  const Price = `$${props.price}`;
  return (
    <Fragment>
      <li class = " flex  md:w-1/3 flex-col flex-grow justify-between">
        <div>
        <img src={props.img} alt="Description of Image" className="max-w-full h-72 mb-5 rounded-xl shadow-md transition-transform transform hover:scale-105 w-full " />
        </div>
        <div class = "font-sans font-medium text text-white ">
          <h3 class = "font-bold text-3xl mb-7">{props.name}</h3>
          <div  >{props.description}</div>
        </div>
         <div class = "flex flex-col mt-10 justify-between font-mono text-neutral-200	">
          <div  class = "flex justify-between"><div class = "flex justify-evenly space-x-2 ">
          <span class = "rounded-full h-3 tranform duration-200 hover:scale-110 w-3 shadow-lg shadow-green-600 hover:shadow-xl bg-green-300"></span>
          <span class = "rounded-full h-3 tranform duration-200 hover:scale-110 w-3 bg-red-600"></span>
          <span class = "rounded-full h-3 tranform duration-200 hover:scale-110 w-3 bg-blue-700"></span>
          </div>
          <MealItemForm id = {props.id}/></div>
          <button class = " transform hover:scale-95 duration-200 mt-5 hover:bg-sky-500 bg-sky-500/75 rounded-full text-black text-center p-1 px-5">Add to cart</button>
         </div> 
      </li>
    </Fragment>
  );
};
export default MealsItem;
