import FooterCallToAction from './FooterCallToAction';
import FooterBottom from './FooterBottom';

function Footer() {
  return (
    <div
      className="opacity-100 w-px h-min max-w-[1440px] relative z-[1] flex flex-col grow shrink-0 basis-0 justify-center content-start items-start gap-y-[120px] gap-x-[120px]"
      data-component-id="Footer"
    >
      <FooterCallToAction />
      <FooterBottom />
    </div>
  );
}

export default Footer;
