import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Products from "./components/pages/Products";
import Service from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footerß from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/services" exact element={<Service />} />
          <Route path="/sign-up" exact element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
