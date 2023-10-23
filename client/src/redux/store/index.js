import { applyMiddleware, compose, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";
//configuracion de redux devtools del navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)) //permite asincronia en redux
);

export default store;
