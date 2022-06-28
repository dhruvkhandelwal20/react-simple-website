import React from "react";
import Navbar from "./Navbar";
function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          It is a <span>React JS</span> Website
        </h1>
        <p className="details">
          Most Calendars are designed for teams. This is designed for
          Freelancers who want a simple way to plan their schools
        </p>
        <div className="header-btns">
          <a
            href="https://www.linkedin.com/in/dhruv-khandelwal-73b8a419a/"
            className="cv-btn"
            target="_blank"
            rel="noreferrer"
          >
            Hire me
          </a>
          <a
            href="https://github.com/dhruvkhandelwal20"
            className="cv-btn1"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;
