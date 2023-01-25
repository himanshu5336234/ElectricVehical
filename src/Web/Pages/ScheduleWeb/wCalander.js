import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./style.css";

export default function App({
  setshowdateSlot,
  setSelectDate,
  bookingDateUpdate,
  setShow,
}) {
  const [dateState, setDateState] = useState(new Date());
  const [lastDaystate, setlastDayState] = useState();

  //function ------------------------on click date
  const changeDate = (e) => {
    setDateState(e);
    const setShow = moment(e).format("l");
    const workingdate = new Array(3).fill("");
    setShow?.split("/")?.forEach((data, index) => {
      if (index === 1) {
        workingdate[0] = data;
      } else if (index === 0) {
        workingdate[1] = data;
      } else if (index === 2) {
        workingdate[2] = data;
      }
    });
    console.log(workingdate.join("-"));
    setshowdateSlot(workingdate.join("-"));
    bookingDateUpdate(workingdate.join("-"));
    setSelectDate(true);
  };
  // for all dates and slots
  const DisblesDate = setShow?.[setShow?.length - 1]?.date
    .split("-")
    ?.reverse()
    ?.join(",");
  return (
    <>
      <Calendar
        style={{ width: "100% !important" }}
        value={dateState}
        onChange={changeDate}
        minDate={new Date()}
        maxDate={new Date(DisblesDate)}
      />

      {/* <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}
    </>
  );
}
