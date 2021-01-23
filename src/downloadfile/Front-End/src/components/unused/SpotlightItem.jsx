import React, { Component } from "react";
import "./SpotLight.css";
import Img from "../images/pic01.jpg";

class SpotlightItem extends Component {
  render() {
    return (
      <section id="one" class="wrapper spotlight style1">
        <div class="inner">
          <a href="https://example.com/" class="image">
            <img src={Img} alt="hahah" />
          </a>
          <div class="content">
            <h2 class="major">Magna arcu feugiat</h2>
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

export default SpotlightItem;
