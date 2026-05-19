function ScrollCue() {
  return (
    <div
      className="w-px h-min relative flex overflow-x-hidden overflow-y-hidden grow shrink-0 basis-0 justify-start content-center items-center gap-y-0 gap-x-0"
      data-component-id="ScrollCue"
    >
      <div className="w-min h-min relative flex shrink-0 justify-center content-center items-center gap-y-2 gap-x-2">
        <div className="w-[3px] h-6 relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-2.5 gap-x-2.5">
          <div className="bg-[rgba(5,8,20,0.1)] w-[3px] h-6 absolute top-[calc(50%_-_12px)] z-[1] overflow-x-hidden overflow-y-hidden shrink-0 rounded-br-[1px] rounded-t-[1px] rounded-bl-[1px] left-0 right-auto bottom-auto"></div>
          <div className="opacity-100 bg-[#1440fc] h-2.5 absolute z-[1] overflow-x-hidden overflow-y-hidden shrink-0 will-change-transform translate-x-0 translate-y-[3.185px] rounded-br-[1px] rounded-t-[1px] rounded-bl-[1px] top-0 bottom-auto inset-x-0"></div>
        </div>
        <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:nowrap] relative flex flex-col shrink-0 justify-start outline-[3px]">
          <p className='text-[#050814] leading-[16px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium tracking-[0.8px] uppercase text-left [text-wrap-mode:nowrap] caret-[#050814] my-0'>
            rolar
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScrollCue;
