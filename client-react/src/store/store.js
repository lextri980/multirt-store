import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
