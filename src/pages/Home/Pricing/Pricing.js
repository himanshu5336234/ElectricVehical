import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ImgBike from "../../../asset/Ex showroom price image1.png";
import Accordian from "./Accordian";
import Image from "../../../asset/charger.jpg";
import Image1 from "../../../asset/RSA mobile.jpg";
import Image2 from "../../../asset/3 years mobile.jpg";
import Image3 from "../../../asset/pricing_motor_mobile.jpg";
import AccordianCalculate from "./AccordianCalculate";
import { useNavigate } from "react-router-dom";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import { publicRequest } from "../../../ServiceRequest";
const MainDiv = styled.div`
  overflow-y: scroll;
  background: #f3f3f3;
  overflow-y: scroll;
  /* height: calc(100vh - 60px); */
  /* padding: 20px; */
`;
const Div1 = styled.div`
  background: #fff;
  margin: 20px 20px 0 20px;
`;
const Select = styled.select`
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 16px;
  color: #DA1731;
  font-weight: 700;
  background-color: #fff !important;
`;
const Border = styled.div`
  background: #f5f5f5;
  height: 2px;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading1 = styled.p`
  margin: 10px 10px 10px;
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
width:100%;
  /* margin-bottom: 40px; */
`;
const Img = styled.img`
  width: 184px;
  // padding-left: 4px;
`;
const DivScroll = styled.div`
  margin: 10px 0px 0px;
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
`;
const Para2 = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
const ScrollDiv = styled.div`
  align-items: flex-start;
  /* margin: 0 0 10px; */
  padding-right: 5px;
  display: flex;
  flex-direction: column;
`;
const Border2 = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: 15px;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0 0 0;
`;
const ParentScroll = styled.div`
  width: 90%;
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
 const priceData = 123456;
  return (
    <MainDiv
      id="Pricing"
      className="tiktok"
      style={{ height: "81vh", overflowY: "scroll" }}
    >
      <Div1>
        {/* <Border></Border> */}
        <Div2>
          <Heading1>
            {dummy?.heading1}

            <Select
              value={citySelected}
              onChange={(e) => setCitySelected(e.target.value)}
            >
              {options}
            </Select>
          </Heading1>
          <Heading2>₹ {parseInt(~~BikePricingInfo?.showroomPrice -
                      (~~BikePricingInfo?.Incentive +
                        ~~BikePricingInfo?.stateSubsidy)).toLocaleString("en-IN")}</Heading2>
          <Img1 src={ImgBike} />
          {/* <Border></Border> */}
        </Div2>

        <Accordian BikePricingInfo={BikePricingInfo} />
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
                <Para1>ON-BOARD CHARGER</Para1>
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
                <Img src={Image3} />
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
      {/* <Border2></Border2> */}

      <div style={{ marginBottom: "15%" }}>
        <AccordianCalculate BikePricingInfo={BikePricingInfo} />
      </div>
      {/* <button
          className="btnTestDrive"
          onClick={() => navigate(`/book`)}
        >
          BOOK TEST RIDE
        </button> */}
    </MainDiv>
  );
};

export default Pricing;
