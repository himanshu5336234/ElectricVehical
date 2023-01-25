import AccordionDetails from "@mui/material/AccordionDetails";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import styled from "styled-components";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

const MainDiv = styled.div`
  // style={{ margin: "0 20px", padding: "14px 0px", width: "90%" }}
  margin: 0 20px;
  padding: 5px 0px;
  width: 90%;
  position: relative;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
  margin-bottom: 10px;
`;
const SubPayDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SubPayP = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubPayP2 = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
const Para = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #787e8c;
`;
const P1 = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-align: center;
`;
const Span = styled.span`
  // border-top: 1px solid #000;
  // opacity: 0.05
`;
export default function ControlledAccordions({ BikePricingInfo }) {
  //dummy testride data-----------------
  const data = {
    heading1: "Ex-showroom price",
    price1: "₹137,499",
    heading2: "FAME II Incentive",
    price2: "₹6,000",
    heading3: "State Subsidy",
    price3: "-₹43,500",
    heading4: "Effective Price",
    price4: "₹99,000",
    heading5:
      "  Exclusive of Insurance, Road tax & Registration charges. All prices are inclusive of G.S.T.",
  };

  const data1 = {
    heading1: "Ex-showroom price",
    price1: "₹137,499",
    heading2: "FAME II Incentive",
    price2: "₹6,000",
    heading4: "Effective Price",
    price4: "₹99,000",
    heading5:
      "  Exclusive of Insurance, Road tax & Registration charges. All prices are inclusive of G.S.T.",
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = (event) => {
      setIsReadMore(!isReadMore);
    };
    return (
      <P1 className="text">
        {isReadMore ? text.slice(0, 0) : text}
        <Span onClick={toggleReadMore} className="">
          {isReadMore ? "+ See price break-up" : " - Hide price break-up"}
        </Span>
      </P1>
    );
  };

  return (
    <>
      <MainDiv>
        <Border></Border>
        <ReadMore>
          <AccordionDetails>
            {BikePricingInfo?.stateSubsidy ? (
              <PayDiv>
                <SubPayDiv>
                  <SubPayP>{data?.heading1}</SubPayP>
                  <SubPayP2>₹ {parseInt(BikePricingInfo?.showroomPrice)?.toLocaleString('en-IN')}</SubPayP2>
                </SubPayDiv>

                <SubPayDiv>
                  <SubPayP>
                    {data?.heading2}

                    <Tooltip
                      enterTouchDelay={0}
                      title="FAME II (Faster Adoption and Manufacturing of Hybrid and Electric Vehicles- Phase II) is the subsidy provided by central government of India on the purchase of an electric vehicle"
                      arrow
                    >
                      <InfoOutlinedIcon style={{ opacity: 0.5, width:"13px",height:"13px",paddingLeft:"2px" }} />
                    </Tooltip>
                  </SubPayP>
                  <SubPayP2>₹ {parseInt(BikePricingInfo?.Incentive).toLocaleString('en-IN')}</SubPayP2>
                  {/* {isIncentiveOpen && <img src={mesz2} style={{position:"absolute",top:"-15vh",left:"85px" }}/>}  */}
                </SubPayDiv>
                <SubPayDiv>
                  <SubPayP>
                    {data?.heading3}
                    <Tooltip
                      enterTouchDelay={0}
                      title="The state subsidy is different for every state and it changes every quarter based on the state budget. You need to keep a tab and claim it on your own by submitting the relevant documents."
                      arrow
                    >
                      <InfoOutlinedIcon style={{ opacity: 0.5,width:"13px",height:"13px",paddingLeft:"2px" }} />
                    </Tooltip>
                  </SubPayP>
                  <SubPayP2 style={{ color: "#02B17B" }}>
                  ₹ {parseInt(BikePricingInfo?.stateSubsidy).toLocaleString('en-IN')}
                  </SubPayP2>
                  {/* {isSubsidyOpen && <img src={mesz1} style={{position:"absolute",top:"-8vh",left:"65px" }}/>} */}
                </SubPayDiv>
                <SubPayDiv>
                  <SubPayP>{data?.heading4}</SubPayP>
                  <SubPayP2>
                  ₹ {parseInt(~~BikePricingInfo?.showroomPrice -
                      (~~BikePricingInfo?.Incentive +
                        ~~BikePricingInfo?.stateSubsidy)).toLocaleString("en-IN")}
                  </SubPayP2>
                </SubPayDiv>
              </PayDiv>
            ) : (
              <PayDiv>
                <SubPayDiv>
                  <SubPayP>{data1?.heading1}</SubPayP>
                  <SubPayP2>{BikePricingInfo?.showroomPrice}</SubPayP2>
                </SubPayDiv>

                <SubPayDiv>
                  <SubPayP>
                    {data1?.heading2}
                    <InfoOutlinedIcon
                    //  style={{opacity:0.5}} onClick={checking}
                    />
                  </SubPayP>
                  <SubPayP2>{BikePricingInfo?.Incentive}</SubPayP2>
                  {/* {isIncentiveOpen && <img src={mesz2} style={{position:"absolute",top:"-15vh",left:"85px" }}/>}  */}
                </SubPayDiv>

                {/* <SubPayDiv>
                  <SubPayP>{data1?.heading3} <InfoOutlinedIcon style={{opacity:0.5}} onClick={()=>{setSubsidyOpen(!isSubsidyOpen)}}/> </SubPayP> 
                    <SubPayP2 style={{ color: "#02B17B" }}>{BikePricingInfo?.stateSubsidy}</SubPayP2>
                    {isSubsidyOpen && <img src={mesz1} style={{position:"absolute",top:"-8vh",left:"65px" }}/>}
                    </SubPayDiv> */}
                <SubPayDiv>
                  <SubPayP>{data?.heading4}</SubPayP>
                  <SubPayP2>
                    {Number(BikePricingInfo?.showroomPrice) -
                      Number(BikePricingInfo?.Incentive)}
                  </SubPayP2>
                </SubPayDiv>
              </PayDiv>
            )}
            <Para>{data?.heading5}</Para>
          </AccordionDetails>
          <Border></Border>
        </ReadMore>
      </MainDiv>
    </>
  );
}
