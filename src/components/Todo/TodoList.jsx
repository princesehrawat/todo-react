import React from "react";

import Card from "../UI/Card";
import classes from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <Card className={classes.tasks}>
      <ul>
        {props.tasks.map((task, index) => {
          return (
            <TodoListItem
              id={index}
              text={task.text}
              completed={task.completed}
              onRemove={props.onRemove}
              onToggle={props.onToggle}
              key={index}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
