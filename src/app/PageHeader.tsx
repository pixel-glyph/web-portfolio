'use client';

import Link from 'next/link';
import clsx from 'clsx';

import HeaderNav from './HeaderNav';
import { navLinks } from './consts';

import styles from './PageHeader.module.scss';
import { useState } from 'react';

export default function PageHeader() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => setShowMobileNav(!showMobileNav);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>
          AJ
        </Link>
      </div>
      <HeaderNav
        navLinks={navLinks}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <div onClick={toggleNav} className={styles.mobileNavToggleWrapper}>
        <div className={styles.mobileNavToggleBox}>
          <div
            className={clsx({
              [styles.mobileNavToggle]: true,
              [styles.isActive]: showMobileNav,
            })}
          ></div>
        </div>
      </div>
    </header>
  );
}
