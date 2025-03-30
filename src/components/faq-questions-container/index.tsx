import './styles.scss'
import { FaqQuestion } from '../faq-question'

export function FaqQuestionsContainer() {
  const questions = [
    {
      id: 1,
      question: 'Como posso abrir uma conta?',
      response:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eligendi facere atque iusto quisquam sunt, aperiam culpa excepturi quam alias ea, asperiores consequuntur reprehenderit veniam, doloremque neque amet ipsum rerum.',
    },
    {
      id: 2,
      question:
        'Quais são os critérios para abertura e manutenção de uma conta?',
      response:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eligendi facere atque iusto quisquam sunt, aperiam culpa excepturi quam alias ea, asperiores consequuntur reprehenderit veniam, doloremque neque amet ipsum rerum.',
    },
    {
      id: 3,
      question: 'Como funciona a biometria?',
      response:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eligendi facere atque iusto quisquam sunt, aperiam culpa excepturi quam alias ea, asperiores consequuntur reprehenderit veniam, doloremque neque amet ipsum rerum.',
    },
  ]

  return (
    <div className="faq-questions-container">
      {questions.map(question => {
        return (
          <FaqQuestion
            key={question.id}
            question={question.question}
            response={question.response}
          />
        )
      })}
    </div>
  )
}
