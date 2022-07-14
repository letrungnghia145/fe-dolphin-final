import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/user" });

const getProfile = () => {
  return client.get("/profile");
};

const getUser = (id) => {
  return client.get(`/${id}`);
};

const addSharedPost = (id, post) => {
  return client.post(`/${id}/posts/shared`, post);
};

const removeSharedPost = (id, post) => {
  return client.delete(`/${id}/posts/shared`, post);
};

const getSharedPosts = (id, filters) => {
  return client.get(`/${id}/posts/shared`, filters);
};

const getPostedPosts = (id, filters) => {
  return client.get(`/${id}/posts/posted`, filters);
};

const getUsers = (filters) => {
  return client.get(undefined, filters);
};

const updateUser = (id, user) => {
  return client.put(`/${id}`, user);
};

export const userService = {
  getProfile: () => getProfile(),
  getUser: (id) => getUser(id),
  addSharedPost: (id, post) => addSharedPost(id, post),
  removeSharedPost: (id, post) => removeSharedPost(id, post),
  getSharedPosts: (id, filters) => getSharedPosts(id, filters),
  getUsers: (filters) => getUsers(filters),
  updateUser: (id, user) => updateUser(id, user),
  getPostedPosts: (id, filters) => getPostedPosts(id, filters),
  //   changePassword: (request) => changePassword(request),
  //   confirmChangePassword: (request) => confirmChangePassword(request), note
};
