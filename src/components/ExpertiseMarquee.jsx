import ExpertiseMarqueeTrack from './ExpertiseMarqueeTrack';

function ExpertiseMarquee() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex flex-col justify-center content-center items-center gap-y-20 gap-x-20"
      data-component-id="ExpertiseMarquee"
    >
      <div className="opacity-100 w-full h-[200px] relative shrink-0">
        <ExpertiseMarqueeTrack />
      </div>
    </div>
  );
}

export default ExpertiseMarquee;
