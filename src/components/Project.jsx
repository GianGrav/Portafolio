import React from "react";

function Project({ title, description, imageUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;