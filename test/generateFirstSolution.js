const assert = require('assert')

const generateFirstSolution = require('../src/generateFirstSolution')

describe('generateFirstSolution', function() {
  it('should generate the first possible solution according to rows lengths', function() {
    const lengths = {
      rows: [1, 2, 3]
    }

    assert.deepEqual(generateFirstSolution(lengths), [
      [true, false, false],
      [true, true, false],
      [true, true, true]
    ])
  })

  it('should generate the first possible solution according to rows lengths, spacing for splitted lengths', function() {
    const lengths = {
      rows: [1, [1, 1], 3]
    }

    assert.deepEqual(generateFirstSolution(lengths), [
      [true, false, false],
      [true, false, true],
      [true, true, true]
    ])
  })

  it('should generate the first possible solution according to rows lengths, spacing for splitted lengths', function() {
    const lengths = {
      rows: [1, [1, 1], 2, [2, 1]]
    }

    assert.deepEqual(generateFirstSolution(lengths), [
      [true, false, false, false],
      [true, false, true,  false],
      [true, true,  false, false],
      [true, true,  false, true]
    ])
  })
})