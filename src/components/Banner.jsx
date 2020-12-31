import React, { Component } from "react";
import Slideshow from "./slideshow/Slideshow";
import img1 from "../images/lobby.webp";
import img2 from "../images/restaurant.webp";
import img3 from "../images/bar.webp";
import img4 from "../images/room.webp";
import img5 from "../images/pool.webp";

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="fadeIn">
          <div className="col-lg-6">
            <div style={{ margin: "100px 100px 50px 200px" }}>
              <h1
                className="text-right"
                style={{
                  textTransform: "uppercase",
                }}
              >
                Deserunt voluptate
              </h1>
              <p className="lead text-right">
                Esse tempor dolor tempor laborum laboris. Sit et et consequat ex
                nulla qui. Qui esse irure duis deserunt culpa.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <Slideshow images={[img1, img2, img3, img4, img5]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
