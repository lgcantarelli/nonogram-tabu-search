const isSolutionCorrect = require('./isSolutionCorrect')

function stoppingCondition({ maxIterations, maxIterationsStuck, bestIteration, i, solution, lengths }) {
  if (maxIterations)
    return i === maxIterations

  return (i - bestIteration) >= maxIterationsStuck || isSolutionCorrect(lengths, solution)
}

module.exports = stoppingCondition