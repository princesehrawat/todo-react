import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    props.onAdd(enteredTask);
    setEnteredTask("");
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="text">Task</label>
        <input
          id="text"
          type="text"
          value={enteredTask}
          onChange={taskChangeHandler}
          required
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
