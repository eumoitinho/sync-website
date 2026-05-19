import { Fragment } from 'react'

const statementWords = [
  'Na',
  'Sync,',
  'criamos',
  'estratégias',
  'digitais',
  'que',
  'geram',
  'crescimento',
  'mensurável.',
  'Com',
  'foco',
  'em',
  'performance,',
  'ajudamos',
  'empresas',
  'a',
  'avançar.',
]

function AboutStatement() {
  return (
    <div className="contents" data-component-id="AboutStatement">
      <div className='text-[#050814] leading-[1.2] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-semibold text-[60px] sticky opacity-0 caret-[#050814] top-0 bottom-auto inset-x-auto'>
        {statementWords.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span className="opacity-100 [transition-behavior:normal,normal] duration-[0.2s,0.2s] ease-[ease-out,ease-out] delay-[0s,0s] transition-[filter,opacity] inline-block blur-0 caret-[#050814] mr-[15px]">
              {word}
            </span>
            {index < statementWords.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default AboutStatement
