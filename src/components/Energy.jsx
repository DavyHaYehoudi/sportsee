import React from "react";
import PropTypes from "prop-types";

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
Energy.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Energy;
