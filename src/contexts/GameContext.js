import React, { createContext, useReducer } from 'react'
import { gameReducer } from 'reducers/gameReducer'
export const GameContext = createContext()

// easier to change during testing...
const timer_interval = 30

// vissa av dessa grejer skulle kanska hamna i statsContext?
const initialState = {
  counter: 0,
  timer: timer_interval,
  timeElapsed: 0,
  fastestTime: timer_interval,
  timer_interval: timer_interval,
  current: 0,
  fiftyFifty: -1,
  plusTen: -1,
  questions: [],
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  totalTime: 0,
}

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const resetGame = () => {
    dispatch({ type: 'RESET_GAME', payload: initialState })
  }
  return <GameContext.Provider value={{ ...state, dispatch, resetGame }}>{children}</GameContext.Provider>
}

export default GameContextProvider
