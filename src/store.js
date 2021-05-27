import { applyMiddleware, createStore } from "redux";
import reduxSaga from "redux-saga";
import rootReducer from "./saga_redux/rootReducer";
import rootSaga from './sagas/watch'


export const getStore = () => {
    const initialState = {};
    const reduxSagaMiddleware = reduxSaga();
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
    reduxSagaMiddleware.run(rootSaga)
    return store;
  }