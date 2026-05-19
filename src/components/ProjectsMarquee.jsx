import ProjectsMarqueeTrack from './ProjectsMarqueeTrack';

function ProjectsMarquee() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex flex-col justify-center content-center items-center gap-y-20 gap-x-20"
      data-component-id="ProjectsMarquee"
    >
      <div className="opacity-100 w-full h-[200px] relative shrink-0">
        <ProjectsMarqueeTrack />
      </div>
    </div>
  );
}

export default ProjectsMarquee;
