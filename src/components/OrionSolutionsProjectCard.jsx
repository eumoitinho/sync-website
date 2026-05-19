import OrionSolutionsProjectMeta from './OrionSolutionsProjectMeta';

function OrionSolutionsProjectCard() {
  return (
    <div
      className="w-px h-min relative flex flex-col grow-[1.3] shrink-0 basis-0 justify-center content-start items-start gap-y-5 gap-x-5"
      data-component-id="OrionSolutionsProjectCard"
    >
      <div className="contents">
        <div className="w-full relative shrink-0">
          <a
            href="./work/orion-solutions"
            className="opacity-100 text-[#1440fc] w-full h-[746px] relative flex overflow-x-hidden overflow-y-hidden flex-col justify-start content-start items-start gap-y-6 gap-x-6 caret-[#1440fc]"
          >
            <div className="opacity-100 w-full h-px relative flex overflow-x-hidden overflow-y-hidden grow shrink-0 basis-0 justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
              <div
                className="bg-repeat [background-position-x:left] [background-position-y:top] absolute bg-[64px] caret-[#1440fc] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px] inset-0"
                data-style-id="style-1-1779169346308"
              ></div>
              <div className="opacity-100 w-px h-full relative grow shrink-0 basis-0 caret-[#1440fc]">
                <div className="absolute caret-[#1440fc] inset-0">
                  <img
                    src="https://framerusercontent.com/images/OE9cBbkbWulMC3j6abqSaE4yDg.png"
                    alt="Elementos 3D"
                    className="object-[center_center] w-full h-full block object-cover caret-[#1440fc]"
                  />
                </div>
              </div>
            </div>
            <OrionSolutionsProjectMeta />
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrionSolutionsProjectCard;
