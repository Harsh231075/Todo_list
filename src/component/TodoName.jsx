import css from "./TodoName.module.css";

function TodoName() {
  return <h1 className={`${css['head']} text-center mb-3`}>Todo List</h1>;
}
export default TodoName;