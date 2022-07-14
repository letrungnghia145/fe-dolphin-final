import { TagTypes } from "../constants";

export const getAllTags = (filters) => {
  return { type: TagTypes.GET_ALL_TAGS, payload: { filters } };
};
export const getAllTagsSuccess = (tags) => {
  return { type: TagTypes.GET_ALL_TAGS_SUCCESS, payload: { tags } };
};
export const createNewTag = (tag) => {
  return { type: TagTypes.CREATE_NEW_TAG, payload: { tag } };
};
export const createNewTagSuccess = (tag) => {
  return { type: TagTypes.CREATE_NEW_TAG, payload: { tag } };
};
export const getTagPosts = (id, filters) => {
  return { type: TagTypes.GET_TAG_POSTS, payload: { id, filters } };
};
export const getTagPostsSuccess = (posts) => {
  return { type: TagTypes.GET_TAG_POSTS_SUCCESS, payload: { posts } };
};
export const getTag = (id) => {
  return { type: TagTypes.GET_TAG, payload: { id } };
};
export const getTagSuccess = (tag) => {
  return { type: TagTypes.GET_TAG_SUCCESS, payload: { tag } };
};
