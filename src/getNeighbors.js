const solutionWasNotTested = require('./solutionWasNotTested')

function getNeighbors(solution) {
  let neighbors = []

  solution.forEach((row, i) => {
    row.forEach((column, j) => {
      let newNeighborRight = [...solution]
      let newNeighborLeft = [...solution]

      newNeighborRight[i] = shiftPositionRight(solution[i], j)
      newNeighborLeft[i] = shiftPositionLeft(solution[i], j)

      if ((solutionWasNotTested(neighbors, newNeighborLeft)) && (solutionWasNotTested(neighbors, newNeighborRight))) {
        if ((JSON.stringify(solution) != JSON.stringify(newNeighborRight))) {
          neighbors.push(newNeighborRight)
        }

        if ((JSON.stringify(solution) != JSON.stringify(newNeighborLeft))) {
          neighbors.push(newNeighborLeft)
        }
      }
    })
  })

  return neighbors
}

function shiftPositionRight(array, j) {
  let neighbor = [...array]

  if (j == (array.length - 1)) {
    neighbor[j] = array[0]
    neighbor[0] = array[j]
  } else {
    neighbor[j] = array[j+1]
    neighbor[j+1] = array[j]
  }

  return neighbor
}

function shiftPositionLeft(array, j) {
  let neighbor = [...array]

  if (j == 0) {
    neighbor[j] = array[array.length - 1]
    neighbor[array.length - 1] = array[j]
  } else {
    neighbor[j] = array[j-1]
    neighbor[j-1] = array[j]
  }

  return neighbor
}

// function shiftPositionUp(array, i, j) {
//   let neighbor = [...array]
//
//   if (i == 0) {
//     neighbor[i][j] = array[array.length - 1][j]
//     neighbor[array.length - 1][j] = array[i][j]
//   } else {
//     neighbor[i][j] = array[i-1][j]
//     neighbor[i-1][j] = array[i][j]
//   }
//
//   return neighbor
// }
//
// function shiftPositionDown(array, i, j) {
//   let neighbor = [...array]
//
//   if (i == (array.length - 1)) {
//     neighbor[i][j] = array[0][j]
//     neighbor[0][j] = array[i][j]
//   } else {
//     neighbor[i][j] = array[i+1][j]
//     neighbor[i+1][j] = array[i][j]
//   }
//
//   return neighbor
// }

module.exports = getNeighbors
