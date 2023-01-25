import React from 'react';
import BikeImg from "../../Assets/Booking/B-bike.png";
import "./Bstyle.scss";


export default function BookingLeftimg() {
  return (
<div className="w-booking-leftContainer ">
          <img src={BikeImg} className="w-booking-img" />
        </div>  )
}
