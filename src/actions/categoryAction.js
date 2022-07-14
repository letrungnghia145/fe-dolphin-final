import { CategoryTypes } from "./../constants";

export const getAllCategories = (filters) => {
  return { type: CategoryTypes.GET_ALL_CATEGORIES, payload: { filters } };
};

export const getAllCategoriesSuccess = (categories) => {
  return {
    type: CategoryTypes.GET_ALL_CATEGORIES_SUCCESS,
    payload: { categories },
  };
};

export const getCategoryTags = (id, filters) => {
  return { type: CategoryTypes.GET_CATEGORY_TAGS, payload: { id, filters } };
};

export const getCategoryTagsSuccess = (tags) => {
  return { type: CategoryTypes.GET_CATEGORY_TAGS_SUCCESS, payload: { tags } };
};
