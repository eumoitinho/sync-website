import FooterLocationLink from './FooterLocationLink';
import FooterInstagramLink from './FooterInstagramLink';
import FooterTwitterLink from './FooterTwitterLink';

function FooterMeta() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-start content-center items-center gap-y-[200px] gap-x-[200px]"
      data-component-id="FooterMeta"
    >
      <div className="[--extracted-r6o4lv:rgb(246,244,239)] [--framer-paragraph-spacing:0px] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:nowrap] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <p className='[--font-selector:R0Y7R2Vpc3QtcmVndWxhcg==] [--framer-font-family:"Geist","Geist_Placeholder",sans-serif] [--framer-line-height:26px] [--framer-text-color:var(--extracted-r6o4lv,rgb(246,244,239))] text-[#f6f4ef] leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] [text-wrap-mode:nowrap] caret-[#f6f4ef] my-0'>
          © 2026 Sync. Design e desenvolvimento.
        </p>
      </div>
      <div className="opacity-100 w-px h-min relative flex overflow-x-hidden overflow-y-hidden grow shrink-0 basis-0 justify-between content-center items-center">
        <FooterLocationLink />
        <FooterInstagramLink />
        <FooterTwitterLink />
      </div>
    </div>
  );
}

export default FooterMeta;
