import HeaderContactButton from './HeaderContactButton';
import SyncLogo from './SyncLogo';

function Header() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] opacity-100 w-px h-min max-w-[1440px] relative flex grow shrink-0 basis-0 justify-between content-center items-center rounded-br-none rounded-t-none rounded-bl-none"
      data-component-id="Header"
    >
      <div className="opacity-100 w-min h-min relative flex shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 pl-2.5 py-2.5">
        <a
          href="./"
          aria-label="Sync"
          className="opacity-100 text-[#1440fc] w-[132px] h-12 relative block shrink-0 caret-[#1440fc]"
        >
          <SyncLogo variant="color" className="w-full h-full" />
        </a>
      </div>
      <HeaderContactButton />
    </div>
  );
}

export default Header;
