import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-image">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          labore laborum, hic, dignissimos, atque nulla dicta beatae tempore ab
          soluta voluptatum ea corporis nam tempora nostrum consectetur
          necessitatibus nesciunt natus.
        </p>
        <a
          href="https://www.linkedin.com/in/dhruv-khandelwal-73b8a419a/"
          className="cv-btn"
          target="_blank"
          rel="noreferrer"
        >
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
