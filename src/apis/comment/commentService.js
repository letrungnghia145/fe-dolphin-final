import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/comments" });

const addReply = (id, reply) => {
  return client.post(`/${id}/replies`, reply);
};

const getReplies = (id, filters) => {
  return client.get(`/${id}/replies`, filters);
};

const addVoter = (id, voter) => {
  return client.post(`/${id}/voters`, voter);
};

const deleteComment = (id) => {
  return client.delete(`/${id}`);
};

const getVoters = (id, filters) => {
  return client.get(`/${id}/voters`, filters);
};

export const commentService = {
  addReply: (id, reply) => addReply(id, reply),
  getReplies: (id, filters) => getReplies(id, filters),
  addVoter: (id, voter) => addVoter(id, voter),
  getVoters: (id, filters) => getVoters(id, filters),
  deleteComment: (id) => deleteComment(id),
};
