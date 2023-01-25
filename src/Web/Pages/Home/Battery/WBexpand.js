//     const observeOne = new IntersectionObserver(callbackOne);

//     observeOne.observe(refPositionBikeImage.current);

//     const callbackTwo = (entries) => {
//       const value = entries[0];
//       setfirst(value.isIntersecting);
//     };

//     const observeTwo = new IntersectionObserver(callbackTwo);

//     observeTwo.observe(refPositionBikeImage.current);
//   }, []);
//   return (
//     <>
//       <WNavbar />
//       <div>
//         {" "}
//         <div id="main" className="main gray-txt center-txt">
//           <div
//             onClick={() => {
//               navigate(-1);
//             }}
//           >
//             <BackButton />
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: first == true ? "40vh" : "0vh" }}
//             whileInView={{
//               opacity: 1,
//               y: first == true ? "25vh" : "-120vh",
//             }}
//             viewport={{ once: false, amount: 0 }}
//             transition={{ delay: 0.2, duration: 2, type: "spring" }}
//           >
//             <div className="portfolioDisc">
//               <h2>Charge Anywhere</h2>

//               <h4>Seriously, it's that easy!</h4>
//             </div>
//           </motion.div>
//           <div className=" red" ref={refPositionBikeImage}></div>
//           <div className="bikeImage">
//             <motion.img
//               src={bike1}
//               initial={{ opacity: 0, y: first == true ? "40vh" : "0vh" }}
//               whileInView={{
//                 opacity: 1,
//                 y: first == true ? "20vh" : "-120vh",
//               }}
//               viewport={{ once: false, amount: 0 }}
//               transition={{
//                 delay: first == true ? 0.2 : 0.5,
//                 duration: 2,
//                 type: "spring",
//               }}
//             />
//             <motion.img
//               src={bike2}
//               initial={{ opacity: 0, y: first == true ? "0vh" : "0vh" }}
//               whileInView={{
//                 opacity: 1,
//                 y: first == true ? "20vh" : "-120vh",
//               }}
//               viewport={{ once: false, amount: 0 }}
//               transition={{
//                 delay: first == true ? 0.3 : 0.4,
//                 duration: 2,
//                 type: "spring",
//               }}
//             />
//             <motion.img
//               src={bike3}
//               initial={{ opacity: 0, y: first == true ? "30vh" : "-20vh" }}
//               whileInView={{
//                 opacity: 1,
//                 y: first == true ? "20vh" : "-120vh",
//               }}
//               viewport={{ once: false, amount: 0 }}
//               transition={{
//                 delay: first == true ? 0.4 : 0.3,
//                 duration: 2,
//                 type: "spring",
//               }}
//             />
//             <motion.img
//               src={bike4}
//               initial={{ opacity: 0, y: first == true ? "40vh" : "0vh" }}
//               whileInView={{
//                 opacity: 1,
//                 y: first == true ? "20vh" : "-120vh",
//               }}
//               viewport={{ once: false, amount: 0 }}
//               transition={{
//                 delay: first == true ? 0.5 : 0.2,
//                 duration: 2,
//                 type: "spring",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ opacity: 1, y: first == true ? "0vh" : "-40vh" }}
//         whileInView={{ opacity: 1, y: first == true ? "40vh" : "-80vh" }}
//         viewport={{ once: false, amount: 0 }}
//         transition={{ delay: 0.2, duration: 2, type: "spring" }}
//       >
//         <div

//           direction={"vertical"}
//           style={{ height: "100vh" }}
//           speed={1000}
//           slidesPerView={1}
//           spaceBetween={10}
//           mousewheel={{ releaseOnEdges: true }}
//           grabCursor={true}
//           modules={[Mousewheel]}
//         >
//           <SwiperSlide>
//             <div className="chargeAnywhere">
//               <div>
//                 <div style={{ padding: "50px" }}>
//                   <h2
//                     style={{
//                       fontSize: "40px",
//                       fontWeight: "700",
//                       lineHeight: "64px",
//                       color: "#787E8C",
//                     }}
//                   >
//                     Charge Anywhere
//                   </h2>
//                   <h2
//                     style={{
//                       fontSize: "64px",
//                       fontWeight: "800",
//                       lineHeight: "77px",
//                     }}
//                   >
//                     15Amp
//                   </h2>
//                   <h2
//                     style={{
//                       fontSize: "64px",
//                       fontWeight: "800",
//                       lineHeight: "77px",
//                     }}
//                   >
//                     (3 pin) socket
//                   </h2>
//                   <motion.p
//                     initial={{ opacity: 1, y: "23vh" }}
//                     whileInView={{ opacity: 1, y: "10vh" }}
//                     viewport={{ once: false, amount: 0 }}
//                     transition={{ delay: 0.2, duration: 2, type: "spring" }}
//                     style={{
//                       marginTop: "24px",
//                       fontSize: "24px",
//                       fontWeight: " 400",
//                       lineHeight: "38px",
//                       color: "#787E8C",
//                     }}
//                   >
//                     Our innovative charger helps you charge via any domestic
//                     15Amp socket available at home, cafes, Dhaba, charging
//                     stations, petrol pumps, anywhere everywhere.
//                   </motion.p>
//                 </div>
//                 <motion.div
//                   initial={{ opacity: 0, x: "20vw" }}
//                   whileInView={{ opacity: 1, x: "0vw" }}
//                   viewport={{ once: false, amount: 0 }}
//                   transition={{ delay: 0.5, duration: 2, type: "spring" }}
//                 >
//                   {" "}
//                   <img style={{ width: "600px" }} src={Plug} />
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
// <div id="chargeEasy">
//   <div>
//     <div>
//       <h2
//         style={{
//           color: "#787E8C",
//           fontSize: "91px",
//           fontWeight: 700,
//           lineHeight: "100px",
//         }}
//       >
//         Charging was
//       </h2>
//       <h2
//         style={{
//           color: "#787E8C",
//           fontSize: "91px",
//           fontWeight: 700,
//         }}
//       >
//         never
//       </h2>
//       <h2
//         style={{
//           color: "#787E8C",
//           fontSize: "91px",
//           fontWeight: 700,
//           lineHeight: "100px",
//           letterSpacing: "-0.03em",
//         }}
//       >
//         this easy
//       </h2>
//     </div>
//     <motion.div>
//       <img src={chargingPlug} />
//     </motion.div>
//   </div>
// </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="chargeAnywhere">
//               <div>
//                 <motion.div
//                   initial={{ opacity: 0, x: "-20vw" }}
//                   whileInView={{ opacity: 1, x: "0vw" }}
//                   viewport={{ once: false, amount: 0 }}
//                   transition={{ delay: 0.5, duration: 2, type: "spring" }}
//                 >
//                   {" "}
//                   <img style={{ width: "600px" }} src={Meter} />
//                 </motion.div>
//                 <div style={{ padding: "50px" }}>
//                   <h2
//                     style={{
//                       fontSize: "40px",
//                       fontWeight: "700",
//                       lineHeight: "64px",
//                       color: "#787E8C",
//                     }}
//                   >
//                     Charge time
//                   </h2>
//                   <h2
//                     style={{
//                       fontSize: "64px",
//                       fontWeight: "800",
//                       lineHeight: "77px",
//                     }}
//                   >
//                     2Hrs to Full
//                   </h2>
//                   <h2
//                     style={{
//                       fontSize: "64px",
//                       fontWeight: "800",
//                       lineHeight: "77px",
//                     }}
//                   >
//                     charge
//                   </h2>
//                   <motion.p
//                     initial={{ opacity: 1, y: "23vh" }}
//                     whileInView={{ opacity: 1, y: "10vh" }}
//                     viewport={{ once: false, amount: 0 }}
//                     transition={{ delay: 0.2, duration: 2, type: "spring" }}
//                     style={{
//                       marginTop: "24px",
//                       fontSize: "24px",
//                       fontWeight: " 400",
//                       lineHeight: "38px",
//                       color: "#787E8C",
//                     }}
//                   >
//                     Our innovative charging mechanism provides the fastest
//                     charging (New name - Faazz charge) that helps you charge at
//                     less than a min / km anywhere with full charge in 2 hours
//                   </motion.p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </div>
//       </motion.div>
//
//     </>
//   );
// };
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import "./WBexpand.scss";
import { motion } from "framer-motion";
import bike1 from "../../../Assets/battery/1.svg";
import bike2 from "../../../Assets/battery/2.svg";
import bike3 from "../../../Assets/battery/3.svg";
import bike4 from "../../../Assets/battery/4.svg";
import Plug from "../../../Assets/battery/Plug.svg";
import WFooter from "../../../Components/Footer/WFooter";
import chargingPlug from "../../../Assets/battery/chargingPlug.png";
import Meter from "../../../Assets/battery/DesktopFazzCharge.gif";
import WNavbar from "../../../Components/Navbar/WNavbar";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/BackButton/BackButton";
export const WBexpand = () => {
  let refPositionBikeImage = useRef();
  const navigate = useNavigate();
  const [first, setfirst] = useState(true);
  useEffect(() => {
    const callbackOne = (entries) => {
      const value = entries[0];
      setfirst(value.isIntersecting);
    };
    const observeOne = new IntersectionObserver(callbackOne);
    observeOne.observe(refPositionBikeImage.current);
  }, []);
  return (
    <div>
      <WNavbar />
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>
      <div id="main" className="gray-txt center-txt">
        <div className="portfolioDisc">
          <div className=" red" ref={refPositionBikeImage}></div>
          <h2>ON-BOARD CHARGER</h2>

          <h4>
            Instant plug-and-charge. Freedom from carrying bulky chargers on a
            daily commute.
          </h4>
        </div>
      </div>

      <div className="bikeImage">
          <motion.img
            className="bikeimage-inner-container-img"
            src={bike1}
            initial={{ opacity: 0, y: first == true ? "0vh" : "0vh" }}
            whileInView={{
              opacity: 1,
              y: first == true ? "50vh" : "-120vh",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{
              delay: first == true ? 0.2 : 0.5,
              duration: 2,
              type: "spring",
            }}
          />
        
          <motion.img
            src={bike2}
            initial={{ opacity: 0, y: first == true ? "0vh" : "0vh" }}
            whileInView={{
              opacity: 1,
              y: first == true ? "50vh" : "-120vh",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{
              delay: first == true ? 0.3 : 0.4,
              duration: 2,
              type: "spring",
            }}
          />
        
          <motion.img
            src={bike3}
            initial={{ opacity: 0, y: first == true ? "0vh" : "0vh" }}
            whileInView={{
              opacity: 1,
              y: first == true ? "50vh" : "-120vh",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{
              delay: first == true ? 0.4 : 0.3,
              duration: 2,
              type: "spring",
            }}
          />
          <motion.img
            src={bike4}
            initial={{ opacity: 0, y: first == true ? "0vh" : "0vh" }}
            whileInView={{
              opacity: 1,
              y: first == true ? "50vh" : "-120vh",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{
              delay: first == true ? 0.5 : 0.2,
              duration: 2,
              type: "spring",
            }}
          />
      </div>

      <motion.div
        initial={{ opacity: 0, y: first == true ? "40vh" : "30vh" }}
        whileInView={{ opacity: 1, y: first == true ? "120vh" : "-20vh" }}
        viewport={{ once: false, amount: 0 }}
        transition={{ delay: 0.2, duration: 5, type: "spring" }}
        className="chargeAnywhere"
      >
        <div style={{ overflowX: "hidden" }}>
          <div style={{ padding: "50px" }}>
            <h2
              className="animate-reveal animate-first"
              style={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "64px",
                color: "#111318",
              }}
            >
              ANYWHERE CHARGING
            </h2>

            <motion.p
              initial={{ opacity: 1, y: "23vh" }}
              whileInView={{ opacity: 1, y: "10vh" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.2, duration: 2, type: "spring" }}
              style={{
                fontSize: "24px",
                fontWeight: " 400",
                lineHeight: "38px",
                color: "#111318",
                opacity: "0.7",
              }}
            >
              Free yourself of range anxiety with the innovative 15A 3-Pin
              socket that allows you to charge at home, cafes, the highway
              dhaba, even at petrol pumps. Oh, the irony
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: -1, x: "20vw" }}
            whileInView={{ opacity: 1, x: "2.5vw" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 1, duration: 5, type: "spring" }}
          >
            {" "}
            <img style={{ width: "600px", height: "600px" }} src={Plug} />
          </motion.div>
        </div>
      </motion.div>
      <div id="chargeEasy">
        <div style={{ padding: " 0px 50px 50px 50px" }}>
          <div>
            <h2
              style={{
                color: "#787E8C",
                fontSize: "91px",
                fontWeight: 700,
                lineHeight: "100px",
              }}
            >
              CHARGING WAS
            </h2>
            <h2
              style={{
                color: "#787E8C",
                fontSize: "91px",
                fontWeight: 700,
              }}
            >
              NEVER
            </h2>
            <h2
              style={{
                color: "#787E8C",
                fontSize: "91px",
                fontWeight: 700,
                lineHeight: "100px",
                letterSpacing: "-0.03em",
              }}
            >
              THIS EASY
            </h2>
          </div>
          <motion.div
            initial={{ opacity: -1, y: "50vh" }}
            whileInView={{ opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 1, duration: 2, type: "spring" }}
          >
            <img style={{ height: "440px" }} src={chargingPlug} />
          </motion.div>
        </div>
      </div>
      <div className="chargeAnywhere">
        <div
          style={{ paddingTop: "50px", overflowX: "hidden", height: "100vh" }}
        >
          <motion.div
            initial={{ opacity: 0, x: "-20vw" }}
            whileInView={{ opacity: 1, x: "0vw" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 2, type: "spring" }}
          >
            {" "}
            <img style={{ width: "600px" }} src={Meter} />
          </motion.div>
          <div style={{ padding: "50px" }}>
            {" "}
            {/* <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "64px",
                color: "#787E8C",
              }}
            >
              Charge time
            </h2> */}
            <h2
              style={{
                fontSize: "64px",
                fontWeight: "800",
                lineHeight: "77px",
                color: "#111318",
              }}
            >
              FAAZZ CHARGE
            </h2>
            {/* <h2
              style={{
                fontSize: "64px",
                fontWeight: "800",
                lineHeight: "77px",
              }}
            >
              charge
            </h2> */}
            <motion.p
              initial={{ opacity: 1, y: "23vh" }}
              whileInView={{ opacity: 1, y: "10vh" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.2, duration: 2, type: "spring" }}
              style={{
                fontSize: "24px",
                fontWeight: " 400",
                lineHeight: "38px",
                color: "#111318",
                opacity: "0.7",
              }}
            >
              Rorr’s game-changing charging mechanism gets you to a full charge
              in just 2 hours. That’s less than a minute per km. That’s faster
              than most smartphones.
            </motion.p>
          </div>
        </div>
      </div>

      <WFooter />
    </div>
  );
};
