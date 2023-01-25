import WFooter from "../../Components/Footer/WFooter";
import WNavbar from "../../Components/Navbar/WNavbar";
import "./WAbout.scss";
import WAboutCrousel from "./WAboutCrousel";
import WAboutManagementCrousel from "./WAboutManagementCrousel";
import AboutUS from "../../Assets/AboutUs/AboutUsVideo.mp4";
function WAboutUs() {
 
  return (
    <>
      <WNavbar />
      <div className="about_container">
        <div className="about_first_container">
          <div className="video_container">
            <video style={{ width: "540px", position: "relative" }} controls>
              <source src={AboutUS} type="video/mp4" />
            </video>
          </div>
          <div className="first_content">
            <p className="first_content_heading">How it all started</p>
            <p className="first_content_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut
              diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut.
              Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed
              nec ut.
            </p>
          </div>
        </div>
        <div className="about_second_container">
          <WAboutCrousel />
        </div>
        <div className="about_third_container">
          <div className="first_container">
            <p className="meet">MEET THE</p>
            <p className="team">OBEN EV TEAM</p>
          </div>
          <div className="second_container">
            <WAboutManagementCrousel />
          </div>
        </div>
        <WFooter />
      </div>
    </>
  );
}
export default WAboutUs;
