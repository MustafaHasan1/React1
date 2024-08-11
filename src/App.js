import React from 'react'
import Navbar from "./Navbar.jsx";
import Home from "./Home.js";
import Footer from "./Footer.js";

export default function App() {
  return(
    <div className="container">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}