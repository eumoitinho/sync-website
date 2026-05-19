import HeroTitle from './HeroTitle';

function HeroHeadline() {
  return (
    <div
      className="w-full h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-3 gap-x-3"
      data-component-id="HeroHeadline"
    >
      <HeroTitle />
      <div className="opacity-100 [transform:none] bg-[#1440fc] w-4 aspect-square absolute z-[1] overflow-x-hidden overflow-y-hidden shrink-0 will-change-transform rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px] left-[550px] right-auto top-auto bottom-2.5"></div>
    </div>
  );
}

export default HeroHeadline;
