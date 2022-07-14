import { all, put, take } from "redux-saga/effects";
import { PostActions } from "../actions";
import { PostTypes } from "../constants";
import { postService } from "./../apis";

export function* postSaga() {
  yield all([
    watchGetPostDetails(),
    watchUpdatePostCountViews(),
    watchGetPostVoters(),
    watchGetPostSharers(),
    watchGetAllPosts(),
    watchGetPostComments(),
    watchCreateNewPost(),
    watchDeletePost(),
    watchAddPostComment(),
    watchAddPostVoter(),
    watchDeleteAllPostsByIds(),
  ]);
}

function* watchGetPostDetails() {
  while (true) {
    const action = yield take(PostTypes.GET_POST_DETAILS);
    try {
      const response = yield postService.getPost(action.payload.id);
      const { data, status } = response;
      if (status === 200) {
        yield put(PostActions.getPostDetailsSuccess(data));
      }
    } catch (error) {}
  }
}

function* watchUpdatePostCountViews() {
  while (true) {
    const action = yield take(PostTypes.UPDATE_POST_COUNT_VIEWS);
    try {
      const response = yield postService.updateCountViews(action.payload.id);
      const { status } = response;
      if (status === 200) {
        yield put(PostActions.updatePostCountViewsSuccess());
      }
    } catch (error) {}
  }
}
function* watchGetAllPosts() {
  while (true) {
    const action = yield take(PostTypes.GET_ALL_POSTS);
    try {
      const response = yield postService.getPosts(action.payload.filters);
      const { data, status } = response;
      if (status === 200) {
        yield put(PostActions.getAllPostsSuccess(data));
      }
    } catch (error) {}
  }
}
function* watchGetPostComments() {
  while (true) {
    const action = yield take(PostTypes.GET_POST_COMMENTS);
    try {
      const { id, filters } = action.payload;
      const response = yield postService.getComments(id, filters);
      const { data, status } = response;
      if (status === 200) {
        yield put(PostActions.getPostCommentsSuccess(data));
      }
    } catch (error) {}
  }
}
function* watchCreateNewPost() {
  yield take(PostTypes.CREATE_NEW_POST);
}
function* watchDeletePost() {
  yield take(PostTypes.DELETE_POST);
}
function* watchAddPostComment() {
  yield take(PostTypes.ADD_POST_COMMENT);
}
function* watchAddPostVoter() {
  yield take(PostTypes.ADD_POST_VOTER);
}
function* watchGetPostVoters() {
  while (true) {
    const action = yield take(PostTypes.GET_POST_VOTERS);
    const { id, filters } = action.payload;
    try {
      const response = yield postService.getVoters(id, filters);
      const { data, status } = response;
      if (status === 200) {
        yield put(PostActions.getPostVotersSuccess(data));
      }
    } catch (error) {}
  }
}

function* watchGetPostSharers() {
  while (true) {
    const action = yield take(PostTypes.GET_POST_VOTERS);
    const { id, filters } = action.payload;
    try {
      const response = yield postService.getPostSharers(id, filters);
      const { data, status } = response;
      if (status === 200) {
        yield put(PostActions.getPostSharersSuccess(data));
      }
    } catch (error) {}
  }
}
function* watchDeleteAllPostsByIds() {
  yield take(PostTypes.DELETE_ALL_POST_BY_IDS);
}
