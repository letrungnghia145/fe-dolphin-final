import { push } from "connected-react-router";
import { all, put, takeEvery } from "redux-saga/effects";
import Swal from "sweetalert2";
import { AuthActions } from "../actions";
import { AuthTypes, URL } from "../constants";
import { Utils } from "../helper";
import { authService } from "./../apis";

const alertConfirmation = (token) => {
  return {
    input: "text",
    inputPlaceholder: "Enter validation code...",
    title: "Confirm register",
    buttonsStyling: false,
    customClass: {
      confirmButton: "btn btn-primary mr-2",
      denyButton: "btn btn-outline-primary",
    },
    showCloseButton: true,
    showDenyButton: true,
    denyButtonText: "Resend code",
    confirmButtonText: "Confirm",
    preConfirm: async (code) => {
      return await authService.confirmRegister(token, code);
    },
  };
};

export function* registerSaga() {
  yield all([watchRegisterUser(), watchCheckIfNotRegistered()]);
}

function* watchCheckIfNotRegistered() {
  yield takeEvery(AuthTypes.CHECK_IF_NOT_REGISTERED, CheckIfNotRegistered);
}

function* CheckIfNotRegistered(action) {
  const response = yield authService.checkIfNotRegistered(action.payload.email);
  if (response.data === true) {
    yield put(AuthActions.checkSuccess());
  } else {
    yield put(AuthActions.checkFailed());
  }
}

function* watchRegisterUser() {
  yield takeEvery(AuthTypes.REGISTER_USER, alertConfirmRegister);
}

function* alertConfirmRegister(action) {
  const { user } = action.payload;
  try {
    const response = yield authService.register(user);
    const data = yield Swal.fire(alertConfirmation(response.data));
    if (data.value.status === 200) {
      yield put(AuthActions.registerUserSuccess());
      const confirm = yield Utils.alertSuccess("", "Get to login")
      if (confirm.isConfirmed) {
        yield put(push(URL.LOGIN_URL));
      } else {
        yield put(push(URL.HOME_URL));
      }
    } else if (data.value === false) {
      yield put(AuthActions.registerUser(user));
    } else {
      yield put(AuthActions.registerUserFailure());
      throw new Error();
    }
  } catch (error) {}
}
