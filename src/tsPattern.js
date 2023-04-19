"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//alternative version of sampleA written in ts-pattern
var ts_pattern_1 = require("ts-pattern");
var fs = require("fs");
var polyfill_1 = require("@js-temporal/polyfill");
function sampleATsPattern(valueA, valueB, valueC, valueD, valueE) {
    //q: fill the arguments
    return (0, ts_pattern_1.match)([valueA, valueB, valueC, valueD, valueE])
        .with([ts_pattern_1.P.when(function (x) { return x > 0.5; }), ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._], function () { return 'valueA'; })
        .with([ts_pattern_1.P._, ts_pattern_1.P.when(function (x) { return x > 0.5; }), ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._], function () { return 'valueB'; })
        .with([ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P.when(function (x) { return x > 0.5; }), ts_pattern_1.P._, ts_pattern_1.P._], function () { return 'valueC'; })
        .with([ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P.when(function (x) { return x > 0.5; }), ts_pattern_1.P._], function () { return 'valueD'; })
        .with([ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P._, ts_pattern_1.P.when(function (x) { return x > 0.5; })], function () { return 'valueE'; })
        .with(ts_pattern_1.P._, function () { return 'valueF'; })
        .exhaustive();
}
//read data from ./src/testset.json
var testset = JSON.parse(fs.readFileSync('./src/testset.json', 'utf-8'));
//run the test using temporal api
var start = polyfill_1.Temporal.Now.instant();
for (var i = 0; i < testset.length - 5; i += 5) {
    sampleATsPattern(testset[i], testset[i + 1], testset[i + 2], testset[i + 3], testset[i + 4]);
}
var end = polyfill_1.Temporal.Now.instant();
var duration = end.since(start);
console.log("pattern: ".concat(duration.toString(), "ms"));
