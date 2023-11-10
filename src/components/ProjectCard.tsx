import { ProjectsInfo } from "../utils/ProjectsInfo";
import styles from "../styles/projectCard.module.css";

export const ProjectCard = ({
  projectName,
  projectInfo,
  projectPic,
  liveSiteLink,
  repoLink,
  builtUsing,
}: ProjectsInfo) => {
  return (
    <article className={styles.project}>
      <div className={styles.image_holder}>
        <img src={projectPic} alt="" />
      </div>
      <div style={{ width: "40%" }}>
        <h3 className={styles.project_name}>{projectName}</h3>
        <div className={styles.info_container}>
          <p>{projectInfo}</p>
          <span>{builtUsing}</span>
          <div className={styles.links_container}>
            <a href={liveSiteLink} target="_blank">
              <button>Live</button>
            </a>
            <a href={repoLink} target="_blank">
              <button>Repository</button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
