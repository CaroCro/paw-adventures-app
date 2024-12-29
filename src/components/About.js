import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Explore the Wild with Paw Adventures</h3>
          <p>
            Embark on a journey to connect with nature like never before. At Paw
            Adventures, we curate unforgettable experiences that bring you
            closer to wildlife and pristine landscapes. Whether it's whale
            watching, exploring lush reserves, or spotting unique species, every
            adventure is crafted with love and respect for the environment.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
