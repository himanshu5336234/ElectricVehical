import React, { useState } from "react";
import "./WNavbar.scss";
import logo from "../../Assets/navbar/oben-logo.png";
import WSideMenu from "../SideMenu/WSideMenu";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function WComponentNavbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleHamburger = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <>
      <div className="w-navbar">
        <div className="oben-logo">
          <a href="/">
            <img src={logo} style={{ cursor: "pointer" }} />
          </a>
        </div>
        <div className="hamburgar-menu">
          {!openSidebar ? (
            <MenuSharpIcon
              className="hamburger-icon"
              onClick={handleHamburger}
            />
          ) : (
            <CloseIcon
              style={{ color: "white", scale: "1.5", cursor: "pointer" }}
              onClick={handleHamburger}
            />
          )}
        </div>
      </div>

      <WSideMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
}

export default WComponentNavbar;
