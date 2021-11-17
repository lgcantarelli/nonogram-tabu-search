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

    console.log(`i: ${i}`, { bestCandidate })
    console.log(`i: ${i}`, { fitness: fitness(bestCandidate, lengths) })
    console.log(`i: ${i}`, 'neighborhood')
    neighborhood.forEach(solution => console.log(solution))

    neighborhood.forEach(candidate => {
      if (solutionWasNotTested(tabuList, candidate) && (fitness(candidate, lengths) < fitness(bestCandidate, lengths)))
        bestCandidate = candidate
    })

    if (fitness(bestCandidate, lengths) < fitness(bestSolution, lengths)) {
      bestSolution  = bestCandidate
      bestIteration = i
    }

    console.log(`i: ${i}`, { bestIteration })
    console.log(`i: ${i}`, { bestSolution })
    console.log(`i: ${i}`, { fitness: fitness(bestSolution, lengths) })
    console.log(`i: ${i}`, { bestCandidate })

    tabuList.push(bestCandidate)

    if (tabuList.length > maxTabuSize)
      tabuList.shift()
  }

  console.log('FITNESS', fitness(bestSolution, lengths))

  return bestSolution
}

function printNeighborhood(i, neighborhood) {

}

module.exports = solveNonogram