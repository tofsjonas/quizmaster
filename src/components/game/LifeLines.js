import React from 'react'
import PlusTenButton from './PlusTenButton'
import FiftyFiftyButton from './FiftyFiftyButton'
const LifeLines = () => {
  return (
    <div className="LifeLines">
      <PlusTenButton />
      <div className="lifeline-title raised">Lifelines</div>
      <FiftyFiftyButton />
    </div>
  )
}
export default LifeLines
