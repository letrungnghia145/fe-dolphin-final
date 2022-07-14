import { all, put, take } from "redux-saga/effects";
import { TagActions } from "../actions";
import { TagTypes } from "../constants";
import { tagService } from "./../apis";

export function* tagSaga() {
  yield all([
    watchGetAllTags(),
    watchCreateNewTag(),
    ,
    watchGetTag(),
    watchGetTagPosts(),
  ]);
}

function* watchGetAllTags() {
  while (true) {
    const action = yield take(TagTypes.GET_ALL_TAGS);
    try {
      const response = yield tagService.getAllTags(action.payload.filters);
      yield put(TagActions.getAllTagsSuccess(response.data));
    } catch (error) {}
  }
}

function* watchGetTag() {
  while (true) {
    const action = yield take(TagTypes.GET_TAG);
    try {
      const response = yield tagService.getTag(action.payload.id);
      yield put(TagActions.getTagSuccess(response.data));
    } catch (error) {}
  }
}
function* watchCreateNewTag() {
  while (true) {
    const action = yield take(TagTypes.CREATE_NEW_TAG);
    try {
      const response = yield tagService.createTag(action.payload.tag);
      yield put(TagActions.createNewTagSuccess(response.data));
    } catch (error) {}
  }
}
function* watchGetTagPosts() {
  while (true) {
    const action = yield take(TagTypes.GET_TAG_POSTS);
    const { id, filters } = action.payload;
    try {
      const response = yield tagService.getPosts(id, filters);
      yield put(TagActions.getTagPostsSuccess(response.data));
    } catch (error) {}
  }
}
