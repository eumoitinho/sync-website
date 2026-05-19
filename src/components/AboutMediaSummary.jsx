function AboutMediaSummary() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-4 gap-x-4"
      data-component-id="AboutMediaSummary"
    >
      <div className="w-full aspect-[1.7_/_1] relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-end items-end gap-y-0 gap-x-0 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
        <div className="w-full h-full relative z-[1] shrink-0">
          <video
            src="https://placehold.co/100"
            className="bg-[rgba(0,0,0,0)] object-[50%_50%] w-full h-full block object-cover rounded-br-none rounded-t-none rounded-bl-none"
          ></video>
        </div>
      </div>
      <div className="[transform:none] [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[958px] relative flex flex-col shrink-0 justify-start outline-[3px]">
        <p className='text-[#050814] leading-[26px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] [word-break:break-word] caret-[#050814] my-0'>
          Criamos, resolvemos e colaboramos para transformar ideias em experiências digitais consistentes. A Sync acompanha sua marca em cada etapa do processo.
        </p>
      </div>
    </div>
  );
}

export default AboutMediaSummary;
