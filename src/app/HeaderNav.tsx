import Link from 'next/link';
import { clsx } from 'clsx';

import { NavLinkType } from './types';

import { josefin_sans } from './fonts';
import styles from './HeaderNav.module.scss';
import AboutModal from './AboutModal';
import { useState } from 'react';
import Overlay from './Overlay';

interface NavProps {
  navLinks: NavLinkType[];
  show: boolean;
}

export default function HeaderNav({ navLinks, show }: NavProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <nav
        className={clsx({
          [styles.nav]: true,
          [styles.show]: show,
          [styles.hide]: !show,
        })}
      >
        <ul className={styles.navList}>
          {navLinks.map(({ route, name, hasOnClick }) => (
            <li key={name} className={styles.navListItem}>
              <Link
                href={route}
                prefetch={false}
                className={josefin_sans.className}
                onClick={hasOnClick ? toggleModal : undefined}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <AboutModal show={showModal} toggle={toggleModal} />
      <Overlay show={showModal} toggle={toggleModal} />
    </>
  );
}
