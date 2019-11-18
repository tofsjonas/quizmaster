import { fetchQuestions } from 'lib/storage'

it('Fetches questions from Open Trivia Database', async done => {
  const success = res => {
    expect(res.length).toEqual(2)
    done()
  }
  const fail = err => {
    done(err)
  }

  const vars = { numberOfQuestions: 2, category: 11, success, fail }
  fetchQuestions(vars)
})
