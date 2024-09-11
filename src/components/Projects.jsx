import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return ( <section id ="projects">
    <div className="container project_container"
   
    >
      <h1 className="head_proj">PROJECTS</h1>

      <div className="row d-flex align-item-content-center justify-content-center">
        {project.map((data) => (
          <div key={data.id} className="col-md-4 col-sm-6 mx-3 col-lg-3 mb-4">
            <div className="card bg-dark text-light"  data-aos="fade-down-right" >
              <img src={data.imageSrc} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.description}
                </p>
                <a href={data.link} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></section>
  );
};

export default Projects;
