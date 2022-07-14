import { AuthTypes } from "../constants";

const initialState = {};

const register = (state= initialState, action) => {
    switch (action.type) {
        case AuthTypes.CHECK_SUCCESS:
            return {}
        case AuthTypes.CHECK_FAILED:
            return {error: true, message: "Email has been existing"}
        default:
            break;
    }
    return state;
}

export default register