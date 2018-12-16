const utils = require('../utils')

function boxCount (box) {
  let counts = {}

  for (let i = 0; i < box.length; i++) {
    let char = box.charAt(i)
    if (counts.hasOwnProperty(char)) {
      counts[char]++
    } else {
      counts[char] = 1
    }
  } return counts
}

function PuzzleOne (boxes) {
  let twos = 0
  let threes = 0
  boxes.forEach(x => {
    let counts = Object.values(boxCount(x))
    if (counts.indexOf(2) >= 0) {
      twos++
    }
    if (counts.indexOf(3) >= 0) {
      threes++
    }
  })
  return twos * threes
}

function matchStrings (string1, string2) {
  let differences = []
  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) differences.push(i)
    if (differences.length > 1) return false
  }
  return differences[0]
}

function PuzzleTwo (boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      let match = matchStrings(boxes[i], boxes[j])
      if (match) {
        return boxes[i].substring(0, match).concat(boxes[i].substring(match + 1))
      }
    }
  }
}

let boxes = utils.processInput('day2')
console.log(PuzzleOne(boxes))
console.log(PuzzleTwo(boxes))
