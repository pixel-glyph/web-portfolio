import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { ProjectType } from './types';
import styles from './Project.module.scss';

export default function Project({
  title,
  copy,
  images,
  externalData,
  id,
}: ProjectType) {
  return (
    <section className={styles.project} id={id}>
      <h2 className={styles.header}>{title}</h2>
      <p>{copy}</p>
      {externalData && (
        <p>
          <Link href={externalData.url} target="_blank">
            {externalData.linkText}
          </Link>
        </p>
      )}
      <div className={styles.imageWrapper}>
        {images.map(({ src, size }) => (
          <Image
            src={src}
            alt={`${title} project screenshot`}
            className={clsx({
              [styles.image]: true,
              [styles.mobileImage]: size === 'mobile',
              [styles.tabletImage]: size === 'tablet',
            })}
            key={src.src}
          />
        ))}
      </div>
    </section>
  );
}
