import "./portfolio.css";

import IMG1 from "../../assets/IMG1.jpg";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Design of Virtual Reality Training Simulation for Emergency Medical Response",
      img: IMG1,
      description:
        "A fully-immersive Virtual Reality training simulation for emergency medical response.",
      technologies: "C# | Unity |  | React Js",
      link: "https://github.com/twinklegenon",
      github: "https://github.com/twinklegenon",
    },
    {
      id: 2,
      title: "GoWell",
      img: IMG2,
      description:
        "A Mobile Application for Health and Wellness Enhancement ",
      technologies: "HTML | CSS | JavaScript | React Native | Expo",
      link: "https://github.com/twinklegenon",
      github: "https://github.com/twinklegenon",
    },
    {
      id: 3,
      title: "DormFindr",
      img: IMG3,
      description: "A Web Application that aims to streamline the dormitory search process for TIP students",
      technologies: "HTML | CSS | JavaScript | React Js | MongoDB | Node Js | Express Js ",
      link: "https://github.com/twinklegenon",
      github: "https://github.com/twinklegenon",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
