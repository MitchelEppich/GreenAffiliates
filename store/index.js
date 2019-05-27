/*******************************************/
/*This is where the redux store gets created.
  The combined reducers (rootReducer) and middleware
  (ie thunk) gets passed in when the store is created.

  */
/******************************************/
import rootReducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import middleware from "./middleware";
import createSagaMiddleware from "redux-saga";
export const makeStore = (initialState, options) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, ...middleware))
  );

  // const sagaMiddleware = createSagaMiddleware();
  // const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  // store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      // console.log('Replacing reducer');
      store.replaceReducer(require("./reducer").default);
    });
  }

  return store;
};
