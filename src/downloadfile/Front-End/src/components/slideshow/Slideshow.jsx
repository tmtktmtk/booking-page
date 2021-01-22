import React, { useState, useEffect } from "react";
import "./Slidestyle.css";

function Slideshow({ images = [], interval = 8000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideImg, setCurrentSlideImg] = useState({});
  const [nextSlideImg, setNextSlideImg] = useState({});
  useEffect(() => {
    setCurrentSlideImg(images[currentSlide]);

    if (currentSlide === images.length - 1) {
      setNextSlideImg(images[0]);
    } else {
      setNextSlideImg(images[currentSlide + 1]);
    }

    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [images, currentSlide, interval]);

  return (
    <section className="slideshow">
      <div className="slide-holder">
        <section id="transition1" className="slide slide-current">
          <img
            src={currentSlideImg}
            className="slide-thumbnail"
            alt="current"
          ></img>
        </section>
        <section id="transition2" className="slide slide-next">
          <img src={nextSlideImg} className="slide-thumbnail" alt="next"></img>
        </section>
      </div>
    </section>
  );
}

export default Slideshow;
