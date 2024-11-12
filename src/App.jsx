import TodoName from "./component/TodoName";
import TodoHead from "./component/TodoHead";
import Todoitems1 from "./component/Todoitems1";
import "./App.css";
import { useState } from "react";
import Welcom from "./component/Welcom";

function App() {
  const list = [];

  const [todoItem, setTodoItem] = useState(list);

  const addTodo = (newName, newDate) => {
    const newTodoList = [...todoItem, { name: newName, dueDate: newDate },]
    setTodoItem(newTodoList);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItem);
  }

  return (
    <center className="todo">
      <TodoName></TodoName>
      <TodoHead newTodoItem={addTodo}></TodoHead>
      {todoItem.length === 0 && <Welcom></Welcom>}
      <Todoitems1 info={todoItem} onDelete={handleDeleteItem} ></Todoitems1>
    </center>
  );


}

export default App;