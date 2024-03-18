import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" />{" "}
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/profil">Profil</Link>
      <Link to="/">Réglage</Link>
      <Link to="/">Communauté</Link>
    </nav>
  );
};

export default Navigation;
