import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/posts" });

const getPosts = (filters) => {
  return client.get(undefined, filters);
};

const getPost = (id) => {
  return client.get(`/${id}`);
};

const updateCountViews = (id) => {
  return client.put(`/${id}/count`)
}

const createPost = (post) => {
  return client.post(undefined, post);
};

const updatePost = (id, post) =>{
  return client.put(`${id}`, post);
}

const deletePost = (id) => {
  return client.delete(`${id}`);
};

const getComments = (id, filters) => {
  return client.get(`/${id}/comments`, filters);
};

const addComment = (id, comment) => {
  return client.post(`/${id}/comments`, comment);
};

const addVoter = (id, voter) => {
  return client.post(`/${id}/voters`, voter);
};

const getVoters = (id, filters) => {
  return client.get(`/${id}/voters`, filters);
};

const getPostSharers = (id, filters) => {
  return client.get(`/${id}/sharers`, filters);
};


const deletePosts = (ids) => {
  const body = { ids }
  return client.delete(undefined, body);
};

const removeVoter = (id, voter) => {
  return client.delete(`/${id}/voters`, voter);
}

export const postService = {
  getPosts: (filters) => getPosts(filters),
  updateCountViews: (id) => updateCountViews(id),
  getPost: (id) => getPost(id),
  createPost: (post) => createPost(post),
  updatePost: (id, post) => updatePost(id, post),
  deletePost: (id) => deletePost(id),
  getComments: (id, filters) => getComments(id, filters),
  addComment: (id, comment) => addComment(id, comment),
  addVoter: (id, voter) => addVoter(id, voter),
  removeVoter: (id, voter) => removeVoter(id, voter),
  getVoters: (id, filters) => getVoters(id, filters),
  getPostSharers: (id, filters) => getPostSharers(id, filters),
  deletePosts: (ids) => deletePosts(ids),
};
