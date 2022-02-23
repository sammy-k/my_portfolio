import { skills } from "../portfolio";
import "./componentStyles/Skills.css";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skills-list-item btn btn-skill">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
