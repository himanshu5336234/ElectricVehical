import React, { useEffect, useRef, useState } from "react";
import "./WService.scss";
import { motion } from "framer-motion";
const WarrentyMainImg = require("../../Assets/Service/ServiceExpanded/POM.jpg");
const dummyData = [
  {
    id: 1,
    heading: "Battery Warranty",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus aenean donec iaculis fringilla magnis.",
  },
  {
    id: 2,
    heading: "Motor Warranty",
    title:
      "Velit vitae, massa urna lacus velit sollicitudin eget amet. Metus in cursus amet elit. Lectus faucibus felis odio a lorem.",
  },
  {
    id: 3,
    heading: "Road Assistance",
    title:
      "Ornare volutpat nulla curabitur blandit donec ullamcorper nunc sem. Quis ultricies mattis diam eget scelerisque. ",
  },
];

function WService() {
  const scrollRef = useRef();
  const [isScrolling, setIsScrolling] = useState(false);

  const [isSliderOneVisible, setIsSliderOneVisible] = useState(false);
  const [isSliderTwoVisible, setIsSliderTwoVisible] = useState(false);
  const [isSliderThreeVisible, setIsSliderThreeVisible] = useState(false);

  const [activeHeading, setActiveHeading] = useState("");
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    if (isSliderOneVisible) {
      setActiveHeading(dummyData[0].heading);
      setActiveTitle(dummyData[0].title);
    }
    if (isSliderTwoVisible) {
      setActiveHeading(dummyData[1].heading);
      setActiveTitle(dummyData[1].title);
    }
    if (isSliderTwoVisible) {
      setActiveHeading(dummyData[2].heading);
      setActiveTitle(dummyData[2].title);
    }
  });

  useEffect(() => {
    const callbackOne = (entries) => {
      let value = entries[0];
      setIsScrolling(!value.isIntersecting);
      console.log("scrolling", value.isIntersecting);
    };
    const sliderOne = (entries) => {
      let value = entries[0];
      setIsSliderOneVisible(!value.isIntersecting);
      console.log("one", value.isIntersecting);
    };
    const sliderTwo = (entries) => {
      let value = entries[0];
      setIsSliderTwoVisible(!value.isIntersecting);
      console.log("two", value.isIntersecting);
    };
    const sliderThree = (entries) => {
      let value = entries[0];
      setIsSliderThreeVisible(!value.isIntersecting);
      console.log("three", value.isIntersecting);
    };
    const observer = new IntersectionObserver(callbackOne);
    // const observers1= new IntersectionObserver(sliderOne)
    // const observers2= new IntersectionObserver(sliderTwo)
    // const observers3= new IntersectionObserver(sliderThree)

    observer.observe(scrollRef.current);
    // observers1.observe(imgRefOne.current)
    // observers2.observe(imgRefTwo.current)
    // observers3.observe(imgRefThree.current)
  }, []);
  return (
    <>
      <div className="w-service">
        <div className="w-warrenty-wrapper">
          <motion.div
            animate={{
              width: isScrolling ? "180vw" : "180vw",
              height: isScrolling ? "70vh" : "70vh",
            }}
            transition={{ duration: 1 }}
            className="w-war-img-container"
          >
            <motion.img
              // animate={{width:isScrolling?"100%":"50%"}}
              // transition={{duration:1}}
              src={WarrentyMainImg}
              className="w-war-img"
            />
            <div className="w-scrollCheck" ref={scrollRef}></div>
          </motion.div>

          <motion.div
            animate={{ y: isScrolling ? "-40vh" : "0vh" }}
            transition={{ duration: 1 }}
            className={
              isScrolling ? "w-animate-war-on-img-info" : "w-war-on-img-info"
            }
          >
            <motion.h1
              animate={{ fontSize: isScrolling ? "30px" : "40px" }}
              transition={{ duration: 1 }}
            >
              PEACE
              <br /> OF <br /> MIND
            </motion.h1>
            <motion.p
              animate={{ fontSize: isScrolling ? "16px" : "20px" }}
              transition={{ duration: 1 }}
            >
              It keeps you on the rider's seat
            </motion.p>
          </motion.div>

          <motion.div
            animate={{ y: isScrolling ? "5vh" : "40vh" }}
            transition={{ duration: 1 }}
            className="w-war-out-img-info"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              <br /> pellentesque malesuada tincidunt diam ultrices donec vitae
              duis. Ac
              <br /> quam habitant cursus nibh amet amet, laoreet.
            </p>
          </motion.div>

          {/* <div className="war-slider-container">

          <div className="war-img-slider">
          <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={5}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sliderImg1} ref={imgRefOne} className="img-slider"/> </SwiperSlide>
        <SwiperSlide><img src={sliderImg2} ref={imgRefTwo} className="img-slider"/> </SwiperSlide>
        <SwiperSlide><img src={sliderImg3} ref={imgRefThree} className="img-slider"/> </SwiperSlide>
       
      </Swiper>
            
            </div>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:false,amount:1}}
          transition={{duration:1}}
          className="war-slider-info">
            <span className="war-slider-year">3 YEARS</span>
            <h3 className="war-slider-heading">{activeHeading}</h3>
            <p className="war-slider-desc">{activeTitle}</p>
          </motion.div>

           </div> */}
        </div>
      </div>
    </>
  );
}

export default WService;
