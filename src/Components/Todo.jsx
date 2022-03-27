import styles from './CSS/todo.module.css'
export function Todo({ el, todoCompletedClicked, todoDeleteClicked }) {
  return (
    <div className={styles['todo']}>
      {/* <span>{el.id}</span> */}
      <div>
        <div className={styles['task']}
          style={{
            textDecorationLine: el.completed ? "line-through" : "none",
          }}
        >
          {/* {console.log(el.completed)} */}
          {el.task}
        </div>
        {/* <button onClick={() => todoCompletedClicked(el.id)}>Completed</button> */}
        <button onClick={() => todoCompletedClicked(el.id)}>
          {el.completed ? "Not Completed" : "Completed"}
        </button>
        <button onClick={() => todoDeleteClicked(el.id)}>Deleted</button>
      </div>
      {/* <h4>{el.task}</h4> */}
    </div>
  );
}
