import styles from './HomeBanner.module.scss';

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.textWrapper}>
        <h1>Greetings, and welcome to my site!</h1>
        <p>
          I love to design, create, and problem solve. For me, frontend
          development is the wonderful nexus of all these things.
        </p>
      </div>
      {/* Avatar or self image goes here */}
    </section>
  );
}
