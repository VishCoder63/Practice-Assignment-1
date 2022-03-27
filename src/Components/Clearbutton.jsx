import { useDispatch, useSelector } from "react-redux";
import { clearCompletedFn } from "../Redux/Actions";
import styles from './CSS/clearbutton.module.css'
export function ClearButton() {
  const state = useSelector((state) => state.tasks).filter(el => el.completed);
  let dispatch = useDispatch()
  
  function clearButtonClicked() {
    dispatch(clearCompletedFn())
  }

  return (
    <>
      <button onClick={clearButtonClicked} className={styles['clear']}
      >Clear Completed tasks</button>
    </>
  );
}
