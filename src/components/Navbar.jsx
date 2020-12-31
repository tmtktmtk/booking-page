import React, { Component } from "react";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{ margin: "50px 50px 50px 50px" }}>
          <div className="row">
            <div className="col-lg-4">
              <h4
                style={{
                  textDecoration: "underline",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faHotel} size="lg" />
                </div>
              </h4>
            </div>
            <div className="col-lg-8">
              <nav>
                <div className="row">
                  <div className="col-sm-3">
                    <button className="menu">About Us</button>
                  </div>
                  <div className="col-sm-3">
                    <button className="menu">Spotlights</button>
                  </div>
                  <div className="col-sm-3">
                    <button className="menu">Features</button>
                  </div>
                  <div className="col-sm-3">
                    <button className="menu">Stay With Us</button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
