import activity from "../mocks/userActivity.json";
import sessions from "../mocks/userAverageSessions.json";
import user from "../mocks/userMainData.json";
import performance from "../mocks/userPerformance.json";

export default class MockSource {
   getUser() {
    return user;
  }
   getActivity() {
    return activity;
  }
   getSessions() {
    return sessions;
  }
   getPerformance() {
    return performance;
  }
}
