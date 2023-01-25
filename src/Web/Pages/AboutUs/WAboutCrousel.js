import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./WAbout.scss";
import img1 from "../../Assets/AboutUs/DesktopAboutUsInHouseDesign.jpg";
import img2 from "../../../asset/AboutUS/aboutus_second_carousel.png";
import img3 from "../../../asset/AboutUS/InHouseEngineeringDesktop.png";
import img4 from "../../Assets/AboutUs/DesktopAboutUsInHouseTesting.jpg";
const data = [
  {
    src: img1,
    title: "IN HOUSE",
    heading: "DESIGN",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec.",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.",
  },
  {
    src: img2,
    title: "IN HOUSE",
    heading: "DEVELOPMENT",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec.",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.",
  },
  {
    src: img3,
    title: "IN HOUSE",
    heading: "ENGINEERING",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec.",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.",
  },
  {
    src: img4,
    title: "IN HOUSE",
    heading: "EV TESTING",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec.",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.",
  },
];
function CarouselBox(props) {
  return (
    <>
      <div
        className="about_crousel"
        style={{
          backgroundImage: `url(${props.src})`,
        }}
      >
        <p className="about_title">{props.title}</p>
        <p className="about_heading">{props.heading}</p>
        <p className="about_content">{props.content1}</p>
        <p className="about_content">{props.content2}</p>
      </div>
    </>
  );
}
function WAboutCrousel() {
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
    swipe: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "about_bar",
  };
  return (
    <>
      <div className="about_us_crousel" ref={parentRef}>
        <Slider {...settings} ref={sliderRef}>
          {data?.map((ele) => {
            return (
              <CarouselBox
                src={ele.src}
                title={ele.title}
                heading={ele.heading}
                content1={ele.content1}
                content2={ele.content2}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
export default WAboutCrousel;
