const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5500";

export default class ApiSource {
  async getUser(userId) {
    const user = await fetch(`${baseUrl}/user/${userId}`).then((res) =>
      res.json()
    );

    return user;
  }

  async getActivity(userId) {
    const activity = await fetch(`${baseUrl}/user/${userId}/activity`).then(
      (res) => res.json()
    );
    return activity;
  }

  async getSessions(userId) {
    const sessions = await fetch(
      `${baseUrl}/user/${userId}/average-sessions`
    ).then((res) => res.json());
    return sessions;
  }

  async getPerformance(userId) {
    const performance = await fetch(
      `${baseUrl}/user/${userId}/performance`
    ).then((res) => res.json());
    return performance;
  }
}
