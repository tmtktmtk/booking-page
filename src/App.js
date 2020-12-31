import "@fortawesome/react-fontawesome";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./components/Main.css";
import bg from "./images/nightskl.webp";

function App() {
  const style = {
    backgroundImage: "url(" + bg + ")",
  };
  return (
    <div className="page-wrapper">
      <div className="background" style={style}></div>
      <div>
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
