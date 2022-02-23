import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./componentStyles/ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>
    <p className="project-description">{project.description}</p>
    <ul className="project-stack">
      {project.stack.map((item) => (
        <li className="project-stack-item">{item}</li>
      ))}
    </ul>
    <a href={project.sourceCode} aria-label="source code" className="project-link-icon">
      <GitHubIcon />
    </a>
    <a href={project.livePreview} aria-label="live preview" className="project-link-icon">
      <LaunchIcon />
    </a>
  </div>
);

export default ProjectContainer;
