import React from "react";
import Slider from "react-slick";
import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects({ projectsData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed:5000
  };

  return (
    <div className="projects">
      <Slider {...settings}>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Projects;