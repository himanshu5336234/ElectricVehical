import React from "react";
import pizza from "../../../asset/pizza.png";
import "./UIPizza.scss";

function UIPizza() {
  return (
    <div className="benifit-container">
      <label className="benifit-tex">
        <span>To finally get that gym membership
you’ve been putting off.</span>
      </label>
      <img className="benifit-img" src={pizza} />
    </div>
  );
}

export default UIPizza;
