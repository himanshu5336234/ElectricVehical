import React from "react";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import Battery from "../../../Assets/Service/battery.svg";
import Motor from "../../../Assets/Service/Motor.svg";
import Service from "../../../Assets/Service/Service.svg";
import { motion } from "framer-motion";
import "./WLandingService.scss";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    src: Battery,
    title: "BATTERY",
    value: "3 yrs / 60k kms",
  },
  {
    id: 2,
    src: Motor,
    title: "MOTOR",
    value: "3 yrs",
  },
  {
    id: 3,
    src: Service,
    title: "SERVICE",
    value: "3 Free",
  },
];

function WLandingService() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-LandingService"
      >
        <div className="logo_container">
          <h1>
            Unmatched
            <br />
            Service.
          </h1>
          <p className="starting_at">The Dabbawallas approve. </p>
        </div>
        <div className="box_container">
          {data.map((ele) => (
            <HomeCustomDiv title={ele.title} value={ele.value} src={ele.src} />
          ))}
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/serviceexpanded");
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

export default WLandingService;
