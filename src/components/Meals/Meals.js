import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <div class = "flex justify-center p-4  text-center h-96 items-center">
      <MealsSummary />  
      </div>   
      <div class = " bg-cyan-100 m-5 rounded-xl flex flex-col	p-8	md:flex-row">
      <AvailableMeals />
      </div> 
    </Fragment>
  );
};
export default Meals;
