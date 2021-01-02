import React from "react";
import img1 from "../images/pic01.jpg";
import img2 from "../images/pic02.jpg";
import img3 from "../images/pic03.jpg";
import img4 from "../images/pic04.jpg";
import img5 from "../images/pic05.jpg";
import img6 from "../images/pic06.jpg";
const Features = (props) => {
  const visible = props.isOn ? "show" : "hide";

  const style1 = {
    backgroundImage: "url(" + img1 + ")",
  };

  const style2 = {
    backgroundImage: "url(" + img2 + ")",
  };

  const style3 = {
    backgroundImage: "url(" + img3 + ")",
  };
  const style4 = {
    backgroundImage: "url(" + img4 + ")",
  };
  const style5 = {
    backgroundImage: "url(" + img5 + ")",
  };
  const style6 = {
    backgroundImage: "url(" + img6 + ")",
  };
  return (
    <div className={visible}>
      <div className="parent">
        <div className="child" style={style1}></div>
      </div>

      <div className="parent">
        <div className="child" style={style2}></div>
      </div>

      <div className="parent">
        <div className="child" style={style3}></div>
      </div>

      <div className="parent">
        <div className="child" style={style4}></div>
      </div>

      <div className="parent">
        <div className="child" style={style5}></div>
      </div>

      <div className="parent">
        <div className="child" style={style6}></div>
      </div>
    </div>
  );
};

export default Features;
