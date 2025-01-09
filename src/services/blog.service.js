import api from './api';

export const blogService = {
  async getAllPosts() {
    const response = await api.get('/blog');
    return response.data;
  },

  async getPostById(id) {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  },

  async createPost(postData) {
    const response = await api.post('/blog', postData);
    return response.data;
  },

  async updatePost(id, postData) {
    const response = await api.put(`/blog/${id}`, postData);
    return response.data;
  },

  async deletePost(id) {
    await api.delete(`/blog/${id}`);
  }
};