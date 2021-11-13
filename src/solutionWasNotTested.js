function solutionWasNotTested(tabuList, solution) {
  const stringifiedSolution = JSON.stringify(solution)

  return tabuList.every(solution => (
    JSON.stringify(solution) !== stringifiedSolution
  ))
}

module.exports = solutionWasNotTested