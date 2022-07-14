import { take, all, put } from "redux-saga/effects";
import { CategoryActions } from "../actions";
import { categoryService } from "../apis";
import { CategoryTypes } from "../constants";

export function* categorySaga() {
  yield all([
    watchGetAllCategories(),
    // watchGetCategoryTags(),
  ]);
}

function* watchGetAllCategories() {
  while (true) {
    const action = yield take(CategoryTypes.GET_ALL_CATEGORIES);
    const { filters } = action.payload;
    try {
      const response = yield categoryService.getAllCategories(filters);
      const { data, status } = response;
      if (status === 200) {
        yield put(CategoryActions.getAllCategoriesSuccess(data));
      }
    } catch (error) {}
  }
}

// function* watchGetCategoryTags() {
//   while (true) {
//     const action = yield take(CategoryTypes.GET_CATEGORY_TAGS);
//     const { id, filters } = action.payload;
//     try {
//       const response = yield categoryService.getCategoryTags(id, filters);
//       const { data, status } = response;
//       if (status === 200) {
//         yield put(CategoryActions.getCategoryTagsSuccess(data));
//       }
//     } catch (error) {}
//   }
// }
