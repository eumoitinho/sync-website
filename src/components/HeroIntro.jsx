import ScrollCue from './ScrollCue';

function HeroIntro() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-end items-end gap-y-[30px] gap-x-[30px]"
      data-component-id="HeroIntro"
    >
      <ScrollCue />
      <div className="contents">
        <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-px max-w-[550px] relative flex flex-col grow shrink-0 basis-0 justify-start gap-y-6 gap-x-6 outline-[3px]">
          <p className='text-[#050814] leading-[38.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[24px] [word-break:break-word] caret-[#050814] my-0'>
            A Sync cria sites, landing pages, marcas e campanhas digitais para empresas que precisam de clareza, execução e acompanhamento.
          </p>
          <div className="w-full h-min relative flex flex-wrap shrink-0 justify-start content-center items-center gap-y-3 gap-x-3">
            <a
              href="./work"
              className="bg-[#1440fc] text-white h-[52px] relative flex shrink-0 justify-center content-center items-center px-5 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
            >
              <p className='leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium [text-wrap-mode:nowrap] my-0'>
                Ver projetos
              </p>
            </a>
            <a
              href="./contact"
              className="border border-[#050814]/20 text-[#050814] h-[52px] relative flex shrink-0 justify-center content-center items-center px-5 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
            >
              <p className='leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium [text-wrap-mode:nowrap] my-0'>
                Fale conosco
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroIntro;
