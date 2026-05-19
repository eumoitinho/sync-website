import ExpertiseIntro from './ExpertiseIntro';
import IndustryList from './IndustryList';

function ExpertiseSection() {
  return (
    <div
      id="especialidades"
      className="w-full h-min relative flex shrink-0 justify-center content-start items-start gap-y-[130px] gap-x-[130px]"
      data-component-id="ExpertiseSection"
    >
      <div className="w-px relative flex flex-col grow shrink-0 basis-0 justify-between content-start items-start self-stretch">
        <ExpertiseIntro />
        <IndustryList />
      </div>
      <div className="w-px aspect-[0.76875_/_1] sticky z-[1] flex overflow-x-hidden overflow-y-hidden grow shrink-0 basis-0 justify-center content-end items-end gap-y-0 gap-x-0 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px] top-[60px] bottom-auto inset-x-auto">
        <div className="contents">
          <div className="js-parallax opacity-100 absolute top-[-100px] bottom-[-100px] z-[1] shrink-0 will-change-transform translate-x-0 translate-y-[178.498px] inset-x-0">
            <div className="absolute inset-0">
              <img
                width="1920"
                height="2881"
                src="https://framerusercontent.com/images/HUKo5g157kD3upXyCYp63Q7U0Y.jpg"
                alt="two people setting and using laptop"
                className="object-[center_center] w-full h-full aspect-[auto_1920_/_2881] block object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertiseSection;
