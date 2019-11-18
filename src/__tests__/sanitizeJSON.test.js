import sanitizeJSON from 'lib/sanitizeJSON'
// import { JSDOM } from 'jsdom'
// const dom = new JSDOM()
// global.document = dom.window.document
// global.window = dom.window
it('Sanitizes JSON', () => {
  const results = [
    {
      category: 'Entertainment: Books',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Who wrote the &quot;A Song of Ice And Fire&quot; fantasy novel series?',
      correct_answer: 'George R. R. Martin',
      incorrect_answers: ['George Lucas', 'George Orwell', 'George Eliot'],
    },
  ]
  const sanitized = sanitizeJSON(results)
  expect(sanitized[0].question).toEqual('Who wrote the "A Song of Ice And Fire" fantasy novel series?')
})
