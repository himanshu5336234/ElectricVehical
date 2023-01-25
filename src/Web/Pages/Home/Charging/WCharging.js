import React from "react";
import WNavbar from "../../../Components/Navbar/WNavbar";
import BatteryIcon from "../.././../Assets/icon/ChargeTime.svg";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import Charger from "../.././../Assets/icon/AnyHow.svg";
import Earth from "../.././../Assets/icon/AnyWhere.svg";
import Charging from "../../../Assets/LandingPage/Charging.mp4";
import WFooter from "../../../Components/Footer/WFooter";
import { motion } from "framer-motion";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import "./WCharging.scss";
import { useNavigate } from "react-router-dom";
const data = [
  {
    src: Charger,
    title: "ANYHOW",
    value: "On-board Charger",
  },
  {
    src: Earth,
    title: "ANYWHERE",
    value: "15A 3-pin Socket",
  },
  {
    src: BatteryIcon,
    title: "ANYTIME",
    value: "2hrs for Full Charge",
  },
];
function WCharging() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-charging"
        id="Charging"
      >
        <video className="videoTag" autoPlay loop muted>
          <source src={Charging} type="video/mp4" />
        </video>
        <div className="charging_heading">
          <p>Charging</p>
          <p>Anywhere</p>
          <p className="heading_subtitle">
            Charging Station Startups don’t approve.
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
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/ChargingExpand");
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

export default WCharging;
