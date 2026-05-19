function PlanningStepCard() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col justify-start content-start items-start gap-y-10 gap-x-10 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]"
      data-component-id="PlanningStepCard"
    >
      <img
        src="https://placehold.co/150x150"
        className="opacity-100 w-[81px] aspect-square relative block shrink-0"
      />
      <div className="opacity-100 w-full h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-4 gap-x-4">
        <div className="[--framer-paragraph-spacing:0px] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full relative flex flex-col shrink-0 justify-start outline-[3px]">
          <h3 className='text-[#050814] leading-[44.8px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[32px] tracking-[-1.28px] text-left [word-break:break-word] caret-[#050814] my-0'>
            2. Planejamento
          </h3>
        </div>
        <div className="[--framer-paragraph-spacing:0px] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full relative flex flex-col shrink-0 justify-start outline-[3px]">
          <p className='text-[#050814] leading-[32.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] text-[18px] tracking-[-0.36px] [word-break:break-word] caret-[#050814] my-0'>
            Desenvolvemos um roteiro completo e detalhado para garantir uma execução fluida, eficiente e bem coordenada em cada etapa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanningStepCard;
