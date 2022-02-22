const about = {
  // all the properties are optional - can be left empty or deleted
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
    id: 1,
    name: "Zease",
    description:
      "Zease is a mobile application that allows users to track and view data regarding their sleep habits",
    stack: ["React Native", "Node.js", "Firebase", "Redux"],
    sourceCode: "https://github.com/sammy-k/Zease",
    livePreview: "https://zease.vercel.app/"
  },
  {
    id: 2,
    name: "PokeMart",
    description:
      "Pokemart is a playful e-commerce application that allows users to shop for Pokemon-related items",
    stack: ["React", "Node.js", "PostgreSQL", "Redux"],
    sourceCode: "https://github.com/sammy-k/Grace_Shopper_App",
    livePreview: "https://poke-mart2022.herokuapp.com/"
  },
  {
    id: 3,
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
