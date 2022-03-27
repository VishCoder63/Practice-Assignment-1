import { useState } from "react";
import styles from "./CSS/addtoform.module.css";

export function AddtodoForm({ handleFormSubmission }) {
  const [state, setState] = useState({ completed: false });

  return (
    <div>
      <form action="">
        <table>
          <tbody>
            <tr>
              <td>Task</td>
              <td>
                <input
                  
                  type="text"
                  name="task"
                  required={true}
                  onChange={(e) => {
                    setState((state) => ({
                      ...state,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Do by Date</td>
              <td>
                <input
                  id={styles['date']}
                  type="date"
                  name="date"
                  required={true}
                  onChange={(e) => {
                    setState((state) => ({
                      ...state,
                      [e.target.name]: new Date(e.target.value),
                    }));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Do by time</td>
              <td>
                <input
                  id={styles['time']}
                  type="time"
                  name="time"
                  required={true}
                  onChange={(e) => {
                    setState((state) => ({
                      ...state,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input
          type="submit"
          id={styles["submit-buttom"]}
          onClick={(e) => {
            e.preventDefault();
            if (Object.keys(state).length == 4) handleFormSubmission(state);
            else alert("Please fill all the details!");
          }}
        />
      </form>
    </div>
  );
}
