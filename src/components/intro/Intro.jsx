import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Twinkle Genon" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            A Computer Engineering graduate from the Technological Institute of
            the Philippines - Quezon City. Specialized in System Administration
            with hands-on knowledge in Linux, Networking, Programming, and AWS
            Cloud (Common Services). A lifelong learner, problem solver, and
            innovator.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="container background__container">
        <div className="work-experience">
          <h2>Work Experience</h2>
          <WorkExperience />
        </div>

        <div className="education">
          <h2>Education</h2>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Intro;
