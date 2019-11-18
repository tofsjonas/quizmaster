//https://stackoverflow.com/questions/5796718/html-entity-decode
const span = document.createElement('span')

function decodeSpecialChars(text) {
  return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
    span.innerHTML = entity
    return span.innerHTML
  })
}

const sanitizeJSON = res => {
  return res.map(question => {
    question.question = decodeSpecialChars(question.question)
    question.correct_answer = decodeSpecialChars(question.correct_answer)
    question.incorrect_answers = question.incorrect_answers.map(answer => {
      return decodeSpecialChars(answer)
    })
    return question
  })
}
export default sanitizeJSON
