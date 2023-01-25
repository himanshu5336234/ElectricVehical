import React from "react";
import WNavbar from "../../../Components/Navbar/WNavbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./WPerformance.scss";
import WPerformanceCarousel from "./WPerformanceCarousel";
import BackButton from "../../../Components/BackButton/BackButton.jsx";
import { swiperInstance } from "../../../../redux/Action/swiperInstanceAction";
import { debounce } from "@mui/material";
import WFooter from "../../../Components/Footer/WFooter";
function WPerformanceExpanded() {
  const navigate = useNavigate();

  return (
    <>
      <WNavbar />
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>

      <div className="w-performanceexpanded_first_container">
        <div className="expanded_heading">
          <p className="expanded_heading_subtitle">Rorr on your riders with</p>
          <p>G.O.A.T</p>
          <p>PERFORMANCE</p>
        </div>
      </div>
      <div className="carousel_container">
        <WPerformanceCarousel />
      </div>
      <motion.div
        initial={{ opacity: 0, y: "50vh" }}
        whileInView={{ opacity: 1, y: "0vh" }}
        viewport={{ once: false, amount: 0 }}
        transition={{ delay: 0.2, duration: 3, type: "spring" }}
        className="w-performanceexpanded_third_container"
      >
        <div className="ipmsm_motor_section">
          <div className="expanded_thirdcontainer_heading">
            <p className="heavy_duty">SMOOTH AS BUTTER</p>
          </div>
        </div>
        <p className="third_container_description" style={{marginTop:"16px"}}>
          Single-Stage Belt Drive means energetic, instant power without
          vibrations.
        </p>
        <p className="third_container_description">
          You test ride experience will feel quite special.
        </p>
        
        <motion.p
          initial={{ opacity: 0, x: "-50vw" }}
          whileInView={{ opacity: 1, x: "0vw" }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 2, type: "spring" }}
          className="torque_slider"
        >
          330Nm Torque{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: "0vw" }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 2, type: "spring" }}
          className="wheel_slider"
        >
          on wheel
        </motion.p>
      </motion.div>
      <WFooter />
    </>
  );
}
export default WPerformanceExpanded;
