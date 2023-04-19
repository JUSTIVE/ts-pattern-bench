import * as fs from 'fs'

import path from 'path'

function genTestSet() {
  return new Array(10_000_000).fill(0).map((_, i) => Math.random())
}

//import fs
//dump the testset to ./src/testset.json
const PATH = path.join(__dirname, 'testset.json')
console.log(`dumping to ${PATH}`)
fs.writeFileSync(PATH, JSON.stringify(genTestSet(), null, 2))
