import React, { useState,useEffect } from "react";
import "./WBlogs.css";
import Pagination1 from "../../../../Assets/Blogs/Pagination1.jpg";
import ArrowLeft from "../../../../Assets/Blogs/ArrowLeft.svg";
import User1 from "../../../../Assets/Blogs/User1.png";
import User2 from "../../../../Assets/Blogs/User2.png";
import WFooter from "../../../../Components/Footer/WFooter";
import WNavbar from "../../../../Components/Navbar/WNavbar";
import TrendingBlogs from "./TrendingData";
import WComponentNavbar from "../../../../Components/Navbar/WComponentNavbar";
import axios from "axios";
const WBlogs = () => {
  const [tabs, setTabs] = useState(0);

  const [blogData,setBlogsData] =useState([])

  function handleChange(index,category){
    setTabs(index)
    apiServices(category)
  
  }
  useEffect(()=>{
    apiServices()
  },[])
  function apiServices( category )  {

    axios.post( 'https://api.obenev.com/get-blogs', { category } )

      .then( res => setBlogsData(res.data.data))
      ;

  };



  return (
    <>
      <WComponentNavbar />
      <div className="blog-header">
        <div>
          <span>Top blogs for you</span>
        </div>
        <div>
          <div style={{ cursor: "pointer" }}>
            <span
              style={{ cursor: "pointer" }}
              className={tabs === 0 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(0,"Trending")}
            >
              TRENDING
            </span>
            <span
              className={tabs === 1 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(1,"Performance")}
            >
              PERFORMANCE
            </span>
            <span
              className={tabs === 2 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(2,"Charging")}
            >
              CHARGING
            </span>
            <span
              className={tabs === 3 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(3,"Battery")}
            >
              BATTERY
            </span>
            <span
              className={tabs === 4 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(4,"design")}
            >
              DESIGN
            </span>
            <span
              className={tabs === 5 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(5,"Tech")}
            >
              TECH
            </span>
            <span
              className={tabs === 6 ? "active-blog" : "unactive-tab"}
              onClick={() => handleChange(6,"News")}
            >
              NEWS
            </span>
          </div>
          <div></div>
        </div>
      </div>
      { <TrendingBlogs blogData={blogData} />}
      <WFooter />
    </>
  );
};
export default WBlogs;
