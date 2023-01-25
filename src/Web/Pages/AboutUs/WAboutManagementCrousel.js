import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../asset/AboutUS/Madhumita.png";
import img2 from "../../../asset/AboutUS/Dinkar.png";
import img3 from "../../../asset/AboutUS/Jatin.png";
import img4 from "../../../asset/AboutUS/aboutus_fourth_carousel.png";
import "./WAbout.scss";
const data = [
  {
    src: img1,
    name: "Madhumita Agarwal",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
  {
    src: img2,
    name: "Dinkar Agarwal",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
  {
    src: img3,
    name: "Jatin Sharma",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
  {
    src: img4,
    name: "Jatin Sharma",
    designation: "Founder and CEO",
    description:
      "The word “Oben” (German for  “Top” ), inspires our design ethos, and is behind our focus on unleashing EVs at the conflux of design and performance that elevate the game for 2-wheelers in India.",
  },
];
function CarouselBox(props) {
  return (
    <>
      <div style={{ width: "80%" }}>
        <img src={props.src} style={{ height: "250px", width: "340px" }} />
        <p className="management_carousel_name">{props.name}</p>
        <p className="management_carousel_designation">{props.designation}</p>
        <p className="management_carousel_description">{props.description}</p>
      </div>
    </>
  );
}
function WAboutManagementCrousel() {
  const sliderRef = useRef();
  const parentRef = useRef(null);
  useEffect(() => {
    if (!parentRef.current) {
      return;
    }
    parentRef?.current.addEventListener("wheel", (e) => handleScroll(e));
  }, [parentRef]);
  const handleScroll = (e) => {
    if (e.deltaX < 0) {
      sliderRef && sliderRef.current.slickPrev();
    } else if (e.deltaX > 0) {
      sliderRef && sliderRef.current.slickNext();
    }
  };
  const settings = {
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div ref={parentRef}>
        <Slider {...settings} ref={sliderRef}>
          {data?.map((ele) => {
            return (
              <CarouselBox
                src={ele.src}
                name={ele.name}
                designation={ele.designation}
                description={ele.description}
              />
            );
          })}
          {/* </div> */}
        </Slider>
      </div>
    </>
  );
}
export default WAboutManagementCrousel;
