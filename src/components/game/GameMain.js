import React, { useContext, useState, useEffect, useRef } from 'react'
import AnswerButton from './AnswerButton'
import { GameContext } from 'contexts/GameContext'
import shuffleArray from 'lib/shuffleArray'
import ResetButton from 'components/ResetButton'
const GameMain = () => {
  const { questions, current, timer, dispatch, plusTen, timer_interval } = useContext(GameContext)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [fifties, setFifties] = useState([])
  var interval = useRef()

  useEffect(() => {
    interval.current = setInterval(function() {
      dispatch({ type: 'TIMER_TICK' })
    }, 1000)

    return () => {
      clearInterval(interval.current)
    }
  }, [dispatch])

  useEffect(() => {
    const prepareQuestion = params => {
      const rand = Math.floor(Math.random() * 3)
      const obj = questions[current]
      const answers = [...obj.incorrect_answers, obj.correct_answer]
      shuffleArray(answers)
      const fifties = [...obj.incorrect_answers]
      fifties.splice(rand, 1)
      setFifties(fifties)
      setQuestion(obj.question)
      setAnswers(answers)
    }

    if (current !== questions.length) {
      prepareQuestion()
    }
  }, [current, questions, dispatch])

  useEffect(() => {
    if (timer === 0) {
      const timeElapsed = timer_interval - timer

      const stats = {
        unanswered: true,
        timeElapsed,
      }
      dispatch({ type: 'ANSWER_QUESTION', payload: stats })

      // dispatch({ type: 'UNANSWERED_QUESTION', payload: stats })
    }
  }, [timer, dispatch, current, plusTen, timer_interval])

  return (
    <div className="GameMain">
      <ResetButton text="Quit" />
      <div className="Question">{question}</div>
      <div className="Answers">
        {answers.map((answer, index) => {
          return <AnswerButton key={'a' + index} text={answer} fifties={fifties} />
        })}
      </div>
    </div>
  )
}
export default GameMain
