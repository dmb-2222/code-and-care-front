import {Type} from "../types";

export const isAuthReducer = (state = false, action) => {
    switch (action.type) {
      case Type.GET_AUTH:
        return !state;
      default:
        return state;
    }
  };