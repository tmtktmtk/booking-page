import React, { Fragment, useState } from "react";

const FeatureItem = (props) => {
  const [overlay, setOverlay] = useState(false);
  const style = {
    backgroundImage: "url(" + props.img + ")",
  };

  return (
    <Fragment>
      <div className="itemcontainer" onClick={() => setOverlay(true)}>
        <div className="fitem" style={style}></div>
      </div>
      <div
        id="itemoverlay"
        className={overlay ? "fadeIn" : "fadeOut"}
        onClick={() => setOverlay(false)}
      >
        <div className=".container-xl">
          <div className="row">
            <div className="col-lg-6">
              <div className="circlecontainer">
                <img src={props.img} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 textcontainer">
              <p>
                Est sit qui labore esse pariatur ea dolor est. Nostrud minim
                laborum elit cupidatat nulla aute officia dolore aliqua dolore
                est voluptate qui aute. Consequat quis enim magna do Lorem minim
                reprehenderit. In in do esse sint fugiat enim dolore qui. Eu
                pariatur magna laboris velit culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureItem;
