export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return action.payload
    case 'START_COUNTDOWN':
      return { ...state, counter: 3 }
    case 'TIMER_RESET':
      return { ...state, timer: state.timer_interval, timeElapsed: 0 }
    case 'TIMER_TICK':
      return { ...state, timer: state.timer - 1, timeElapsed: state.timeElapsed + 1 }
    case 'TIMER_plusTen':
      return {
        ...state,
        timer: state.timer + 10,
        plusTen: state.current,
      }

    case 'USE_FIFTYFIFTY':
      return { ...state, fiftyFifty: state.current }
    case 'COUNT_DOWN':
      return { ...state, counter: state.counter - 1 }
    case 'NEXT_QUESTION':
      return { ...state, current: state.current + 1 }

    case 'ANSWER_QUESTION':
      const correct = action.payload.correct ? 1 : 0
      const incorrect = action.payload.incorrect ? 1 : 0
      const unanswered = action.payload.unanswered ? 1 : 0
      return {
        ...state,
        correct: state.correct + correct,
        incorrect: state.incorrect + incorrect,
        unanswered: state.unanswered + unanswered,
        fastestTime: state.timeElapsed < state.fastestTime ? state.timeElapsed : state.fastestTime,

        current: state.current + 1,
        totalTime: state.totalTime + state.timeElapsed,
        timer: state.timer_interval,
        timeElapsed: 0,
        questions: state.questions.map((question, index) => {
          if (index === state.current) {
            question.stats = action.payload
          }
          return question
        }),
      }

    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload }
    default:
      return state
  }
}
