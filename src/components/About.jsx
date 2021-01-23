import React from "react";
import File from "../downloadfile/pwtruongdrouetchen.rar";

const About = (props) => {
  const visible = props.isOn ? "show" : "hide";
  return (
    <div className={visible}>
      <div className="about">
        <p className="text-justify">
          <small>Aliqua do qui non do aliquip aute.</small>
          <strong>
            Excepteur aliquip commodo mollit ad enim dolor non fugiat elit sit
            in.
          </strong>
          <sub>Ullamco et occaecat adipisicing voluptate irure et.</sub> Ut in
          tempor commodo enim officia consequat occaecat aliqua eiusmod veniam.
          Laborum anim reprehenderit anim eu ea non sunt irure. Magna aute qui
          voluptate fugiat. Aute officia ad sunt dolor in voluptate.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ul className="text-left">
                <li>In officia do deserunt ullamco fugiat Lorem ad.</li>
                <li>
                  Mollit tempor veniam nulla proident in dolor ea officia.
                </li>
                <li>
                  Non dolore aliqua et officia consectetur incididunt ut sint
                  laboris aliqua sunt in reprehenderit.
                </li>
                <li>Officia ipsum Lorem aliqua duis.</li>
                <li>
                  Incididunt esse laborum cupidatat nulla incididunt commodo
                  elit culpa Lorem est dolor.
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ol className="text-left">
                <li>
                  Lorem minim ex ad velit et exercitation deserunt id tempor
                  culpa culpa.
                </li>
                <li>
                  Aliqua consequat incididunt tempor ea anim voluptate ullamco
                  sint anim sunt eiusmod mollit exercitation.
                </li>
                <li>
                  Incididunt ex reprehenderit magna voluptate aute dolor ut
                  fugiat nisi do ipsum irure.
                </li>
                <li>
                  Labore et nostrud veniam dolore voluptate dolor esse occaecat
                  consequat occaecat.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <a href="https://tmtktmtk.github.io/" className="lead fs-2">
          Tam K.M. TRUONG
        </a>
        <p className="lead fs-2">Jonathan DROUET-CHEN</p>
        <br />
        <a href={File} download className="btn btn-secondary">
          Download source (no media files).
        </a>
      </div>
    </div>
  );
};

export default About;
