import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Home.scss";

import useSwipe from "../../components/common/UseDrag/useDrag";
// import img from "../../asset/bg2.jpg";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Topbar from "../../components/Topbar/Topbar";
import SpeedIcon from "@mui/icons-material/Speed";
import DropDown from "../../components/common/Dropdown/dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import BtteryComp from "./Battery/Battery";
import HomeComp from "./HomeComp/HomeComp";
import PerformanceComp from "./Permormance/Performance";
import Safety from "./Safety/Safety";
import Warrenty from "./Warrenty/Warrenty";
import Charging from "./Charging/Charging";
import Design from "./Design/Design";
import FullSpecification from "./FullSpecification/FullSpecificationComp";
import Pricing from "./Pricing/Pricing";
import ConnectivityComp from "./Connectivity/ConnectivityComp";
import Reliability from "./Reliability/Reliability";
import ServiceWarrenty from "./Service&Warranty/Service&Warranty";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import BottomButton from "../../components/common/CommonFooterButton/BottomButton";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  function openBookingPage() {
    navigate("/book");
  }
  const dd = localStorage.getItem("scrollIndex");
  const [stateScroll, setStateScroll] = useState("Home");

  // useEffect(() => {
  //  if(dd){
  //   setStateScroll(dd)
  //   myRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "start"
  //   })}
  // },[dd])

    useEffect(() => {
    const divId = document.getElementById(location?.state?.id);
    if (location?.state?.id) {
      divId.scrollIntoView(true);
      setStateScroll(location?.state?.id);
    }
  }, [location?.state?.id]);

  // const [state, setState] = useState("Battery");

  const optionsType = [
    "Home",
    "Battery",
    "Performance",
    "Charging",
    "Connectivity",
    "Safety",
    "Reliability",
    "Design",
    "Service & Warranty",
    "Pricing",
    "Full Specs",
  ];
  // overscroll-behavior: contain;

  const myRef = useRef(null);
  const divId = myRef.current?.id;
  const myData = window.innerHeight;


    const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = myRef.current.scrollTop;
    if (scrollTop <= 90) {
      setStateScroll("Home");
    } else if (scrollTop <= 1.5 * myData - 90) {
      setStateScroll("Battery");
    } else if (scrollTop <= 2.5 * myData - 90) {
      setStateScroll("Performance");
    } else if (scrollTop <= 3 * myData - 90) {
      setStateScroll("Charging");
    } else if (scrollTop <= 4 * myData - 90) {
      setStateScroll("Connectivity");
    } else if (scrollTop <= 5 * myData - 90) {
      setStateScroll("Safety");
    } else if (scrollTop <= 6 * myData - 90) {
      setStateScroll("Reliability");
    } else if (scrollTop <= 7 * myData - 90) {
      setStateScroll("Design");
    } else if (scrollTop <= 8 * myData - 90) {
      setStateScroll("Service & Warranty");
    } else if (scrollTop <= 9 * myData - 90) {
      setStateScroll("Pricing");
    } else if (scrollTop <= 9.5 * myData - 90) {
      setStateScroll("Full Specs");
    }
  };

  const [scrollDown, setScrollDown] = useState(true);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (scrollDown > window.scrollY) {
      } else if (scrollDown < window.scrollY) {
      }
      setScrollDown(window.scrollY);
    },
    [scrollDown]
  );

  useEffect(() => {
    setScrollDown(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  useEffect(() => {
    location?.state?.id && setStateScroll(location?.state?.id);
  }, [location?.state?.id]);



  return (
    <div
    // style={{position:"fixed"}}
    >
      <Topbar />
      <div className="home-continer">
        {/* top -----------------------------------------------*/}
        <div className="home-top">
          <div className="home-top-top">
            <div className="top-bottom-inside">
              <div 
              >
                <DropDown
                  setStateScroll={setStateScroll}
                  stateScroll={stateScroll}
                  options={optionsType}
                  // handleInput={(value) => setState(value)}
                  className="stats-select-paper "
                  // color={"#111318"}
                  // name={"Type"}
                  // width={"195px"}
                  margin={"0px 32px 0px 0"}
                  icon={<img src="/images/Type.svg" className="icon-size" />}
                />
              </div>

              {/* <label>Home</label>
                <KeyboardArrowDownIcon/> */}
            </div>
            <border className="border-Bottom"></border>
          </div>
        </div>

        {/* center--------------------------------------------- */}

        <div
         className="container"
         ref={myRef} onScroll={onScroll}>
          <HomeComp setStateScroll={setStateScroll}  scrollDown={scrollDown}/>
          <BtteryComp setStateScroll={setStateScroll} />
          <PerformanceComp setStateScroll={setStateScroll} />
          <Charging setStateScroll={setStateScroll} />
          <ConnectivityComp setStateScroll={setStateScroll} />
          <Safety setStateScroll={setStateScroll} />
          <Reliability setStateScroll={setStateScroll} />
          <Design setStateScroll={setStateScroll} />
          <Warrenty setStateScroll={setStateScroll} />          
          <Pricing setStateScroll={setStateScroll} />
          <FullSpecification setStateScroll={setStateScroll} />
          {/* ) : (
              <HomeComp/>
            )
            } */}
        </div>
        
        <BottomButton />

        
      </div>

      {/* bottom--------------------------------------------- */}

     
    </div>
  );
}
