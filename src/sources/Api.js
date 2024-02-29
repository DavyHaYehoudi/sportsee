export default class ApiSource {
  async getUser(userId) {
    const user = await fetch("http://localhost:5500/user/" + userId).then(
      (res) => res.json()
    );

    return user;
  }

  async getActivity(userId) {
    const activity = await fetch(
      "http://localhost:5500/user/" + userId + "/activity"
    ).then((res) => res.json());
    return activity;
  }

  async getSessions(userId) {
    const sessions = await fetch(
      "http://localhost:5500/user/" + userId + "/average-sessions"
    ).then((res) => res.json());
    return sessions;
  }

  async getPerformance(userId) {
    const performance = await fetch(
      "http://localhost:5500/user/" + userId + "/performance"
    ).then((res) => res.json());
    return performance;
  }
}
