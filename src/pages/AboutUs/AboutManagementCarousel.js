import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../src/asset/AboutUS/person1.jpg";
import img2 from "../../../src/asset/AboutUS/person2.jpg";
import img3 from "../../../src/asset/AboutUS/person3.jpg";
import "./ProfileAnimation/BoardPersonOne.scss";
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
function AboutManagementCarousel() {
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
        </Slider>
      </div>
    </>
  );
}
export default AboutManagementCarousel;
