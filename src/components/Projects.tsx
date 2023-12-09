import { ProjectCard } from "./ProjectCard";
import { projectsInfo } from "../utils/ProjectsInfo";
import styles from "../styles/projects.module.css";
export const Projects = ({ name }: { name: string }) => {
  return (
    <section
      data-name={name}
      data-number="2"
      id="Projects"
      className={styles.projects_section}
    >
      {projectsInfo.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          projectInfo={project.projectInfo}
          projectPic={project.projectPic}
          liveSiteLink={project.liveSiteLink}
          repoLink={project.repoLink}
          builtUsing={project.builtUsing}
        />
      ))}
    </section>
  );
};
