function FooterContactButton() {
  return (
    <div
      className="opacity-100 w-[200px] relative shrink-0"
      data-component-id="FooterContactButton"
    >
      <a
        href="./contact"
        className="[--border-bottom-width:1px] [--border-color:var(--token-d562547e-e487-4a82-808a-c0364da409d8,rgb(20,64,252))] [--border-left-width:1px] [--border-right-width:1px] [--border-style:solid] [--border-top-width:1px] shadow-none opacity-100 bg-[#1440fc] text-[#1440fc] w-full h-[60px] relative flex justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] pl-2 pr-3 py-2 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
      >
        <div
          aria-hidden="true"
          className="[image-rendering:pixelated] fill-black text-black [transform:none] opacity-100 w-10 h-10 absolute top-[calc(50%_-_20px)] z-[1] shrink-0 [filter:drop-shadow(rgba(255,255,255,0.25)_0px_1px_2px)] left-2.5 right-auto bottom-auto"
        >
          <div className="w-full h-full">
            <svg
              viewBox="0 0 40 40"
              width="100%"
              height="100%"
              className="w-full h-full block overflow-x-hidden overflow-y-hidden"
              data-svg-size="173"
            >
              <use href="#svg357967545_627" className="inline"></use>
            </svg>
          </div>
        </div>
        <div className="[--extracted-r6o4lv:var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255))] [--framer-paragraph-spacing:0px] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:nowrap] absolute z-[1] flex flex-col shrink-0 justify-start translate-x-0 -translate-y-2/4 outline-[3px] outline-[#1440fc] caret-[#1440fc] select-none left-auto right-[39px] top-2/4 bottom-auto">
          <p className='[--framer-text-color:var(--extracted-r6o4lv,var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255)))] text-white leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium [text-wrap-mode:nowrap] caret-white select-none my-0'>
            Fale conosco
          </p>
        </div>
      </a>
    </div>
  );
}

export default FooterContactButton;
