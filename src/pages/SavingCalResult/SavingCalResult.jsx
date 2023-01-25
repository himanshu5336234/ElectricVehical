import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import "./SavingCalResult.scss";
import CachedTwoToneIcon from "@mui/icons-material/CachedTwoTone";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import img from "../../asset/bg5.jpg";
import UIGoa from "../../components/SavingCalResult/Goa/UIGoa";
import UIPizza from "../../components/SavingCalResult/Pizza/UIPizza";
import UINetflix from "../../components/SavingCalResult/Netflix/UINetflix";
import BgImage from "../../components/BgImage/BgImage";
function SavingCalResult() {
  const location = useLocation();
  const [cost, setCost] = useState(undefined);
  console.log(location);
  useEffect(() => {
    setCost(location.state?.avgTravel);
  }, []);
  return (
    <div>
      <Topbar />
      <BgImage img={img} />
      <div className="cal-result-container">
        <div className="cal-result-top">
          <div className="top-one">
            <span className="one-title">Super Savings</span>
            <span className="one-recalculate">
              <CachedTwoToneIcon />{" "}
              <Link className="recalculate" to="/savingcalculator">
                Check Again
              </Link>
            </span>
          </div>
          <div className="top-two">
            <span className="two-title">Money in the Bank</span>
            <span className="saving-amount">
              ₹ <span className="amount">{cost}</span>/year
            </span>
          </div>
          <div className="top-three">
            <span className="three-info">
              We just calculated this based on the petrol price{" "}
              {location.state?.city} on {new Date().getDay()}{" "}
              {new Date().toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
              })}
              .Still doesn’t cease to amaze.
            </span>
          </div>
        </div>
        <div className="cal-result-bottom">
          <div className="bottom-one">
            <span className="bottom-info">This can come in handy</span>
          </div>
          <div className="bottom-two">
            {cost <= 150000 && <UINetflix />}
            {cost > 150000 && cost <= 250000 && <UIPizza />}
            {cost > 250000 && <UIGoa />}
          </div>
          <div className="bottom-three">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="bottom-button"
            >
              <Link to="/book" className="link-button">
                TEST THE RORR
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SavingCalResult;
