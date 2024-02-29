import activity from "../mocks/userActivity.json";
import sessions from "../mocks/userAverageSessions.json";
import user from "../mocks/userMainData.json";
import performance from "../mocks/userPerformance.json";

export default class MockSource {
   getUserData() {
    return user;
  }
   getUserActivity() {
    return activity;
  }
   getUserAverageSessions() {
    return sessions;
  }
   getUserPerformance() {
    return performance;
  }
}
