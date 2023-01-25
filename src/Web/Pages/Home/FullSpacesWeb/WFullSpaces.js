import React from "react";
import "./style.css";
import WNavbar from "../../../Components/Navbar/WNavbar";
import WFooter from "../../../Components/Footer/WFooter";
// import Bg2nd from "../../../Assets/FullSpaces/FullSpacesBack2.png";
// import Bg1st from "../../../Assets/FullSpaces/FullSpacesBack1.png";
import Img1 from "../../../../Web/Assets/FullSpaces/wFullImg1st.png";
import Img3 from "../../../../Web/Assets/FullSpaces/wFullImg3rd.png";
import Img2 from "../../../../Web/Assets/FullSpaces/wfullImg2nd.png";
import icon1 from "../../../../asset/icon1.png";
import icon2 from "../../../../asset/motorIconFullSpaces.png";
import icon3 from "../../../../asset/RSAfullSpces.png";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import WFullperformance from "./WFullperformance";
import WSafety from "./WfullSafety";
import WCharging from "./wCharging";

export default function WFullSpaces() {
  const navigate = useNavigate();

  return (
    <>
      <WNavbar />
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <BackButton />
      </div>
      <div className="spaces-body">
        <div className="w-full-spaces-background1">
          <div className="w-full-spacesContainerLeft">Motorcycle</div>
          <div
            style={{ width: "50%", padding: "30px" }}
            className="w-full-spacesContainerRight"
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  gap: "10px",
                  width:"100%"
                }}
              >
                <div
                  style={{ backgroundColor: "#2F3131",width:"50%" }}
                  className="br-8 p-16"
                >
                  <h2 className="fs-22 white-cl fw-400">10kW</h2>
                  <h4 className="white-cl fs-16 fw-400 op-06">IPMSM Motor</h4>
                </div>

                <div
                  style={{ backgroundColor: "#2F3131",width:"50%" }}
                  className="br-8 p-16"
                >
                  <h2 className="fs-22 white-cl fw-400">ARX</h2>
                  <h4 className="white-cl fs-16 fw-400 op-06">
                    Proproetary
                    <br />
                    Frame
                    <br />
                    Design
                  </h4>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#2F3131",
                  borderRadius: "8px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="w-fullspesc-right">
                  3-Years
                  <br /> Warranty
                  <br />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      opacity: "0.6",
                    }}
                  >
                    (Battery, Motor, RSA,
                    <br />
                    Free Service)
                  </span>
                </div>
                <div className="w-fullspecIconParent">
                  <div className="w-fullspecIcon">
                    <img src={icon1} />
                  </div>
                  <div className="w-fullspecIcon">
                    <img src={icon2} />
                  </div>
                  <div className="w-fullspecIcon">
                    <img src={icon3} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "#2F3131",
                  borderRadius: "8px",
                  marginTop: "10px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <img src={Img3} style={{ width: "100%", height: "inherit" }} />
                <div>
                  <span
                    style={{
                      color: "#fff",
                      position: "absolute",
                      top: "6%",
                      paddingLeft: "15px",
                      fontSize: "22px",
                    }}
                  >
                    200mm
                    <br />
                    <span className="fs-16 op-06 l-h-110">
                      Highest<br/> Ground
                      <br /> Clearance
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ width: "50%", padding: "10px" }}>
              <div className="w-fullSpaces-conatanerChild1">
                <div style={{ borderRadius: "8px", position: "relative" }}>
                  <img
                    src={Img1}
                    style={{ background: "#2F3131", borderRadius: "8px" }}
                  />
                  <div className="w-fullSpaces-subContainerChild1">
                    <span className="fs-22">
                      Comfortable
                      <br /> to ride
                      <br /> design
                    </span>
                    {/* <span className="fs-16 op-06">Seat Height</span> */}
                  </div>
                </div>
                <div className="w-fullSpaces-containerChild2">
                  <div style={{ color: "#fff", background: "#2F3131" }}>
                    <span className="fs-16 op-06 d-flex a-items">
                      Seat Height
                    </span>
                  </div>
                  <div style={{ color: "#fff", background: "#2F3131" }}>
                    <span className="fs-16 op-06 l-h-110 d-flex a-items">
                      Comfortable <br />
                      for two
                    </span>
                  </div>
                  <div style={{ color: "#fff", background: "#2F3131" }}>
                    <span className="fs-16 op-06 d-flex a-items">
                      Feature 3
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="w-fullSpaces-containerChild3"
                style={{  }}
              >
                <img src={Img2} style={{ width: "100%",background: "#2F3131",borderRadius:"8px" }} />
                <div
                  style={{ color: "#fff" }}
                  className="w-fullSpaces-subContainerChild3"
                >
                  <span className="fs-22">230mm</span>
                  <br />
                  <span className="fs-16 op-06 l-h-110">
                    Highest Water Wading
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<PERFORMANCE>>>>>>>>>>>>>>>>>>>>> */}
       <WFullperformance/>
         {/* <<<<<<<<<<<<<<<<<<<<<<<CHARGING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
         <WCharging/>
       {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<SAFETY>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
       <WSafety/>             
     
        </div>
      <WFooter />
    </>
  );
}
