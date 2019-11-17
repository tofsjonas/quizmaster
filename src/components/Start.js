import React from 'react'
import StartButton from 'components/start/StartButton'
import NumberOfQuestionsPicker from 'components/start/NumberOfQuestionsPicker'
import CategoryPicker from 'components/start/CategoryPicker'
const Start = () => {
  return (
    <div className="Start">
      <div className="intro">Welcome to QuizMaster, the most amazing quiz game ever</div>
      <CategoryPicker />
      <NumberOfQuestionsPicker />
      <StartButton />
    </div>
  )
}
export default Start
