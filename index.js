#!/usr/bin/env node

"use strict";

const jsonQuery = require("json-query");
const readline = require("readline");
const argv = require('minimist')(process.argv.slice(2));

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let delimiter = argv.d || argv.delimiter || ",";

let queries = argv._[0].split("|") || ["stats.count", "stats.avg"];

rl.on("line", (line) => {
    let data = JSON.parse(line);

    let vals = [];
    queries.forEach((query) => {
        let res = jsonQuery(query, { data: data });
        vals.push(res.value);
    });
    console.log(vals.join(delimiter));
})


