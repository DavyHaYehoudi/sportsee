import React from "react";
import AsideBar from "../layout/AsideBar";
import Bar from "../components/Bar";
import Energy from "../components/Energy";
import Line from "../components/Line";
import Radar from "../components/Radar";
import Pie from "../components/Pie";
import kal from "../image/kal.png";
import prot from "../image/prot.png";
import gluc from "../image/gluc.png";
import lip from "../image/lip.png";

const Profil = () => {
  return (
    <div className="profil">
      <AsideBar />
      <div className="profil-container">
        <h1>
          Bonjour <span className="firstName">PRENOM</span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div class="profil-container-blocs">
          <Bar />
          <Energy icon={kal} category="calories" />
          <Energy icon={prot} category="protéines" />
          <Energy icon={gluc} category="glucides" />
          <Energy icon={lip} category="lipides" />
          <Line />
          <Radar />
          <Pie />
        </div>
      </div>
    </div>
  );
};

export default Profil;
