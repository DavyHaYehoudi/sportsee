import React from "react";
import AsideBar from "../layout/AsideBar";
import Energy from "../components/Energy";
import kal from "../image/kal.png";
import prot from "../image/prot.png";
import gluc from "../image/gluc.png";
import lip from "../image/lip.png";
// import user from "../mocks/userMainData.json";
import BarGraph from "../components/BarGraph";
import LineGraph from "../components/LineGraph";
import RadarGraph from "../components/RadarGraph";
import RadialBarGraph from "../components/RadialBarGraph";
import { useParams } from "react-router-dom";
import useUserData from "../service/hook/useUserData";

const Profil = () => {
  const { userId } = useParams();
  const data = useUserData(userId);
  const { user, activity, sessions, performance } = data || {};
  const { firstName } = user?.data?.userInfos || {};
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    user?.data?.keyData || {};
    
  return (
    <div className="profil">
      <AsideBar />
      <div className="profil-container">
        <h1>
          Bonjour <span className="firstName">{firstName} </span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className="profil-container-blocs">
          <BarGraph data={activity} />
          <Energy
            icon={kal}
            category="calories"
            count={calorieCount}
            unit="Kcal"
          />
          <Energy
            icon={prot}
            category="protéines"
            count={proteinCount}
            unit="g"
          />
          <Energy
            icon={gluc}
            category="glucides"
            count={carbohydrateCount}
            unit="g"
          />
          <Energy icon={lip} category="lipides" count={lipidCount} unit="g" />
          <LineGraph data={sessions} />
          <RadarGraph data={performance} />
          <RadialBarGraph data={user} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
