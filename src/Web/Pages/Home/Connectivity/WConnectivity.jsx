import React from "react";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import find from "../../../Assets/Connectivity/find.svg";
import remote from "../../../Assets/Connectivity/remote.svg";
import stats from "../../../Assets/Connectivity/stats.svg";
import { motion } from "framer-motion";
import "./WConnectivity.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    src: stats,
    title: "TRACK",
    value: "Ride Vitals",
  },
  {
    id: 2,
    src: remote,
    title: "CHECK",
    value: " Remote Diagnostics",
  },
  {
    id: 3,
    src: find,
    title: "FIND",
    value: "your Rorr via GPS",
  },
];

function WConnectivity() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-connectivity"
        id="Connectivity"
      >
        <div className="connectivity_container">
          <h1>Connected</h1>
          <h1>Everywhere.</h1>
          <p className="starting_at">Your smart appliances approve.</p>
        </div>
        <div className="box_container">
          {data.map((ele) => (
            <HomeCustomDiv title={ele.title} value={ele.value} src={ele.src} />
          ))}
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/connectivityexpanded");
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

export default WConnectivity;
