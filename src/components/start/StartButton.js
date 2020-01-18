import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
import { fetchQuestions } from 'lib/storage'
import { SettingsContext } from 'contexts/SettingsContext'
import sanitizeJSON from 'lib/sanitizeJSON'

const StartButton = () => {
  const { dispatch } = useContext(GameContext)
  const { category, numberOfQuestions } = useContext(SettingsContext)

  const handleClick = () => {
    const success = res => {
      dispatch({ type: 'SET_QUESTIONS', payload: sanitizeJSON(res) })
    }
    const fail = err => {
      // TODO error handling...
      console.log('SPACETAG: StartButton.js', err)
    }

    // run in parallell, three seconds should be plenty, unless something goes wrong...
    fetchQuestions({
      category,
      numberOfQuestions,
      success,
      fail,
    })

    dispatch({ type: 'START_COUNTDOWN' })
  }

  return (
    <button onClick={handleClick} className="StartButton button">
      Start Quiz
    </button>
  )
}
export default StartButton
