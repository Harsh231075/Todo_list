import { useState } from "react";

function TodoHead({ newTodoItem }) {

  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddButton = () => {
    newTodoItem(todoName, todoDate);
    setTodoName('');
    setTodoDate('');
  }

  return <div className="container ">
    <div className="row align-items-center">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo" value={todoName} onChange={handleNameChange} />
      </div>
      <div className="col-4">
        <input type="date" value={todoDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success"
          onClick={handleAddButton} >
          Success
        </button>
      </div>
    </div>
  </div>
}

export default TodoHead;