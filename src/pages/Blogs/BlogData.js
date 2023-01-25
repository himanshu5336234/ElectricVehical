import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Heading = styled.div`
  margin: 32px 0 16px 20px;
  font-weight: 500;
  font-size: 14px;
`;
const TrenDiv = styled.div`
  background: #ffffff;
  margin: 0 20px;
`;
const TrenImg = styled.img`
    width: 100%;

`;
const TrenHeading = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 20px 0px 16px 20px;
`;
const BorderCard = styled.div`
  border: 1px solid #111318;
  opacity: 0.05;
`;
const DateHeading = styled.div`
  font-weight: 400;
  font-size: 12px;
`;
const TimeHeading = styled(DateHeading)``;
const ParentDiv = styled.div`
  display: flex;
  padding: 0 20px;
  width: 35%;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const DivBy = styled.div`
  display: flex;
  padding: 13px 0 13px 20px;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #000;
  padding-right: 3px;
`;
const Span1 = styled(Span)`
  color: #000;
`;
const DivByName = styled.div`
  padding-left: 8px;
  display: flex;
  font-weight: 400;
  font-size: 12px;
`;
const ImgProfile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
const blogData = {
  
    id: "1",
    heading: "TRENDING",
    bottomHeading: "Smart EV home charging: Dynamic load balancing explained",
    date: "July 06",
    time: "5 min read",
    name: "Anand",
    bannerImg:
      "https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253__340.jpg",
    profileImg:
      "https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_960_720.jpg",
  
}


export default function BlogData({blogData}) {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/article/?blog_id=${blogData._id}`)}>
      <Heading>{blogData.category}</Heading>
      <TrenDiv>
        <TrenImg
          src={blogData.src}
          onClick={() => navigate(`/article`)}
        />
        <TrenHeading
         onClick={() => navigate(`/article`)}
        >{blogData.title}</TrenHeading>
        <ParentDiv>
          <DateHeading>{new Date(blogData.date).toDateString()}</DateHeading>
          {/* <TimeHeading>{blogData.time}</TimeHeading> */}
        </ParentDiv>
        <BorderCard></BorderCard>
        <DivBy>
          <ImgProfile src={blogData.profileImg} />
          <DivByName>
            <Span>BY</Span>
            <Span1> {blogData.name}</Span1>
          </DivByName>
        </DivBy>
      </TrenDiv>
    </div>
  )
}
