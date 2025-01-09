import api from './api';

export const careerService = {
  async getAllJobs() {
    const response = await api.get('/careers');
    return response.data;
  },

  async getJobById(id) {
    const response = await api.get(`/careers/${id}`);
    return response.data;
  },

  async createJob(jobData) {
    const response = await api.post('/careers', jobData);
    return response.data;
  },

  async updateJob(id, jobData) {
    const response = await api.put(`/careers/${id}`, jobData);
    return response.data;
  },

  async deleteJob(id) {
    await api.delete(`/careers/${id}`);
  },

  async applyForJob(id, applicationData) {
    const response = await api.post(`/careers/${id}/apply`, applicationData);
    return response.data;
  }
};