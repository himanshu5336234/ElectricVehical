import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TrendingImg from "../../asset/Trending.png";


const BannerImg = styled.img`
width: 100%;
margin: 40px 0 5px 0;
`;
const BannerHeading = styled.div`
font-weight: 400;
font-size: 14px;
padding-left:20px;
`;
const ParentBanner = styled.div`
margin: 0 20px;
background:#fff;
`;
const Paragraph = styled.p`
padding:20px;
font-weight: 600;
font-size: 16px;
`;
const DateDiv = styled.div`
display: flex;
padding: 20px;
width: 40%;
justify-content: space-between;

`;
export default function PressData({PressData}) {
const Navigate =useNavigate()
  return (
    <div onClick={()=>Navigate(`/pressArticle/?press_id=${PressData._id}`)}>
      <ParentBanner>
<BannerImg src={TrendingImg}/>
<BannerHeading>{PressData.category}</BannerHeading>
<Paragraph>{PressData.title}</Paragraph>
<DateDiv>
  <div>{new Date(PressData.date).toDateString()}</div>

</DateDiv>
</ParentBanner> 
    </div>
  )
}
