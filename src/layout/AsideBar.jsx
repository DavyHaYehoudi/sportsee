import React from "react";
import yoga from "../image/yoga.png";
import swim from "../image/swim.png";
import cycle from "../image/cycle.png";
import weight from "../image/weight.png";

const AsideBar = () => {
  return (
    <div className="asideBar">
      <div className="asideBar-img">
        <img src={yoga} alt="yoga" />
        <img src={swim} alt="swim" />
        <img src={cycle} alt="cycle" />
        <img src={weight} alt="weight" />
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
};

export default AsideBar;
