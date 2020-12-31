import React, { Component } from "react";
import "./Feature.css";
import FeatureItem from "./FeatureItem";
class Feature extends Component {
  render() {
    return (
      <section id="four" class="wrapper alt style1">
        <div class="inner">
          <h2 class="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <div className="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <FeatureItem />
              </div>
              <div class="col-md-6">
                <FeatureItem />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <FeatureItem />
              </div>
              <div class="col-md-6">
                <FeatureItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
