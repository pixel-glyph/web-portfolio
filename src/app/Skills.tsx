import Image from 'next/image';
import styles from './Skills.module.scss';

import jsIcon from '../../public/js.png';
import reduxIcon from '../../public/redux.png';
import rtlIcon from '../../public/RTL.png';
import emotionIcon from '../../public/emotion.png';

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2>Skills</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.iconGroup}>
        <Image
          src="/html5.svg"
          alt="HTML Icon"
          title="HTML5"
          className={`${styles.icon} ${styles.htmlIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/css3.svg"
          alt="CSS Icon"
          title="CSS3"
          className={`${styles.icon} ${styles.cssIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/mobile-css-lines.svg"
          alt=""
          className={`${styles.icon} ${styles.cssLines}`}
          width={500}
          height={250}
        />
        <Image
          src={jsIcon}
          alt="JavaScript Icon"
          title="JavaScript"
          className={`${styles.icon} ${styles.jsIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/mobile-js-lines.svg"
          alt=""
          className={`${styles.icon} ${styles.jsLines}`}
          width={500}
          height={250}
        />
        <Image
          src="/skill_lines.svg"
          alt=""
          className={`${styles.icon} ${styles.skillLines}`}
          width={840}
          height={390}
        />
        <Image
          src={reduxIcon}
          alt="Redux Icon"
          title="Redux"
          className={`${styles.icon} ${styles.reduxIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/react.svg"
          alt="React Icon"
          title="React"
          className={`${styles.icon} ${styles.reactIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/next-js.svg"
          alt="Next JS Icon"
          title="Next.js"
          className={`${styles.icon} ${styles.nextjsIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/typescript.svg"
          alt="TypeScript Icon"
          title="TypeScript"
          className={`${styles.icon} ${styles.typescriptIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/storybook.svg"
          alt="Storybook Icon"
          title="Storybook"
          className={`${styles.icon} ${styles.storybookIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/webpack.svg"
          alt="Webpack Icon"
          title="Webpack"
          className={`${styles.icon} ${styles.webpackIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/jest.svg"
          alt="Jest Icon"
          title="Jest"
          className={`${styles.icon} ${styles.jestIcon}`}
          width={100}
          height={100}
        />
        <Image
          src={rtlIcon}
          alt="React Testing Library Icon"
          title="React Testing Library"
          className={`${styles.icon} ${styles.rtlIcon}`}
          width={100}
          height={100}
        />
        <Image
          src="/sass.svg"
          alt="Sass Icon"
          title="Sass"
          className={`${styles.icon} ${styles.sassIcon}`}
          width={100}
          height={100}
        />
        <Image
          src={emotionIcon}
          alt="Emotion Icon"
          title="Emotion"
          className={`${styles.icon} ${styles.emotionIcon}`}
          width={100}
          height={100}
        />
        <div title="Styled Components" className={styles.styledComponents}>
          💅
        </div>
      </div>
    </section>
  );
}
