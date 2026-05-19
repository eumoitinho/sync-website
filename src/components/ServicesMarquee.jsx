import ServicesMarqueeTrack from './ServicesMarqueeTrack';

function ServicesMarquee() {
  return (
    <div
      name="Service title"
      className="opacity-100 w-full h-min relative flex flex-col justify-center content-center items-center gap-y-20 gap-x-20"
      data-component-id="ServicesMarquee"
    >
      <div className="opacity-100 w-full h-[200px] relative shrink-0">
        <ServicesMarqueeTrack />
      </div>
    </div>
  );
}

export default ServicesMarquee;
