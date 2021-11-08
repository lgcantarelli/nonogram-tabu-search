function isSolutionCorrect(lengths, solution) {
  let generatedLengths = generateLengths(solution)

  return (JSON.stringify(generatedLengths) == JSON.stringify(lengths))
}

function generateLengths(solution) {
  const lengths = []
  let lengthsRows = []
  let lengthsCols = []
  let currentRow
  let currentCol
  let count
  const arrayColumn = (arr, n) => arr.map(x => x[n]);

  for (i = 0; i < solution.length; i++) {
    currentRow = solution[i]
    count = currentRow.filter(Boolean).length;
    lengthsRows.push(count)

    currentCol = arrayColumn(solution,i)
    count = currentCol.filter(Boolean).length;
    lengthsCols.push(count)
  }

  lengths.push(lengthsRows)
  lengths.push(lengthsCols)

  return lengths
}

module.exports = isSolutionCorrect