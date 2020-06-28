import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer } from "./task/taskReducer";
import { isAuthReducer } from "./Auth/authReducer";
import loadingReducer from "./loading/loadingReducer";
import ReduxThunk from "redux-thunk";
const middleware = [ReduxThunk];
const rootReducer = combineReducers({
  task: taskReducer,
  isAuth: isAuthReducer,
  isLoading: loadingReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

export default store;
