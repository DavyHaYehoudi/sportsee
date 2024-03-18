import { useEffect, useState } from "react";
import MockSource from "../../sources/Mock";
import ApiSource from "../../sources/Api";

const useUserData = (userId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const sourceSelect = [new MockSource(), new ApiSource()];
      // const indexSelect = 0;           //source mock
      const indexSelect = 1;  //source api

      try {
        const userData = await sourceSelect[indexSelect].getUser(userId);
        const userActivity = await sourceSelect[indexSelect].getActivity(
          userId
        );
        const userAverage = await sourceSelect[indexSelect].getSessions(userId);
        const userPerformance = await sourceSelect[indexSelect].getPerformance(
          userId
        );

        setData({
          user: userData,
          activity: userActivity,
          sessions: userAverage,
          performance: userPerformance,
        });
        setError(false)
      } catch (error) {
        setError(true);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [data, userId, error]);

  return { data, error };
};

export default useUserData;
