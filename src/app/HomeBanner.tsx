import Image from 'next/image';
import styles from './HomeBanner.module.scss';

import selfie from '../../public/self.png';

export default function HomeBanner() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.textWrapper}>
          <h1>Greetings, and welcome to my site!</h1>
          <p>
            I love to design, create, and problem solve. For me, frontend
            development is the wonderful nexus of all these things.
          </p>
        </div>
      </section>
      <Image
        src={selfie}
        alt="Picture of self"
        className={styles.selfPic}
        width={1841}
        height={1718}
      />
    </>
  );
}
