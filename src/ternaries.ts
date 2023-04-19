import { Temporal } from '@js-temporal/polyfill'
import * as fs from 'fs'
//alternative version of sampleAIfElse written in ternary operator
function sampleATernary(
  valueA: number,
  valueB: number,
  valueC: number,
  valueD: number,
  valueE: number
) {
  //q: fill the arguments
  return valueA > 0.5
    ? 'valueA'
    : valueB > 0.5
    ? 'valueB'
    : valueC > 0.5
    ? 'valueC'
    : valueD > 0.5
    ? 'valueD'
    : valueE > 0.5
    ? 'valueE'
    : 'valueF'
}

//read data from ./src/testset.json
const testset: number[] = JSON.parse(
  fs.readFileSync('./src/testset.json', 'utf-8')
)

//run the test using temporal api
const start = Temporal.Now.instant()
for (let i = 0; i < testset.length - 5; i += 5) {
  sampleATernary(
    testset[i],
    testset[i + 1],
    testset[i + 2],
    testset[i + 3],
    testset[i + 4]
  )
}
const end = Temporal.Now.instant()
const duration = end.since(start)

console.log(`ternary: ${duration.toString()}ms`)
