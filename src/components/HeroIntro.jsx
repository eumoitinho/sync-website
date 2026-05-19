import ScrollCue from './ScrollCue';

function HeroIntro() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-end items-end gap-y-[30px] gap-x-[30px]"
      data-component-id="HeroIntro"
    >
      <ScrollCue />
      <div className="contents">
        <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-px max-w-[550px] relative flex flex-col grow shrink-0 basis-0 justify-start outline-[3px]">
          <p className='text-[#050814] leading-[38.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[24px] [word-break:break-word] caret-[#050814] my-0'>
            Identificamos os gargalos que impedem sua marca de atingir o próximo nível. Com estratégia clara, esses pontos viram caminho para crescimento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroIntro;
