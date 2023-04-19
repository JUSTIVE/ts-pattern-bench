//alternative version of sampleA written in ts-pattern
import { P, match } from 'ts-pattern'
import * as fs from 'fs'
import { Temporal } from '@js-temporal/polyfill'

function sampleATsPattern(
  valueA: number,
  valueB: number,
  valueC: number,
  valueD: number,
  valueE: number
) {
  //q: fill the arguments
  return match([valueA, valueB, valueC, valueD, valueE])
    .with([P.when((x) => x > 0.5), P._, P._, P._, P._], () => 'valueA')
    .with([P._, P.when((x) => x > 0.5), P._, P._, P._], () => 'valueB')
    .with([P._, P._, P.when((x) => x > 0.5), P._, P._], () => 'valueC')
    .with([P._, P._, P._, P.when((x) => x > 0.5), P._], () => 'valueD')
    .with([P._, P._, P._, P._, P.when((x) => x > 0.5)], () => 'valueE')
    .with(P._, () => 'valueF')
    .exhaustive()
}

//read data from ./src/testset.json
const testset: number[] = JSON.parse(
  fs.readFileSync('./src/testset.json', 'utf-8')
)

//run the test using temporal api
const start = Temporal.Now.instant()
for (let i = 0; i < testset.length - 5; i += 5) {
  sampleATsPattern(
    testset[i],
    testset[i + 1],
    testset[i + 2],
    testset[i + 3],
    testset[i + 4]
  )
}
const end = Temporal.Now.instant()
const duration = end.since(start)

console.log(`pattern: ${duration.toString()}ms`)
