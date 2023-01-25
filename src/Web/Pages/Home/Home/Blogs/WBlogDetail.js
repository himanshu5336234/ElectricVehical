import React, { useEffect, useState } from "react";
import WNavbar from "../../../../Components/Navbar/WNavbar";
import "./WBlogDetail.css";
import WFooter from "../../../../Components/Footer/WFooter";
import Pagination1 from "../../../../Assets/Blogs/Pagination1.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import RecommededImg from "../../../../Assets/Blogs/RecommededImg.jpg";
import User1 from "../../../../Assets/Blogs/User1.png";
import axios from "axios";
import { useParams } from "react-router-dom";
const BlogDetail = () =>
{
  const [ blogData, setBlogsData ] = useState( {} );
  const { blog_id } = useParams();

  useEffect( () =>
  {
    apiServices( blog_id );
  }, [] );


  function apiServices ( id )
  {
    axios
      .post( "https://api.obenev.com/get-blogs-details", { blog_id: id } )

      .then( ( res ) => setBlogsData( res.data.data ) );

  }

  return (
    <>
      <WNavbar />
      <div className="blog-detail-img">
        <img src={ Pagination1 }></img>
      </div>
      <div className="blog-detail-content">
        <div className="blog-detail-inner-content-container">
          <div className="blog-detail-content-left">
            <span>
              { blogData?.title }
            </span>

            <div className="blog-detail-content-left-bottom-scroll">
              <div>
                <div></div>
                <div className="blog-user-detail-content-row-timeline">
                  <div>
                    <div>
                      <img src={ Pagination1 }></img>
                    </div>
                    <span>BY</span>
                    <span>obenev</span>
                  </div>
                  <div></div>
                  <span>{ new Date( blogData.date ).toDateString() }</span>
                  <div></div>
                  <span>15 mins read</span>
                </div>
                <div></div>
              </div>

              {/* ------------------- BLOG DETAIL ------------- */ }
              <div className="blog-user-detail-content-bottom-section">
                <div>
                  <img src={ Pagination1 }></img>
                </div>
                <div>
                  <span>
                    For many industries, public infrastructure does not always
                    initially keep up with the private sector; however, the
                    electric vehicle charging station industry hopes to disrupt
                    this notion. Although early EV owners frequently had to rely
                    on their own power, or install level 2 chargers in their
                    homes, already the public charging infrastructure has
                    rapidly caught up to the needs of EV drivers. As of late
                    2021, there were over 43,000 public charging stations in the
                    United States alone! Read on to learn about the differences
                    between public and private EV charging as well as the
                    importance of both.
                  </span>
                </div>
                <div></div>
                <div>
                  <span>Private EV Charging Stations</span>
                </div>
                <div>
                  <span>
                    While private EV charging initially sounds like it’s limited
                    to private residences, private charging is actually a rather
                    expansive network. Private EV charging is any station that
                    is not accessible by the general public. While the line can
                    sometimes get blurry, if offices, multifamily properties
                    multi-unit dwellings or other businesses limit their
                    charging access to only residents/employees that use the
                    buildings, then the charging is still considered private.
                  </span>
                </div>
                <div></div>
                <div>
                  <span>Private Charging Pros</span>
                </div>
                <div>
                  <span>
                    So why would a complex or business potentially limit revenue
                    by restricting charging access? While some companies use it
                    as a perk, there is also a practical reason for these
                    limitations: Many buildings were not designed with EV
                    charging demands in mind. While this is also a con, limiting
                    charging to private use means there will be less competition
                    for the available power. Additionally, less use often means
                    less wear and tear, leading to less overall maintenance for
                    charging stations. And just like private charging in the
                    home, private charging means station operators have full
                    knowledge of who is using their chargers. Finally, drivers
                    who have access to private charging often spend less on
                    charging than those without.{ " " }
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-detail-content-right">
            <div className="blog-detail-content-right-upper">
              <div className="blog-detail-content-right-upper-icon">
                <FacebookOutlinedIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <LinkIcon fontSize="large" />
              </div>
            </div>
            <div className="blog-detail-content-right-down">
              <span>Recommended Blogs</span>
              <div className="blog-detail-content-right-down-row">
                <div>
                  <img src={ RecommededImg } />
                </div>
                <span>
                  What Is Vehicle-to-Grid Technology and How Does It Work?
                </span>
              </div>
              <div className="blog-detail-content-right-down-row">
                <div>
                  <img src={ RecommededImg } />
                </div>
                <span>
                  What Is Vehicle-to-Grid Technology and How Does It Work?
                </span>
              </div>
              <div className="blog-detail-content-right-down-row">
                <div>
                  <img src={ RecommededImg } />
                </div>
                <span>
                  What Is Vehicle-to-Grid Technology and How Does It Work?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WFooter />
    </>
  );
};

export default BlogDetail;
