import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div >
      <label htmlFor={props.input.id}>{props?.label}</label>
      <input {...props.input} class = "p-0 bg-zinc-800 text-center border border-spacing-1 border-zinc-600 text-white rounded-md" />
    </div>
  );
};

export default Input;