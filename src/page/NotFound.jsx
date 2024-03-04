import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Les données n'ont pas pu être récupérées...</h1>
      <Link to="/12">Retour sur la page de profil</Link>
    </div>
  );
};

export default NotFound;
