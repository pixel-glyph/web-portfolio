import ProjectPreview from './ProjectPreview';
import { projectPreviews } from './consts';
import { ProjectPreviewType } from './types';

export default function ProjectPreviews() {
  return (
    <section>
      <div>
        <div>
          <h2>Projects</h2>
          <div></div>
        </div>
        <ul>
          {projectPreviews.map((preview: ProjectPreviewType) => (
            <ProjectPreview key={preview.title} {...preview} />
          ))}
        </ul>
      </div>
    </section>
  );
}
