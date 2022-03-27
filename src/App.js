import logo from "./logo.svg";
import "./App.css";
import { AddtodoForm } from "./Components/AddTodoForm";
import { TodoList } from "./Components/TodoList";
import { ClearButton } from "./Components/Clearbutton";
import { TodoApp } from "./Components/TodoApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <TodoApp/>
      </div>
    </div>
  );
}

export default App;
