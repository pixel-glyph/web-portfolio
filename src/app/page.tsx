import HomeBanner from './HomeBanner';
import ProjectPreviews from './ProjectPreviews';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './Contact';

import styles from './Page.module.scss';

export default function Home() {
  return (
    <main className={styles.sectionWrapper}>
      <HomeBanner />
      <ProjectPreviews />
      <Skills />
      <Tools />
      <Contact />
    </main>
  );
}
