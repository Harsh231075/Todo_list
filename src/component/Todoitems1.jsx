import TodoPrint from "./TodoPrint";

function Todoitems1({ info, onDelete }) {
  return <div className="container">
    {info.map((item) =>
      <TodoPrint key={item.name} nam={item.name} date={item.dueDate} onDelete={onDelete}></TodoPrint>
    )}
  </div>
}

export default Todoitems1;