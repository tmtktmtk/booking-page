import React from "react";
import img1 from "../images/p01.jpg";
import img2 from "../images/p02.jpg";
import img3 from "../images/p03.jpg";
import img4 from "../images/p04.jpg";
import img5 from "../images/p05.jpg";
import img6 from "../images/p06.jpg";
import FeatureItem from "./FeatureItem";
const Features = (props) => {
  const visible = props.isOn ? "show" : "hide";

  return (
    <div className={visible}>
      <FeatureItem img={img1} />
      <FeatureItem img={img2} />
      <FeatureItem img={img3} />
      <FeatureItem img={img4} />
      <FeatureItem img={img5} />
      <FeatureItem img={img6} />
    </div>
  );
};

export default Features;
