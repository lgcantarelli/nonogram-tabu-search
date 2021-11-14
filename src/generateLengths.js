const generateRowsFromSolution = require('./generateRowsFromSolution')

function generateLengths(solution) {
  let lengths = []
  let generatedRows = generateRowsFromSolution(solution)
  let generatedColumns = generateColumnsFromSolution(solution)

  lengths.push(generatedRows)
  lengths.push(generatedColumns)

  return (lengths)
}

function generateColumnsFromSolution(solution) {
  transpose = m => m[0].map((x,i) => m.map(x => x[i]))
  let newSolution = transpose(solution)

  columnClues = generateRowsFromSolution(newSolution)

  return columnClues
}

module.exports = generateLengths