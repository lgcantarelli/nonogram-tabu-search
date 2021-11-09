const assert = require('assert')

const isSolutionCorrect = require('../src/isSolutionCorrect')

describe('isSolutionCorrect', function() {
  it('should return true for a simple correct solution', function() {
    const lengths = {
      columns: [1, 2, 3],
      rows:    [3, 2, 1]
    }

    const correctSolution = [
      [true,  true,   true],
      [false, true,   true],
      [false, false,  true]
    ]

    assert(isSolutionCorrect(lengths, correctSolution))
  })


  it('should return true for a complex correct solution', function() {
    const lengths = {
      columns: [2, 1, [1, 1]],
      rows:    [[1, 1], 2, 1]
    }

    const correctSolution = [
      [true,  false, true ],
      [true,  true,  false],
      [false, false, true ]
    ]

    assert(isSolutionCorrect(lengths, correctSolution))
  })

  it('should return false for a incorrect solution', function() {
    const lengths = {
      columns: [3, 3, 3],
      rows:    [3, 2, 1]
    }

    const correctSolution = [
      [true,  false, true ],
      [true,  true,  false],
      [false, false, true ]
    ]

    assert(isSolutionCorrect(lengths, correctSolution) === false)
  })
})
