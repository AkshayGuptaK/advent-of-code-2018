const fs = require('fs')

const dir = '/home/akshay/Programming/GitHub/advent-of-code-2018/input'

exports.processInput = (file) => {
  let input = fs.readFileSync(`${dir}/${file}.txt`, 'utf8')
  return input.split('\n')
}
