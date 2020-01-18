import React, { useContext } from 'react'
import { GameContext } from 'contexts/GameContext'
import Hr from 'components/Hr'
const Footer = () => {
  const { counter, questions } = useContext(GameContext)

  return (
    counter === 0 &&
    questions.length === 0 && (
      <>
        <Hr />
        <footer>
          <div>
            Powered by <a href="https://reactjs.org/">React</a>
          </div>
          <div>
            Questions from <a href="https://opentdb.com/">Open Trivia Database</a>
          </div>
          <div>
            Coded by <a href="https://www.linkedin.com/in/jonas-earendel/">Jonas Earendel</a>
          </div>
        </footer>
      </>
    )
  )
}
export default Footer
