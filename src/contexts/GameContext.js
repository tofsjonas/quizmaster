import React, { createContext, useReducer } from 'react'
import { gameReducer } from 'reducers/gameReducer'
export const GameContext = createContext()

const initialState = {
  counter: 0,
  timer: 30,
  current: 1,
  fifty_fifty: true,
  plus_ten: true,
  questions: [],
}

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const resetGame = () => {
    dispatch({ type: 'RESET_GAME', payload: initialState })
  }
  return <GameContext.Provider value={{ ...state, dispatch, resetGame }}>{children}</GameContext.Provider>
}

export default GameContextProvider
