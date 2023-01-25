import React, { useCallback, useEffect, useRef, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.scss";
import img from "../../asset/bg8.jpg";
import BgImage from "../../components/BgImage/BgImage";
import SliderImage from "../../components/SliderImage/SliderImage";
import CompanyBoardPeople from "../../components/CompanyBoardPeople/CompanyBoardPeople";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ceo from "../../asset/person1.jpg";
import cto from "../../asset/person2.jpg";
import pm from "../../asset/person3.jpeg";
import icon from "../../asset/arrowtopright.png";
import Loading from "../../components/Loading/Loading";
import useSwipe from "../../components/common/UseDrag/useDrag";
import BoardPersonOne from "./ProfileAnimation/BoardPersonOne";
import BoardPersonTwo from "./ProfileAnimation/BoardPersonTwo";
import BoardPersonThree from "./ProfileAnimation/BoardPersonThree";
import img1 from "../../asset/AboutUS/MobileAboutUsInHouseDesign.jpg";
import img2 from "../../asset/AboutUS/2ndImg.png";
import img4 from "../../asset/AboutUS/MobileAboutUsInHouseTesting.jpg";
import img3 from "../../asset/AboutUS/InHouseEngineeringMobile.png";
import ObenEvTeam from "../../asset/AboutUS/ObenEvTeam.png";
import rightArrow from "../../asset/AboutUS/rightArrow.png";
import AboutUsVideo from "../../Web/Assets/AboutUs/AboutUsVideo.mp4";
import Careers from "../Careers/Careers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../../src/asset/AboutUS/person1.jpg";
import Img2 from "../../../src/asset/AboutUS/person2.jpg";
import Img3 from "../../../src/asset/AboutUS/person3.jpg";
import AboutManagementCarousel from "./AboutManagementCarousel";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ProfileAnimation/BoardPersonOne.scss";
// const profile = [
//   {
//     id: 1,
//     img: ceo,
//     name: "Madhumita Agrawal",
//     jobProfile: "Founder and CEO",
//     qoute:
//       "“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”",
//   },
//   {
//     id: 2,
//     img: cto,
//     name: "Dinkar Agrawal",
//     jobProfile: "Founder and CTO",
//     qoute:
//       "“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”",
//   },
//   {
//     id: 3,
//     img: pm,
//     name: "Anderson Jhoshep",
//     jobProfile: "Project Manager",
//     qoute:
//       "“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”",
//   },
// ];
const data = [
  {
    src: Img1,
    name: "Madhumita Agarwal",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
  {
    src: Img2,
    name: "Dinkar Agarwal",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
  {
    src: Img3,
    name: "Jatin Sharma",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
];
function CarouselBox(props) {
  return (
    <>
      <div className="board-profile">
        <img className="profile-image" src={props.src} />
        <h3>{props.name}</h3>
        <span>{props.designation}</span>
        <hr />
        <p className="leader-qoute">{props.description}</p>
      </div>
    </>
  );
}
function AboutUs() {
  const [horizontalScroll, setHorizontalScroll] = useState(0);
  const [verticalScroll, setVerticalScroll] = useState(0);
  const observer = useRef();
  const [swiperNumber, setSwiperNumber] = useState(0);
  const scrollElem = useCallback(
    (node) => {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // document.getElementsByClassName("about-three")[0].scrollIntoView();
          }
        },
        {
          threshold: 0.5,
        }
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [document.getElementsByClassName("about-three")]
  );
  const bindOne = useSwipe({
    onLeft: () =>
      horizontalScroll < 3 && setHorizontalScroll(horizontalScroll + 1),
    onRight: () =>
      horizontalScroll >= 1 && setHorizontalScroll(horizontalScroll - 1),
  });

  const bindTwo = useSwipe({
    onUp: () => verticalScroll < 2 && setVerticalScroll(verticalScroll + 1),
    onDown: () => verticalScroll >= 1 && setVerticalScroll(verticalScroll - 1),
  });
  // console.log(horizontalScroll)
  //  let arrowDirection = horizontalScroll<3 ? "https://assets10.lottiefiles.com/packages/lf20_oofmmhkt.json":"https://assets7.lottiefiles.com/packages/lf20_tuwojxyr.json"
  //  console.log(arrowDirection)
  return (
    <>
      <div style={{ position: "fixed", top: "0px", zIndex: "200" }}>
        <Topbar />
      </div>
      <div className="about-container">
        <div className="about-one">
          <div className="one-top">
            <video
              style={{ width: "100%", position: "relative" }}
              initial={{ y: "20vh" }}
              whileInView={{ y: "0" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              autoplay="autoplay"
              controls
              // data-permitted-user="true"
              // // data-resource-title="homepage_trimed.mp4"
              // data-resource-uuid="71c69365-117b-433c-895a-a1e263ff6278"
              // loop="loop"
              // muted="muted"
              // playsinline="playsinline"
              // poster="https://resources.finalsite.net/videos/v1633615320/gwaacma/csaupatukzl5dcxmav84/homepage_trimed.jpg"
            >
              <source src={AboutUsVideo} type="video/mp4" />
            </video>
          </div>
          <div className="one-bottom">
            <h3 className="one-heading">HOW IT ALL STARTED</h3>
            <p className="one-description">
              Oben Electric was founded for a fresh new take on what 2-wheelers
              ought to be in the 21st Century. Less engine, more engineering.
            </p>
          </div>
        </div>

        <div className="about-two" {...bindOne()}>
          {horizontalScroll < 3 ? (
            <motion.img
              animate={{ rotate: -90 }}
              transition={{ duration: 1, delay: 1 }}
              className="right-arrow"
              src={rightArrow}
            />
          ) : (
            <motion.img
              animate={{ rotate: 90 }}
              transition={{ duration: 1, delay: 1 }}
              className="right-arrow"
              src={rightArrow}
            />
          )}

          {horizontalScroll === 0 && (
            <motion.div
              initial={{ width: "90%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="img-wrapper"
            >
              <img src={img1} />
              <div className="img-desc">
                <motion.h3
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 0.8 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="fadded-h3"
                >
                  IN HOUSE{" "}
                </motion.h3>
                <motion.h3
                  initial={{ x: "50vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="normal-h3"
                >
                  DESIGN
                </motion.h3>
                <motion.div
                  initial={{ y: "5vw", opacity: 0 }}
                  whileInView={{ y: "0vw", opacity: 1 }}
                  viewport={{ once: false, amount: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis. Lacus, velit luctus sapien
                    eros, sed nec ut.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
          {horizontalScroll === 1 && (
            <div className="img-wrapper">
              <img src={img2} />
              <div className="img-desc">
                <motion.h3
                  initial={{ x: "-10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 0.8 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="fadded-h3"
                >
                  IN HOUSE{" "}
                </motion.h3>
                <motion.h3
                  initial={{ x: "10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="normal-h3"
                >
                  DEVELOPMENT
                </motion.h3>
                <motion.div
                  initial={{ y: "20vw", opacity: 0 }}
                  whileInView={{ y: "0vw", opacity: 1 }}
                  viewport={{ once: false, amount: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis. Lacus, velit luctus sapien
                    eros, sed nec ut.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
          {horizontalScroll === 2 && (
            <div className="img-wrapper">
              <img src={img3} />
              <div className="img-desc">
                <motion.h3
                  initial={{ x: "-10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 0.8 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="fadded-h3"
                >
                  IN HOUSE{" "}
                </motion.h3>
                <motion.h3
                  initial={{ x: "10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="normal-h3"
                >
                  ENGINEERING
                </motion.h3>
                <motion.div
                  initial={{ y: "20vw", opacity: 0 }}
                  whileInView={{ y: "0vw", opacity: 1 }}
                  viewport={{ once: false, amount: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis. Lacus, velit luctus sapien
                    eros, sed nec ut.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
          {horizontalScroll === 3 && (
            <div className="img-wrapper">
              <img src={img4} />
              <div className="img-desc">
                <motion.h3
                  initial={{ x: "-10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 0.8 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="fadded-h3"
                >
                  IN HOUSE{" "}
                </motion.h3>
                <motion.h3
                  initial={{ x: "10vw", opacity: 0 }}
                  whileInView={{ x: "0vw", opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="normal-h3"
                >
                  EV TESTING
                </motion.h3>
                <motion.div
                  initial={{ y: "20vw", opacity: 0 }}
                  whileInView={{ y: "0vw", opacity: 1 }}
                  viewport={{ once: false, amount: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis. Lacus, velit luctus sapien
                    eros, sed nec ut.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus ut diam feugiat mattis.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </div>

        {/* <div
          className="about-three"
          {...bindTwo()}
          style={{ display: horizontalScroll >= 0 ? "" : "none" }}
        >
          {verticalScroll === 0 && <BoardPersonOne />}
          {verticalScroll === 1 && <BoardPersonTwo />}
          {verticalScroll === 2 && <BoardPersonThree />}
        </div> */}
        <div className="about-three" ref={scrollElem}>
          <div className="top-label">
            <img src={ObenEvTeam} />
          </div>
          <Swiper
            direction={"horizontal"}
            pagination={false}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              thresholdTime: 500,
            }}
            onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
            keyboard={true}
            slidesPerView={1}
            modules={[Pagination, Mousewheel, Keyboard, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="board-profile-about">
              <div className="profile-container">
                <AnimatePresence>
                  <motion.img
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.1,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}

                    className="profile-image"
                    src={Img1}
                  />
                </AnimatePresence>
                <motion.h3
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Madhumita Agarwal
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Founder and CEO
                </motion.span>
                <hr />
                <motion.p
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="leader-qoute"
                >
                  The word “Oben” (German for “Top” ), inspires our design
                  ethos, and is behind our focus on unleashing EVs at the
                  conflux of design and performance that elevate the game for
                  2-wheelers in India.
                </motion.p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="board-profile-about">
              <div className="profile-container">
                <AnimatePresence>
                  <motion.img
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.1,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    className="profile-image"
                    src={Img2}
                  />
                </AnimatePresence>
                <motion.h3
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Dinkar Agarwal
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Founder and CEO
                </motion.span>
                <hr />
                <motion.p
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="leader-qoute"
                >
                  The word “Oben” (German for “Top” ), inspires our design
                  ethos, and is behind our focus on unleashing EVs at the
                  conflux of design and performance that elevate the game for
                  2-wheelers in India.
                </motion.p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="board-profile-about">
              <div className="profile-container">
                <AnimatePresence>
                  <motion.img
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.1,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    className="profile-image"
                    src={Img3}
                  />
                </AnimatePresence>
                <motion.h3
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Jatin Sharma
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Founder and CEO
                </motion.span>
                <hr />
                <motion.p
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="leader-qoute"
                >
                  The word “Oben” (German for “Top” ), inspires our design
                  ethos, and is behind our focus on unleashing EVs at the
                  conflux of design and performance that elevate the game for
                  2-wheelers in India.
                </motion.p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="about-three" ref={observer} >
          <div className="board-profile-about">
            {" "}
            <div className="profile-container">
              <div className="top-label">
                <img src={ObenEvTeam} />
              </div>
              <img className="profile-image" src={Img1} />
              <h3>Madhumita Agarwal</h3>
              <span>Founder and CEO</span>
              <hr />
              <p className="leader-qoute">
                The word “Oben” (German for “Top” ), inspires our design ethos,
                and is behind our focus on unleashing EVs at the conflux of
                design and performance that elevate the game for 2-wheelers in
                India.
              </p>
            </div>
          </div>
          <div className="board-profile-about">
            <div className="profile-container">
              <div className="top-label">
                <img src={ObenEvTeam} />
              </div>
              <img className="profile-image" src={Img2} />
              <h3>Dinkar Agarwal</h3>
              <span>Founder and CEO</span>
              <hr />
              <p className="leader-qoute">
                The word “Oben” (German for “Top” ), inspires our design ethos,
                and is behind our focus on unleashing EVs at the conflux of
                design and performance that elevate the game for 2-wheelers in
                India.
              </p>
            </div>
          </div>
          <div className="board-profile-about">
            <div className="profile-container">
              <div className="top-label">
                <img src={ObenEvTeam} />
              </div>
              <img className="profile-image" src={Img3} />
              <h3>Jatin Sharma</h3>
              <span>Founder and CEO</span>
              <hr />
              <p className="leader-qoute">
                The word “Oben” (German for “Top” ), inspires our design ethos,
                and is behind our focus on unleashing EVs at the conflux of
                design and performance that elevate the game for 2-wheelers in
                India.
              </p>
            </div>
          </div>
        </div> */}
        <div
          className="about-four"
          // style={{
          //   display:
          //     verticalScroll === 2 && horizontalScroll >= 0 ? "" : "none",
          // }}
        >
          <Careers />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
