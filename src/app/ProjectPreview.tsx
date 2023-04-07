import Image from 'next/image';
import Link from 'next/link';
import { ProjectPreviewType } from './types';

import styles from './ProjectPreview.module.scss';

export default function ProjectPreview({
  title,
  desc,
  imgSrc,
  imgAlt,
  url,
  hash,
}: ProjectPreviewType) {
  return (
    <li className={`${styles.preview} ${styles[hash]}`}>
      <Link href={{ pathname: url, hash }} className={styles.link}>
        <div className={styles.textWrapper}>
          <h3 className={styles.heading}>{title}</h3>
          <div className={styles.underline}></div>
          <p className={styles.desc}>{desc}</p>
        </div>
        <Image
          src={imgSrc}
          alt={imgAlt}
          // width={}
          // height={}
          className={styles.image}
        />
      </Link>
    </li>
  );
}
