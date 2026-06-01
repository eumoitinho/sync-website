import TestimonialsHeadline from './TestimonialsHeadline';

function TestimonialsHeader() {
  return (
    <div
      className="w-[57%] h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-[60px] gap-x-[60px]"
      data-component-id="TestimonialsHeader"
    >
      <div className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-6 gap-x-6">
        <TestimonialsHeadline />
        <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[958px] relative flex flex-col shrink-0 justify-start outline-[3px]">
          <p className='[--framer-text-color:var(--token-552258ca-1ffb-4ed5-a59b-3c1658009e73,rgb(5,8,20))] text-[#050814] leading-[32.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium text-[18px] tracking-[-0.36px] [word-break:break-word] caret-[#050814] my-0'>
            Trabalhamos com equipes que precisam tirar projetos do papel com clareza, organização e acompanhamento próximo.
          </p>
        </div>
        <div className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-wrap shrink-0 justify-start content-center items-center gap-y-6 gap-x-6">
          {['Live Academia', 'Clinimais', 'Pesados Web', 'IASPE'].map(
            (client) => (
              <div
                key={client}
                className="border border-[#050814]/15 text-[#050814] h-[44px] relative flex shrink-0 justify-center content-center items-center px-4 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
              >
                <p className='leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold tracking-[-0.2px] [text-wrap-mode:nowrap] my-0'>
                  {client}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsHeader;
