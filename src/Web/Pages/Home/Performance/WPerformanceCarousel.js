import React, { useEffect, useRef } from "react";
import Zip from "../../../Assets/LandingPage/DesktopZip.jpg";
import Zap from "../../../Assets/LandingPage/DesktopZap.jpg";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Zoom from "../../../Assets/LandingPage/DesktopZoom.jpg";
import Flood from "../../../Assets/LandingPage/DesktopFlood.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WPerformance.scss";
const data = [
  {
    src: Zip,
    // title: "Acceleration",
    heading: "ZIP",
    content: "Acceleration from 0-40 in 3 seconds",
  },
  {
    src: Zap,
    // title: "Top speed",
    heading: "ZAP",
    content: "100 kmph Top Speed",
  },
  {
    src: Zoom,
    // title: "Waterproof",
    heading: "ZOOM",
    content:
      "Heavy Duty 10kW motor with proprietary IPMSM tech means more miles without heating & 330Nm Torque",
  },
  {
    src: Flood,
    // title: "Single Stage",
    heading: "FLOOD FIGHTER",
    content: "IP65 rating means easy rides through flood conditions.",
  },
];
function CarouselBox(props) {
  return (
    <>
      <div>
        <img
          src={props.src}
          style={{ height: "311px", width: "450px", margin: "auto" }}
        />
        <div style={{ width: "450px", margin: "auto" }}>
          <p className="carousel_title">{props.title}</p>
          <p className="carousel_heading">{props.heading}</p>
          <p className="carousel_content">{props.content}</p>
        </div>
      </div>
    </>
  );
}
function WPerformanceCarousel() {
  const sliderRef = useRef();
  const parentRef = useRef(null);
  useEffect(() => {
    if (!parentRef.current) {
      return;
    }
    parentRef?.current.addEventListener("wheel", (e) => handleScroll(e));

    //  return () => {
    //    parentRef?.current.removeEventListener("wheel", (e) => handleScroll(e));
    //  };
  }, [parentRef]);
  const handleScroll = (e) => {
    if (e.deltaX < 0) {
      sliderRef && sliderRef.current.slickPrev();
    } else if (e.deltaX > 0) {
      sliderRef && sliderRef.current.slickNext();
    }
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    // autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "button__bar",
  };

  return (
    <>
      <div ref={parentRef}>
        <Slider {...settings} ref={sliderRef}>
          <>
            <div>
              <div style={{ width: "450px", margin: "auto" }}>
                <p className="carousel_title">{}</p>
                <p className="carousel_heading">{}</p>
                <p className="carousel_content">{}</p>
              </div>
            </div>
          </>
          {data?.map((ele) => {
            return (
              <CarouselBox
                src={ele.src}
                title={ele.title}
                heading={ele.heading}
                content={ele.content}
              />
            );
          })}
          <>
            <div>
              <div style={{ width: "450px", margin: "auto" }}>
                <p className="carousel_title">{}</p>
                <p className="carousel_heading">{}</p>
                <p className="carousel_content">{}</p>
              </div>
            </div>
          </>
          {/* </div> */}
        </Slider>
      </div>
    </>
  );
}
export default WPerformanceCarousel;
