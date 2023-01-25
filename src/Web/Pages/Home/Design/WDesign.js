import React from "react";
import "./WDesign.scss";
import Vector from "../../../Assets/Design/Vector.svg";
import Design from "../../../Assets/Design/Vector (1).svg";
import Frame from "../../../Assets/Design/Vector (2).svg";
import backvideo from "../../../Assets/Design/landing desktop.mp4";
import HomeCustomDiv from "../../../Common/HomeCustomDiv/HomeCustomDiv";
import AngleArrrow from "../../../Assets/icon/Arrow.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    src: Vector,
    title: "BEAUTIFUL ",
    value: "Neo-Classic",
  },
  {
    id: 2,
    src: Design,
    title: "INNOVATIVE ",
    value: "Floating Design",
  },
  {
    id: 3,
    src: Frame,
    title: "STRONG ",
    value: "ARX Frame",
  },
];

function WDesign() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ scale: 0.97, overflow: "hidden" }}
        whileInView={{ scale: 1, overflow: "hidden" }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: false, amount: 1 }}
        className="w-design"
        id="Design"
      >
        <video className="w-videoTag-design" autoPlay loop muted>
          <source src={backvideo} type="video/mp4" />
        </video>
        <div className="w-logo_container">
          <h1>Devilish Design.</h1>
          <p className="w-starting_at">Bollywood Wives approve.</p>
        </div>
        <div className="w-box_container">
          {data.map((ele) => (
            <HomeCustomDiv title={ele.title} value={ele.value} src={ele.src} />
          ))}
          <div
            className="redirection_container"
            onClick={() => {
              navigate("/design-detail");
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

export default WDesign;
