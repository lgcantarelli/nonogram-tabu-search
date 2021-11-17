const fitness = require('./fitness')

function isSolutionCorrect(lengths, solution) {
  return fitness(solution, lengths) === 0
}

module.exports = isSolutionCorrect