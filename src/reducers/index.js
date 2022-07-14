import { connectRouter } from "connected-react-router";
import auth from "./authReducer";
import register from "./registerReducer";
import page from "./pageReducer";

const { combineReducers } = require("redux");

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    page,
    register
  });

export default reducers;
