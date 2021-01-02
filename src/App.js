import "@fortawesome/react-fontawesome";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./components/Main.css";
import bg from "./images/nightskl.webp";
import Spotlights from "./components/Spotlights.jsx";
import Features from "./components/Features.jsx";
import React from "react";
import About from "./About.jsx";
function App() {
  const style = {
    backgroundImage: "url(" + bg + ")",
  };
  const [navId, setNavId] = React.useState(0);
  console.log(navId);
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
      </div>
    </div>
  );
}

export default App;
