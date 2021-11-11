const assert = require('assert')

const isSolutionCorrect = require('../src/isSolutionCorrect')

describe('isSolutionCorrect', function() {
  it('should return true for a 3x3 simple correct solution', function() {
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


  it('should return true for a 3x3 complex correct solution', function() {
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

  it('should return true for a 5x5 complex correct solution', function() {
    const lengths = {
      columns: [[3,1], [1,2],[1,1,1],1,[1,1,1]],
      rows:    [[1,3],2,[1,1,1],1,[3,1]]
    }

    const correctSolution = [
      [true, false, true, true, true],
      [true, true, false, false, false],
      [true, false, true, false, true],
      [false, true, false, false, false],
      [true, true, true, false, true]
    ]

    assert(isSolutionCorrect(lengths, correctSolution))
  })

  it('should return false for a 3x3 incorrect solution', function() {
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

  it('should return false for a 5x5 complex incorrect solution', function() {
    const lengths = {
      columns: [4, [1,2],[1,1,1],1,[1,1,1]],
      rows:    [[1,3],2,3,1,[3,1]]
    }

    const correctSolution = [
      [true, false, true, true, true],
      [true, true, false, false, false],
      [true, false, true, false, true],
      [false, true, false, false, false],
      [true, true, true, false, true]
    ]

    assert(isSolutionCorrect(lengths, correctSolution) === false)
  })
})
