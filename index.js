const generateFirstSolution = require('./src/generateFirstSolution')

function solveNonogram({ lengths, maxTabuSize, maxIterations }) {
  // const lengths = {
  //   rows:    [3, 1, 2],
  //   columns: [1, 3, [1, 1]],
  // }

  let bestSolution = generateFirstSolution(lengths)
  let bestCandidate = bestSolution
  const tabuList = []
  tabuList.push(bestCandidate)

  while (!stoppingCondition(maxIterations, i, bestSolution, lengths)) {
    const neighborhood = getNeighbors(bestCandidate)
    bestCandidate = neighborhood[0]

    for (const candidate of neighborhood) {
      if (solutionWasNotTested(tabuList, candidate) && (fitness(candidate, lengths) > fitness(bestCandidate, lengths)))
        bestCandidate = candidate
    }

    if (fitness(bestCandidate, lengths) > fitness(bestSolution, lengths))
        bestSolution = bestCandidate

    tabuList.push(bestCandidate)

    if (tabuList.length > maxTabuSize)
        tabuList.shift()
  }

  return bestSolution
}

function stoppingCondition(maxIterations, i, solution, lengths) {
  if (maxIterations)
    return i === maxIterations

  return isSolutionCorrect(lengths, solution)
}

function getNeighbors(solution) {

}

function solutionWasNotTested(tabuList, solution) {

}

function fitness(solution, lengths) {

}

solveNonogram()