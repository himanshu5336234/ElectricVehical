import React from "react";
import WNavbar from "../../../Components/Navbar/WNavbar";
import BatteryIcon from "../.././../Assets/icon/Stronger.svg";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import Shield from "../.././../Assets/icon/SaferDesktop.svg";
import InverterBattery from "../.././../Assets/icon/Bigger.svg";
import WFooter from "../../../Components/Footer/WFooter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BatteryVideo from "../../../Assets/LandingPage/BatteryVideo.mp4"
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import "./WBattery.scss";
const data = [
  {
    src: Shield,
    title: "SAFER",
    value: "MHX Tech",
  },
  {
    src: InverterBattery,
    title: "BIGGER",
    value: "4.4 kWh",
  },
  {
    src: BatteryIcon,
    title: "STRONGER",
    value: "3X Life",
  },
];
function WBattery() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-battery"
        id="Battery"
      >
        <video autoPlay muted loop className="landing_video">
          <source src={BatteryVideo} type="video/mp4" />
        </video>
        <div className="battery_heading">
          <p className="keep">Battery of <br/>Evolution</p>
          <p className="heading_subtitle">Darwin approves.</p>
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
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/batteryExpand");
            }}
          >
            <img src={AngleArrrow} alt="Arrow" className="performance_icon" />
            <div className="container">
              <p className="container_title">Dayum</p>
              <p className="container_value">Tell me more.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WBattery;
