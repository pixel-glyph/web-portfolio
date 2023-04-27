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
  showMobileNav: boolean;
  setShowMobileNav: Function;
}

export default function HeaderNav({
  navLinks,
  showMobileNav,
  setShowMobileNav,
}: NavProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleAboutClick = () => {
    setShowMobileNav(false);
    toggleModal();
  };

  return (
    <>
      <nav
        className={clsx({
          [styles.nav]: true,
          [styles.show]: showMobileNav,
          [styles.hide]: !showMobileNav,
        })}
      >
        <ul className={styles.navList}>
          {navLinks.map(({ route, name }) => (
            <li key={name} className={styles.navListItem}>
              <Link
                href={route}
                className={josefin_sans.className}
                onClick={() => setShowMobileNav(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className={styles.navListItem}>
            <button
              className={`${josefin_sans.className} ${styles.navBtn}`}
              onClick={handleAboutClick}
            >
              About
            </button>
          </li>
        </ul>
      </nav>
      <AboutModal show={showModal} toggle={toggleModal} />
      <Overlay show={showModal} toggle={toggleModal} />
    </>
  );
}
