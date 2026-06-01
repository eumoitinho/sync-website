function IndustryList() {
  const industries = [
    ['#0556f9', 'Ecommerce e Varejo'],
    ['#3d66ff', 'SaaS e Tecnologia'],
    ['#0b2fd9', 'Saúde e Bem estar'],
    ['#1440fc', 'Serviços B2B'],
    ['#0556f9', 'Eventos e Entretenimento'],
  ]

  return (
    <div
      className="w-full h-min relative flex flex-wrap shrink-0 justify-start content-start items-start gap-y-5 gap-x-5"
      data-component-id="IndustryList"
    >
      {industries.map(([color, label]) => (
        <div
          key={label}
          className="w-min h-min relative flex shrink-0 justify-start content-center items-center gap-y-2 gap-x-2 px-8 py-5 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
          style={{ backgroundColor: color }}
        >
          <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:nowrap] relative flex flex-col shrink-0 justify-start outline-[3px]">
            <p className='[--framer-text-color:var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255))] text-white leading-[16px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium tracking-[0.8px] uppercase text-left [text-wrap-mode:nowrap] caret-white my-0'>
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndustryList;
