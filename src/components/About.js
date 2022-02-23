import { about } from "../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./componentStyles/About.css";

const About = () => {
  const { resume, social } = about;

  return (
    <div className="about center">
      <h1>
        Hi, I am <span className="about-name">Sam Kanan.</span>
      </h1>

      <h2 className="about-role">A Full Stack Engineer.</h2>
      <p className="about-desc">
        Hi, I'm Sam. I'm an adaptive developer, with good problem-solving skills and a creative
        outlook towards unfamiliar situations. I am currently exploring opportunities as a Software
        Developer/Engineer. Take a look at my portfolio and if you feel like my skills align with
        your needs, lets chat!
      </p>

      <div className="about-contact center">
        <a href={resume}>
          <span type="button" className="resume-btn resume-btn-outline">
            Resume
          </span>
        </a>
        <>
          <a href={social.github} aria-label="github" className="about-link-icon">
            <GitHubIcon fontSize="large" />
          </a>
          <a href={social.linkedin} aria-label="linkedin" className="about-link-icon">
            <LinkedInIcon fontSize="large" />
          </a>
        </>
      </div>
    </div>
  );
};

export default About;
