import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/categories" });

const getAllCategories = (filters) => {
  return client.get(undefined, filters);
};

const getCategoryPosts = (id, filters) => {
  return client.get(`/${id}/posts`, filters);
};

const createCategory = (category) => {
  return client.post(undefined, category);
};

const getCategoryTags = (id, filters) => {
  return client.get(`/${id}/tags`, filters);
};

const updateCategory = (category) => {
  return client.put(`/${category.id}`, category);
}

export const categoryService = {
  getAllCategories: (filters) => getAllCategories(filters),
  getCategoryPosts: (id, filters) => getCategoryPosts(id, filters),
  createCategory: (category) => createCategory(category),
  getCategoryTags: (id, filters) => getCategoryTags(id, filters),
  updateCategory: (category) => updateCategory(category),
};
