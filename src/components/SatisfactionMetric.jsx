import SatisfactionMetricValue from './SatisfactionMetricValue';

function SatisfactionMetric() {
  return (
    <div
      className="w-px h-min relative flex flex-col grow shrink-0 basis-0 justify-start content-start items-start gap-y-2 gap-x-2 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]"
      data-component-id="SatisfactionMetric"
    >
      <SatisfactionMetricValue />
      <div className="contents">
        <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full relative flex flex-col shrink-0 justify-start outline-[3px]">
          <p className='[--framer-text-color:var(--token-552258ca-1ffb-4ed5-a59b-3c1658009e73,rgb(5,8,20))] text-[#050814] leading-[32.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium text-[18px] tracking-[-0.36px] [word-break:break-word] caret-[#050814] my-0'>
            Taxa de satisfação
          </p>
        </div>
      </div>
    </div>
  );
}

export default SatisfactionMetric;
