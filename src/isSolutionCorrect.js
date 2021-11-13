const generateLengths = require('./generateLengths')

function isSolutionCorrect(lengths, solution) {
  let originalLengths = []
  originalLengths.push(lengths.rows)
  originalLengths.push(lengths.columns)

  let newLengths = generateLengths(solution)

  return (JSON.stringify(originalLengths) == JSON.stringify(newLengths))
}

module.exports = isSolutionCorrect