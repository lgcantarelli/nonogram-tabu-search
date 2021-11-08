function generateFirstSolution(lengths) {
  const solution = []

  const rowsLengths = lengths.rows
  const rowSize     = rowsLengths.length

  rowsLengths.forEach((rowLengths, i) => {
    let row = []
    rowLengths = lengthsToArray(rowLengths)

    rowLengths.forEach((length, j) => {
      if (j >= 1)
        row.push(false)

      const newRowSize = rowLengths[j+1] ? length : rowSize - row.length

      row = [...row, ...generateRow(length, newRowSize)]
    })

    solution[i] = row
  })

  return solution
}

function lengthsToArray(rowLengths) {
  return Array.isArray(rowLengths) ? rowLengths : [rowLengths]
}

function generateRow(length, rowSize) {
  const row = new Array(rowSize)

  for (let i = 0; i < rowSize; i++) {
    row[i] = i < length ? true : false
  }

  return row
}

module.exports = generateFirstSolution