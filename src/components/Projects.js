import { projects } from "../portfolio";
import ProjectContainer from "./ProjectContainer";
import "./componentStyles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
