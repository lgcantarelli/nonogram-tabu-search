function getNeighbors(solution) {
  let neighbors = []

  for (let i = 0; i < solution.length; i++) {
    tempSolution = [...solution]

    tempSolution[i] = arrayShift(tempSolution[i])

    if ((JSON.stringify(solution) != JSON.stringify(tempSolution))) {
      neighbors.push(tempSolution)
    }
  }

  return neighbors
}

function arrayShift(array) {
  let newArray = [...array]

  if ((array[0] == 1) && (array[(array.length) - 1] == 1)) {
    return newArray
  }

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      newArray[i] = array[(array.length) - 1]
    } else {
      newArray[i] = array[i-1]
    }
  }

  return newArray
}
