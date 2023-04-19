"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var polyfill_1 = require("@js-temporal/polyfill");
function sampleAIfElse(valueA, valueB, valueC, valueD, valueE) {
    //q: fill the arguments
    if (valueA > 0.5) {
        return 'valueA';
    }
    else if (valueB > 0.5) {
        return 'valueB';
    }
    else if (valueC > 0.5) {
        return 'valueC';
    }
    else if (valueD > 0.5) {
        return 'valueD';
    }
    else if (valueE > 0.5) {
        return 'valueE';
    }
    return 'valueF';
}
//read data from ./src/testset.json
var testset = JSON.parse(fs.readFileSync('./src/testset.json', 'utf-8'));
//run the test using temporal api
var start = polyfill_1.Temporal.Now.instant();
for (var i = 0; i < testset.length - 5; i += 5) {
    sampleAIfElse(testset[i], testset[i + 1], testset[i + 2], testset[i + 3], testset[i + 4]);
}
var end = polyfill_1.Temporal.Now.instant();
var duration = end.since(start);
console.log("ifelse: ".concat(duration.toString(), "ms"));
