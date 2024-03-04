import { customFetch } from "../service/customFetch";

export default class ApiSource {
  async getUser(userId) {
    try {
      const user = await customFetch(`user/${userId}`);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getActivity(userId) {
    try {
      const activity = await customFetch(`user/${userId}/activity`);
      return activity;
    } catch (error) {
      throw error;
    }
  }

  async getSessions(userId) {
    try {
      const sessions = await customFetch(`user/${userId}/average-sessions`);
      return sessions;
    } catch (error) {
      throw error;
    }
  }

  async getPerformance(userId) {
    try {
      const performance = await customFetch(`user/${userId}/performance`);
      return performance;
    } catch (error) {
      throw error;
    }
  }
}
