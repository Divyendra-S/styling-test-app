import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form >
      <div class = "flex justify-between space-x-2">
      <span>amount:</span>
      <Input
        input={{
          id: `${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          
        }}
      />
      
      </div>
    </form>
  );
};
export default MealItemForm;
