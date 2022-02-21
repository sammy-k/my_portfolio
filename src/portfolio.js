const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sam Kanan",
  role: "Full Stack Engineer",
  description: "Lorem ipsum...",
  resume: "#",
  social: {
    linkedin: "https://www.linkedin.com/in/sammy-kanan-750ba14/",
    github: "https://github.com/sammy-k"
  }
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Zease",
    description: "Lorem ipsum...",
    stack: ["React Native", "Firebase", "Redux"],
    sourceCode: "https://github.com",
    livePreview: "https://zease.vercel.app/"
  },
  {
    name: "PokeMart",
    description: "Coming soon...",
    stack: ["React", "MongoDB", "Redux"],
    sourceCode: "https://github.com",
    livePreview: "https://poke-mart2022.herokuapp.com/"
  },
  {
    name: "Project 3",
    description: "Coming soon...",
    stack: ["React", "Firebase", "Redux"],
    sourceCode: "#",
    livePreview: "#"
  }
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "JavaScript",
  "Node",
  "React",
  "React Native",
  "Redux",
  "UI/UX",
  "Git",
  "PostgreSQL",
  "MobgoDB",
  "Firebase"
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "samkanan@gmail.com"
};

export { about, projects, skills, contact };
