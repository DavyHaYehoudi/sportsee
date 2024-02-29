import React from "react";
import AsideBar from "../layout/AsideBar";
import Energy from "../components/Energy";
import kal from "../image/kal.png";
import prot from "../image/prot.png";
import gluc from "../image/gluc.png";
import lip from "../image/lip.png";
import user from "../mocks/userMainData.json";
import BarGraph from "../components/BarGraph";
import LineGraph from "../components/LineGraph";
import RadarGraph from "../components/RadarGraph";
import RadialBarGraph from "../components/RadialBarGraph";

const Profil = () => {
  const { firstName } = user.data.userInfos;
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    user.data.keyData;
  return (
    <div className="profil">
      <AsideBar />
      <div className="profil-container">
        <h1>
          Bonjour <span className="firstName">{firstName} </span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className="profil-container-blocs">
          <BarGraph />
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
          <LineGraph />
          <RadarGraph />
          <RadialBarGraph />
        </div>
      </div>
    </div>
  );
};

export default Profil;
