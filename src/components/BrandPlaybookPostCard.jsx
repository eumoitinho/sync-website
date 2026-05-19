import BrandPlaybookPostMeta from './BrandPlaybookPostMeta';

function BrandPlaybookPostCard() {
  return (
    <div className="contents" data-component-id="BrandPlaybookPostCard">
      <div className="w-full relative shrink-0 [align-self:start] justify-self-start">
        <a
          href="./blog/plan-first-win-bigger-the-pre-design-playbook"
          className="opacity-100 text-[#1440fc] w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col justify-start content-start items-start gap-y-6 gap-x-6 caret-[#1440fc]"
        >
          <div className="opacity-100 w-full aspect-square relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
            <div
              className="bg-repeat [background-position-x:left] [background-position-y:top] absolute bg-[64px] caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px] inset-0"
              data-style-id="style-8-1779169346308"
            ></div>
            <div className="opacity-100 w-px h-full relative grow shrink-0 basis-0 caret-[#1440fc]">
              <div className="absolute caret-[#1440fc] inset-0">
                <img
                  width="1600"
                  height="2400"
                  src="https://framerusercontent.com/images/D0i8VrIebhmCxF0MEgu4VTwn4Kk.jpeg"
                  alt="Pessoa usando laptop"
                  className="object-[center_center] w-full h-full aspect-[auto_1600_/_2400] block object-cover caret-[#1440fc]"
                />
              </div>
            </div>
          </div>
          <BrandPlaybookPostMeta />
        </a>
      </div>
    </div>
  );
}

export default BrandPlaybookPostCard;
