import styles from "../styles/about.module.css";
export const About = ({ name }: { name: string }) => {
  return (
    <section data-name={name} id="About" data-number="1">
      <div className={styles.about_me}>
        Hi, I'm Hassane, a passionate self-motivated web developer. I'm
        proficient with React,and Firebase. I use my creativity and
        problem-solving skills to design and implement websites for clients.
      </div>
      <div className={styles.skills}>
        <div>
          <div className={styles.skill}>
            <i className="devicon-html5-plain colored icon"></i>
            <span>HTML</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-css3-plain colored icon"></i>
            <span>CSS</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-javascript-plain colored icon"></i>
            <span>JAVASCRIPT</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-git-plain colored icon"></i>
            <span>GIT</span>
          </div>
        </div>
        <div>
          <div className={styles.skill}>
            <i className="devicon-jest-plain colored icon"></i>
            <span>JEST</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-react-original colored icon"></i>
            <span>REACT</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-firebase-plain colored icon"></i>
            <span>FIREBASE</span>
          </div>
          <div className={styles.skill}>
            <i className="devicon-typescript-plain colored icon"></i>
            <span>TYPESCRIPT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
