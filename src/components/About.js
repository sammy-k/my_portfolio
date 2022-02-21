import { about } from "../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./componentStyles/About.css";

const About = () => {
  const { resume, social } = about;

  return (
    <div className="about center">
      <h1>
        Hi, I am <span className="about__name">Sam Kanan.</span>
      </h1>

      <h2 className="about__role">A Full Stack Engineer.</h2>
      <p className="about__desc">
        Hi, I'm Sam. I'm an adaptive developer, with good problem-solving skills and a creative
        outlook towards unfamiliar situations. I am currently exploring opportunities as a Software
        Developer/Engineer. Take a look at my portfolio and if you feel like my skills align with
        your needs, lets chat!
      </p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}
        <>
          <a href={social.github} aria-label="github" className="link link--icon">
            <GitHubIcon />
          </a>
          <a href={social.linkedin} aria-label="linkedin" className="link link--icon">
            <LinkedInIcon />
          </a>
        </>
      </div>
    </div>
  );
};

export default About;
