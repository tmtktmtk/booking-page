import React from "react";

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
        <p>Irure do fugiat deserunt aliqua laboris elit.</p>
        <p>
          Anim dolor qui velit ex cupidatat est ipsum id non exercitation Lorem
          officia ex. Non minim tempor culpa anim mollit commodo culpa Lorem
          magna minim sunt irure non. Labore ex consectetur incididunt pariatur
          laboris aute minim consequat cillum ipsum adipisicing exercitation
          incididunt ipsum. Tempor anim cupidatat dolor qui anim nostrud sit
          fugiat consectetur. Fugiat cillum sunt ad esse nulla excepteur dolore
          sunt nulla. Dolor cupidatat ad aute consectetur mollit do mollit in
          veniam anim. Excepteur dolor do duis officia.
        </p>
      </div>
    </div>
  );
};

export default About;
