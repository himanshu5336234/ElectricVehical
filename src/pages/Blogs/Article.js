import React,{useState,useEffect} from "react";
import styled from "styled-components";
import TrendingImg from "../../asset/Trending.png";
import FaceBookImg from "../../asset/faceBook.png";
import TwitterImg from "../../asset/Twitter.png";
import LinkDlnImg from "../../asset/Linkdln.png";
import FileImg from "../../asset/File.png";
import ProfileImg from "../../asset/ProfileImg.png";
import RecBlogImg from "../../asset/RecBlogs.png";
import { useSearchParams } from "react-router-dom";
import axios from "axios"; 
import Pagination1 from "../../Web/Assets/Blogs/Pagination1.jpg";

const MainDiv = styled.div`
  background: #f5f5f5;
`;
const ImgTrending = styled.img`
  width: 100%;
`;
const Div = styled.div`
  margin: 21px 20px;
  display: flex;
  justify-content: space-between;
`;
const Div2 = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
`;
const SubDiv2 = styled.div``;
const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
`;
const Div4 = styled.div`
  margin: 40px 24px 19px;
`;
const SubDiv4 = styled.div`
  font-weight: 700;
  font-size: 26px;
`;
const DivBy = styled.div`
  display: flex;
  padding: 13px 0 13px 0px;
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #f5f5f5;
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
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 40px;
`;
const Div5 = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 40px 24px;
`;
const SubDiv5 = styled.div``;
const ImgRec = styled.img`
  width: 72px;
  height: 64px;
`;
const Div6 = styled.div`
display:flex;
margin-top:32px;
`;
const SubDiv6B = styled.div`
margin-left:16px;   
font-weight: 500;
font-size: 14px;
`;
const SpanRec = styled.span`
font-weight: 400;
font-size: 12px;
`;
const data = {
  recImg:
    "https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_960_720.jpg",
  heading: "What Is Vehicle-to-Grid Tech and How Does It Work?",
  date: "July 06",
  time: "5 min read",
};

const Article = () => {
const [searchParams] = useSearchParams()
  const [blogDetailsData, setBlogsData] = useState({});
 const blog_id =searchParams.get("blog_id")

  useEffect(() => {
    apiServices(blog_id);
  }, []);


  function apiServices(id) {
   
    axios
      .post("https://api.obenev.com/get-blogs-details", { blog_id: id })

      .then((res) => setBlogsData(res.data.data))


    
  }


  return (
    <>
      <MainDiv>
        <div>
          <ImgTrending src={Pagination1} />
        </div>
        <Div>
          <Div2>
            <SubDiv2>{new Date(blogDetailsData.date).toDateString()}</SubDiv2>
            <SubDiv2>5 min read</SubDiv2>
          </Div2>
          <Div3>
            <img src={FaceBookImg} />
            <img src={TwitterImg} />
            <img src={LinkDlnImg} />
            <img src={FileImg} />
          </Div3>
        </Div>
        <Border></Border>
        <Div4>
          <SubDiv4>
           {blogDetailsData.title}
          </SubDiv4>
          <DivBy>
            <img src={ProfileImg} />
            <DivByName>
              <Span>BY</Span>
              <Span1> AMANDA</Span1>
            </DivByName>
          </DivBy>
          <Paragraph>
          {blogDetailsData.content}
          </Paragraph>
        </Div4>
      </MainDiv>
      <Div5>
        <SubDiv5>Recommended blogs</SubDiv5>
        <Div6>
          <div>
            <ImgRec src={data.recImg} />
          </div>
          <SubDiv6B>
            {data.heading}
            <div>
            <SpanRec> {data.date}</SpanRec>
            <SpanRec> {data.time}</SpanRec>
            </div>
          </SubDiv6B>
        </Div6>
      </Div5>
    </>
  );
};

export default Article;
