function getNeighbors(solution) {
  let neighbors = []

  for (let i = 0; i < solution.length; i++) {
    tempSolutionRight = [...solution]
    tempSolutionLeft = [...solution]

    tempSolutionRight[i] = arrayShiftRight(tempSolutionRight[i])

    if ((JSON.stringify(solution) != JSON.stringify(tempSolutionRight))) {
      neighbors.push(tempSolutionRight)
    }

    tempSolutionLeft[i] = arrayShiftLeft(tempSolutionLeft[i])

    if ((JSON.stringify(solution) != JSON.stringify(tempSolutionLeft))) {
      neighbors.push(tempSolutionLeft)
    }
  }

  return neighbors
}

function arrayShiftRight(array) {
  let newArray = [...array]

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      newArray[i] = array[(array.length) - 1]
    } else {
      newArray[i] = array[i-1]
    }
  }

  return newArray
}

function arrayShiftLeft(array) {
  let newArray = [...array]

  for (let i = 0; i < array.length; i++) {
    if (i == (array.length - 1)) {
      newArray[i] = array[0]
    } else {
      newArray[i] = array[i+1]
    }
  }

  return newArray
}

module.exports = getNeighbors