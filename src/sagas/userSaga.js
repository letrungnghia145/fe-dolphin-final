import { all, put, take } from "redux-saga/effects";
import { UserActions } from "../actions";
import { userService } from "../apis";
import { UserTypes } from "../constants";

export function* userSaga() {
  yield all([
    watchGetUserInfo(),
    watchAddUserSharedPost(),
    watchGetUserSharedPosts(),
    watchGetUserPostedPosts(),
    watchUpdateUserInfo(),
    watchGetAllUsers(),
  ]);
}

function* watchGetUserInfo() {
  while (true) {
    const action = yield take(UserTypes.GET_USER_INFO);
    try {
      const response = yield userService.getUser(action.payload.id);
      yield put(UserActions.getUserInfoSuccess(response.data));
    } catch (error) {}
  }
}
function* watchAddUserSharedPost() {
  while (true) {
    const action = yield take(UserTypes.ADD_USER_SHARED_POST);
    const { id, post } = action.payload;
    try {
      const response = yield userService.addSharedPost(id, post);
      yield put(UserActions.addUserSharedPostSuccess(response.data));
    } catch (error) {}
  }
}
function* watchGetUserSharedPosts() {
  while (true) {
    const action = yield take(UserTypes.GET_USER_SHARED_POSTS);
    const { id, filters } = action.payload;
    try {
      const response = yield userService.getSharedPosts(id, filters);
      yield put(UserActions.getUserSharedPostsSucess(response.data));
    } catch (error) {}
  }
}
function* watchGetUserPostedPosts() {
  while (true) {
    const action = yield take(UserTypes.GET_USER_POSTED_POSTS);
    const { id, filters } = action.payload;
    try {
      const response = yield userService.getPostedPosts(id, filters);
      yield put(UserActions.getUserPostedPostsSuccess(response.data));
    } catch (error) {}
  }
}
function* watchUpdateUserInfo() {
  while (true) {
    const action = yield take(UserTypes.UPDATE_USER_INFO);
    const { id, user } = action.payload;
    try {
      const response = yield userService.updateUser(id, user);
      yield put(UserActions.updateUserInfoSuccess(response.data));
    } catch (error) {}
  }
}
function* watchGetAllUsers() {
  while (true) {
    const action = yield take(UserTypes.GET_ALL_USERS);
    try {
      const response = yield userService.getUsers(action.payload.filters);
      yield put(UserActions.getAllUsersSuccess(response.data));
    } catch (error) {}
  }
}
