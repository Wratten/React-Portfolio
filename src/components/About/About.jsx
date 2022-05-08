import React from "react";
import "./about.css";
import cardPhoto from "../../img/mecard.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={cardPhoto} alt="" className="about-img"></img>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">
          <b>About</b> Me
        </h1>
        <p className="about-description">
          I've been around tech for as long as I remember, from my parents
          owning an original PlayStation when I was born, to spending a lot of
          my teenage years playing games and attempting to learn programs like
          photoshop and lightroom.
        </p>
        <p className="about-description">
          My coding story starts with being recommended to try coding from a
          friend after playing a game called 'Factorio' where you create a large
          factory with assembly lines and conveyor belts, often using problem
          solving skills and finding little errors and correcting them, and
          after trying to code myself, I was hooked.
        </p>
        <p className="about-description">
          My first few projects involved a to-do list (the right of passage for
          developers) and making the first iteration of my portfolio. After
          following tutorials for a while, I enjoyed the exposure to
          technologies but felt that I wasn't learning as much as I could be, so
          I signed up for the UWA Coding Bootcamp. It's exposed me so many
          technologies and put me in a position where I'm learning so much and
          working on a project every week, really testing my abilities.
        </p>
      </div>
    </div>
  );
}

export default About;
