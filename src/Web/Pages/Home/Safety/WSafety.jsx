import React from "react";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import "./Wsafety.scss";
import Das from "../../../Assets/Safety/Das.svg";
import Geo from "../../../Assets/Safety/Geo.svg";
import Cbs from "../../../Assets/Safety/Cbs.svg";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    src: Das,
    title: "ALERT",
    value: "Driver Alert System (DAS)",
  },
  {
    id: 2,
    src: Geo,
    title: "PROTECT",
    value: "Theft Protection (Geo Fencing)",
  },
  {
    id: 3,
    src: Cbs,
    title: "CONTROL",
    value: "Combi Braking System (CBS)",
  },
];

function WSafety() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-safety"
      >
        <div className="safety_heading">
          <p>
            A Safety <br />
            Superhero.
          </p>
          <p className="w-starting_at">Marvel approves.</p>
        </div>
        <div className="w-box_container">
          {data.map((ele) => (
            <HomeCustomDiv title={ele.title} value={ele.value} src={ele.src} />
          ))}
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/safetyexpanded");
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

export default WSafety;
