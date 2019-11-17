import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { GameContext } from 'contexts/GameContext'
import { fetchQuestions } from 'lib/storage'
import { SettingsContext } from 'contexts/SettingsContext'
const StartButton = () => {
  const { dispatch } = useContext(GameContext)
  const { category, numberOfQuestions } = useContext(SettingsContext)

  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = () => {
    const success = res => {
      dispatch({ type: 'SET_QUESTIONS', payload: res })
    }
    const fail = err => {
      console.log('SPACETAG: StartButton.js', err)
    }

    fetchQuestions({
      category,
      numberOfQuestions,
      success,
      fail,
    })

    //start countDown
    dispatch({ type: 'START_COUNTDOWN' })
  }

  return (
    <div onClick={handleClick} className="StartButton button">
      Start Quiz
    </div>
  )
}
export default StartButton
