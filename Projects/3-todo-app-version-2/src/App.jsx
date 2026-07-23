import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "19/7/2026" },
    {
      name: "Go to Collage",
      dueDate: "1/8/2026",
    },
    {
      name: "Like this",
      dueDate: "right now",
    },
  ];
  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems = {todoItems}></TodoItems>
      </div>
  );
}

export default App;
