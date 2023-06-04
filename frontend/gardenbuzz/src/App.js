// connect router to bowser

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import React, { Component } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Controllers/Navbar/navbar";
import Navbar from "./Controllers/Navbar/Navbar";
import Content from "./Controllers/Content/Content";
import Footer from "./Controllers/Footer/Footer";
import Sellform from "./Controllers/Sellform/Sellform";
import Login from "./Controllers/Login/Login";
import Register from "./Controllers/Register/SellerRegister";
import Upload from "./Controllers/uploadFiles/sellerProducts";
import AddImage from "./Controllers/uploadFiles/addImage";
import BuyProduct from "./Controllers/BuyProduct/BuyProduct";
import Plant from "./Controllers/Product/plant";
import Cart from "./Controllers/Cart/Cart";
import Flower from "./Controllers/Product/flower";
import Vine from "./Controllers/Product/vine";
import PlantCareProduct from "./Controllers/Product/plantCare";
import Fertilizer from "./Controllers/Product/fertilizer";
// import Chatbox from "./Controllers/ChatBox/ChatBox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="home" element={<div className="home"><Navbar /><Content /><Footer /></div>} />
        <Route path="/" element={ <div className="home"><Navbar /><Content /><Footer /></div>}/>
        <Route path="Sellform" element={ <div className="Sellform"> <><Navbar /><Sellform /><Footer /></></div>}/>
        <Route path="addImage" element={<div className="addimage"><Navbar /><AddImage /><Footer /></div> } />
        <Route path="Upload" element={ <div className="Upload"> <Navbar /> <Upload />  <Footer />  </div>  }  />
        <Route path="login" element={  <div className="Login">   <Login />  </div>  }  />
        <Route path="register"element={  <div className="Register">   <Register /> </div> }  />
        <Route path="Plant" element={ <>  <Navbar /> <Plant /> <Footer /> </> } />
        <Route path="Flower" element={ <>  <Navbar /> <Flower /> <Footer /> </> } />
        <Route path="Vine" element={ <>  <Navbar /> <Vine /> <Footer /> </> } />
        <Route path="PlantCareProduct" element={ <>  <Navbar /> <PlantCareProduct /> <Footer /> </> } />
        <Route path="Fertilizer" element={ <>  <Navbar /> <Fertilizer /> <Footer /> </> } />
        <Route path="Cart" element={  <><Navbar /> <Cart /> <Footer /> </>  } />
        {/* <Route path="Chatbox" element={  <><Navbar /> <Chatbox /> <Footer /> </>  } /> */}
      </Routes>
    </BrowserRouter>

    // <div className="home">
    // <Navbar />
    // <Content />
    // <Sellform />
    // <Footer />
    // </div>
  );
}

export default App;
