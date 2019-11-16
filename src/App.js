import React from 'react'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="raised">QuizMaster</h1>
      </header>

      <main>
        <div className="Game">
          <div className="RestartButton button">Restart</div>
          <div className="ThinLine"></div>
          <div className="GameHeader">
            <div className="GameNumber">
              Question: <span className="counter">3 / 10</span>
            </div>
            <div className="GameTimer">
              Time left: <span className="clock">00:23</span>
            </div>
          </div>
          <div className="ThinLine"></div>
          <div className="GameMain">
            <div className="Question raised">What is your favourite colour?</div>
            <div className="Answers">
              <div className="AnswerButton button">Blue</div>
              <div className="AnswerButton button">Red</div>
              <div className="AnswerButton button">Green</div>
              <div className="AnswerButton button">Yellow</div>
            </div>
          </div>
          <div className="ThinLine"></div>
          <div className="LifeLines">
            <div className="TimeButton button">+10 seconds</div>
            <div className="lifeline-title raised">Lifelines</div>
            <div className="FiftyFiftyButton button">50/50</div>
          </div>
          <div className="ThinLine"></div>
        </div>
      </main>

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
    </div>
  )
}

export default App
