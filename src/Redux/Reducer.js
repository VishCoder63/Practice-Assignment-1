import {
  CLEAR_COMPLETED,
  CURR_TODO_STATUS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQ,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQ,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQ,
  POST_TODO_SUCCESS,
  UPDATE_STATUS_TODO_FAILURE,
  UPDATE_STATUS_TODO_REQ,
  UPDATE_STATUS_TODO_SUCCESS,
} from "./ActionTypes";

const initstate = {
  tasks: [],
  isLoading: false,
  isError: false,
};
export function Reducer(state = initstate, { type, payload }) {
  switch (type) {
    case GET_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: [...state.tasks, ...payload],
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case POST_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case POST_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: [...state.tasks, payload],
      };
    case POST_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case UPDATE_STATUS_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_STATUS_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: state.tasks.map((el) => {
          if (el.id == payload.id) return payload;
          else return el;
        }),
      };
    case UPDATE_STATUS_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case DELETE_TODO_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: state.tasks.filter((el) => el.id != payload),
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: state.tasks.filter((el) => el.completed != true),
      };

    default:
      return state;
  }
}
