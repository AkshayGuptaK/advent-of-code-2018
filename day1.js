const fs = require('fs')

function processInput() {
  let input = fs.readFileSync('./Day1-Input.txt', 'utf8')
  return input.split('\n').map(Number)
}

function PuzzleOne (freqChanges) {
  return freqChanges.reduce((curr, prev) => curr + prev)
}

function PuzzleTwo (freqChanges) {
  let memo = []
  let index = 0
  let frequency = freqChanges[index]

  while (memo.indexOf(frequency) < 0) {
    memo.push(frequency)
    index ++
    index = index % freqChanges.length
    frequency += freqChanges[index]
  } return frequency
} // another approach might be that we need to find a chain of freq-changes that sum to 0

let freqChanges = processInput()
console.log(PuzzleOne(freqChanges))
console.log(PuzzleTwo(freqChanges))