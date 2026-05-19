function AnimatedHeadline({ as: Tag = 'h2', lines, className, wordClassName }) {
  return (
    <Tag className={className}>
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`}>
          {line.split(' ').map((word, wordIndex, lineWords) => (
            <span key={`${word}-${wordIndex}`}>
              <span className={wordClassName}>
                {[...word].map((letter, letterIndex) => (
                  <span
                    key={`${letter}-${letterIndex}`}
                    className="opacity-100 [transform:none] [text-wrap-mode:nowrap] [word-break:break-word] inline-block will-change-transform"
                  >
                    {letter}
                  </span>
                ))}
              </span>
              {wordIndex < lineWords.length - 1 ? ' ' : null}
            </span>
          ))}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  )
}

export default AnimatedHeadline
