const assert = require('assert')

const solveNonogram = require('../index')
const fitness = require('../src/fitness')

describe('solveNonogram', function() {
  describe('with maxIterations', function() {
    it('should return the best solution for a complex 5x5 case until 1000 iterations', function() {
      const lengths = {
        rows:    [3, 4, 4, 3, 3, 1],
        columns: [2, 2, 5, 4, 4, 1],
      }

      const solution = [
        [true, true, true, false, false, false],
        [true, true, true, true, false, false],
        [false, false, true, true, true, true],
        [false, false, true, true, true, false],
        [false, false, true, true, true, false],
        [false, false, false, false, true, false]
      ]

      const bestSolution = solveNonogram({ lengths, maxTabuSize: 50, maxIterations: 1000 })

      assert.deepEqual(bestSolution, solution)
    })
  })

  describe('until it gets the final solution', function() {
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

      assert.deepEqual(solveNonogram({ lengths, maxTabuSize: 20 }), solution)
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

      assert.deepEqual(solveNonogram({ lengths, maxTabuSize: 20 }), solution)
    })

    //
    // it('should return the final solution for a complex 5x5 case', function() {
    //   const lengths = {
    //     rows:    [[1,3], 2,     [1,1,1], 1, [3,1]],
    //     columns: [[3,1], [1,2], [1,1,1], 1, [1,1,1]]
    //   }
    //
    //   const solution = [
    //     [true,  false, true,  true,  true],
    //     [true,  true,  false, false, false],
    //     [true,  false, true,  false, true],
    //     [false, true,  false, false, false],
    //     [true,  true,  true,  false, true]
    //   ]
    //
    //   assert.deepEqual(solveNonogram({ lengths, maxTabuSize: 20 }), solution)
    // })

  //   it('should return the final solution for a complex 6x6 case', function() {
  //     const lengths = {
  //       columns: [[4,1],[2,2],[1,3],[1,1,2],4,[2,1,1]],
  //       rows:    [[1,1,1],[3,1],[2,2],[1,1,2],4,6]
  //     }
  //
  //     const solution = [
  //       [true, false, false, true, false, true],
  //       [true, true, true, false, false, true],
  //       [true, true, false, true, true, false],
  //       [true, false, true, false, true, true],
  //       [false, true, true, true, true, false],
  //       [true, true, true, true, true,true]
  //     ]
  //
  //     assert.deepEqual(solveNonogram({ lengths, maxTabuSize: 20 }), solution)
  //   })
  //
  //   it('should return the final solution for another complex 6x6 case', function() {
  //     const lengths = {
  //       rows:    [3, 4, 4, 3, 3, 1],
  //       columns: [2, 2, 5, 4, 4, 1],
  //     }
  //
  //     const solution = [
  //       [true, true, true, false, false, false],
  //       [true, true, true, true, false, false],
  //       [false, false, true, true, true, true],
  //       [false, false, true, true, true, false],
  //       [false, false, true, true, true, false],
  //       [false, false, false, false, true, false]
  //     ]
  //
  //     assert.deepEqual(solveNonogram({ lengths, maxTabuSize: 20 }), solution)
  //   })
  })
})
