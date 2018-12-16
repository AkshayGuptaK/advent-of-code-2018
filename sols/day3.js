const utils = require('../utils')

function PuzzleOne (claims) {
  let cloth = Array(1001).fill(0).map(x => Array(1001).fill(x))

  claims.forEach(claim => {
    for (let i = claim[1] + 1; i <= claim[1] + claim[3]; i++) {
      for (let j = claim[2] + 1; j <= claim[2] + claim[4]; j++) {
        (cloth[i][j])++
      }
    }
  })
  return cloth.map(arr => arr.filter(x => x > 1).length).reduce((x, y) => x + y)
}

function PuzzleTwo (claims) {
  let cloth = Array(1001).fill(0).map(x => Array(1001).fill(x))
  let ids = []

  claims.forEach(claim => {
    ids.push(claim[0])
    for (let i = claim[1] + 1; i <= claim[1] + claim[3]; i++) {
      for (let j = claim[2] + 1; j <= claim[2] + claim[4]; j++) {
        if (cloth[i][j] !== 0) {
          ids = ids.filter(x => x !== cloth[i][j] & x !== claim[0])
          cloth[i][j] = 2000
        } else cloth[i][j] = claim[0]
      }
    }
  })
  return ids
}

let claims = utils.processInput('day3')
  .map(claim => /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/.exec(claim))
  .map(claim => claim.splice(1, 5))
  .map(claim => claim.map(Number))

console.log(PuzzleOne(claims))
console.log(PuzzleTwo(claims))
