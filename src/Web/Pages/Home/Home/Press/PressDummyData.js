import React from 'react'
import Pagination1 from "../../../../Assets/Blogs/Pagination1.jpg";
import ArrowLeft from "../../../../Assets/Blogs/ArrowLeft.svg";
import User1 from "../../../../Assets/Blogs/User1.png";
import User2 from "../../../../Assets/Blogs/User2.png";
import { useNavigate } from 'react-router-dom';

export default function PressDummyData({pressData}) {
  console.log({pressData})



  const navigate = useNavigate();
  const showData = () =>
  {
    if ( pressData.length > 0 )
    {

      const data = [];
      pressData?.forEach( ( item ) =>
      {
        data.push( { ...item, "src": Pagination1 } );
      } );

      return data.map( item =>
      {
        return <>  <div className="pagination-row" style={{    padding: "30px 10px;"
        }}>
          <div className="pagination-img-section">
            <img src={ item.src } />
          </div>
          <div className="pagination-content-section" >
            <div className="pagination-inner-content-section">
              <div>
                <span>{ new Date( item.date ).toDateString() }</span>
                <div></div>
                <span>{ item.category }</span>
              </div>
              <div >
                <span>
                  { item.title }
                </span>
              </div>
              <div>
                <div className="char-img-section">
                  <div>
                    <div>
                      <img src={ User1 }></img>
                    </div>
                    <div>
                      <img src={ User2 }></img>
                    </div>
                  </div>
                  <div>
                    <span>BY AMANDA</span>
                  </div>
                </div>
                <div onClick={ () => { navigate( `/press-detail/${ item._id }` ); } } className="read-more-section">
                  <div>
                    <span>Read More</span>
                  </div>
                  <div>
                    <img src={ ArrowLeft }></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>;
      }

      );

    } else
    {
      return <>

<p className="no-data-found">That Data is lost in space. </p>
      </>;
    }
  };
  return (
    <div>
       <div className="pagination-container">
        {showData()}
        {/* <div className="pagination-row">
          <div className="pagination-img-section">
            <img src={Pagination1}></img>
          </div>
          <div className="pagination-content-section">
            <div className="pagination-inner-content-section">
              <div>
                <span>Jun 28,2022</span>
                <div></div>
                <span>Corporate</span>
              </div>
              <div>
                <span>
                  EV Charging Accessibility: Public vs. Private Charging
                  Stations
                </span>
              </div>
              <div>
                <div className="char-img-section">
                  <div>
                    <div>
                      <img src={User1}></img>
                    </div>
                    <div>
                      <img src={User2}></img>
                    </div>
                  </div>
                  <div>
                    <span>BY AMANDA</span>
                  </div>
                </div>
                <div className="read-more-section">
                  <div>
                    <span>Read More</span>
                  </div>
                  <div>
                    <img src={ArrowLeft}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-row">
          <div className="pagination-img-section">
            <img src={Pagination1}></img>
          </div>
          <div className="pagination-content-section">
            <div className="pagination-inner-content-section">
              <div>
                <span>Jun 28,2022</span>
                <div></div>
                <span>Corporate</span>
              </div>
              <div>
                <span>
                  EV Charging Accessibility: Public vs. Private Charging
                  Stations
                </span>
              </div>
              <div>
                <div className="char-img-section">
                  <div>
                    <div>
                      <img src={User1}></img>
                    </div>
                    <div>
                      <img src={User2}></img>
                    </div>
                  </div>
                  <div>
                    <span>BY AMANDA</span>
                  </div>
                </div>
                <div className="read-more-section">
                  <div>
                    <span>Read More</span>
                  </div>
                  <div>
                    <img src={ArrowLeft}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-row">
          <div className="pagination-img-section">
            <img src={Pagination1}></img>
          </div>
          <div className="pagination-content-section">
            <div className="pagination-inner-content-section">
              <div>
                <span>Jun 28,2022</span>
                <div></div>
                <span>Corporate</span>
              </div>
              <div>
                <span>
                  EV Charging Accessibility: Public vs. Private Charging
                  Stations
                </span>
              </div>
              <div>
                <div className="char-img-section">
                  <div>
                    <div>
                      <img src={User1}></img>
                    </div>
                    <div>
                      <img src={User2}></img>
                    </div>
                  </div>
                  <div>
                    <span>BY AMANDA</span>
                  </div>
                </div>
                <div className="read-more-section">
                  <div>
                    <span>Read More</span>
                  </div>
                  <div>
                    <img src={ArrowLeft}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
