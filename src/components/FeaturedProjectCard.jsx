function FeaturedProjectCard({
  href,
  imageSrc,
  imageAlt,
  name,
  tag,
  impact,
}) {
  return (
    <div
      className="min-w-[280px] basis-[calc(50%_-_12px)] h-min relative flex flex-col grow shrink-0 justify-center content-start items-start gap-y-5 gap-x-5"
      data-component-id="FeaturedProjectCard"
    >
      <div className="contents">
        <div className="w-full relative shrink-0">
          <a
            href={href}
            className="opacity-100 text-[#1440fc] w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col justify-start content-start items-start gap-y-6 gap-x-6 caret-[#1440fc]"
          >
            <div className="opacity-100 w-full h-[520px] relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
              <div
                className="bg-repeat [background-position-x:left] [background-position-y:top] absolute bg-[64px] caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px] inset-0"
                data-style-id="style-0-1779169346308"
              ></div>
              <div className="opacity-100 w-px h-full relative grow shrink-0 basis-0 caret-[#1440fc]">
                <div className="absolute caret-[#1440fc] inset-0">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-[center_center] w-full h-full block object-cover caret-[#1440fc]"
                  />
                </div>
              </div>
            </div>
            <div className="opacity-100 w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-start content-start items-start gap-y-3 gap-x-3 caret-[#1440fc]">
              <div className="[--framer-link-text-color:rgb(20,64,252)] [--framer-link-text-decoration:underline] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full relative flex flex-col shrink-0 justify-start outline-[3px] outline-[#1440fc] caret-[#1440fc]">
                <h3 className='text-[#050814] leading-[44.8px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[32px] tracking-[-1.28px] text-left [word-break:break-word] caret-[#050814] my-0'>
                  {name}
                </h3>
              </div>
              <div className="opacity-100 relative shrink-0 caret-[#1440fc]">
                <div className="opacity-100 bg-[#1440fc] w-min h-min relative flex overflow-x-hidden overflow-y-hidden justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] px-3 py-2.5 rounded-br-[30px] rounded-t-[30px] rounded-bl-[30px]">
                  <div className="[--extracted-r6o4lv:var(--variable-reference-yQWBq_UaH-RnrOHuHTm)] [--framer-link-text-color:rgb(20,64,252)] [--framer-link-text-decoration:underline] [--variable-reference-yQWBq_UaH-RnrOHuHTm:var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255))] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:nowrap] relative flex flex-col shrink-0 justify-start outline-[3px] outline-[#1440fc] caret-[#1440fc]">
                    <p className='[--framer-text-color:var(--extracted-r6o4lv,var(--variable-reference-yQWBq_UaH-RnrOHuHTm))] text-white leading-[16px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium tracking-[0.8px] uppercase text-left [text-wrap-mode:nowrap] caret-white my-0'>
                      {tag}
                    </p>
                  </div>
                </div>
              </div>
              <div className="[--framer-link-text-color:rgb(20,64,252)] [--framer-link-text-decoration:underline] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full relative flex flex-col shrink-0 justify-start outline-[3px] outline-[#1440fc] caret-[#1440fc]">
                <p className='text-[#050814] leading-[30px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[20px] tracking-[-0.4px] [word-break:break-word] caret-[#050814] my-0'>
                  {impact}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
