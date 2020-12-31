import React, { Component } from "react";
import Img from "../images/pic02.jpg";
import "./SpotLight.css";

class SpotlightItemALT extends Component {
  render() {
    return (
      <section id="two" class="wrapper alt spotlight style2">
        <div class="inner">
          <a href="https://example.com/" class="image">
            <img src={Img} alt="" />
          </a>
          <div class="content">
            <h2 class="major">Tempus adipiscing</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SpotlightItemALT;
