import HomeBanner from './HomeBanner';
import ProjectPreviews from './ProjectPreviews';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './Contact';

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
