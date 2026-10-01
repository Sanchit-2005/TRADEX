import "./App.css";

import Homepage from "./Landing_page/home/Homepage";
import Signup from "./Landing_page/signup/Signup.jsx";
import Navbar from "../src/Landing_page/Navbar.jsx";
import Footer from "./Landing_page/Footer.jsx";
import About from "./Landing_page/about/Aboutpage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Landing_page/product/Product.jsx";
import Pricing from "./Landing_page/home/Pricing.jsx";
import Support from "./Landing_page/support/Support.jsx";
import Notfound from "./Landing_page/Notfound.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Support" element={<Support />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
