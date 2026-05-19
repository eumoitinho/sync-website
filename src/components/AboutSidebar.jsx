import AboutMediaSummary from './AboutMediaSummary';

function AboutSidebar() {
  return (
    <div
      className="w-[30%] relative flex flex-col shrink-0 justify-between content-start items-start self-stretch"
      data-component-id="AboutSidebar"
    >
      <div className="relative shrink-0">
        <div className="opacity-100 w-min h-min relative flex justify-center content-center items-center gap-y-2 gap-x-2">
          <div className="opacity-100 bg-[#1440fc] w-2 aspect-square relative shrink-0 rounded-br-[100%] rounded-t-[100%] rounded-bl-[100%]"></div>
          <div className="[--framer-paragraph-spacing:0px] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:nowrap] relative flex flex-col shrink-0 justify-start outline-[3px]">
            <p className='text-[#050814] leading-[16px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium tracking-[0.8px] uppercase text-left [text-wrap-mode:nowrap] caret-[#050814] my-0'>
              sobre nós
            </p>
          </div>
        </div>
      </div>
      <AboutMediaSummary />
    </div>
  );
}

export default AboutSidebar;
