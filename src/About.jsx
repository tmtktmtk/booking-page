import React from "react";
import File from "./downloadfile/pwtruongdrouetchen.rar";

const About = (props) => {
  const visible = props.isOn ? "show" : "hide";
  return (
    <div className={visible}>
      <div className="about">
        <p>
          Aliqua do qui non do aliquip aute. Excepteur aliquip commodo mollit ad
          enim dolor non fugiat elit sit in. Ullamco et occaecat adipisicing
          voluptate irure et. Ut in tempor commodo enim officia consequat
          occaecat aliqua eiusmod veniam. Laborum anim reprehenderit anim eu ea
          non sunt irure. Magna aute qui voluptate fugiat. Aute officia ad sunt
          dolor in voluptate.
        </p>
        <p>
          Anim dolor qui velit ex cupidatat est ipsum id non exercitation Lorem
          officia ex. Non minim tempor culpa anim mollit commodo culpa Lorem
          magna minim sunt irure non.
        </p>
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
