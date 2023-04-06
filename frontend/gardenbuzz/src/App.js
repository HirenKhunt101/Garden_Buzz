import "./App.css";
import React, { Component }  from 'react'; 
import { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Controllers/Navbar/navbar";
import Navbar from "./Controllers/Navbar/Navbar"
import Content from "./Controllers/Content/Content";
import Footer from "./Controllers/Footer/Footer"


function App() {

  return (
    
    <div className="home">
    <Navbar />
    <Content />
    <Footer />
    </div>
      

      
  );


}

export default App;
