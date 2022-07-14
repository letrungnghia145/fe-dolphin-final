import { UserTypes } from "../constants";

export const getUserSharedPosts = (id, filters) => {
  return { type: UserTypes.GET_USER_SHARED_POSTS, payload: { id, filters } };
};
export const getUserSharedPostsSucess = (sharedPosts) => {
  return {
    type: UserTypes.GET_USER_SHARED_POSTS_SUCCESS,
    payload: { sharedPosts },
  };
};
export const addUserSharedPost = (id, post) => {
  return { type: UserTypes.ADD_USER_SHARED_POST, payload: { id, post } };
};
export const addUserSharedPostSuccess = (post) => {
  return { type: UserTypes.ADD_USER_SHARED_POST, payload: { post } };
};
export const getUserInfo = (id) => {
  return { type: UserTypes.GET_USER_INFO, payload: { id } };
};
export const getUserInfoSuccess = (user) => {
  return { type: UserTypes.GET_USER_INFO_SUCCESS, payload: { user } };
};

export const getAllUsers = (filters) => {
  return { type: UserTypes.GET_ALL_USERS, payload: { filters } };
};
export const getAllUsersSuccess = (users) => {
  return { type: UserTypes.GET_ALL_USERS_SUCCESS, payload: { users } };
};
export const updateUserInfo = (id, user) => {
  return { type: UserTypes.UPDATE_USER_INFO, payload: { id, user } };
};
export const updateUserInfoSuccess = (user) => {
  return { type: UserTypes.UPDATE_USER_INFO_SUCCESS, payload: { user } };
};

export const getUserPostedPosts = (id, filters) => {
  return { type: UserTypes.GET_USER_POSTED_POSTS, payload: { id, filters } };
};
export const getUserPostedPostsSuccess = (postedPosts) => {
  return { type: UserTypes.GET_USER_POSTED_POSTS_SUCCESS, payload: { postedPosts } };
};
