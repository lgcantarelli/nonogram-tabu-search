const isSolutionCorrect = require('./isSolutionCorrect')

function stoppingCondition(maxIterations, i, solution, lengths) {
  if (maxIterations)
    return i === maxIterations

  return isSolutionCorrect(lengths, solution)
}

module.exports = stoppingCondition