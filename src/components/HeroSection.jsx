import HeroHeadline from './HeroHeadline';
import HeroIntro from './HeroIntro';

function HeroSection() {
  return (
    <div
      className="w-full h-min relative z-[1] flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 pt-[180px] px-10"
      data-component-id="HeroSection"
    >
      <div className="w-px h-min max-w-[1440px] relative flex flex-col grow shrink-0 basis-0 justify-center content-center items-center gap-y-20 gap-x-20">
        <div className="w-full h-min relative flex flex-col shrink-0 justify-start content-end items-end gap-y-[30px] gap-x-[30px]">
          <HeroHeadline />
          <HeroIntro />
        </div>
        <div className="w-full aspect-[1.7_/_1] relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-end items-end gap-y-0 gap-x-0 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
          <div className="contents">
            <div className="js-parallax opacity-100 absolute top-[-100px] bottom-[-100px] z-[1] shrink-0 will-change-transform translate-x-0 translate-y-[474.975px] inset-x-0">
              <div className="absolute inset-0">
                <img
                  width="2400"
                  height="1600"
                  src="https://framerusercontent.com/images/ZU5CfMjB0OA1HjswybVkX2CYiU.jpg"
                  alt="equipe em uma conversa criativa no escritório da Sync"
                  className="object-[center_center] w-full h-full aspect-[auto_2400_/_1600] block object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
