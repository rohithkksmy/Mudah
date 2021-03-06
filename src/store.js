import { applyMiddleware, createStore, compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger());
export default createStore(reducers,compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));