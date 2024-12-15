import React from "react";
import "./experience.css";

import htmlIcon from "../../assets/tech-tools/html.png";
import cssIcon from "../../assets/tech-tools/css.png";
import reactIcon from "../../assets/tech-tools/react.png";
import vscodeIcon from "../../assets/tech-tools/vs-code.png";
import gitIcon from "../../assets/tech-tools/git.png";
import githubIcon from "../../assets/tech-tools/github.png";
import postmanIcon from "../../assets/tech-tools/postman.png";
import figmaIcon from "../../assets/tech-tools/figma.png";

import jsIcon from "../../assets/tech-tools/javascript.png";
import expressIcon from "../../assets/tech-tools/express.png";
import cIcon from "../../assets/tech-tools/clanguage.png";
import cplusplusIcon from "../../assets/tech-tools/c++.png";
import csharpIcon from "../../assets/tech-tools/csharp.png";
import pythonIcon from "../../assets/tech-tools/python.png";
import unityIcon from "../../assets/tech-tools/unity.png";
import mongodbIcon from "../../assets/tech-tools/mongodb.png";

import firebaseIcon from "../../assets/tech-tools/firebase.png";
import awsIcon from "../../assets/tech-tools/aws.png";
import linuxIcon from "../../assets/tech-tools/linux.png";
import ansibleIcon from "../../assets/tech-tools/ansible.png";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <section className="experience__techstack">
          <h3>Tech Stack</h3>
          <p>Technologies I've been working with recently</p>
          <div className="experience__techstack-content">
            <img src={htmlIcon} alt="HTML5" title="HTML5" />
            <img src={cssIcon} alt="CSS3" title="CSS3" />
            <img src={jsIcon} alt="Javascript" title="Javascript" />
            <img src={reactIcon} alt="React" title="React" />
            <img src={expressIcon} alt="Express" title="Express" />
            <img src={gitIcon} alt="Git" title="Git" />
            <img src={cIcon} alt="CLanguage" title="C" />
            <img src={cplusplusIcon} alt="CPlusPlus" title="C++" />
            <img src={csharpIcon} alt="CSharp" title="C#" />
            <img src={pythonIcon} alt="Python" title="Python" />
          </div>
        </section>

        <section className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__tools-content">
            <img src={unityIcon} alt="Unity" title="Unity" />
            <img src={mongodbIcon} alt="Mongo DB" title="Mongo DB" />
            <img src={firebaseIcon} alt="Firebase" title="Firebase" />
            <img src={awsIcon} alt="AWS" title="AWS" />
            <img src={linuxIcon} alt="Linux" title="Linux" />
            <img src={ansibleIcon} alt="Ansible" title="Ansible" />
            <img src={vscodeIcon} alt="VS Code" title="VS Code" />
            <img src={githubIcon} alt="GitHub" title="GitHub" />
            <img src={figmaIcon} alt="Figma" title="Figma" />
            <img src={postmanIcon} alt="Postman" title="Postman" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
