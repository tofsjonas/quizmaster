import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
const AnswerButton = ({ text, fifties }) => {
  const { questions, current, fiftyFifty, dispatch } = useContext(GameContext)

  const handleClick = () => {
    const correct = text === questions[current].correct_answer
    const incorrect = !correct
    const stats = {
      correct,
      incorrect,
    }

    dispatch({ type: 'ANSWER_QUESTION', payload: stats })

    // if (correct) {
    //   dispatch({ type: 'CORRECT_ANSWER', payload: stats })
    // } else {
    //   dispatch({ type: 'INCORRECT_ANSWER', payload: stats })
    // }
  }
  return (
    <button disabled={fiftyFifty === current && fifties.indexOf(text) !== -1} onClick={handleClick} className="AnswerButton">
      {text}
    </button>
  )
}
export default AnswerButton
