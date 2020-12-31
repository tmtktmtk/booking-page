import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{ margin: "50px 100px 50px 50px" }}>
          <div className="row">
            <div className="col-md-8">
              <div className="row" style={{ margin: "0px 0px 20px 0px" }}>
                <div className="col-4">
                  <h6
                    className="text-right"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(0%, -50%)",
                      textTransform: "uppercase",
                    }}
                  >
                    Nisi sint quis ipsum
                  </h6>
                </div>
                <div className="col-8">
                  <p
                    className="text-left"
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(0%, -50%)",
                    }}
                  >
                    <small>
                      Consequat aliqua veniam amet occaecat incididunt quis
                      minim labore ex. Sunt proident incididunt duis labore
                      dolor veniam nulla ad mollit.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-3"></div>
                <div className="col-3">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="icon"
                    size="lg"
                  />
                </div>
                <div className="col-3">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                    size="lg"
                  />
                </div>
                <div className="col-3">
                  <FontAwesomeIcon icon={faGithub} className="icon" size="lg" />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
