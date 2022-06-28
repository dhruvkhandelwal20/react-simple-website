import React from "react";

function Subscribe() {
  return (
    <div id="subscribe">
      <h3>Subscribe</h3>
      <div className="subscribe-input">
        <input type="email" placeholder="example@gmail.com" />
        <a
          href="https://www.linkedin.com/in/dhruv-khandelwal-73b8a419a/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Continue
        </a>
      </div>
    </div>
  );
}

export default Subscribe;
