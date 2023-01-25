import React, { useState, useEffect} from "react";
import "./WSafexpanded.scss";
import WNavbar from "../../../../Components/Navbar/WNavbar";
import WFooter from "../../../../Components/Footer/WFooter";
import WSafetyComp1 from "./Safetycomponent/WSafetyComp1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import geoicon from "../../../../Assets/Safety/safeExpanded/geoicon.png";
import slide2img from "../../../../Assets/Safety/safeExpanded/DAS.png";
import slide3img from "../../../../Assets/Safety/safeExpanded/GEO.png";
import slide4img from "../../../../Assets/Safety/safeExpanded/CBSDesktop.png";
import slide5img from "../../../../Assets/Safety/safeExpanded/Safer.png";
import slide6img from "../../../../Assets/Safety/safeExpanded/CBSDesktop.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
} from "framer-motion";
import BackButton from "../../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

function WSafexpanded() {
  const [smallImage, setSmaleImage] = useState(false);

  const navigate = useNavigate();
  const [swipeIndex, setSwipeIndex] = useState(0);


  console.log(swipeIndex,smallImage)
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
      <div className="w-safe-wrapper">
        <div>
          <WSafetyComp1 />

          <div className="w-safe-hide">
            <motion.div
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: false, amount: 0 }}
              className="w-slide2"
              style={{ backgroundImage: `url(${slide2img})` }}
            >
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                whileInView={{ y: "30vh", opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: false, amount: 0 }}
              >
                <h2>
                  DRIVER ALERT <br />
                  SYSTEM (DAS)
                </h2>
                <p>
                  A first-in-segment smart dashboard on your bike that alerts
                  you even when you're not riding.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-safe-hide">
            <motion.div
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: false, amount: 0 }}
              className="w-slide2"
              style={{ backgroundImage: `url(${slide3img})` }}
            >
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                whileInView={{ y: "30vh", opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: false, amount: 0 }}
              >
                <h2>THEFT PROTECTION</h2>

                <img src={geoicon} />
                <p>
                  Probably the smartest way to stop a thief in their tracks.
                  Literally. <br />
                  Geo-fence your bike and call the cops while they figure why
                  the bike's stopped suddenly. We took one look at the Rorr and
                  realized it will be quite a lucrative target.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-safe-hide" style={{ position: "relative" }}>
            <Swiper
         
          
              direction={"horizontal"}
              slidesPerView={1}
              spaceBetween={10}
              speed={2000}
              scrollbar={true}
              onSlideChange={(swiper) => { 
              //  console.log(swiper.activeIndex)
                setSmaleImage(false)
                setSwipeIndex(swiper.activeIndex)
               
        }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
              }}
              navigation= {{nextEl: '.swipe-btn',}}
             
              modules={[Pagination, Mousewheel]}
              onAnimationEnd={() => Swiper.mousewheel.disable()}
            >
              <SwiperSlide>
                <motion.div
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: false, amount: 0 }}
                  className="w-slide2"
                  style={{ backgroundImage: `url(${slide4img})` }}
                >
                  <motion.div
                    initial={{ y: "30vh", opacity: 0 }}
                    whileInView={{ y: "30vh", opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                  >
                    <h2>Combi-Braking</h2>
                    <h2></h2>
                    <p>
                      Your bike will not only rely on the physical brakes
                      anymore. Ride with complete confidence and superior
                      control. Test ride?
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ display: "flex" }}>
                  <motion.div
                    onWheel={() =>{
                    if(swipeIndex>0){
                      setSmaleImage(true)
                    }
                    else{
                      setSmaleImage(false)
                    }
                    }}
                    initial={{ scale: 1, width: smallImage ? "50%" : "100%" }}
                    whileInView={{ scale: 1.2 }}
                    transition={{ delay: 0.1, duration: 5 }}
                    viewport={{ once: false, amount: 0 }}
                    className="w-slide2"
                    style={{
                      backgroundImage: `url(${slide3img})`,
                      backgroundSize: smallImage ? "200% 100%" : "100% 100%",
                      backgroundPositionX: smallImage ? "70%" : "",
                      // width: smallImage ? "70%" : "100%",
                    }}
                  >
                    <motion.div
                      initial={{ y: "30vh", opacity: 0 }}
                      whileInView={{ y: "30vh", opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      viewport={{ once: false, amount: 0 }}
                    >
                      <h2>Combi-Braking</h2>
                      <h2></h2>
                      <p>
                        Your bike will not only rely on the physical brakes
                        anymore. Ride with complete confidence and superior
                        control. Test ride?
                      </p>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    transition={{ delay: 1, duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    style={{ width: smallImage ? "90%" : "0%" }}
                    className={smallImage ? "ease" : ""}
                  >
                    <div
                      className="w-leftdiv"
                      style={{
                        backgroundImage: `url(${slide5img})`,
                      }}
                    >
                      <h2>Combi-Braking </h2>
                      <h2>System (CBS)</h2>
                      <p>
                        Your bike will not only rely on the physical brakes
                        anymore. Ride with complete confidence and superior
                        control. Test ride?
                      </p>
                    </div>
                    <div
                      className="w-leftdiv"
                      style={{
                        backgroundImage: `url(${slide6img})`,
                      }}
                    >
                      <h2>MOTOR IP 67</h2>
                      <h2>ALL-WEATHER FRIENDLY</h2>
                      <sp>
                        With an IP67 rated battery pack & motor, you can sail
                        through heat waves, <br />
                        flooded streets or even the most demanding dirt roads.{" "}
                      </sp>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              className="swipe-btn"
              style={{ position: "absolute" }}
              onClick={() => {
if(swipeIndex==1)
{  setSwipeIndex(2)
}else if(swipeIndex==2){
  setSmaleImage(true)
}
              console.log(swipeIndex)
              }}
            >
              <ArrowBackIcon style={{    transform: "rotateZ(181deg)"}}/>

         
            </div>
          </div>
        </div>

        <WFooter />
      </div>
    </>
  );
}

export default WSafexpanded;