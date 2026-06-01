const statementParagraphs = [
  'A Sync começou em 2015 como um estúdio de design e evoluiu para uma operação de desenvolvimento, marca e marketing digital.',
  'Já atendemos mais de 50 clientes no Brasil, nos EUA e na Europa, com entregas para saúde, educação, música, eventos e tecnologia.',
  'Hoje, unimos repertório técnico e olhar estratégico para criar projetos digitais claros, consistentes e prontos para crescer.',
]

function AboutStatement() {
  return (
    <div className="contents" data-component-id="AboutStatement">
      <div className='text-[#050814] leading-[1.2] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[42px] opacity-100 caret-[#050814]'>
        {statementParagraphs.map((paragraph) => (
          <p key={paragraph} className="[word-break:break-word] caret-[#050814] mt-0 mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default AboutStatement
