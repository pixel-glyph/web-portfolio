import Link from 'next/link';
import Image from 'next/image';

import styles from './PageFooter.module.scss';

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Andrew Jensen-Battaglia •
        Frontend Developer
      </p>
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
