import React from "react";
import "./intro.css";
import Me from "../../img/me.jpg";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hey, Nice to meet you!</h2>
          <h2 className="intro-name"> I'm Daniel Wratten</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Junior Web Developer</div>
              <div className="intro-title-item">UI/UX Enthusiast</div>
              <div className="intro-title-item">Perpetual Student</div>
            </div>
          </div>
          <p className="intro-description">
            I'm a young software student from Perth, Western Australia, with a
            passion for learning and clean, minimal design. I'm looking forward
            to learning new technologies and hoping to find a place where I can
            facilitate my growth as a developer.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="grey"
            class="bi bi-chevron-down"
            className="intro-scroll"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
}

export default Intro;
