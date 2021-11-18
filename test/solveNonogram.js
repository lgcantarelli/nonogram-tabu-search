const assert = require('assert')

const solveNonogram = require('../index')
const fitness = require('../src/fitness')

describe('solveNonogram', function() {
  describe('until it gets the final solution or exceed maxIterationsStuck', function() {
    it('should return the final solution for a simple 3x3 case', function() {
      const lengths = {
        rows:    [1, 2, 3],
        columns: [3, 2, 1]
      }

      const solution = [
        [true, false, false],
        [true, true,  false],
        [true, true,  true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxTabuSize: 10,
        maxIterationsStuck: 5
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 3x3 case', function() {
      const lengths = {
        rows:    [1, 2, 2],
        columns: [[1,1], 2, 1]
      }

      const solution = [
        [true,  false, false],
        [false, true,  true],
        [true,  true,  false]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxTabuSize: 10,
        maxIterationsStuck: 5
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 3x3 case', function() {
      const lengths = {
        rows:    [[1,1], [1,1], 2],
        columns: [2, 1, 3]
      }

      const solution = [
        [true,  false, true],
        [true,  false, true],
        [false,  true, true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxTabuSize: 10,
        maxIterationsStuck: 5
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 4x4 case', function() {
      const lengths = {
        rows:    [[1,2], [1,1], 3, 1],
        columns: [3, 1, [1,1], [2,1]]
      }

      const solution = [
        [true,  false, true, true],
        [true,  false, false, true],
        [true,  true,  true, false],
        [false, false, false, true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxTabuSize: 5,
        maxIterationsStuck: 5
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 4x4 case', function() {
      const lengths = {
        rows:    [3, 4, 1, [1,2]],
        columns: [[1,1], 2, [2,1], 4]
      }

      const solution = [
        [false, true,  true,  true],
        [true,  true,  true,  true],
        [false, false, false, true],
        [true,  false, true,  true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxTabuSize: 5,
        maxIterationsStuck: 20
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a simple 5x5 case', function() {
      const lengths = {
        rows:    [1, 2, 3, 4, 5],
        columns: [5, 4, 3, 2, 1]
      }

      const solution = [
        [true, false, false, false, false],
        [true, true,  false, false, false],
        [true, true,  true,  false, false],
        [true, true,  true,  true,  false],
        [true, true,  true,  true,  true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize: 50,
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a complex 5x5 case', function() {
      const lengths = {
        rows:    [[1,3], 2,     [1,1,1], 1, [3,1]],
        columns: [[3,1], [1,2], [1,1,1], 1, [1,1,1]]
      }

      const solution = [
        [true,  false, true,  true,  true],
        [true,  true,  false, false, false],
        [true,  false, true,  false, true],
        [false, true,  false, false, false],
        [true,  true,  true,  false, true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 5,
        maxTabuSize: 5,
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a complex 5x5 case', function() {
      const lengths = {
        rows:    [3, [2,2], 1, [1,1], [1,1]],
        columns: [[1,1], 2, [1,3], 2, [1,1]]
      }

      const solution = [
        [ false, true, true, true, false ],
        [ true, true, false, true, true ],
        [ false, false, true, false, false ],
        [ true, false, true, false, false ],
        [ false, false, true, false, true ]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 100,
        maxTabuSize: 20,
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 6x6 case', function() {
      const lengths = {
        rows:    [3, [1,4], [1,3], [1,1], [2,2], 3],
        columns: [[2,1], [1,4], [2,2], 2, [2,1], 4]
      }

      const solution = [
        [true,  true,  true,  false, false, false],
        [true,  false, true,  true,  true,  true],
        [false, true, false,  true,  true,  true],
        [false,  true, false,  false,  false, true],
        [false,  true, true,  false,  true,  true],
        [true, true, true, false,  false, false]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 50,
        maxTabuSize:        10
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 6x6 case', function() {
      const lengths = {
        rows:    [3, [2,1], 4, [4,1], 5, 1],
        columns: [[2,1], [1,3], 5, 5, 1, [1,2]]
      }

      const solution = [
        [false, true,  true,  true,  false, false],
        [false, false, true,  true,  false, true],
        [true,  true,  true,  true,  false, false],
        [true,  true,  true,  true,  false, true],
        [false, true,  true,  true,  true,  true],
        [true,  false, false, false, false, false]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 10,
        maxTabuSize:        5
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a regular 6x6 case', function() {
      const lengths = {
        rows:    [[2,1], [1,3], [1, 2], 3, 4, 1],
        columns: [1, 5, 2, 5, [2,1], 2]
      }

      const solution = [
        [true,  true, false,  false, false, true],
        [false, true, false,  true,  true,  true],
        [false, true, false,  true,  true,  false],
        [false,  true, true,  true,  false, false],
        [false,  true, true,  true,  true,  false],
        [false, false, false, true,  false, false]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize:        20
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a complex 6x6 case', function() {
      const lengths = {
        rows:    [[1,1,1],[3,1],[2,2],[1,1,2],4,6],
        columns: [[4,1],[2,2],[1,3],[1,1,2],4,[2,1,1]]
      }

      const solution = [
        [true, false, false, true, false, true],
        [true, true, true, false, false, true],
        [true, true, false, true, true, false],
        [true, false, true, false, true, true],
        [false, true, true, true, true, false],
        [true, true, true, true, true,true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize:        200
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a very complex 10x10 case', function() {
      //236: https://homepages.cwi.nl/~aeb/games/....html
      const lengths = {
        rows:    [[2,1,1,1], [1,1], [2,2], [2,3], [2,1], [1,1,1,1], [1,2], 3, [4,1], [1,1,1,1]],
        columns: [[1,2,1], [1,1], [1,1,1,2], [1,2,1], [1,1,2], [1,1], 6, [2, 1], [3,1], [1,1,1,1]]
      }

      const solution = [
        [true, true, false, true, false, true, false, false, false, true],
        [false, false, true, false, false, false, false, false, true, false],
        [false, false, false, true, true, false, false, false, true, true],
        [false, false, true, true, false, false, true, true, true, false],
        [false, false, false, false, false, false, true, true, false, true],
        [true, false, true, false, true, false, true, false, false, false],
        [true, false, false, false, false, true, true, false, false, false],
        [false, false, false, false, false, false, true, true, true, false],
        [false, true, true, true, true, false, true, false, false, false],
        [true, false, true, false, true, false, false, false, false, true]
      ]

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize:        50
      })

      assert.deepEqual(bestSolution, solution)
    })

    it('should return the final solution for a very complex 10x10 case', function() {
      //222: https://homepages.cwi.nl/~aeb/games/jpuzzlegraded/jp0098878.html
      const lengths = {
        rows:    [[2,1], 1, [2,2,1,1], [2,2], [2,1], 1, [2,2], [1,1,2], 5, [2,1]],
        columns: [[1,1,1,1], [1,1,1,1,1], [1,2,1], 1, [3,1], [1,1,1], [1,2], [2,3], 1, [3,1]]
      }

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize:        50
      })

      assert(fitness(bestSolution, lengths) === 0)
    })

    it('should return the final solution for a complex 10x10 case', function() {
      //https://homepages.cwi.nl/~aeb/games/jpuzzlegraded/jp0000022.html
      const lengths = {
        rows: [[1,1,2,3], [1,4,2], [1,2,1], [1,5], [1,1,2], [1,3,4], [5,1], [1,2,3], [3,3], [1,6,1]],
        columns: [[1,1,1], [2,1,1], [1,7], [2,2,2], [3,4,1], [2,1,2,1], [3,1,2], [1,1,1,3], [2,3,2], [2,5,1]]
      }

      const bestSolution = solveNonogram({
        lengths,
        maxIterationsStuck: 500,
        maxTabuSize:        100
      })

      assert(fitness(bestSolution, lengths) === 0)
    })
  })
})
