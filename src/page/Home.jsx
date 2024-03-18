import React from "react";
import { Link } from "react-router-dom";
import AsideBar from "../layout/AsideBar";
import karlImage from "../image/karl.png";
import ceciliaImage from "../image/cecilia.png";

const Home = () => {
  return (
    <div className="homePage">
      <AsideBar />
      <div className="homePage-container">
        <h1>Votre compte utilisateur :</h1>
        <div className="card-profil">
          <Link to="/profil/12">
            <img src={karlImage} alt="Karl" />
            <p>Karl</p>
          </Link>
        </div>
        <div className="card-profil">
          <Link to="/profil/18">
            <img src={ceciliaImage} alt="Cecilia" />
            <p>Cécilia</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
