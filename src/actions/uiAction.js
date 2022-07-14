import { UITypes } from "../constants";

export const showLoading = () => {
  return {
    type: UITypes.SHOW_LOADING,
  };
};
export const hideLoading = () => {
  return {
    type: UITypes.HIDE_LOADING,
  };
};

export const fetchDataPostDetailsPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_POST_DETAILS_PAGE, pageFilters };
};
export const fetchDataPostPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_POST_PAGE, pageFilters };
};

export const fetchDataAdminPostsPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_ADMIN_POSTS_PAGE, pageFilters };
};

export const fetchDataHomePage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_HOME_PAGE, pageFilters };
};

export const fetchDataProfilePage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_PROFILE_PAGE, pageFilters };
};

export const fetchDataSearchPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_SEARCH_PAGE, pageFilters };
};

export const fetchDataTagPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_TAG_PAGE, pageFilters };
};

export const fetchDataCategoryPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_CATEGORY_PAGE, pageFilters };
};

export const fetchDataUserInfoPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_USER_INFO_PAGE, pageFilters };
};

export const fetchDataAdminCategoriesPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_ADMIN_CATEGORIES_PAGE, pageFilters };
};

export const fetchDataAdminUsersPage = (pageFilters) => {
  return { type: UITypes.FETCH_DATA_ADMIN_USERS_PAGE, pageFilters };
};
