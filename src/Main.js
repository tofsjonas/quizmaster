import React, { useContext } from 'react'
import Start from 'components/Start'
import CountDown from 'components/start/CountDown'
import Game from 'components/Game'
import Statistics from 'components/Statistics'
import { GameContext } from 'contexts/GameContext'
const Main = () => {
  const { counter, questions, current } = useContext(GameContext)

  return (
    <main>
      {counter > 0 && <CountDown />}
      {counter === 0 && questions.length === 0 && <Start />}
      {counter === 0 && questions.length > 0 && questions.length > current && <Game />}
      {counter === 0 && questions.length > 0 && questions.length === current && <Statistics />}
    </main>
  )
}
export default Main
