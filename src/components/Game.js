import React from 'react'
import GameHeader from 'components/game/GameHeader'
import GameMain from 'components/game/GameMain'
import LifeLines from 'components/game/LifeLines'
import Hr from 'components/Hr'
const Game = () => {
  return (
    <div className="Game">
      <GameHeader />
      <Hr />
      <GameMain />
      <Hr />
      <LifeLines />
    </div>
  )
}
export default Game
