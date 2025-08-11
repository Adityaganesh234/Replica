import React from 'react'

type TypewriterProps = {
  words: string[]
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseTimeMs?: number
  className?: string
  highlightClassName?: string
}

export default function Typewriter({
  words,
  typingSpeedMs = 90,
  deletingSpeedMs = 50,
  pauseTimeMs = 1200,
  className,
  highlightClassName,
}: TypewriterProps): JSX.Element {
  const [displayText, setDisplayText] = React.useState('')
  const [wordIndex, setWordIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    if (words.length === 0) return
    const currentWord = words[wordIndex % words.length]

    if (!isDeleting && displayText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTimeMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIndex((idx) => (idx + 1) % words.length)
      return
    }

    const nextText = isDeleting
      ? currentWord.slice(0, displayText.length - 1)
      : currentWord.slice(0, displayText.length + 1)

    const delay = isDeleting ? deletingSpeedMs : typingSpeedMs
    const timeout = setTimeout(() => setDisplayText(nextText), delay)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseTimeMs])

  return (
    <span className={[highlightClassName ?? '', className ?? ''].join(' ').trim()}>
      {displayText}
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-0.5 translate-y-[0.05em] bg-current align-middle animate-blink" />
    </span>
  )
}