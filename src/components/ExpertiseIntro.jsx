import AnimatedHeadline from './AnimatedHeadline'

function ExpertiseIntro() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-6 gap-x-6"
      data-component-id="ExpertiseIntro"
    >
      <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[958px] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <AnimatedHeadline
          lines={['Especialistas em crescimento', 'para o seu mercado']}
          className='[--framer-text-color:var(--token-552258ca-1ffb-4ed5-a59b-3c1658009e73,rgb(5,8,20))] text-[#050814] leading-[78px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[60px] tracking-[-2.4px] text-left [word-break:break-word] caret-[#050814] my-0'
          wordClassName="[white-space-collapse:collapse] [text-wrap-mode:nowrap] [word-break:break-word] caret-[#050814]"
        />
      </div>
      <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[958px] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <p className='[--framer-text-color:var(--token-552258ca-1ffb-4ed5-a59b-3c1658009e73,rgb(5,8,20))] text-[#050814] leading-[32.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium text-[18px] tracking-[-0.36px] [word-break:break-word] caret-[#050814] my-0'>
          Criamos, resolvemos e colaboramos para transformar ideias em
          experiências digitais consistentes. A Sync acompanha sua marca em cada
          etapa, da estratégia à execução.
        </p>
      </div>
    </div>
  )
}

export default ExpertiseIntro
