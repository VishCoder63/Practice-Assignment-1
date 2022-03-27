import { useDispatch } from "react-redux";
import { postData } from "../Redux/Actions";
import { AddtodoForm } from "./AddTodoForm";
import { ClearButton } from "./Clearbutton";
import { TodoList } from "./TodoList";
import styles from './CSS/todoapp.module.css'

export function TodoApp() {
  const dispatch = useDispatch();
  function handleFormSubmission(obj) {
    // console.log(obj);
    dispatch(postData(obj));
  }

  return (
    <div className={styles['todoApp']}
    >
      <h1>Add task</h1>
      <AddtodoForm handleFormSubmission={handleFormSubmission} />
      <hr />
      <h1>Tasks pending</h1>
      <hr />
      <TodoList />
      <hr />
      <ClearButton />
    </div>
  );
}
