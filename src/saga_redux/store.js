import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from '../sagas/watch'


export const getStore = () => {
    const initialState = {};
    const reduxSagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
    reduxSagaMiddleware.run(rootSaga)
    return store;
  }