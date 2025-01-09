import api from './api';

export const teamService = {
  async getAllMembers() {
    const response = await api.get('/team');
    return response.data;
  },

  async getMemberById(id) {
    const response = await api.get(`/team/${id}`);
    return response.data;
  },

  async createMember(memberData) {
    const response = await api.post('/team', memberData);
    return response.data;
  },

  async updateMember(id, memberData) {
    const response = await api.put(`/team/${id}`, memberData);
    return response.data;
  },

  async deleteMember(id) {
    await api.delete(`/team/${id}`);
  }
};