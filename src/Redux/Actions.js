import axios from "axios";
import { useSelector } from "react-redux";
import {
  CLEAR_COMPLETED,
  CURR_TODO_STATUS,
  DELETE_TODO,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQ,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQ,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQ,
  POST_TODO_SUCCESS,
  UPDATE_STATUS_TODO,
  UPDATE_STATUS_TODO_FAILURE,
  UPDATE_STATUS_TODO_REQ,
  UPDATE_STATUS_TODO_SUCCESS,
} from "./ActionTypes";

export function postTodoReq() {
  return {
    type: POST_TODO_REQ,
  };
}
export function postTodoSuccess(payload) {
  return {
    type: POST_TODO_SUCCESS,
    payload,
  };
}
export function postTodoFailure() {
  return {
    type: POST_TODO_FAILURE,
  };
}

export function getTodoReq() {
  return {
    type: GET_TODO_REQ,
  };
}
export function getTodoSuccess(payload) {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
}
export function getTodoFailure() {
  return {
    type: GET_TODO_FAILURE,
  };
}

export function updateTodoReq() {
  return {
    type: UPDATE_STATUS_TODO_REQ,
  };
}
export function updateTodoSuccess(payload) {
  return {
    type: UPDATE_STATUS_TODO_SUCCESS,
    payload,
  };
}
export function updateTodoFailure() {
  return {
    type: UPDATE_STATUS_TODO_FAILURE,
  };
}

export function deleteTodoReq() {
  return {
    type: DELETE_TODO_REQ,
  };
}
export function deleteTodoSuccess(payload) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload,
  };
}
export function delteTodoFailure() {
  return {
    type: DELETE_TODO_FAILURE,
  };
}

export function clearCompletedFn() {
  return {
    type: CLEAR_COMPLETED,
  };
}

export const getLatestData = () => {
  return (dispatch) => {
    dispatch(getTodoReq());
    axios
      .get("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => {
        // console.log(res.data);
        dispatch(getTodoSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTodoFailure());
      });
  };
};

export const postData = (payload) => {
  return (dispatch) => {
    dispatch(postTodoReq());
    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", payload)
      .then((res) => {
        // console.log(res.data);
        dispatch(postTodoSuccess(res.data));
      })
      .then(getLatestData())
      .catch((err) => {
        // console.log(err);
        dispatch(postTodoFailure());
      });
  };
};

export const updateTodoStatusFn = (id, currTodoStatus) => {
  return (dispatch) => {
    // const state = useSelector((state) => state.tasks);

    dispatch(updateTodoReq());
    axios
      .patch(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`, {
        completed: !currTodoStatus,
      })
      .then((res) => {
        // console.log(res.data);
        // console.log("current: ", currTodoStatus);
        dispatch(updateTodoSuccess(res.data));
      })
      .catch(() => dispatch(updateTodoFailure()));
  };
};
export const deleteTodoFn = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoReq());
    axios
      .delete(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`)
      .then(() => dispatch(deleteTodoSuccess(id)))
      .catch(() => dispatch(delteTodoFailure()));
  };
};
