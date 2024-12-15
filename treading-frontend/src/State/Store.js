/* eslint-disable no-undef */
import { thunk } from "redux-thunk";

const {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
} = require("redux");

const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
