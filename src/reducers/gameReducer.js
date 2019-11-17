export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return action.payload
    case 'START_COUNTDOWN':
      return { ...state, counter: 3 }
    case 'START_TIMER':
      return { ...state, timer: 30 }
    case 'TIMER_TICK':
      return { ...state, timer: state.timer - 1 }
    case 'ADD_TEN_SECONDS':
      return { ...state, timer: state.timer + 10, plus_ten: false }
    case 'USE_FIFTY_FIFTY':
      return { ...state, fifty_fifty: false }
    case 'COUNT_DOWN':
      return { ...state, counter: state.counter - 1 }
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload }
    default:
      return state
  }
}
