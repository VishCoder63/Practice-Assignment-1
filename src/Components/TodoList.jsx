import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoFn, getLatestData, updateTodoStatusFn } from "../Redux/Actions";
import { Todo } from "./Todo";
import styles from './CSS/todolist.module.css'
export function TodoList() {
  const state = useSelector((state) => state.tasks).filter(
    (el) => el.task !== undefined
  );
  const dispatch = useDispatch();
  // console.log(state);

  function todoCompletedClicked(id) {
    let currTodoStatus = state.filter((el) => el.id == id)[0].completed;
    dispatch(updateTodoStatusFn(id, currTodoStatus));
  }
  function todoDeleteClicked(id) {
    dispatch(deleteTodoFn(id));
  }
  

  useEffect(() => {
    dispatch(getLatestData());
  }, []);
  return (
    <div className={styles['todolist']}>
      {state.map((el) => (
        <Todo
          key={el.id}
          el={el}
          todoCompletedClicked={todoCompletedClicked}
          todoDeleteClicked={todoDeleteClicked}
        />
      ))}
    </div>
  );
}
