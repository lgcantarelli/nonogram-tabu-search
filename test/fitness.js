const assert = require('assert')

const fitness = require('../src/fitness')

describe('fitness', function() {
  it('should return 0 for a 3x3 simple correct solution', function() {
    const lengths = {
      columns: [1, 2, 3],
      rows:    [3, 2, 1]
    }

    const correctSolution = [
      [true,  true,   true],
      [false, true,   true],
      [false, false,  true]
    ]

    assert(fitness(lengths, correctSolution) == 0)
  })

  it('should return 0 for a 5x5 correct complex solution', function() {
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

    assert(fitness(lengths, correctSolution) == 0)
  })

  it('should return 804 for a 5x5 incorrect complex solution', function() {
    const lengths = {
      columns: [[1,1], [1,2],4,[1,2],[2,1]],
      rows:    [[1,1],5,1,3,[2,2]]
    }

    const solution = [
      [true, false, false, true, false],
      [true, true, true, true, true],
      [false, false, false, false, true],
      [true, true, true, false, false],
      [true, true, false, true, true]
    ]

    assert(fitness(lengths, solution) == 804)
  })

  it('should return 0 for a 6x6 correct complex solution', function() {
    const lengths = {
      columns: [[4,1],[2,2],[1,3],[1,1,2],4,[2,1,1]],
      rows:    [[1,1,1],[3,1],[2,2],[1,1,2],4,6]
    }

    const correctSolution = [
      [true, false, false, true, false, true],
      [true, true, true, false, false, true],
      [true, true, false, true, true, false],
      [true, false, true, false, true, true],
      [false, true, true, true, true, false],
      [true, true, true, true, true,true]
    ]

    assert(fitness(lengths, correctSolution) == 0)
  })

  it('should return 1404 for a 6x6 incorrect complex solution', function() {
    const lengths = {
      columns: [[4,1],[2,2],[1,3],[1,1,2],4,[2,1,1]],
      rows:    [[1,1,1],[3,1],[2,2],[1,1,2],4,6]
    }

    const correctSolution = [
      [true, false, false, true, false, true],
      [true, true, true, false, false, true],
      [true, true, false, true, true, false],
      [true, false, true, false, true, true],
      [false, true, true, true, true, false],
      [true, true, true, true, true,true]
    ]

    assert(fitness(lengths, correctSolution) == 0)
  })
})
