function isSolutionCorrect(lengths, solution) {
  let generatedLengths = generateLengths(solution)
  let newLengths = []
  newLengths.push(transformFormat(lengths.rows))
  newLengths.push(transformFormat(lengths.columns))

  return (JSON.stringify(generatedLengths) == JSON.stringify(newLengths))
}

function generateLengths(solution) {
  const lengths = []
  let lengthsRows = []
  let lengthsCols = []
  let currentRow
  let currentCol
  let count
  const arrayColumn = (arr, n) => arr.map(x => x[n]);

  for (let i = 0; i < solution.length; i++) {
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

function transformFormat(lengths) {
  newLength = lengths

  for (let i = 0; i < lengths.length; i++) {
    let temp = lengths[i]
    newValue = 0

    if (Array.isArray(temp)) {
      for (j = 0; j < temp.length; j++) {
        newValue += temp[j]
        newLength[i] = newValue
      }
    } else {
      newLength[i] = temp
    }
  }

  return newLength
}

module.exports = isSolutionCorrect
