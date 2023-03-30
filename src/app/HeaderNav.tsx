import Link from 'next/link';
import { NavLinkType } from './types';

interface NavProps {
  navLinks: NavLinkType[];
}

export default function HeaderNav({ navLinks }: NavProps) {
  return (
    <nav>
      <ul>
        {navLinks.map(({ route, name }) => (
          <li key={name}>
            <Link href={route} prefetch={false}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
