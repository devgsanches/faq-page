import './styles.css'
import { useState } from 'react'

interface FaqQuestionProps {
  question: string
  response: string
}

export function FaqQuestion(props: FaqQuestionProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenResponse(event: React.MouseEvent<HTMLButtonElement>) {
    const span = event.currentTarget
      .closest('.question')
      ?.querySelector('.question-content span')

    const buttonIcon = event.currentTarget
      .closest('.question')
      ?.querySelector('button img')

    setIsOpen(previousState => !previousState)

    if (!isOpen) {
      span?.classList.remove('hidden')
      buttonIcon?.setAttribute('src', './src/assets/minimize-button.svg')
    } else {
      span?.classList.add('hidden')
      buttonIcon?.setAttribute('src', './src/assets/expand-button.svg')
    }
  }

  return (
    <div className="question">
      <div className="question-content">
        <p>{props.question}</p>
        <span className="hidden">{props.response}</span>
      </div>
      <button onClick={handleOpenResponse}>
        <img src="./src/assets/expand-button.svg" alt="Expand button" />
      </button>
    </div>
  )
}
