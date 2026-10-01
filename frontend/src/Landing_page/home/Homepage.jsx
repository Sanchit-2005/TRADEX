import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar";
import Awards from "./Awards"
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
     
      <Hero />
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
     
    </>
  );
}

export default Homepage;
