import React from 'react'
import './WBlogs.css';
import Pagination1 from '../../../../Assets/Blogs/Pagination1.jpg'
import ArrowLeft from '../../../../Assets/Blogs/ArrowLeft.svg'
import User1 from '../../../../Assets/Blogs/User1.png'
import User2 from '../../../../Assets/Blogs/User2.png'
import WFooter from '../../../../Components/Footer/WFooter';
import WNavbar from '../../../../Components/Navbar/WNavbar';

const WTrendingBlog = () =>{
    return(
        <>
        {/* <WNavbar/> */}
        {/* <div className='blog-header'>
            <div><span>Top blogs for you</span></div>
            <div>
                <div>
                    <span>TRENDING</span>
                    <span>PERFORMANCE</span>
                    <span>CHARGING</span>
                    <span>BATTERY</span>
                    <span>DESIGN</span>
                    <span>TECH</span>
                    <span>NEWS</span>
                </div>
                <div></div>
            </div>
        </div> */}
        <div className='pagination-container'>
            <div className='pagination-row'>
                <div className='pagination-img-section'>
                    <img src={Pagination1}></img>
                </div>
                <div className='pagination-content-section'>
                        <div className='pagination-inner-content-section'>
                            <div>
                                <span>Jun 28,2022</span>
                                <div></div>
                                <span>Corporate</span>
                            </div>
                            <div>
                                <span>EV Charging Accessibility:
                                     Public vs. Private Charging
                                      Stations</span>
                            </div>
                            <div>
                                <div className='char-img-section'>
                                    <div>
                                        <div><img src={User1}></img></div>
                                        <div><img src={User2}></img></div>
                                    </div>
                                    <div>
                                        <span>BY AMANDA</span>
                                    </div>
                                </div>
                                <div className='read-more-section'>
                                    <div><span>Read More</span></div>
                                    <div><img src={ArrowLeft}></img></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='pagination-row'>
            <div className='pagination-img-section'>
                    <img src={Pagination1}></img>
                </div>
                <div className='pagination-content-section'>
                        <div className='pagination-inner-content-section'>
                            <div>
                                <span>Jun 28,2022</span>
                                <div></div>
                                <span>Corporate</span>
                            </div>
                            <div>
                                <span>EV Charging Accessibility:
                                     Public vs. Private Charging
                                      Stations</span>
                            </div>
                            <div>
                                <div className='char-img-section'>
                                    <div>
                                        <div><img src={User1}></img></div>
                                        <div><img src={User2}></img></div>
                                    </div>
                                    <div>
                                        <span>BY AMANDA</span>
                                    </div>
                                </div>
                                <div className='read-more-section'>
                                    <div><span>Read More</span></div>
                                    <div><img src={ArrowLeft}></img></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='pagination-row'>
            <div className='pagination-img-section'>
                    <img src={Pagination1}></img>
                </div>
                <div className='pagination-content-section'>
                        <div className='pagination-inner-content-section'>
                            <div>
                                <span>Jun 28,2022</span>
                                <div></div>
                                <span>Corporate</span>
                            </div>
                            <div>
                                <span>EV Charging Accessibility:
                                     Public vs. Private Charging
                                      Stations</span>
                            </div>
                            <div>
                                <div className='char-img-section'>
                                    <div>
                                        <div><img src={User1}></img></div>
                                        <div><img src={User2}></img></div>
                                    </div>
                                    <div>
                                        <span>BY AMANDA</span>
                                    </div>
                                </div>
                                <div className='read-more-section'>
                                    <div><span>Read More</span></div>
                                    <div><img src={ArrowLeft}></img></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <WFooter/>
        </>
    )
}
export default WTrendingBlog;
