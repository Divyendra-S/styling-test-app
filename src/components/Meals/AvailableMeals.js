import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mount fuji",
    description: "Its located near yamanashi , Japan",
    price: 22.99,
    img: img1,
  },
  {
    id: "m2",
    name: "Oceania",
    description: "hotel in Maldives",
    price: 16.5,
    img: img2,
  },
  {
    id: "m3",
    name: "Dining Room",
    description: "American,LA",
    price: 12.99,
    img: img3,
  },
  {
    id: "m4",
    name: "Campino",
    description: "Nature and craft.....",
    price: 18.99,
    img: img4,
  },
  {
    id: "m5",
    name: "Sahara",
    description: "Land of dust",
    price: 0.80,
    img: img5,
  }
];

const AvailableMeals = (props) => {
  const mealsItems = DUMMY_MEALS.map((item) => (
    
      <div class = "p-6 mx-3 transform hover:scale-105 duration-300 mt-3  md:w-1/3 shadow-xl shadow-teal-700 hover:shadow-teal-400 rounded-xl xl:w-1/4 w-full bg-gradient-to-t from-teal-900 font-mono text-lg flex  justify-center text-center md:space-y-0 space-y-10">
      {
        <MealsItem
          id = {item.id}
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          img={item.img}
          
        />
      }
      </div>
    
  ));
  return (
    
      
        <ul class = "flex flex-wrap justify-center  ">{mealsItems}</ul>
      
    
  );
};
export default AvailableMeals;
