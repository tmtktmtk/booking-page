import React from "react";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  return (
    <div className="container-fluid" id="top">
      <div style={{ margin: "50px 50px 50px 50px" }}>
        <div className="row">
          <div className="col-lg-6">
            <h4>
              <div>
                <a
                  href="#top"
                  onClick={() => props.onChange(0)}
                  style={{
                    fontSize: "125%",
                    textTransform: "uppercase",
                  }}
                >
                  <FontAwesomeIcon icon={faHotel} size="lg" />:
                  Reprehenderitsint
                </a>
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
                                    <a href="https://pwtest2020.planethoster.world/staywithus.html">
                    <button className="menu">Stay With Us</button>
                  </a>
                </div>
                <div className="col-3">
                  <button className="menu" onClick={() => props.onChange(1)}>
                    Spotlights
                  </button>
                </div>
                <div className="col-3">
                  <button className="menu" onClick={() => props.onChange(2)}>
                    Features
                  </button>
                </div>
                <div className="col-3">
                  <button className="menu" onClick={() => props.onChange(3)}>
                    About Us
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
