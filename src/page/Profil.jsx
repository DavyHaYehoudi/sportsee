import React from "react";
import AsideBar from "../layout/AsideBar";

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
          <div class="block">1</div>
          <div class="block">2</div>
          <div class="block">3</div>
          <div class="block">4</div>
          <div class="block">5</div>
          <div class="block">6</div>
          <div class="block">7</div>
          <div class="block">8</div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
