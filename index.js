const generateFirstSolution = require('./src/generateFirstSolution')
const stoppingCondition     = require('./src/stoppingCondition')
const getNeighbors          = require('./src/getNeighbors')
const fitness               = require('./src/fitness')
const solutionWasNotTested  = require('./src/solutionWasNotTested')

function solveNonogram({ lengths, maxTabuSize, maxIterations }) {
  let bestSolution = generateFirstSolution(lengths)
  let bestCandidate = bestSolution

  const tabuList = []

  tabuList.push(bestCandidate)

  let i = 0

  while (!stoppingCondition(maxIterations, i, bestSolution, lengths)) {
    const neighborhood = getNeighbors(bestCandidate)
    bestCandidate = neighborhood[0]

    neighborhood.forEach(candidate => {
      if (solutionWasNotTested(tabuList, candidate) && (fitness(candidate, lengths) < fitness(bestCandidate, lengths)))
        bestCandidate = candidate
    })

    if (fitness(bestCandidate, lengths) < fitness(bestSolution, lengths))
        bestSolution = bestCandidate

    tabuList.push(bestCandidate)

    if (tabuList.length > maxTabuSize)
        tabuList.shift()
        
    i++
  }

  return bestSolution
}


module.exports = solveNonogram
