import React from "react";
import netflixbg from "../../../asset/netflixbg.png";
import netflix from "../../../asset/netflix.png";
import "./UINetflix.scss";

function UINetflix() {
  return (
    <div className="benifit-container">
      <label className="benifit-tex">
        <span>
          To help the friends who’ll get affected by rising fuel prices.
        </span>
      </label>
      <div className="netflix-container">
        <img className="netflix-bg" src={netflixbg} />
        <img className="netflix" src={netflix} />
      </div>
    </div>
  );
}

export default UINetflix;
