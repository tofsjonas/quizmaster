import axios from 'axios'
import sanitizeJSON from './sanitizeJSON'

export const fetchQuestions = ({ numberOfQuestions, category, success, fail }) => {
  const remoteUrl = 'https://opentdb.com/api.php?amount=' + numberOfQuestions + '&category=' + category + '&type=multiple'
  // const res = {
  //   response_code: 0,
  //   results: [
  //     {
  //       category: 'Entertainment: Books',
  //       type: 'multiple',
  //       difficulty: 'medium',
  //       question: 'Who wrote the &quot;A Song of Ice And Fire&quot; fantasy novel series?',
  //       correct_answer: 'George R. R. Martin',
  //       incorrect_answers: ['George Lucas', 'George Orwell', 'George Eliot'],
  //     },
  //     {
  //       category: 'Entertainment: Books',
  //       type: 'multiple',
  //       difficulty: 'hard',
  //       question: 'Which author and poet famously wrote the line, &quot;The female of the species is more deadly than the male&quot;?',
  //       correct_answer: 'Rudyard Kipling',
  //       incorrect_answers: ['Edgar Allan Poe', 'William Shakespeare', 'William Wordsworth'],
  //     },
  //   ],
  // }

  // setTimeout(() => {
  //   success(res.results)
  // }, 100)
  axios
    .get(remoteUrl, { crossdomain: true })
    .then(response => {
      if (response.status === 200) {
        success(sanitizeJSON(response.data.results))
      } else fail(new Error('Unknown error'))
    })
    .catch(err => {
      fail(err)
    })
}
