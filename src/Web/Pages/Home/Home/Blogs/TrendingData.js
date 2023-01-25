import React from 'react';

import Pagination1 from "../../../../Assets/Blogs/Pagination1.jpg";
import ArrowLeft from "../../../../Assets/Blogs/ArrowLeft.svg";
import User1 from "../../../../Assets/Blogs/User1.png";
import User2 from "../../../../Assets/Blogs/User2.png";
import { Navigate, useNavigate } from 'react-router-dom';
export default function TrendingData ( { blogData } )
{
  const navigate = useNavigate();
  const showData = () =>
  {
    if ( blogData.length > 0 )
    {

      const data = [];
      blogData?.forEach( ( item ) =>
      {
        data.push( { ...item, "src": Pagination1 } );
      } );

      return data.map( item =>
      {
        return <>  <div className="pagination-row" >
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
              <div>
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
                <div onClick={ () => { navigate( `/blog-detail/${ item._id }` ); } } className="read-more-section">
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

        <p style={ { fontWeight: 700, fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" } }>No Data Find</p>
      </>;
    }
  };

  return (
    <div>
      <div style={ { justifyContent: 'start' } } className="pagination-container">
        { showData() }

      </div>
    </div>
  );
}
