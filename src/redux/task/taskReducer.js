import { Type } from "../types";

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case Type.TASK_DATA_FETCH_SUCCESS:
      return action.payload;
    case Type.TASK_ADD_SUCCESS:
      return [...state, action.payload].sort((a, b) => a.start - b.start);
    case Type.TASK_DELETE_SUCCESS:
      return state.filter((event) => event._id !== action.payload);
    default:
      return state;
  }
};