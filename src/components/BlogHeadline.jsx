import AnimatedHeadline from './AnimatedHeadline'

function BlogHeadline() {
  return (
    <div
      className="w-[57%] h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-[60px] gap-x-[60px]"
      data-component-id="BlogHeadline"
    >
      <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[958px] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <AnimatedHeadline
          lines={['Artigos recentes', 'da Sync']}
          className='[--framer-text-color:var(--token-552258ca-1ffb-4ed5-a59b-3c1658009e73,rgb(5,8,20))] text-[#050814] leading-[78px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[60px] tracking-[-2.4px] text-left [word-break:break-word] caret-[#050814] my-0'
          wordClassName="[white-space-collapse:collapse] [text-wrap-mode:nowrap] [word-break:break-word] caret-[#050814]"
        />
      </div>
    </div>
  )
}

export default BlogHeadline
