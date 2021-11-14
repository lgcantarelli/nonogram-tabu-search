const assert = require('assert')

const generateRowsFromSolution = require('../src/generateRowsFromSolution')

describe('generateRowsFromSolution', function() {
  it('should return the correct lengths for a simple solution', function() {
    const solution = [
      [true, true, false],
      [true, false, true]
    ]

    assert.deepEqual(generateRowsFromSolution(solution), [2, [1, 1]])
  })

  it('should return the correct lengths for a complex solution', function() {
    const solution = [
      [true, true, false,  true,  false],
      [true, false, true,  false, true],
      [true, true, false,  true,  true],
      [false, false, true, false, true],
      [true, true, true,   true,  true]
    ]

    assert.deepEqual(generateRowsFromSolution(solution), [[2, 1], [1, 1, 1], [2, 2], [1, 1], 5])
  })
})