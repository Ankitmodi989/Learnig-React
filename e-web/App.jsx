import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Colors from "./e-web/sildebar/Color";
import Recommended from "./e-web/Header/Recommended";
import Header from "./e-web/Header/Header";
import Price from "./e-web/sildebar/Price";
import "./App.css";
import { ThemeProvider } from "./e-web/Header/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {

  const [price,setPrice] = useState("all");
  const [color,setColor] = useState("all");

  return (
    <div className="app">
    <div className="sidebar" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Price setPrice={setPrice}></Price>
    <Colors setColor={setColor}></Colors>
    </div>
    <div className="main">
    <Header></Header>  
    <Recommended price={price} color={color}></Recommended>
    </div>
   </div>
  )
};

root.render(
    <ThemeProvider>
      {/* <App></App> */}
    </ThemeProvider>
);
 