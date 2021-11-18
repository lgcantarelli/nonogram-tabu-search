const generateFirstSolution = require('./src/generateFirstSolution')
const stoppingCondition     = require('./src/stoppingCondition')
const getNeighbors          = require('./src/getNeighbors')
const fitness               = require('./src/fitness')
const solutionWasNotTested  = require('./src/solutionWasNotTested')

function solveNonogram({ lengths, maxTabuSize, maxIterations, maxIterationsStuck }) {
  const rowsSize    = lengths.rows.length
  const columnsSize = lengths.columns.length

  if (rowsSize !== columnsSize)
    throw new Error(`Rows: ${rowsSize}, Columns: ${columnsSize} dont match!`)

  let bestSolution  = generateFirstSolution(lengths)
  let bestCandidate = bestSolution
  let [bestIteration, i] = [0, 0]

  const tabuList = []
  tabuList.push(bestCandidate)

  while (!stoppingCondition({ maxIterations, maxIterationsStuck, bestIteration, i, solution: bestSolution, lengths })) {
    i++

    const neighborhood = getNeighbors(bestCandidate)
    bestCandidate = neighborhood[0]

    neighborhood.forEach(candidate => {
      if (solutionWasNotTested(tabuList, candidate) && (fitness(candidate, lengths) < fitness(bestCandidate, lengths)))
        bestCandidate = candidate
    })

    if (fitness(bestCandidate, lengths) < fitness(bestSolution, lengths)) {
      bestSolution  = bestCandidate
      bestIteration = i
    }

    tabuList.push(bestCandidate)

    if (tabuList.length > maxTabuSize)
      tabuList.shift()
  }

  console.log('i', i)
  console.log('FITNESS', fitness(bestSolution, lengths))

  return bestSolution
}

module.exports = solveNonogram