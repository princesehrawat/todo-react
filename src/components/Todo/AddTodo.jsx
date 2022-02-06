import React, { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const textInputRef = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();
    const enteredTask = textInputRef.current.value;
    props.onAdd(enteredTask);
    textInputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="text">Task</label>
        <input
          id="text"
          type="text"
          ref={textInputRef}
          placeholder="Jot something down"
          required
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
