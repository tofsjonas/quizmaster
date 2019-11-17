import React from 'react'
import Game from 'components/Game'
import Start from 'components/Start'
import SettingsContextProvider from './contexts/SettingsContext'
import Hr from './components/Hr'
import GameContextProvider from 'contexts/GameContext'
import CountDown from './components/start/CountDown'

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
          <main>
            <Start />
            <CountDown />
            <Game />
          </main>
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
