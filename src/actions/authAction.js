import { AuthTypes } from "./../constants";

export const authenticateUser = (payload) => {
  return {
    type: AuthTypes.AUTHENTICATE_USER,
    payload,
  };
};

export const logout = () => {
  return { type: AuthTypes.LOGOUT_USER };
};

export const authorizeUser = () => {
  return { type: AuthTypes.AUTHORIZE_USER };
};

export const authorizeUserSuccess = (user) => {
  return { type: AuthTypes.AUTHORIZE_USER_SUCCESS, payload: { user } };
};

export const authorizeUserFailure = (error) => {
  return { type: AuthTypes.AUTHORIZE_USER_FAILURE, payload: { error } };
};

export const registerUser = (user, resend = false) => {
  return { type: AuthTypes.REGISTER_USER, payload: { user, resend } };
};
export const registerUserSuccess = () => {
  return { type: AuthTypes.REGISTER_USER_SUCCESS, payload: {} };
};
export const registerUserFailure = () => {
  return { type: AuthTypes.REGISTER_USER_FAILURE, payload: {} };
};

export const confirmRegisterUser = (code) => {
  return { type: AuthTypes.CONFIRM_REGISTER_USER, payload: { code } };
};

export const resendConfirmCode = (user) => {
  return { type: AuthTypes.RESEND_CONFIRM_CODE, payload: { user } };
};

export const checkIfNotRegistered = (email) => {
  return { type: AuthTypes.CHECK_IF_NOT_REGISTERED, payload: { email } };
};

export const checkSuccess = () => {
  return { type: AuthTypes.CHECK_SUCCESS, payload: {} };
};

export const checkFailed = () => {
  return { type: AuthTypes.CHECK_FAILED, payload: {} };
};
