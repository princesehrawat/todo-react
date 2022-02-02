import React, { useEffect, useState } from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

function App() {
  const getListFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todoList"));
  };

  const [todoList, setTodoList] = useState(getListFromLocalStorage());

  const addTodoHandler = (text) => {
    setTodoList((prev) => {
      return [...prev, { text, completed: false }];
    });
  };

  const removeTodoHandler = (index) => {
    setTodoList((prev) => {
      return prev.filter((task, indx) => indx !== index);
    });
  };

  const toggleTodoHandler = (index) => {
    setTodoList((prev) => {
      prev[index].completed = !prev[index].completed;
      localStorage.setItem("todoList", JSON.stringify(todoList)); //doubt
      return prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <AddTodo onAdd={addTodoHandler} />
      <TodoList
        tasks={todoList}
        onRemove={removeTodoHandler}
        onToggle={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
