import { Type } from "../types";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.TASK_DATA_FETCH_START:
    case Type.TASK_ADD_START:
    case Type.TASK_DELETE_START:
      return true;
    case Type.TASK_DATA_FETCH_SUCCESS:
    case Type.TASK_DATA_FETCH_ERROR:
    case Type.TASK_ADD_SUCCESS:
    case Type.TASK_ADD_ERROR:
    case Type.TASK_DELETE_SUCCESS:
    case Type.TASK_DELETE_ERROR:
      return false;
    default:
      return state;
  }
};
export default loadingReducer