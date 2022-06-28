import React from "react";
import featureImage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureImage} alt="featureImage" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          This Application <span>Software</span> is an Art.
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          labore laborum, hic, dignissimos, atque nulla dicta beatae tempore ab
          soluta voluptatum ea corporis nam tempora nostrum consectetur
          necessitatibus nesciunt natus. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Libero labore laborum, hic, dignissimos, atque nulla
          dicta beatae tempore ab soluta voluptatum ea corporis nam tempora
          nostrum consectetur necessitatibus nesciunt natus. <br />
          <button>More Features</button>
        </p>
      </div>
    </div>
  );
}

export default Features;
