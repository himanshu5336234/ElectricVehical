import React, { useRef, useState } from "react";
import "./WNavbar.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import logo from "../../Assets/navbar/oben-logo.png";
import WSideMenu from "../SideMenu/WSideMenu";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { WindowSharp } from "@mui/icons-material";
const headers = [
  "HOME",
  "BATTERY",
  "PERFORMANCE",
  "CHARGING",
  "CONNECTIVITY",
  "SAFETY",
  "RELIABILITY",
  "DESIGN",
  "SERVICE & WARRANTY",
  "PRICING",
  "FULL SPECS",
];
function WNavbar({ swiper, activeIndex }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);
  const sliderRef = useRef();
  const handleOnClick = (index) => {
    sliderRef?.current?.slickGoTo(index);
  };
  const handleHamburger = () => {
    setOpenSidebar((prev) => !prev);
  };
  const NextArrow = ({ onClick }) => {
    return (
      <div className="nextArrow" onClick={onClick}>
        <BsChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="prevArrow" onClick={onClick}>
        <BsChevronLeft />
      </div>
    );
  };
  useEffect(() => {
    // if (activeIndex !== 0 && activeIndex % 4 === 0) {
    //   document.querySelector(".nextArrow").click();
    // }
  }, [activeIndex]);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 1000,
    // focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  useEffect(() => {
    handleOnClick(activeIndex);
  }, [activeIndex]);
  return (
    <>
      <div className="w-navbar">
        <div className="oben-logo">
          <a href="/">
            <img src={logo} style={{ cursor: "pointer" }} />
          </a>
        </div>
        {location.pathname == "/" && (
          <div style={{ maxWidth: "650px", marginTop: "16px" }}>
            <Slider {...settings} ref={sliderRef}>
              {headers.map((ele, i) => {
                return (
                  <div
                    className={`headers ${
                      activeIndex == i ? "activeHeader" : "not-activeHeader"
                    }`}
                    onClick={() => {
                      {
                        ele == "PRICING"
                          ? navigate("/pricing")
                          : ele == "FULL SPECS"
                          ? navigate("/fullSpecs")
                          : swiper?.slideTo(i);
                      }
                    }}
                  >
                    {ele}
                  </div>
                );
              })}
            </Slider>
          </div>
        )}

        <div className="hamburgar-menu">
          <Button
            variant="outlined"
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "140%",
              color: "#FFFFFF",
              padding: "6px 12px",
              borderColor: "#fff",
              position: "relative",
              right: "0px",
            }}
            onClick={() => {
              navigate("/Booking");
            }}
            className="test_btn"
          >
            <span>TEST THE RORR </span>
          </Button>
          {!openSidebar ? (
            <MenuSharpIcon
              className="hamburger-icon"
              onClick={handleHamburger}
            />
          ) : (
            <CloseIcon
              style={{ color: "white", scale: "1.5", cursor: "pointer" }}
              onClick={handleHamburger}
            />
          )}
        </div>
      </div>
      <WSideMenu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
}

export default WNavbar;
