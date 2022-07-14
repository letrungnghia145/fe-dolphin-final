import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { sagas } from "./sagas";

const sagaMidleware = createSagaMiddleware();

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfigurer = {
  store: createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(sagaMidleware, routerMiddleware(history)))
  ),
  sagaMidleware,
};

storeConfigurer.sagaMidleware.run(sagas);

export default storeConfigurer;
