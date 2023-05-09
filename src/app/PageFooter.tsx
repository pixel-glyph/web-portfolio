import Link from 'next/link';
import Image from 'next/image';

import styles from './PageFooter.module.scss';

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} Andrew Jensen-Battaglia •
          Frontend Developer
        </p>
        <small className={styles.small}>
          This site, made by yours truly, is powered by Next.js and React.{' '}
          <Link
            href="https://github.com/pixel-glyph/web-portfolio"
            target="_blank"
            className={styles.repoLink}
          >
            Click here for the deets
          </Link>
          !
        </small>
      </div>
      <div>
        <Link
          href="https://github.com/pixel-glyph"
          target="_blank"
          className={styles.link}
        >
          <Image
            src="./github.svg"
            alt="GitHub Icon"
            width={35}
            height={35}
            className={styles.icon}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ajensenbattaglia"
          target="_blank"
          className={styles.link}
        >
          <Image
            src="./linkedin.svg"
            alt="LinkedIn Icon"
            width={35}
            height={35}
            className={styles.icon}
          />
        </Link>
      </div>
    </footer>
  );
}
