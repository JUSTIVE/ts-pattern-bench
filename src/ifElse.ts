import * as fs from 'fs'
import { Temporal } from '@js-temporal/polyfill'
function sampleAIfElse(
  valueA: number,
  valueB: number,
  valueC: number,
  valueD: number,
  valueE: number
) {
  //q: fill the arguments
  if (valueA > 0.5) {
    return 'valueA'
  } else if (valueB > 0.5) {
    return 'valueB'
  } else if (valueC > 0.5) {
    return 'valueC'
  } else if (valueD > 0.5) {
    return 'valueD'
  } else if (valueE > 0.5) {
    return 'valueE'
  }
  return 'valueF'
}

//read data from ./src/testset.json
const testset: number[] = JSON.parse(
  fs.readFileSync('./src/testset.json', 'utf-8')
)

//run the test using temporal api
const start = Temporal.Now.instant()
for (let i = 0; i < testset.length - 5; i += 5) {
  sampleAIfElse(
    testset[i],
    testset[i + 1],
    testset[i + 2],
    testset[i + 3],
    testset[i + 4]
  )
}
const end = Temporal.Now.instant()
const duration = end.since(start)

console.log(`ifelse: ${duration.toString()}ms`)
