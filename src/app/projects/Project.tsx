import Image from 'next/image';
import Link from 'next/link';

import { ProjectType } from './types';
import styles from './Project.module.scss';

export default function Project({
  title,
  copy,
  imgSrc,
  externalData,
}: ProjectType) {
  return (
    <section className={styles.project}>
      <h2 className={styles.header}>{title}</h2>
      <p>{copy}</p>
      {externalData && (
        <p>
          <Link href={externalData.url} target="_blank">
            {externalData.linkText}
          </Link>
        </p>
      )}
      {Array.isArray(imgSrc) ? (
        imgSrc.map((src) => (
          <Image
            src={src}
            alt={`${title} project screenshot`}
            width={1000}
            height={500}
            className={styles.image}
            key={src.src}
          />
        ))
      ) : (
        <Image
          src={imgSrc}
          alt={`${title} project screenshot`}
          className={styles.image}
          width={1000}
          height={500}
        />
      )}
    </section>
  );
}
