import { projects } from './consts';

import ProjectHeading from './ProjectHeading';
import Project from './Project';
import { ProjectType } from './types';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <ProjectHeading />
      <div className={styles.contentWrapper}>
        <h1 className={styles.header}>Projects</h1>
        {projects.map((project: ProjectType) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
