import FacebookClone from "../assets/facebook-clone.png";
import Battleship from "../assets/battleship.png";
import WheresWaldo from "../assets/wheres-waldo.png";

export interface ProjectsInfo {
  projectName: string;
  projectInfo: string;
  projectPic: string;
  liveSiteLink: string;
  repoLink: string;
  builtUsing: string;
}

export const projectsInfo: ProjectsInfo[] = [
  {
    projectName: "Facebook Clone",
    projectInfo:
      "A full-stack Facebook clone implementing features such as posting, commenting on posts, reacting to both posts and comments.",
    projectPic: FacebookClone,
    liveSiteLink: "",
    repoLink: "",
    builtUsing: "Built using React, React-router, Typescript and Firebase",
  },
  {
    projectName: "Battleship",
    projectInfo:
      "A Battleship game built OOP diagram and Test-driven development with Jest. ",
    projectPic: Battleship,
    liveSiteLink: "https://hassane24.github.io/Battleship/",
    repoLink: "https://github.com/Hassane24/Battleship",
    builtUsing: "built using JavaScript and Jest",
  },
  {
    projectName: "Where's Waldo",
    projectInfo:
      "A photo tagging game that tasks you with finding certain characters, ranging from easy-to-find to hard-to-find.",
    projectPic: WheresWaldo,
    liveSiteLink: "https://hassane24.github.io/Wheres-Waldo/",
    repoLink: "https://github.com/Hassane24/Wheres-Waldo",
    builtUsing: "built using React, Firebase and JavaScript",
  },
];
