const assert = require('assert')

const getNeighbors = require('../src/getNeighbors')

describe('getNeighbors', function() {
  it('should return true if all neighbors where generated', function() {
    const solution = [
      [true,  true,  true],
      [true, true,  false],
      [false, false, true]
    ]

    const neighbors = [
      [
        [true,  true,  true],
        [false, true,  true],
        [false, false, true]
      ],
      [
        [true,  true,  true],
        [true, false,  true],
        [false, false, true]
      ],
      [
        [true,  true,  true],
        [true, true,  false],
        [true, false, false]
      ],
      [
        [true,  true,  true],
        [true, true,  false],
        [false, true, false]
      ]
    ]

    assert(JSON.stringify(getNeighbors(solution)) == JSON.stringify(neighbors))
  })

  it('should return true if all neighbors where generated', function() {
    const solution = [
      [true,  true,  true,  false, true],
      [false, false, true,  false, true],
      [true,  false, false, false, true],
      [false, false, false, false, true],
      [true,  false, true,  false, true]
    ]

    const neighbors = [
      [
        [true,  true,  true,  true, false],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  false,  true, true],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false, true],
        [true,  false, false, true, false],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false, true],
        [false, true, false,  true, false],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false,  true],
        [false, false, true,  false,  true],
        [true,  true, false, false,  false],
        [false,  false, false, false, true],
        [true,  false, true,  false,  true]
      ],
      [
        [true,  true,  true,  false, true],
        [false, false, true,  false, true],
        [false,  false, false, true, true],
        [false, false, false, false, true],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false, true],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [true, false, false, false, false],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false, true],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [false, false, false, true, false],
        [true,  false, true,  false, true]
      ],
      [
        [true,  true,  true,  false, true],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [true,  true, false,  true, false]
      ],
      [
        [true,  true,  true,  false, true],
        [false, false, true,  false, true],
        [true,  false, false, false, true],
        [false, false, false, false, true],
        [false,  true, false,  true, true]
      ]
    ]

    assert(JSON.stringify(getNeighbors(solution)) == JSON.stringify(neighbors))
  })

  it('should return true if all neighbors where generated', function() {
    const solution = [
      [true,  false, true,  false, true,  false],
      [true,  true,  false, true,  true,  false],
      [false, false, false, true,  true,   true],
      [true,  false, true,  true,  false, false],
      [false, true,  true,  true,  true,   true],
      [true,  true,  true,  false, true,   true]
    ]

    const neighbors = [
      [
        [false,  true, false,  true, false,  true],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [false,  true, false,  true, false,  true],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [false,  true,  true, false,  true,  true],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  false, true,  true,  false,  true],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [true, false, false, false,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, true,  true,  true,  false],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [false,  true, false,  true,  true, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [false, true,  true,  false, false,  true],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [true, false,  true,  true,  true,   true],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [true,  true,  true,  true,  true,  false],
        [true,  true,  true,  false, true,   true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  true,  true,  false,  true]
      ],
      [
        [true,  false, true,  false, true,  false],
        [true,  true,  false, true,  true,  false],
        [false, false, false, true,  true,   true],
        [true,  false, true,  true,  false, false],
        [false, true,  true,  true,  true,   true],
        [true,  true,  false, true,  true,   true]
      ]
    ]

    assert(JSON.stringify(getNeighbors(solution)) == JSON.stringify(neighbors))
  })
})
