import React from "react";
import goaBeach from "../../../asset/beach-goa.png";
import "./UIGoa.scss";

function UIGoa() {
  return (
    <div className="benifit-container">
      <label className="betifit-tex">
        <span>To boldly accept the fare surges for airport cab rides.</span>
      </label>
      <img className="benifit-img" src={goaBeach} />
    </div>
  );
}

export default UIGoa;
