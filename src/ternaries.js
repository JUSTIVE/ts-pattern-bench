"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polyfill_1 = require("@js-temporal/polyfill");
var fs = require("fs");
//alternative version of sampleAIfElse written in ternary operator
function sampleATernary(valueA, valueB, valueC, valueD, valueE) {
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
                        : 'valueF';
}
//read data from ./src/testset.json
var testset = JSON.parse(fs.readFileSync('./src/testset.json', 'utf-8'));
//run the test using temporal api
var start = polyfill_1.Temporal.Now.instant();
for (var i = 0; i < testset.length - 5; i += 5) {
    sampleATernary(testset[i], testset[i + 1], testset[i + 2], testset[i + 3], testset[i + 4]);
}
var end = polyfill_1.Temporal.Now.instant();
var duration = end.since(start);
console.log("ternary: ".concat(duration.toString(), "ms"));
