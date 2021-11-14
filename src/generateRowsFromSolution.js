function generateRowsFromSolution(solution) {
  let rowLengths = []

  solution.forEach((row, i) => {
    const length = []
    let currValue = 0

    row.forEach((column, j) => {
      if (column) {
        currValue++

        if (currValue == 1) {
          length.push(currValue)
        } else {
          length[length.length - 1] = currValue
        }
      } else {
        currValue = 0
      }
    })

    rowLengths[i] = length.length == 1 ? length[0] : length
  })

  return rowLengths
}

module.exports = generateRowsFromSolution