import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ImgBike from "../../../../asset/Ex showroom price image1.png";
import Accordian from "./AccordianW";
import Image from "../../../../asset/charger.jpg";
import Image1 from "../../../../asset/RSA mobile.jpg";
import Image2 from "../../../../asset/3 years mobile.jpg";
import Image3 from "../../../../asset/pricing_motor_desktop.jpg";
import AccordianCalculate from "./AccordianCalc";
import { useNavigate } from "react-router-dom";
// import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import { publicRequest } from "../../../../ServiceRequest";
import WNavbar from "../../../Components/Navbar/WNavbar";
import BackButton from "../../../Components/BackButton/BackButton";

const MainDiv = styled.div`
  max-width: 1040px;
  overflow-y: scroll;
  /* background: #f3f3f3; */
  padding-top: 13vh;
  margin: auto;
`;
const Div1 = styled.div`
  background: #fff;
  /* margin: 0px 20px 0 20px; */
`;
const Select = styled.select`
  border: none;
  outline: none;
  color: #DA1731;
  /* padding-left: 15px; */
  font-size: 18px;
  font-weight: 500;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
  /* margin-bottom: 32px; */
`;
const Div2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading1 = styled.p`
  padding: 10px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
const Heading2 = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 0px;
`;
const Img1 = styled.img`
  width: 100%;
  /* margin-bottom: 40px; */
`;
const Img = styled.img`
  width: 230px;
  // padding-left: 4px;
`;
const DivScroll = styled.div`
  padding: 0px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;
const Td = styled.td`
  padding: 0 8px;
  font-weight: 500;
  font-size: 13px;
`;
const Para1 = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 4px;
`;
const Para2 = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
const ScrollDiv = styled.div`
  align-items: flex-start;
  /* margin: 0 0 10px; */
  padding-right: 24px;
  display: flex;
  flex-direction: column;
`;
const Border2 = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 10px;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0;
`;
const ParentScroll = styled.div`
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const dummy = {
  heading1: "Ex-showroom price",
  price1: "₹99,999INR",
  heading2: "The Rorring Package",
};
const options = ["Pune", "Delhi", "Maharastra"];

const availableCity = [
  { text: "Pune" },
  { text: "Bangalore" },
  { text: "Delhi" },
  { text: "Gurgaon" },
  { text: "Goa" },
];

const Pricing = ({}) => {
  const navigate = useNavigate();
  const ref = useRef();
  const [BikePricingInfo, setBikePricingInfo] = useState({});
  const [citySelected, setCitySelected] = useState("Pune");

  //api call to get all the data for pricing
  useEffect(() => {
    let fetchPricing = async () => {
      try {
        const res = await publicRequest.post("/user/calculate-pricing", {
          city: citySelected,
        });
        setBikePricingInfo(res.data.data);
      } catch (err) {
        alert(`data for ${citySelected} not created`);
      }
    };

    fetchPricing();
  }, [citySelected]);

  const options = availableCity.map((option) => {
    return <option value={option.text}>{option.text}</option>;
  });

  return (
    <div>
      <WNavbar />
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <BackButton />
      </div>
      <MainDiv>
        <Div1>
          {/* <Border></Border> */}
          <Heading1>
            <Select
              value={citySelected}
              onChange={(e) => setCitySelected(e.target.value)}
            >
              {options}
            </Select>
          </Heading1>
          <Border></Border>
          <div style={{ display: "flex",padding:"10px 0" }}>
            <Div2>
              
              <Img1 src={ImgBike} />
              <Heading1 style={{ padding: "0" }}>{dummy?.heading1}</Heading1>
              <Heading2> ₹ {parseInt(~~BikePricingInfo?.showroomPrice -
                      (~~BikePricingInfo?.Incentive +
                        ~~BikePricingInfo?.stateSubsidy)).toLocaleString("en-IN")} INR</Heading2>
              {/* <Border></Border> */}
            </Div2>
            <Accordian BikePricingInfo={BikePricingInfo} />
          </div>
          <Border2></Border2>
          <ParentScroll>
            <div>
              <P>{dummy?.heading2}</P>
            </div>
            <div
            //  style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}
            >
              <DivScroll class="container">
                {/* <table> */}
                {/* <tbody> */}
                {/* <tr style={{ display: "flex" }}> */}
                <ScrollDiv>
                  <Img src={Image} />
                  <Para1>ON BOARD CHARGER</Para1>
                  <Para2>with 3 years warranty</Para2>
                </ScrollDiv>
                <ScrollDiv>
                  <Img src={Image1} />
                  <Para1>3 years</Para1>
                  <Para2>Road Side Assistance</Para2>
                </ScrollDiv>
                <ScrollDiv>
                  <Img src={Image2} />
                  <Para1>3 years</Para1>
                  <Para2>Free Service</Para2>
                </ScrollDiv>
                <ScrollDiv>
                  <Img src={Image3}  style={{width:"230px",height:"220px"}}/>
                  <Para1>3 years</Para1>
                  <Para2>or 60k km Battery Warranty</Para2>
                </ScrollDiv>
                {/* </tr> */}
                {/* </tbody> */}
                {/* </table> */}
              </DivScroll>
            </div>
          </ParentScroll>
        </Div1>
        <Border2></Border2>
        <div>
          <AccordianCalculate BikePricingInfo={BikePricingInfo} />
        </div>
      </MainDiv>
    </div>
  );
};

export default Pricing;
