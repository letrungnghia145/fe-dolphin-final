import { take, all, put } from "redux-saga/effects";
import { CommentTypes } from "../constants";
import { commentService } from "../apis";
import { CommentActions } from "../actions";

export function* commentSaga() {
  yield all([watchGetCommentReplies()]);
}

function* watchGetCommentReplies() {
  while (true) {
    const action = yield take(CommentTypes.GET_COMMENT_REPLIES);
    const { id, filters } = action.payload;
    try {
      const response = yield commentService.getReplies(id, filters);
      const { data, status } = response;
      if (status === 200) {
        console.log(data)
        yield put(CommentActions.getCommentRepliesSuccess(id, data));
      }
    } catch (error) {
        console.log(error);
    }
  }
}
