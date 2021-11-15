const generateLengths = require('./generateLengths')

function fitness(solution, lengths) {
  let fRows = fitnessRows(solution, lengths)
  let fColumns = fitnessColumns(solution, lengths)

  return fRows + fColumns
}

function fitnessRows(solution, lengths) {
  let fitness1 = 0
  let fitness2 = 0
  let simplifiedLengths = simplifyArray(lengths.rows)
  let newSolution = intSolution(solution)
  let simplifiedSolution = simplifyArray(newSolution)

  let normalized = normalizeArrays(lengths.rows, generateLengths(solution)[0])
  let normalizedLengths = normalized.normalizedLengths
  let normalizedSolutionLengths = normalized.normalizedSolutionLengths

  for (let i = 0; i < simplifiedLengths.length; i++) {
    fitness1 += Math.abs(simplifiedLengths[i] - simplifiedSolution[i])
  }

  for (let i = 0; i < normalizedLengths.length; i++) {
    for (let j = 0; j < normalizedLengths[i].length; j++) {
      fitness2 += Math.abs(normalizedLengths[i][j] - normalizedSolutionLengths[i][j])
    }
  }
  fitness2 *= 100

  return fitness1 + fitness2
}

function fitnessColumns(solution, lengths) {
  let fitness1 = 0
  let fitness2 = 0
  let simplifiedLengths = simplifyArray(lengths.columns)

  const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
  let newSolution = intSolution(transpose(solution))
  let simplifiedSolution = simplifyArray(newSolution)

  let normalized = normalizeArrays(lengths.columns, generateLengths(solution)[1])
  let normalizedLengths = normalized.normalizedLengths
  let normalizedSolutionLengths = normalized.normalizedSolutionLengths

  for (let i = 0; i < simplifiedLengths.length; i++) {
    fitness1 += Math.abs(simplifiedLengths[i] - simplifiedSolution[i])
  }

  for (let i = 0; i < normalizedLengths.length; i++) {
    for (let j = 0; j < normalizedLengths[i].length; j++) {
      fitness2 += Math.abs(normalizedLengths[i][j] - normalizedSolutionLengths[i][j])
    }
  }
  fitness2 *= 100

  return fitness1 + fitness2
}

// Simplifica os vetores
// Exemplo: [[1,2],1,[1,1]] => [3,1,2]
function simplifyArray(array) {
  let simplifiedArray = []
  let tempValue = 0

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        tempValue += array[i][j]
      }
    } else {
      tempValue += array[i]
    }

    simplifiedArray.push(tempValue)
    tempValue = 0
  }

  return simplifiedArray
}

// Normaliza os tamanhos dos vetores para o cálculo
// do segundo termo da equação de fitness
// Exemplo:
// [[1,1],4,2,[3,1]] => [[1,1],[4,0],[2,0],[3,1]]
function normalizeArrays(lengths, solution) {
  let biggestArray = 1
  let normalizedLengths = lengths
  let normalizedSolutionLengths = solution

  for (let i = 0; i < normalizedLengths.length; i++) {
    if (!Array.isArray(normalizedLengths[i])) {
      normalizedLengths[i] = [normalizedLengths[i]]
    }
    if (!Array.isArray(normalizedSolutionLengths[i])) {
      normalizedSolutionLengths[i] = [normalizedSolutionLengths[i]]
    }
  }

  for (let i = 0; i < normalizedLengths.length; i++) {
    if (((normalizedLengths[i].length) >= normalizedSolutionLengths[i].length) && (normalizedLengths[i].length > biggestArray)) {
      biggestArray = normalizedLengths[i].length
    } else if ((normalizedSolutionLengths[i].length) > biggestArray) {
      biggestArray = normalizedSolutionLengths[i].length
    }
  }

  for (let i = 0; i < normalizedLengths.length; i++) {
    while (normalizedLengths[i].length < biggestArray) {
      normalizedLengths[i].push(0)
    }

    while (normalizedSolutionLengths[i].length < biggestArray) {
      normalizedSolutionLengths[i].push(0)
    }
  }

  return {
    normalizedLengths,
    normalizedSolutionLengths
  }
}

// Converte os vetores de boolean para [0,1]
// Exemplo: [true,true,false] = [1,0,0]
function intSolution (solution) {
  let newSolution = solution

  for (let i = 0; i < solution.length; i++) {
    for (let j = 0; j < solution[i].length; j++) {
      if (solution[i][j] == true) {
        newSolution[i][j] = 1
      } else {
        newSolution[i][j] = 0
      }
    }
  }

  return newSolution
}

module.exports = fitness
