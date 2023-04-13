import Image from 'next/image';
import styles from './Tools.module.scss';

import gitIcon from '../../public/git.png';
import bashIcon from '../../public/bash.png';
import jenkinsIcon from '../../public/jenkins.png';

export default function Tools() {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2>Tools</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.iconGroup}>
        <div className={styles.mobileGroup}>
          <Image
            src={bashIcon}
            alt="Bash Icon"
            title="Bash"
            width={100}
            height={100}
            className={`${styles.iconWide} ${styles.icon}`}
          />
          <Image
            src="/vscode.svg"
            alt="VS Code Icon"
            title="VS code"
            width={100}
            height={100}
            className={`${styles.iconWide} ${styles.icon}`}
          />
        </div>
        <div className={styles.mobileGroup}>
          <Image
            src={gitIcon}
            alt="Git Icon"
            title="Git"
            className={`${styles.iconWide} ${styles.icon}`}
            width={100}
            height={100}
          />
          <Image
            src="/npm.svg"
            alt="NPM Icon"
            title="NPM"
            width={100}
            height={100}
            className={`${styles.iconWide} ${styles.icon}`}
          />
          <Image
            src={jenkinsIcon}
            alt="Jenkins Icon"
            title="Jenkins"
            width={100}
            height={136}
            className={`${styles.iconTall} ${styles.icon}`}
          />
        </div>
        <div className={styles.mobileGroup}>
          <Image
            src="/figma.svg"
            alt="Figma Icon"
            title="Figma"
            width={100}
            height={100}
            className={`${styles.iconTall} ${styles.icon}`}
          />
          <Image
            src="/sketch.svg"
            alt="Sketch Icon"
            title="Sketch"
            width={100}
            height={100}
            className={`${styles.iconWide} ${styles.icon}`}
          />
        </div>
      </div>
    </section>
  );
}
