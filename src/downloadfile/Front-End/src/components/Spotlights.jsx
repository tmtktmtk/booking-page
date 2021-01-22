import React from "react";
import Video from "../videos/video.mp4";
const Spotlights = (props) => {
  const visible = props.isOn ? "show" : "hide";

  return (
    <div className={visible}>
      <video
        src={Video}
        controls="controls"
        autoPlay={true}
        loop
        className="spotlight"
      />
    </div>
  );
};

export default Spotlights;
