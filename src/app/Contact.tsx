import Image from 'next/image';
import styles from './Contact.module.scss';

import envelopeIcon from '../../public/envelope.svg';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <h2>Get in Touch</h2>
      <p className={styles.info}>I am currently available for hire.</p>
      <p className={styles.info}>
        If you’re on the lookout for a driven, best practices-following,
        detail-oriented frontend developer, look no further!
      </p>
      <button className={styles.button}>
        <Image
          src={envelopeIcon}
          alt=""
          width={33}
          height={22}
          className={styles.icon}
        />
        <span className={styles.buttonText}>MESSAGE ME</span>
      </button>
    </section>
  );
}
