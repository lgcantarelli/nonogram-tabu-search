function isSolutionCorrect(lengths, solution) {
   let originalLengths = []
  originalLengths.push(lengths.rows)
  originalLengths.push(lengths.columns)

  let newLengths = generateLengths(solution)

  return (JSON.stringify(originalLengths) == JSON.stringify(newLengths))
}

function generateLengths(solution) {
  let lengths = []
  let generatedRows = generateRowsFromSolution(solution)
  let generatedColumns = generateColumnsFromSolution(solution)

  lengths.push(generatedRows)
  lengths.push(generatedColumns)

  return (lengths)
}

function generateRowsFromSolution(solution) {
  let rowClues = []
  let tempArray = []

  for (let i = 0; i < solution.length; i++) {
    let value = 1

    for (let j = 0; j < solution[i].length; j++) {
      let originalJ = j
      if (solution[i][j] == true) {
        if (j == (solution[i].length)) {
          value +=1
        } else {
          while (solution[i][j+1] && (j < (solution[i].length))) {
            value += 1
            j++    
          }
        }
        tempArray.push(value)
        value = 1
      }
    }
    if (tempArray.length > 1)
      rowClues.push(tempArray)
    else
      rowClues.push(tempArray[0])
    
    tempArray = []
  }
  return rowClues
}

function generateColumnsFromSolution(solution) {
  transpose = m => m[0].map((x,i) => m.map(x => x[i]))
  let newSolution = transpose(solution) 

  let columnClues = []
  let tempArray = []

  for (let i = 0; i < newSolution.length; i++) {
    let value = 1

    for (let j = 0; j < newSolution[i].length; j++) {
      let originalJ = j
      if (newSolution[i][j] == true) {
        if (j == (newSolution[i].length)) {
          value +=1
        } else {
          while (newSolution[i][j+1] && (j < (newSolution[i].length))) {
            value += 1
            j++    
          }
        }
        tempArray.push(value)
        value = 1
      }
    }
    if (tempArray.length > 1)
      columnClues.push(tempArray)
    else
      columnClues.push(tempArray[0])
    
    tempArray = []
  }
  return columnClues
}

module.exports = isSolutionCorrect
