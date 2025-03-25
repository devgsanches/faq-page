import { FaqQuestionsContainer } from '../faq-questions-container'
import './styles.css'

import { FaqTitleContainer } from '../faq-title-container'

export function FaqContainer() {
  return (
    <div className="faq-container">
      <FaqTitleContainer />
      <FaqQuestionsContainer />
    </div>
  )
}
