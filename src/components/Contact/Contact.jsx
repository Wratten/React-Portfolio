import React, { useState } from "react";
import "./contact.css";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { useRef } from "react";
import Resume from "../../files/Daniel-Wratten-Resume.pdf";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_x36fqcw",
        "template_i3tom8c",
        formRef.current,
        "sebMYTKfs2p_yKhGi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            Let's get in <b>contact!</b>
          </h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <a
                href="https://github.com/Wratten"
                target="_blank"
                rel="noreferrer"
              >
                <UilGithubAlt className="contact-icon"></UilGithubAlt>
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-wratten-b362b2222/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <UilLinkedinAlt className="contact-icon"></UilLinkedinAlt>
                <p>LinkedIn</p>
              </a>
              <a href={Resume} download>
                <UilFileAlt className="contact-icon"></UilFileAlt>
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-description">
            <p>
              <b>Flick me an email</b> if you've got any questions, or would be
              interested in working with me. I'll try and get back to you as
              soon as I can!
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Submitted"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
