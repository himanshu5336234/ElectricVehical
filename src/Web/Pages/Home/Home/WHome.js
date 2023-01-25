import React from "react";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import WFooter from "../../../Components/Footer/WFooter";
import WNavbar from "../../../Components/Navbar/WNavbar";
import Warranty from "../../../../asset/icon/Warranty.svg";
import LogoImage from "../../../../asset/LogoImage.png";
import Mileage from "../.././../Assets/icon/TopSpeed.svg";
import Range from "../.././../Assets/icon/Range.svg";
import LandingVideo from "../.././../Assets/LandingPage/LandingVideo.mp4";
import Battery from "../.././../Assets/icon/ChargeTime.svg";
import Acceleration from "../.././../Assets/icon/Acceleration.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./WHome.scss";
import { Accessible } from "@mui/icons-material";
const data = [
  {
    src: Mileage,
    title: "Top Speed",
    value: "100 km/hr",
  },
  {
    src: Range,
    title: "Range",
    value: "200 KM",
  },
  {
    src: Battery,
    title: "Charge Time",
    value: "2 hrs",
  },
  {
    src: Acceleration,
    title: "Acceleration",
    value: "3s(0-40s)",
  },
];
function WHome({ ref }) {
  return (
    <>
      <div className="w-home" id="Home">
      <video autoPlay muted loop className="landing_video">
      <source src={LandingVideo} type="video/mp4" />
      </video>
        <div className="home_logo_container">
          <img
            src={LogoImage}
            style={{ width: "200px", height: "56px" }}
            alt="Logo"
          />
          <p className="starting_at">
            Starting at <span style={{ marginLeft: "12px",fontSize:"700" }}>₹99,999/-</span>
          </p>
        </div>
        <div className="box_container">
          {data.map((ele) => {
            return (
              <HomeCustomDiv
                title={ele.title}
                value={ele.value}
                src={ele.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WHome;
