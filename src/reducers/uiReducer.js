import { UITypes } from "../constants";

const initialState = false;

const loading = (state = initialState, action) => {
  switch (action.type) {
    case UITypes.SHOW_LOADING:
      return true;
    case UITypes.HIDE_LOADING:
      return false;
    case "TOGGLE":
      return action.value;
    default:
      break;
  }
  return state;
};

export default loading;
