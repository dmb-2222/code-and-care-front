import axios from "axios";

import {
  taskDataFetchStart,
  taskDataFetchSuccess,
  taskDataFetchError,
  taskAddStart,
  taskAddSuccess,
  taskAddError,
  taskDeleteSatrt,
  taskDeleteSuccess,
  taskDeleteError,
} from "./taskActions";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.put["Content-Type"] = "application/json";
// axios.defaults.headers.delete["Content-Type"] = "application/json";
// axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.proxy = "http://localhost:8080";
const baseURL = "http://localhost:8080/";

export const getTask = () => (dispatch) => {
  dispatch(taskDataFetchStart());
  axios
    .get(`${baseURL}task`)
    .then((task) => {
      dispatch(taskDataFetchSuccess(task.data));
    })
    .catch((error) => taskDataFetchError(error));
};

// add task

export const addTask = (submittedData) => (dispatch) => {
  dispatch(taskAddStart());
  let { start, duration, title } = submittedData;
  const reqData = {
    start,
    duration,
    title,
  };
  axios
    .post(`${baseURL}task`, reqData)
    .then((task) => {
      dispatch(taskAddSuccess(task.data));
    })
    .catch((error) => {
      dispatch(taskAddError(error));
    });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch(taskDeleteSatrt());

  axios
    .delete(`${baseURL}task/${id}`)
    .then(() => {
      dispatch(taskDeleteSuccess(id));
    })
    .catch((error) => {
      dispatch(taskDeleteError(error));
    });
};
