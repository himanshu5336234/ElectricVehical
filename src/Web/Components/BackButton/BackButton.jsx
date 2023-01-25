import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./BackButton.scss"
function BackButton() {
  return (
    <div className="back-button">
      <ArrowBackIcon />
      Back
    </div>
  );
}
export default BackButton;
