import React, { useContext } from 'react'
import Hr from 'components/Hr'
import GameHeader from 'components/game/GameHeader'
import GameMain from 'components/game/GameMain'
import LifeLines from 'components/game/LifeLines'
import ResetButton from 'components/ResetButton'
import { GameContext } from 'contexts/GameContext'
const Game = () => {
  const { counter, questions, current } = useContext(GameContext)
  return (
    counter === 0 &&
    questions.length > 0 &&
    questions.length > current && (
      <div className="Game">
        <ResetButton text="Quit" />
        <GameHeader />
        <Hr />
        <GameMain />
        <Hr />
        <LifeLines />
      </div>
    )
  )
}
export default Game
