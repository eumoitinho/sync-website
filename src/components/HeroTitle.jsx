import AnimatedHeadline from './AnimatedHeadline'

function HeroTitle() {
  return (
    <div className="contents" data-component-id="HeroTitle">
      <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[800px] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <AnimatedHeadline
          as="h1"
          lines={['Sync', 'Estratégia', 'que escala']}
          className='text-[#050814] leading-[108px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] text-[120px] text-left [word-break:break-word] caret-[#050814] my-0'
          wordClassName="font-bold [white-space-collapse:collapse] [text-wrap-mode:nowrap] [word-break:break-word] caret-[#050814]"
        />
      </div>
    </div>
  )
}

export default HeroTitle
