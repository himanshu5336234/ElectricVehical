import React, { useEffect, useState } from "react";
import WFooter from "../../Components/Footer/WFooter";
// import Topbar from '../../components/Topbar/Topbar'
import "./savingCalc.scss";
import CachedTwoToneIcon from "@mui/icons-material/CachedTwoTone";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import UIGoa from "../../../components/SavingCalResult/Goa/UIGoa";
import UIPizza from "../../../components/SavingCalResult/Pizza/UIPizza";
import UINetflix from "../../../components/SavingCalResult/Netflix/UINetflix";
// import BgImage from '../../components/BgImage/BgImage';
import WNavbar from "../../Components/Navbar/WNavbar";
import leftSavingImg from "../../Assets/savingCalc/SavingImgWeb.png";

function SavingCalResult() {
  const location = useLocation();
  const [cost, setCost] = useState(undefined);
  useEffect(() => {
    setCost(location?.state?.avgTravel);
  }, []);
  console.log(cost);
  return (
    <div>
      <WNavbar />
      {/* <BgImage img={img} /> */}
      <div className="w-cal-result-body">
        <div className="w-leftSavingRes-container">
          <img src={leftSavingImg} />
        </div>
        <div className="w-cal-result-container">
          <div className="w-cal-result-top">
            <div className="w-top-one">
              <span className="w-one-title">Super Savings</span>
              <span className="w-one-recalculate">
                <CachedTwoToneIcon />{" "}
                <Link className="w-recalculate" to="/savingCalc">
                  Check Again
                </Link>
              </span>
            </div>
            <div className="w-top-two">
              <span className="w-two-title">Money in the Bank</span>
              <span className="w-saving-amount">
                ₹ <span className="w-amount">{cost}</span>/year
              </span>
            </div>
            <div className="w-top-three">
              <span className="w-three-info">
                We just calculated this based on the petrol price in{" "}
                {location?.state?.city} on 18th July 2022.
                {new Date().getDay()}{" "}
                {new Date().toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                })}
                Still doesn’t cease to amaze..{" "}
              </span>
            </div>
          </div>
          <div className="w-cal-result-bottom">
            <div className="w-bottom-one">
              <span className="w-bottom-info">This can come in handy</span>
            </div>
            <div className="w-bottom-two">
              {cost <= 150000 && <UINetflix />}
              {cost > 150000 && cost <= 250000 && <UIPizza />}
              {cost > 250000 && <UIGoa />}
            </div>
            {/* <div className='w-bottom-three'>
                    <motion.button
                    whileHover={{
                        scale:1.1
                    }} 
                    whileTap={{
                        scale:0.9
                    }}
                    className='w-bottom-button'>
                        <Link to="/book" className="w-link-button" >
                        BOOK A TEST RIDE
                        </Link>
                        </motion.button>
                        
                </div> */}
          </div>
        </div>
      </div>
      <WFooter />
    </div>
  );
}

export default SavingCalResult;
