import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./style.css";

export default function App({
  setmodifyDate,
  setshowdateSlot,
  setSelectDate,
  bookingDateUpdate,
  previousDate,
  show
}) 
{
  const [dateState, setDateState] = useState(new Date());

  //function 1) user click on calendar on any date this functin will get called
  const changeDate = (e) => {
    setDateState(e);
    setmodifyDate(moment(e).format("D-M-YYYY"));
    setshowdateSlot(e);
    setSelectDate(true);
  };
  function changeDateFormat(oldDate) {
    const workingdate = new Array(3).fill("");

    oldDate?.split("-")?.forEach((data, index) => {
      if (index === 1) {
        workingdate[0] = data;
      } else if (index === 0) {
        workingdate[1] = data;
      } else if (index === 2) {
        workingdate[2] = data;
      }
    });
    return workingdate.join("-");
  }
  const DisblesDate = show?.[show?.length -1]?.date.split("-")?.reverse()?.join(",")

  return (
    <>
      <Calendar
        style={{ width: "100% !important" }}
        value={dateState}
        defaultValue={new Date(changeDateFormat(previousDate))}
        onChange={changeDate}
        minDate={new Date()}
        maxDate={new Date(DisblesDate)}

      />
    </>
  );
}
