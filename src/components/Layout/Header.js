import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header class = "flex justify-between md:justify-evenly bg-gradient-to-br  p-3" >
        <h1 class = "font-bold text-3xl text-rose-200">Something.</h1>
        <HeaderCartButton />
      </header>
      
    </Fragment>
  );
}; //from-cyan-500 to-blue-500

export default Header;
