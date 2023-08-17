import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button class = "flex p-2 space-x-2 justify-center align-middle shadow-blue-500/40 ring-2 hover:scale-105 transform duration-200 hover:hover:shadow-cyan-500/50 shadow-xl rounded-xl">
      <span >
        <CartIcon />
      </span>
      <div class = "m-2 font-mono">
      <span>Your Cart</span>
      <span class = "rounded-lg ml-2 pr-4  bg-cyan-500 text-center p-2"> 3 </span>
      </div>
    </button>
  );
};
export default HeaderCartButton;
