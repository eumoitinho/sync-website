import FooterMeta from './FooterMeta';
import SyncLogo from './SyncLogo';

function FooterBottom() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-10 gap-x-10"
      data-component-id="FooterBottom"
    >
      <div className="opacity-100 w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
        <SyncLogo
          variant="white"
          className="opacity-100 w-full max-w-[920px] aspect-[2.25_/_1] relative shrink-0 will-change-transform"
        />
      </div>
      <div className="opacity-100 w-full h-px relative shrink-0">
        <div className="bg-white w-full h-full relative overflow-x-hidden overflow-y-hidden opacity-20"></div>
      </div>
      <FooterMeta />
    </div>
  );
}

export default FooterBottom;
