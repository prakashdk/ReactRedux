import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import MovieReducer from "./reducer/MovieReducer";
import TodoReducer from "./reducer/TodoReducer";

const reducer = combineReducers({ todo: TodoReducer, genre: MovieReducer });
const middleware = [logger, thunk];
export const store = createStore(reducer, applyMiddleware(...middleware));
//export const store = createStore(reducer);
