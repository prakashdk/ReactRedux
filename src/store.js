import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import MovieReducer from "./reducer/MovieReducer";
import TodoReducer from "./reducer/TodoReducer";
import { persistReducer,persistStore } from "redux-persist";

const reducer = combineReducers({ todo: TodoReducer, genre: MovieReducer });
const middleware = [logger,thunk];
const persistConfig={
    key:'root',
    storage,
    whitelist:['todo'],
}
const persistedReducer=persistReducer(persistConfig,reducer)

export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor=persistStore(store)