import React from "react";
import WNavbar from "../../../Components/Navbar/WNavbar";
import BatteryIcon from "../.././../Assets/icon/Battery.png";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import Acceleration from "../.././../Assets/icon/Acceleration.svg";
import Mileage from "../.././../Assets/icon/TopSpeed.svg";
import Motor from "../.././../Assets/icon/PowerfulDesktop.svg";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import "./WPerformance.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const data = [
  {
    src: Acceleration,
    title: "QUICK",
    value: "0-40 in 3s Acceleration",
  },
  {
    src: Mileage,
    title: "FAST",
    value: "100kmph Top Speed",
  },
  {
    src: Motor,
    title: "POWERFUL",
    value: "10kW Heavy Duty Motor",
  },
];
function WPerformance() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-performance"
        id="Performance"
      >
        <div className="performance_heading">
          <p>Star</p>
          <p>Performance</p>
          <p className="heading_subtitle">The Oscars approve.</p>
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
              navigate("/performanceexpanded");
            }}
          >
            <img src={AngleArrrow} alt="Arrow" className="performance_icon" />
            <div className="container">
              <p className="container_title">Dayum</p>
              <p className="container_value">Tell me more!</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WPerformance;
