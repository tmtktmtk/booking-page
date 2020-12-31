import React, { Component } from "react";
import Img from "../images/pic04.jpg";

class FeatureItem extends Component {
  render() {
    return (
      <article>
        <a href="#" class="image">
          <img src={Img} alt="" />
        </a>
        <h3>Sed feugiat lorem</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
          dignissim dapibus ultrices.
        </p>
        <a href="#" class="special">
          Learn more
        </a>
      </article>
    );
  }
}

export default FeatureItem;
