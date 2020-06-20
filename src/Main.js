import React, { useContext, lazy } from "react";
import Start from "components/Start";
import { GameContext } from "contexts/GameContext";
const Game = lazy(() => import("components/Game"));
const CountDown = lazy(() => import("components/start/CountDown"));
const Statistics = lazy(() => import("components/Statistics"));

const Main = () => {
  const { counter, questions, current } = useContext(GameContext);

  return (
    <main>
      {counter > 0 && <CountDown />}
      {counter === 0 && questions.length === 0 && <Start />}
      {counter === 0 && questions.length > 0 && questions.length > current && (
        <Game />
      )}
      {counter === 0 &&
        questions.length > 0 &&
        questions.length === current && <Statistics />}
    </main>
  );
};
export default Main;
