import React, { useState } from "react";
import Button from "../UI/Button";
import { AiFillDelete } from "react-icons/ai";
import classes from "./TodoList.module.css";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const TodoListItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);
  const removeHandler = () => {
    props.onRemove(props.id);
  };

  const toggleHandler = () => {
    setIsCompleted((prev) => !prev);
    props.onToggle(props.id);
  };
  console.log({ props });
  return (
    <div className={classes.taskContainer}>
      <li
        onClick={toggleHandler}
        onDoubleClick={(event) => event.preventDefault()}
        key={props.id}
      >
        {props.text}
        {isCompleted && (
          <span style={{ float: "right", color: "green" }}>
            <IoCheckmarkDoneCircleSharp />
          </span>
        )}
      </li>
      <Button onClick={removeHandler}>
        <AiFillDelete>Remove</AiFillDelete>
      </Button>
    </div>
  );
};

export default TodoListItem;
