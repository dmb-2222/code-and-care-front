import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { taskReducer } from "./task/taskReducer";
import { isAuthReducer } from "./Auth/authReducer";
import loadingReducer from "./loading/loadingReducer";
import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk];

const persistConfig = {
  key: 'login',
  storage,
  whitelist: ['isAuth'],
};

const rootReducer = combineReducers({
  task: taskReducer,
  isAuth: isAuthReducer,
  isLoading: loadingReducer,
});
const persisterReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persisterReducer, enhancer);

export const persistor = persistStore(store);
