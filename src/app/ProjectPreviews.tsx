import ProjectPreview from './ProjectPreview';
import { projectPreviews } from './consts';
import { ProjectPreviewType } from './types';

import styles from './ProjectPreviews.module.scss';

export default function ProjectPreviews() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <div>
          <h2 className={styles.heading}>Projects</h2>
          <div className={styles.underline}></div>
        </div>
        <ul className={styles.projectsWrapper}>
          {projectPreviews.map((preview: ProjectPreviewType) => (
            <ProjectPreview key={preview.hash} {...preview} />
          ))}
        </ul>
      </div>
    </section>
  );
}
