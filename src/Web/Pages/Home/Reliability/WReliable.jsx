import React from "react";
import "./WReliable.scss";
import Arrow from "../../../Assets/Design/Vector (3).svg";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import High from "../../../Assets/Reliability/High.svg";
import Wave from "../../../Assets/Reliability/Wave.svg";
import Drop from "../../../Assets/Reliability/Drop.svg";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    src: High,
    title: "BIG",
    value: "200mm High Ground Clearance",
  },
  {
    id: 2,
    src: Wave,
    title: "TALL",
    value: "230mm Highest Water Wader",
  },
  {
    id: 3,
    src: Drop,
    title: "ROBUST",
    value: "IP67 Water Resistant Battery",
  },
];

function WReliable() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-reliable"
        id="Reliability"
      >
        <div className="reliable_heading">
          <p>
            A Reliable <br />
            Romeo
          </p>
          <p className="w-starting_at">Indian Dads Forum approves.</p>
        </div>
        <div className="w-box_container">
          {data.map((ele) => (
            <HomeCustomDiv title={ele.title} value={ele.value} src={ele.src} />
          ))}
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/reliabilityexpanded");
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

export default WReliable;
