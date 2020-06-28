import { Type } from "../types";

export const taskDataFetchStart = () => ({
  type: Type.TASK_DATA_FETCH_START,
});
export const taskDataFetchSuccess = (task) => ({
  type: Type.TASK_DATA_FETCH_SUCCESS,
  payload: task,
});
export const taskDataFetchError = (error) => ({
  type: Type.TASK_DATA_FETCH_ERROR,
  payload: { error },
});

// add task
export const taskAddStart = () => ({
  type: Type.TASK_ADD_START,
});
export const taskAddSuccess = (response) => ({
  type: Type.TASK_ADD_SUCCESS,
  payload: response,
});
export const taskAddError = (error) => ({
  type: Type.TASK_ADD_ERROR,
  payload: { error },
});
// delete task
export const taskDeleteSatrt = () => ({
  type: Type.TASK_DELETE_START,
});
export const taskDeleteSuccess = (id) => ({
  type: Type.TASK_DELETE_SUCCESS,
  payload: id,
});
export const taskDeleteError = (error) => ({
  type: Type.TASK_DELETE_ERROR,
  payload: { error },
});