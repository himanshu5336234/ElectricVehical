import React, { useState } from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "./AboutFirst.scss"
import img1 from "../../asset/AboutUS/1stImg.png"
import img2 from "../../asset/AboutUS/2ndImg.png"
import img3 from "../../asset/AboutUS/3rdImg.png"
import img4 from "../../asset/AboutUS/4thImg.png"
import useSwipe from "../../components/common/UseDrag/useDrag";
const AboutUsWrapper = styled.div`
width: 100vw;
height: 160vh;
display: flex;
flex-direction: column;
`;
const AboutUsFirst = styled.div`
height: 55vh;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
`;
const Video=styled.div`
width: 80%;
padding-top: 30px;
`;

const AboutUsSecond = styled.div`
height: 105vh;
`;

const Heading = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 32px;
padding: 35px 0 16px 0;
color:#fff;
`;
const Description = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #fff;
width: 80%;
`;
export default function AboutFirst() {
  const [stateScroll,setStateScroll]=useState(0)
  const bind = useSwipe({
    onLeft: () => stateScroll < 8 && setStateScroll(stateScroll + 1),
    onRight: () => stateScroll >=1 && setStateScroll(stateScroll - 1),
  });


  return (
    <AboutUsWrapper>

      <AboutUsFirst>
        <Video>

        <video
          style={{ width: "100%", position: "relative" }}
          initial={{ y: "20vh" }}
          whileInView={{ y: "0" }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          autoplay="autoplay"
          data-permitted-user="true"
          data-resource-title="homepage_trimed.mp4"
          data-resource-uuid="71c69365-117b-433c-895a-a1e263ff6278"
          loop="loop"
          muted="muted"
          playsinline="playsinline"
          poster="https://resources.finalsite.net/videos/v1633615320/gwaacma/csaupatukzl5dcxmav84/homepage_trimed.jpg"
        >
          <source
            src="https://resources.finalsite.net/videos/t_video_mp4_480/v1633615320/gwaacma/csaupatukzl5dcxmav84/homepage_trimed.mp4"
            type="video/mp4"
          />
        </video>

        </Video>
        <Heading>
        How it all started
        </Heading>

        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.
        </Description>
        
      </AboutUsFirst>

      <AboutUsSecond>

        <div onScroll={e => e.stopPropagation()} className="img-container" {...bind()}>
         {stateScroll===0 && 
         <div className="img-wrapper">
          <img src={img1}/>
          <div className="img-desc">
            <h3>IN HOUSE DESIGN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.</p>
          </div>
          </div> }

          {stateScroll===1 && <motion.div 
          initial={{width:"100%"}}
          className="img-wrapper">
          <img 
          src={img2}/>
          <div className="img-desc">
            <h3>IN HOUSE DESIGN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.</p>
          </div>
          </motion.div> }
          {stateScroll===2 && <motion.div 
          initial={{width:"100%"}}
          className="img-wrapper">
          <img 
          src={img3}/>
          <div className="img-desc">
            <h3>IN HOUSE DESIGN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.</p>
          </div>
          </motion.div> }
          {stateScroll===3 && <motion.div 
          initial={{width:"100%"}}
          className="img-wrapper">
          <img 
          src={img4}/>
          <div className="img-desc">
            <h3>IN HOUSE DESIGN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.</p>
          </div>
          </motion.div> }
        </div>
        
      </AboutUsSecond>

    </AboutUsWrapper>
  );
}
