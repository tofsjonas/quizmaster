import React, { useContext, useState, useEffect } from 'react'
import { GameContext } from 'contexts/GameContext'
import ResetButton from './ResetButton'
const Statistics = () => {
  const { questions, fiftyFifty, plusTen, correct, incorrect, totalTime, unanswered, fastestTime } = useContext(GameContext)
  const [average, setAverage] = useState(0)
  const [lifeLines, setLifeLines] = useState([])

  useEffect(() => {
    const avg = (totalTime / questions.length) * 10
    setAverage(Math.round(avg) / 10)

    const life_lines = []
    if (fiftyFifty !== -1) {
      life_lines.push('50/50')
    }
    if (plusTen !== -1) {
      life_lines.push('+10s')
    }
    setLifeLines(life_lines)
  }, [fiftyFifty, plusTen, questions, totalTime])

  return (
    <div className="Statistics">
      <h2>Statistics</h2>
      <div>
        <label>Correct answers:</label>
        <span>{correct}</span>
      </div>
      <div>
        <label>Incorrect answers:</label>
        <span>{incorrect}</span>
      </div>
      <div>
        <label>Unanswered questions:</label>
        <span>{unanswered}</span>
      </div>
      <div>
        <label>Average time:</label>
        <span>{average} s</span>
      </div>
      <div>
        <label>Fastest time:</label>
        <span>{fastestTime} s</span>
      </div>
      <div>
        <label>LifeLines used:</label>
        <span>{lifeLines.length ? lifeLines.join(' and ') : 'None!'}</span>
      </div>

      <ResetButton text="Restart QuizMaster" />
    </div>
  )
}
export default Statistics
