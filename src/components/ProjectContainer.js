import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./componentStyles/ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>
    <p className="project__description">{project.description}</p>
    <ul className="project__stack">
      {project.stack.map((item) => (
        <li className="project__stack-item">{item}</li>
      ))}
    </ul>
    <a href={project.sourceCode} aria-label="source code" className="link link--icon">
      <GitHubIcon />
    </a>
    <a href={project.livePreview} aria-label="live preview" className="link link--icon">
      <LaunchIcon />
    </a>
  </div>
);

export default ProjectContainer;
