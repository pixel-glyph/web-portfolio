import { Inter } from 'next/font/google';

import HomeBanner from './HomeBanner';
import ProjectPreviews from './ProjectPreviews';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <ProjectPreviews />
      <Skills />
      <Tools />
      <Contact />
    </main>
  );
}
