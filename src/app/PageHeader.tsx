import Link from 'next/link';
import HeaderNav from './HeaderNav';
import { navLinks } from './consts';

export default function PageHeader() {
  return (
    <header>
      <div>
        <div>
          <Link href="/">AJ</Link>
        </div>
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
      <HeaderNav navLinks={navLinks} />
    </header>
  );
}
