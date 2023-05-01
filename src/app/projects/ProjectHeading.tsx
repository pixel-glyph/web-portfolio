import styles from './ProjectHeading.module.scss';

export default function ProjectHeading() {
  return (
    <div className={styles.headingLines}>
      <div className={styles.lineGroupLeft}>
        <div className={styles.lineLeftAbove}></div>
        <div className={styles.lineLeftBelow}></div>
      </div>
      <div className={styles.lineGroupRight}>
        <div className={styles.lineRightAbove}></div>
        <div className={styles.lineRightBelow}></div>
      </div>
    </div>
  );
}
