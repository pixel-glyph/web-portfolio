import Link from 'next/link';
import { clsx } from 'clsx';

import { NavLinkType } from './types';

import { josefin_sans } from './fonts';
import styles from './HeaderNav.module.scss';

interface NavProps {
  navLinks: NavLinkType[];
  show: boolean;
}

export default function HeaderNav({ navLinks, show }: NavProps) {
  return (
    <nav
      className={clsx({
        [styles.nav]: true,
        [styles.show]: show,
        [styles.hide]: !show,
      })}
    >
      <ul className={styles.navList}>
        {navLinks.map(({ route, name }) => (
          <li key={name} className={styles.navListItem}>
            <Link
              href={route}
              prefetch={false}
              className={josefin_sans.className}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
