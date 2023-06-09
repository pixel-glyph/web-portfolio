import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import styles from './AboutModal.module.scss';

import rocSkyline from '../../public/roc_skyline.jpg';

interface ModalProps {
  show: boolean;
  toggle: () => void;
}

export default function AboutModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <div className={styles.description}>
        <h1>About Me</h1>
        <p>
          I harbor an obsession of all things web dev—anything from designing
          mockups in Sketch to learning and applying concepts of functional
          programming. I have a propensity to follow best practices and a drive
          to learn everything, though I recognize the importance of filtering
          out all the noise of tools and frameworks to get at the rudimentary
          building blocks of the web.
        </p>
        <p>
          For me, web development is an outlet for both the creative and the
          logical person in me, a craft that I continually strive to fine-tune.
        </p>
        <p>
          Other than coding, some hobbies of mine include reading, running, and
          tabletop games. Though I hail from the small city of Rochester, NY, I
          have an explorer’s ambition for visiting new places, big and small.
        </p>
        <div className={styles.linkWrapper}>
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
      </div>

      <Image
        src={rocSkyline}
        alt="Skyline of Rochester, NY"
        className={styles.skylineImg}
        width={800}
        height={1192}
      />
    </Modal>
  );
}
