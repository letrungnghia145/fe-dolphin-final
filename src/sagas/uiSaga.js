import { all, call, put, take, takeEvery } from "redux-saga/effects";
import {
  CategoryActions,
  PostActions,
  TagActions,
  UIActions,
  UserActions,
} from "../actions";
import {
  CategoryTypes,
  PostTypes,
  TagTypes,
  UITypes,
  UserTypes,
} from "../constants";

export function* uiSaga() {
  yield all([
    watchFetchDataPostDetailsPage(),
    watchFetchDataHomePage(),
    watchFetchDataProfilePage(),
    watchFetchDataPostPage(),
    watchFetchDataSearchPage(),
    watchFetchDataTagPage(),
    watchFetchDataCategoryPage(),
    watchFetchDataAdminCategoriesPage(),
    watchFetchDataAdminUsersPage(),
    watchFetchDataUserInfoPage(),
    WatchFetchDataAdminPostsPage(),
  ]);
}

function* showLoading() {
  yield put(UIActions.showLoading());
}

function* hideLoading() {
  yield put(UIActions.hideLoading());
}

function* watchFetchDataTagPage() {
  yield takeEvery(UITypes.FETCH_DATA_TAG_PAGE, fetchDataTagPage);
}

function* WatchFetchDataAdminPostsPage() {
  yield takeEvery(UITypes.FETCH_DATA_ADMIN_POSTS_PAGE, fetchDataAdminPostsPage);
}

function* watchFetchDataUserInfoPage() {
  yield takeEvery(UITypes.FETCH_DATA_USER_INFO_PAGE, fetchDataUserInfoPage);
}

function* watchFetchDataAdminUsersPage() {
  yield takeEvery(UITypes.FETCH_DATA_ADMIN_USERS_PAGE, fetchDataAdminUsersPage);
}

function* watchFetchDataAdminCategoriesPage() {
  yield takeEvery(
    UITypes.FETCH_DATA_ADMIN_CATEGORIES_PAGE,
    fetchDataAdminCategoriesPage
  );
}

function* watchFetchDataCategoryPage() {
  yield takeEvery(UITypes.FETCH_DATA_CATEGORY_PAGE, fetchDataCategoryPage);
}

function* watchFetchDataProfilePage() {
  yield takeEvery(UITypes.FETCH_DATA_PROFILE_PAGE, fetchDataProfilePage);
}

function* watchFetchDataPostPage() {
  yield takeEvery(UITypes.FETCH_DATA_POST_PAGE, fetchDataPostPage);
}

function* watchFetchDataSearchPage() {
  yield takeEvery(UITypes.FETCH_DATA_SEARCH_PAGE, fetchDataSearchPage);
}

function* watchFetchDataPostDetailsPage() {
  yield takeEvery(
    UITypes.FETCH_DATA_POST_DETAILS_PAGE,
    fetchDataPostDetailsPage
  );
}

function* watchFetchDataHomePage() {
  yield takeEvery(UITypes.FETCH_DATA_HOME_PAGE, fetchDataHomePage);
}

function* fetchDataSearchPage(action) {
  const { postsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(PostActions.getAllPosts(postsFilters)),
    //sth gone here
  ]);
  yield all([take(PostTypes.GET_ALL_POSTS_SUCCESS)]);
  yield call(hideLoading);
}

function* fetchDataAdminPostsPage(action) {
  const { postsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(PostActions.getAllPosts(postsFilters)),
    //sth gone here
  ]);
  yield all([take(PostTypes.GET_ALL_POSTS_SUCCESS)]);
  yield call(hideLoading);
}

function* fetchDataHomePage(action) {
  const { postsFilters, tagsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(PostActions.getAllPosts(postsFilters)),
    put(TagActions.getAllTags(tagsFilters)),
    //sth gone here
  ]);
  yield all([
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(TagTypes.GET_ALL_TAGS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataPostDetailsPage(action) {
  const {
    id,
    postsFilters,
    tagsFilters,
    postCommentsFilters,
    postVotersFilters,
    postSharersFilters,
  } = action.pageFilters;
  yield call(showLoading);
  yield all([
    // put(PostActions.updatePostCountViews(id)),
    put(PostActions.getPostDetails(id)),
    put(PostActions.getAllPosts(postsFilters)),
    put(PostActions.getPostComments(id, postCommentsFilters)),
    put(TagActions.getAllTags(tagsFilters)),
    // put(PostActions.getPostVoters(id, postVotersFilters)),
    // put(PostActions.getPostSharers(id, postSharersFilters)),
    //sth gone here
  ]);
  yield all([
    // take(PostTypes.UPDATE_POST_COUNT_VIEWS_SUCCESS),
    take(PostTypes.GET_POST_DETAILS_SUCCESS),
    take(PostTypes.GET_ALL_POSTS_SUCCESS),
    take(PostTypes.GET_POST_COMMENTS_SUCCESS),
    take(TagTypes.GET_ALL_TAGS_SUCCESS),
    // take(PostTypes.GET_POST_VOTERS_SUCCESS),
    // take(PostTypes.GET_POST_SHARERS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataProfilePage(action) {
  const { id, postedPostsFilters, sharedPostsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    // put(UserActions.getUserSharedPosts(id, sharedPostsFilters)),
      // put(UserActions.getUserPostedPosts(id, postedPostsFilters)),
      put(PostActions.getAllPosts(postedPostsFilters))
    //sth gone here
  ]);
  yield all([
    // take(UserTypes.GET_USER_SHARED_POSTS_SUCCESS),
    // take(UserTypes.GET_USER_POSTED_POSTS_SUCCESS),
    take(PostTypes.GET_ALL_POSTS_SUCCESS)
  ]);
  yield call(hideLoading);
}

function* fetchDataPostPage(action) {
  const { categoriesFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(TagActions.getAllTags())
    // put(CategoryActions.getAllCategories(categoriesFilters)),
    //sth gone here
  ]);
  // yield all([take(CategoryTypes.GET_ALL_CATEGORIES_SUCCESS)]);
  yield all([take(TagTypes.GET_ALL_TAGS_SUCCESS)]);
  yield call(hideLoading);
}

function* fetchDataTagPage(action) {
  const { id, postsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(TagActions.getTagPosts(id, postsFilters)),
    put(TagActions.getTag(id)),
    //sth gone here
  ]);
  yield all([
    take(TagTypes.GET_TAG_POSTS_SUCCESS),
    take(TagTypes.GET_TAG_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataCategoryPage(action) {
  const { categoriesFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    // put(CategoryActions.getAllCategories(categoriesFilters)),
    //sth gone here
  ]);
  // yield all([take(CategoryTypes.GET_ALL_CATEGORIES_SUCCESS)]);
  yield call(hideLoading);
}

function* fetchDataUserInfoPage(action) {
  const { id, postedPostsFilters, sharedPostsFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(UserActions.getUserInfo(id)),
    put(UserActions.getUserSharedPosts(id, sharedPostsFilters)),
    put(UserActions.getUserPostedPosts(id, postedPostsFilters)),
    //sth gone here
  ]);
  yield all([
    take(UserTypes.GET_USER_INFO_SUCCESS),
    take(UserTypes.GET_USER_SHARED_POSTS_SUCCESS),
    take(UserTypes.GET_USER_POSTED_POSTS_SUCCESS),
  ]);
  yield call(hideLoading);
}

function* fetchDataAdminCategoriesPage(action) {
  const { categoriesFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(CategoryActions.getAllCategories(categoriesFilters)),
    //sth gone here
  ]);
  yield all([take(CategoryTypes.GET_ALL_CATEGORIES_SUCCESS)]);
  yield call(hideLoading);
}

function* fetchDataAdminUsersPage(action) {
  const { usersFilters } = action.pageFilters;
  yield call(showLoading);
  yield all([
    put(UserActions.getAllUsers(usersFilters)),
    //sth gone here
  ]);
  yield all([take(UserTypes.GET_ALL_USERS_SUCCESS)]);
  yield call(hideLoading);
}
