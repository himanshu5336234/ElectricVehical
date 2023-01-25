import React from "react";
import styled from "styled-components";
import AlertImg from "../../../asset/Alert.png";

const MainDiv = styled.div``;
const Div1 = styled.div`
  background: #f88580;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubDiv1 = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 16px 0;
`;
const ImgAlert = styled.img`
  width: 18px;
  height: 14px;
`;
const Div2 = styled.div`
  margin: 24px 20px;
`;
const Heading1 = styled.p`
font-weight: 500;
font-size: 12px;
`;
const Paragraph = styled.p`
font-weight: 400;
font-size: 12px;    
`;
const Button = styled.button`
padding: 10px;
border: 1px solid;
width: 100%;
background: #fff;
margin: 20px;
`;
const ButtonDiv = styled.div`
width: 90%;
`;
const Alert = () => {
  return (
    <MainDiv>
      <Div1>
        <ImgAlert src={AlertImg} />
        <SubDiv1>ALERT!</SubDiv1>
      </Div1>
      <Div2>
        <Heading1>Dear Patron,</Heading1>
        <Paragraph>
          It has come to our notife that there are many fake websites which are
          preset online and taking fake pre-bookings and partial booking amount
          in the name of Oben Electric.
        </Paragraph>
      </Div2>
<ButtonDiv>
   <Button>GOT IT</Button>
   </ButtonDiv>   
 </MainDiv>
  );
};

export default Alert;
