import { createStore, applyMiddleware } from "redux";
import ContactReducer from "../reducers/ContactReducers";
import thunk from "redux-thunk";

let store = createStore(ContactReducer, applyMiddleware(thunk));

export default store;
