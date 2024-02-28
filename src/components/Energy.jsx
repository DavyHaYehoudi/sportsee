import React from "react";

const Energy = ({ category, icon, count, unit }) => {
  return (
    <div className={`block block-energy`}>
      <img src={icon} alt="icon" />
      <div className="energy-details">
        <p className="energy-quantity">
          {count}
          {unit}{" "}
        </p>
        <p className="energy-category">{category} </p>
      </div>
    </div>
  );
};

export default Energy;
