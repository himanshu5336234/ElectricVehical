import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import "./style.css";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { publicRequest } from "../../ServiceRequest";
import Loading from "../../components/Loading/LoadingBlue";
import BookingNotFound from "../../components/ObenEvNotAvailable/ObenEvNotAvailable";

const DivScroll = styled.div`
  width: 100%;
  margin: 8px auto 24px;
  overflow-x: auto;
  white-space: nowrap;
  // height: 75vh;
`;
const Td = styled.td`
  padding: 0 8px;
  font-weight: 500;
  font-size: 13px;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
`;
const Img = styled.img`
  width: 256px;
  height: 200px;
  padding-left: 4px;
  margin-bottom: 12px;
`;
const TypographyDiv = styled(Typography)`
  width: 100%;
  flex-shrink: 0;
  font-weight: 500;
  font-family: Red Hat Display;
`;
const P = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 50px;
`;
const Heading = styled.div`
  color: #000;
  padding: 40px 0 0 20px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [show, setShow] = React.useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [isLoading, setIsLoading] = React.useState(false);

  //dummy testride data-----------------
  const testRide = {
    // showroom:"EV Motors,Prakashnagar,bangalare",
    address:
      "No. 1702, Dr Rajkumar Rd,Prakash Nagar, Bengalore, Karnataka 560021",
    googleMapLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7018.407544011245!2d77.04484691852416!3d28.41310759465191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228f6259b4b1%3A0x14c010fa6f5998fa!2sSapphire%20Mall!5e0!3m2!1sen!2sin!4v1657866194669!5m2!1sen!2sin",
  };
  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchShowroomData = async () => {
      setIsLoading(true);
      try {
        const resSr = await publicRequest.post("user/get-showrooms", {
          city: props.userInfo.city,
        });
        setShow(resSr.data.data);
        setIsLoading(false);
      } catch (err) {}
    };
    fetchShowroomData();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div style={{ padding: "20px" }}>
      {show?.length > 0 ? (
        show?.map((i, index) => (
          <>
            <Heading>Pick a location nearest to you</Heading>

            <Accordion
              style={{ margin: "24px 0", padding: "20px 0" }}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <TypographyDiv>
                  {i?.name}
                  <br />
                  {/* Bangalore{" "} */}
                </TypographyDiv>
                {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
              </AccordionSummary>
              <Border></Border>

              <AccordionDetails>
                <DivScroll class="container">
                  {i?.images?.map((j) => (
                    <Img src={j} />
                  ))}
                </DivScroll>
                <Typography>
                  <div
                    className="result-showroom-address-wrapper"
                    style={{ marginTop: "32px", display: "flex" }}
                  >
                    <RoomOutlinedIcon
                      style={{ width: "20px", height: "20px", opacity: "0.6" }}
                    />

                    <label className="result-address">
                      {i?.address?.address_line} {i?.address?.pincode} {i?.city}
                    </label>
                    {/* <label className="result-address">{i?.address?.pincode}</label> */}
                    {/* <label className="result-address">{i?.city}</label> */}
                  </div>
                  <div
                    className="result-center-bottom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "24px",
                    }}
                  >
                    <iframe
                      style={{ border: "none", width: "100%" }}
                      className="googlemap"
                      src={i?.map}
                      allowfullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <button
                    className="btnTestDrive"
                    onClick={() =>
                      navigate(`/scheduleride`, {
                        state: {
                          slots: i?.slots,
                          days_open: i?.days_open,
                          id: i?._id,
                          userId: props?.userId,
                          name: i?.name,
                          address: i?.address?.address_line,
                          pincode: i?.address?.pincode,
                          map: i?.map,
                        },
                      })
                    }
                  >
                    TEST THE RORR
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))
      ) : (
        <BookingNotFound />
      )}
    </div>
  );
}
