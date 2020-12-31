import React, { Component } from "react";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{ margin: "50px 50px 50px 50px" }}>
          <div className="row">
            <div className="col-lg-6">
              <h4>
                <div>
                  <p
                    style={{
                      fontSize: "125%",
                      textTransform: "uppercase",
                    }}
                  >
                    <FontAwesomeIcon icon={faHotel} size="lg" />:
                    Reprehenderitsint
                  </p>
                </div>
              </h4>
            </div>
            <div
              className="col-lg-6"
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <nav>
                <div className="row">
                  <div className="col-3">
                    <button className="menu">About Us</button>
                  </div>
                  <div className="col-3">
                    <button className="menu">Spotlights</button>
                  </div>
                  <div className="col-3">
                    <button className="menu">Features</button>
                  </div>
                  <div className="col-3">
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
