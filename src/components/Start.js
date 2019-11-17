import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import StartButton from 'components/start/StartButton'
import NumberOfQuestionsPicker from 'components/start/NumberOfQuestionsPicker'
import CategoryPicker from 'components/start/CategoryPicker'
import { GameContext } from 'contexts/GameContext'
const Start = () => {
  const { counter, questions } = useContext(GameContext)

  return (
    counter === 0 &&
    questions.length === 0 && (
      <div className="Start">
        <div className="intro">Welcome to QuizMaster, the most amazing quiz game ever</div>
        <CategoryPicker />
        <NumberOfQuestionsPicker />
        <StartButton />
      </div>
    )
  )
}
export default Start
