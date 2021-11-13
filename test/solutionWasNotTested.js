const assert = require('assert')

const solutionWasNotTested = require('../src/solutionWasNotTested')

describe('solutionWasNotTested', function() {
  it ('should return true if the given solution is not present in the tabu list', function() {
    const solution = [
      [true,  false, false],
      [true,  true,  false],
      [false, false, true]
    ]

    const tabuList = [
      [
        [false, false, true],
        [false, true,  true],
        [true, true,  false]
      ],
      [
        [true, true, true],
        [true, false, false],
        [true, true, false]
      ]
    ]

    assert(solutionWasNotTested(tabuList, solution))
  })

  it ('should return false if the given solution is present in the tabu list', function() {
    const solution = [
      [true,  false, false],
      [true,  true,  false],
      [false, false, true]
    ]

    const tabuList = [
      [
        [false, false, true],
        [false, true,  true],
        [true, true,  false]
      ],
      [
        [true,  false, false],
        [true,  true,  false],
        [false, false, true]
      ]
    ]

    assert(solutionWasNotTested(tabuList, solution) === false)
  })
})