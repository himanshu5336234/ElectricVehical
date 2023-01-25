import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import Result from "./pages/Result/Result";
import MyBooking from "./pages/MyBooking/MyBooking";
import BookingNotFound from "./components/BookingNotFound/BookingNotFound";
import ShowRoom from "./pages/ShowSelection/ShowRoom";
import ScheduleRide from "./pages/ScheduleRide/Schedule";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SuccessfullLoading from "./components/SuccessfulLoading/SuccessfullLoading";
import Blogs from "./pages/Blogs/Blogs";
import Article from "./pages/Blogs/Article";
import ModifyRides from "./pages/ModifyRides/ModifyRide";
import Press from "./pages/Press/Press";
import Alert from "./components/Alert/Alert";

import Specification from "./pages/Home/FullSpecification/FullSpecificationComp";
import Sidebar from "./components/Sidebar/Sidebar";
import SavingCalculator from "./pages/SavingCalculator/SavingCalculator";
import Pricing from "./pages/Home/Pricing/Pricing";
import SavingCalResult from "./pages/SavingCalResult/SavingCalResult";
import ObenEvNotAvailable from "./components/ObenEvNotAvailable/ObenEvNotAvailable";
import Faq from "./pages/FAQ/Faq";
import UIGoa from "./components/SavingCalResult/Goa/UIGoa";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/ContactUs/ContactUs";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import JobDescription from "./pages/JobDescription/JobDescription";
import AboutUs from "./pages/AboutUs/AboutUs";
import SliderImage from "./components/SliderImage/SliderImage";
import CompanyBoardPeople from "./components/CompanyBoardPeople/CompanyBoardPeople";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BatteryImage from "./pages/Home/Battery/BatteryImage";
import Performance from "./pages/HomeSection/Performance/Performance";
// import SafetyComp from './pages/Home/Safety/SafetyComp/SafetyComp';
import PerformanceAnimaScroll from "./pages/HomeSection/Performance/PerformanceAnimaScroll/PerformanceAnimaScroll";
import Charging from "./pages/HomeSection/Charging/Charging";
import ScrollY from "./pages/ScrollY/ScrollY";
import Reliability from "./pages/HomeSection/Reliablity/Reliablity";
import Connectivity from "./pages/Home/Connectivity/Connectivity";
import DesignExpand from "./pages/Home/Design/DesignExpand";
import SafetyComp from "./pages/Home/Safety/SafetyComp/SafetyNEwComp";
import WarrentyComp from "./pages/Home/Warrenty/WarrentyComp.js/WarrentyComp";
import RelCheck from "./pages/HomeSection/Reliablity/RelCheck";
import FeedbackForm from "./components/Feedback/FeedbackForm/FeedbackForm";
import FeedbackResult from "./components/Feedback/FeedbackResult/FeedbackResult";
import AboutUSAnimation from "./pages/AboutUs/AboutUSAnimation";
import Cancellation from "./pages/Cancellation/Cancellation";
import FullSpecificationhome from "./pages/Home/FullSpecification/FullSpecificationHome";
import DummyHome from "./pages/Home/DummyHome/DummyHome";
import HomeComp from "./pages/Home/Home";
import PressArticle from "./pages/Press/pressArticle";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import WHome from "./Web/Pages/Home/Home/WHome";
import WService from "./Web/Pages/WService/WService";
import WDesign from "./Web/Pages/Home/Design/WDesign";
import WLandingService from "./Web/Pages/Home/ServiceandWarrenty/WLandingService";
import WConnectivity from "./Web/Pages/Home/Connectivity/WConnectivity";
import WCareers from "./Web/Pages/Careers/WCareers";
// import WConnectivity from './Web/Pages/Home/Home/Connectivity/WConnectivity';
import WBlogs from "./Web/Pages/Home/Home/Blogs/WBlogs";
import WPress from "./Web/Pages/Home/Home/Press/WPress";
import WFaq from "./Web/Pages/Faq/WFaq";
import WContactUs from "./Web/Pages/ContactUs/WContactUs";
import WPrivacyPolicy from "./Web/Pages/PrivacyPolicy/WPrivacyPolicy";
import WTermsConditions from "./Web/Pages/TermsConditions/WTermsConditions";
import WCancellation from "./Web/Pages/Cancellation&RefundPolicy/WCancellation";
import WBlogDetail from "./Web/Pages/Home/Home/Blogs/WBlogDetail";
import WBooking from "./Web/Pages/Booking/WBooking";
import WShowroom from "./Web/Pages/ShowroomWeb/wShowroom";
import WSchedule from "./Web/Pages/ScheduleWeb/wSchedule";
import Wresult from "./Web/Pages/ResultWeb/wresult";
import WSavingCalWeb from "./Web/Pages/SavingCalcWeb/savingCalcWeb";
import WSavingCalResult from "./Web/Pages/SavingCalResultweb/SavinfCalResultWeb";
import WBattery from "./Web/Pages/Home/Battery/WBattery";
import WPerformance from "./Web/Pages/Home/Performance/WPerformance";
import WPerformanceExpanded from "./Web/Pages/Home/Performance/WPerformanceExpanded";
import WCharging from "./Web/Pages/Home/Charging/WCharging";
import WmyBooking from "./Web/Pages/MyBooking/WMyBooking";
import FullSpecs from "./Web/Pages/Home/FullSpacesWeb/WFullSpaces";
import WPricing from "./Web/Pages/Home/wPricing/pricing";
import WSafety from "./Web/Pages/Home/Safety/WSafety";
import WReliable from "./Web/Pages/Home/Reliability/WReliable";
import WRelExpanded from "./Web/Pages/Home/Reliability/Reliability-expanded/WRelExpanded";
import WConnectivityDetail from "./Web/Pages/Home/Connectivity/WConnectivityDetail";
import WPressDetail from "./Web/Pages/Home/Home/Press/WPressDetail";
import LandingPage from "./Web/Pages/LandingPage/LandingPage";
import WSafexpanded from "./Web/Pages/Home/Safety/Safety-expanded/WSafexpanded";
import WServiceExpanded from "./Web/Pages/Home/ServiceandWarrenty/ServiceandWarrentyexpanded/WServiceExpanded";
import WDesignDetail from "./Web/Pages/Home/Design/WDesignDetail";
import { WBexpand } from "./Web/Pages/Home/Battery/WBexpand";
import ScrollToTop from "./ScrollToTop";
import WBatteryExpendNew from "./Web/Pages/Home/BatteryExpend/wBatteryExpend";
import WAboutUs from "./Web/Pages/AboutUs/WAboutUs";
import ResultBooked from "./pages/Result/ResultBooked";
import ModifyRegisteredUser from "./pages/ModifyRides/ModifyRegisterdRide";
import WRegesterdResult from "./Web/Pages/ResultWeb/wRegesterdResult";
import WJobDescription from './Web/Pages/Careers/CareerExpanded/WJobDescription';
import FormSumbit from "./Web/Pages/Careers/CareerExpanded/FormSumbit";
import Pricingdetails from "./pages/Home/Pricing/Pricingdetails";
import ReliabilityNewcomp from "./pages/HomeSection/Reliablity/ReliabilityNewcomp";
function App() {
  localStorage.setItem("scrollIndex", "Home");
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BrowserView>
        <Routes>

        <Route path='/ChargingExpand' element={<WBexpand/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/warrenty' element={<WService/>}/>
        <Route path='/about-us' element={<WAboutUs/>}/>

        <Route path='/design'   element={<WDesign/>}/>
        <Route path='/service' element={<WLandingService/>}/>
        <Route path ="/connectivity" element={<WConnectivity/>}/>
        <Route path ="/safety" element={<WSafety/>}/>
        <Route path ="/reliable" element={<WReliable/>}/>
        <Route path='/reliabilityexpanded' element={<WRelExpanded/>}/>
        <Route path='/performanceexpanded' element={<WPerformanceExpanded/>}/>
        <Route path='/safetyexpanded' element={<WSafexpanded/>}/>
        <Route path='/serviceexpanded' element={<WServiceExpanded/>}/>
        <Route path='/connectivityexpanded' element={<WConnectivityDetail/>}/>
        <Route path='/careers' element={<WCareers/>}/>
        <Route path='/careers2' element={<WJobDescription/>}/>
        <Route path='/careers3' element={<FormSumbit/>}/>


        
        


          <Route path="/blog" element={<WBlogs />} />
          <Route path="/charging" element={<WCharging />} />
          <Route path="/connectivity" element={<WConnectivity />} />
          <Route path="/press" element={<WPress />} />
          <Route path="/faq" element={<WFaq />} />
          <Route path="/contact-us" element={<WContactUs />} />
          <Route path="/privacy-policy" element={<WPrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<WTermsConditions />} />
          <Route path="/cancel" element={<WCancellation />} />
          <Route path="/blog-detail/:blog_id" element={<WBlogDetail />} />
          <Route path="/press-detail/:press_id" element={<WPressDetail />} />
          <Route path="/design-detail" element={<WDesignDetail />} />

          <Route path="/Booking" element={<WBooking />} />
          <Route path="/WShowroom" element={<WShowroom />} />
          <Route path="/WSchedule" element={<WSchedule />} />
          <Route path="/WResult" element={<Wresult />} />
          <Route path="/savingCalc" element={<WSavingCalWeb />} />
          <Route path="/savingRes" element={<WSavingCalResult />} />
          <Route path="/battery" element={<WBattery />} />
          <Route path="/WebmyBooking" element={<WmyBooking />} />
          <Route path="/fullSpecs" element={<FullSpecs />} />
          <Route path="/pricing" element={<WPricing />} />
          <Route path="/batteryExpand" element={<WBatteryExpendNew />} />
          <Route path="/bookedDataWeb" element={<WRegesterdResult />} />

          {/* <Route path='/' element={<WPerformance/>}/> */}
          {/* <Route path='/' element={<WCharging/>}/> */}
        </Routes>
      </BrowserView>

      <MobileView>
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/try" element={<DummyHome />} />
          <Route path="/book" element={<Book />} />
          <Route path="/result" element={<Result />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/showroomselection" element={<ShowRoom />} />
          <Route path="/scheduleride" element={<ScheduleRide />} />
          <Route path="/loadinginprogress" element={<LoadingPage />} />
          <Route path="/loadingcomplete" element={<SuccessfullLoading />} />

          <Route path="/test-booking" element={<ResultBooked/>}/>
        <Route path="/modifyRegistered" element={<ModifyRegisteredUser/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path="/modifyrides" element={<ModifyRides/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path= "/alert" element={<Alert/>}/>
        <Route path= "/speciafication" element={<Specification/>}/>
        {/* <Route path= "/alert" element={<Alert/>}/> */}
        {/* <Route path= "/speciafication" element={<Specification/>}/> */}
        <Route path= "/pricing" element={<Pricing/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path="/savingcalculator" element={<SavingCalculator/>}/>
        <Route path="/scr" element={<SavingCalResult/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-and-condition" element={<TermsAndCondition/>}/>
        <Route path='/job-description' element={<JobDescription/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/page-not-found' element={<PageNotFound/>}/>
        <Route path='/performance' element={<Performance/>}/>
        <Route path='/check' element={<PerformanceAnimaScroll/>}/>
        <Route path='/charging' element={<Charging/>}/>
        {/* <Route path='/reliability' element={<Reliability/>}/> */}
        <Route path='/reliability' element={<RelCheck/>}/>
        <Route path='/connectivity' element={<Connectivity/>}/>
        <Route path='/design' element={<DesignExpand/>}/>
        <Route path='/cancel' element={<Cancellation/>}/>
        <Route path='/FullSpeces' element={<FullSpecificationhome/>}/>
        <Route path='/pricingHome' element={<Pricingdetails/>}/>
        <Route path='/reliabilityDetails' element={<ReliabilityNewcomp/>}/>

        {/* <Route path='/DummyData' element={<DummyHome/>}/> */}

          {/* to check only ui -- it will be removed later */}

          <Route path="/bnf" element={<BookingNotFound />} />
          <Route path="/oevnf" element={<ObenEvNotAvailable />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/goa" element={<UIGoa />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/sliderimage" element={<SliderImage />} />
          <Route path="/companyboardpeople" element={<CompanyBoardPeople />} />
          <Route path="/BatteryImg" element={<BatteryImage />} />
          <Route path="/scroll" element={<ScrollY />} />
          <Route path="/SafetyComp" element={<SafetyComp />} />
          <Route path="/warrenty" element={<WarrentyComp />} />
          <Route path="/fr" element={<FeedbackResult />} />
          <Route path="/au-working" element={<AboutUs />} />
        </Routes>
      </MobileView>
    </BrowserRouter>
  );
}

export default App;
