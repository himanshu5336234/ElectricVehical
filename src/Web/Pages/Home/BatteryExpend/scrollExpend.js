// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./wBatteryStyle.css";
// import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";
// import { motion } from "framer-motion";

// const FirstImg = require("../../../../asset/longer life S1.jpg");
// const SecondImg = require("../../../../asset/larger battery S1.jpg");
// const ThirdImg = require("../../../../asset/cleaner eco friendly S1.jpg");
// const FourthImg = require("../../../../asset/Smart Monitoring S1.jpg");

// export default function ScrollExpend() {

//   const [swiperNumber, setSwiperNumber] = useState(0);
//   const [swiper, setSwiper] = useState(null);

//   return (
//     <>
//       <div className="wbattery-bottom-container">
//         <div>
//           {swiperNumber === 0 ? (
//             <div>
//               <span>Performance Tuning</span>
//               <span>
//                 Take full control of your riding with your ride histories,
//                 riding patterns, and make the most out of it. Learn & adapt
//                 and get the most out of Rorr.
//               </span>
//             </div>
//           ) : swiperNumber === 1 ? (
//             <div>
//               <span>Performance Tuning 2</span>
//               <span>
//                 Take full control of your riding with your ride histories,
//                 riding patterns, and make the most out of it. Learn & adapt
//                 and get the most out of Rorr.
//               </span>
//             </div>
//           ) : swiperNumber === 2 ? (
//             <div>
//               <span>Performance Tuning 3</span>
//               <span>
//                 Take full control of your riding with your ride histories,
//                 riding patterns, and make the most out of it. Learn & adapt
//                 and get the most out of Rorr.
//               </span>
//             </div>
//           ) : (
//             swiperNumber === 3 && (
//               <div>
//                 <span>Performance Tuning 4</span>
//                 <span>
//                   Take full control of your riding with your ride histories,
//                   riding patterns, and make the most out of it. Learn & adapt
//                   and get the most out of Rorr.
//                 </span>
//               </div>
//             )
//           )}
//         </div>

//         {/* ---------------- IMPORTED SLIDER ---------------------- */}
//         <div className="wbattery-slider-container-content">
//           <Swiper
//             direction={"vertical"}
//             // pagination={{
//             //   clickable: true,
//             // }}
//             pagination={false}
//             mousewheel={true}
//             keyboard={true}
//             slidesPerView={1}
//             onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
//             onSwiper={(swiper) => {
//               console.log("Helloooo");
//               setSwiper(swiper);
//             }}
//             modules={[Pagination, Mousewheel, Keyboard, Navigation]}
//             className="mySwiper"
//           >
//             <SwiperSlide
//               className="battery-inner-sliding-content"
//               style={{ width: "100%",  }}
//             >
//               <div>
//                 {/* <span>Home</span>
//                 <span>
//                   Find my Rorr - with the click of a button Always be updated
//                   with the battery status, range, and location
//                 </span> */}
//                 <img src={FirstImg} />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide
//               className="battery-inner-sliding-content"
//               style={{ width: "100%",  }}
//             >
//               <div>
//                 {/* <span>Performance Tuning</span>
//                 <span>
//                   Take full control of your riding with your ride histories,
//                   riding patterns, and make the most out of it. Learn & adapt
//                   and get the most out of Rorr.
//                 </span> */}
//                 <img src={SecondImg} />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide
//               className="battery-inner-sliding-content"
//               style={{ width: "100%",  }}
//             >
//               <div>
//                 {/* <span>Service Connect</span>
//                 <span>
//                   Find the nearby charger, raise service request, and talk to
//                   us, all at just a click away.
//                 </span> */}
//                 <img src={ThirdImg} />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide
//               className="battery-inner-sliding-content"
//               style={{ width: "100%",  }}
//             >
//               <div>
//                 {/* <span>Remote Diagnostics</span>
//                 <span>
//                   Smart monitoring to always keep you updated of your bike’s
//                   health and always keep you safe with the smart alerts on
//                   connected app.
//                 </span> */}
//                 <img src={FourthImg} />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>

//         <div className="wbattery-slider-container-indicator">
//           <div
//             className={
//               swiperNumber === 0
//                 ? "wbattery-slider-container-indicator-active-dots"
//                 : "wbattery-slider-container-indicator-dots"
//             }
//           ></div>
//           <div
//             className={
//               swiperNumber === 1
//                 ? "wbattery-slider-container-indicator-active-dots"
//                 : "wbattery-slider-container-indicator-dots"
//             }
//           ></div>
//           <div
//             className={
//               swiperNumber === 2
//                 ? "wbattery-slider-container-indicator-active-dots"
//                 : "wbattery-slider-container-indicator-dots"
//             }
//           ></div>
//           <div
//             className={
//               swiperNumber === 3
//                 ? "wbattery-slider-container-indicator-active-dots"
//                 : "wbattery-slider-container-indicator-dots"
//             }
//           ></div>
//         </div>
//       </div>
//     </>
//   )
// }

import React, { useEffect, useRef, useState } from "react";
import WFooter from "../../../Components/Footer/WFooter";
import WNavbar from "../../../Components/Navbar/WNavbar";
// import ConnectivityBg from "../../../../Web/Assets/Connectivity/ConnectivityBg.jpg";
// import Union from "../../../../asset/Union.svg";
// import Animation from "../../../../pages/Home/Connectivity/Animation.gif";
// import AnimeLine from "../../../../pages/Home/Connectivity/AnimeLine.gif";

import Slide1 from "../../../Assets/batteryExpend/DesktopBetter.jpg";
import Slide2 from "../../../Assets/batteryExpend/DesktopLonger.jpg";
import Slide3 from "../../../Assets/batteryExpend/DesktopBatteryGreen.jpg";
import Slide4 from "../../../Assets/batteryExpend/DesktopMonitoring.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./scrollExpand.scss";
import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { motion } from "framer-motion";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

const WConnectivityDetail = () => {
  const navigate = useNavigate();
  const [checkClick, setCheckClick] = useState(true);
  const [slidingControls, setSlidingControls] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [swiperNumber, setSwiperNumber] = useState(0);

  useEffect(() => {
    let check = true;
    const run = () => {
      window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset <= 100 && window.pageYOffset >= 50 && check) {
          check = false;
          setCheckClick(false);
        }
        if (window.pageYOffset == 0) {
          check = true;
          setCheckClick(true);
        }
      });
    };
    run();
  }, [checkClick]);
  // window.addEventListener('wheel', wheel)

  function wheel(e) {
    setSlidingControls(slidingControls + 1);
  }

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

      <div className="wExpandBattery-bottom-container">
        <div>
          {swiperNumber === 0 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide1}
            />
          ) : swiperNumber === 1 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide2}
            />
          ) : swiperNumber === 2 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide3}
            />
          ) : (
            swiperNumber === 3 && (
              <motion.img
                className="sliding-img-transition"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                src={Slide4}
              />
            )
          )}
        </div>

        {/* ---------------- IMPORTED SLIDER ---------------------- */}
        <div className="wExpandBattery-slider-container-content">
          <Swiper
            direction={"vertical"}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={false}
            speed={1800}
            mousewheel={true}
            keyboard={true}
            slidesPerView={1}
            onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            modules={[Pagination, Mousewheel, Keyboard, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%" }}
            >
              <div>
                <h2>BIGGER IS ALWAYS BETTER</h2>
                <p>
                  A class leading 4.4kWh battery that gives you a 200km range
                  (IDC) on a single charge. Yep. Just imagine where all you
                  could go in the city.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%" }}
            >
              <div>
                <h2>A LONGER, FULLER LIFE</h2>
                <p>3X longer than other Lithium batteries around.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%" }}
            >
              <div>
                <h2>EVEN THE BATTERY IS GREEN</h2>
                <p>
                  The LFP cell tech is more eco-friendly & sustainable since it
                  doesn’t have any hazards materials like Nickle & Cobalt,
                  unlike other widely used batteries.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%" }}
            >
              <div>
                <h2>STILL KEEP AN EYE ON IT</h2>
                <p>
                  Smart monitoring keeps you updated about battery health with
                  the smart alerts on your connected app
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="wconnectivity-slider-container-indicator">
          <div
            className={
              swiperNumber === 0
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 1
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 2
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 3
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
        </div>
      </div>
    
    </>
  );
};

export default WConnectivityDetail;
