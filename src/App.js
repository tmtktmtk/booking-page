import "@fortawesome/react-fontawesome";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./components/Main.css";
import bg from "./images/nightskl.webp";
import Spotlights from "./components/Spotlights.jsx";
import Features from "./components/Features.jsx";
import React, { useState, useEffect } from "react";
import About from "./About.jsx";
function App() {
  const style = {
    backgroundImage:
      "linear-gradient( rgba(0, 0, 0, 0.6),  rgba(0, 20, 20, 0.7)), url(" +
      bg +
      ")",
  };

  const [date, setDate] = useState(new Date());
  const [navId, setNavId] = useState(0);

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

  function changeId(newId) {
    setNavId(newId);
  }
  return (
    <div className="page-wrapper">
      <div className="background" style={style}></div>
      <div>
        <Navbar onChange={changeId} />
        <Banner isOn={navId === 0} />
        <Spotlights isOn={navId === 1} />
        <Features isOn={navId === 2} />
        <About isOn={navId === 3} />
        <Footer />
        <h6>
          {date.toLocaleTimeString()}, {dateBuild(new Date())}
        </h6>
      </div>
    </div>
  );
}

export default App;
