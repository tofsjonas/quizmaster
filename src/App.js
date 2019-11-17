import React from 'react'
import SettingsContextProvider from './contexts/SettingsContext'
import Hr from './components/Hr'
import GameContextProvider from 'contexts/GameContext'
import Main from 'Main'

function App() {
  return (
    <SettingsContextProvider>
      <GameContextProvider>
        <div className="App">
          <header>
            <h1 className="raised">
              Quiz
              <wbr />
              Master
            </h1>
          </header>
          <Hr />
          <Main />
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
        </div>
      </GameContextProvider>
    </SettingsContextProvider>
  )
}

export default App
