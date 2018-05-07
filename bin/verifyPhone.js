#!/usr/bin/env node
const Validator = require("../src");

const numverifyAccessToken = process.argv[2];
const number = process.argv[3];
console.log("Verifying number", number);

const validator = new Validator(numverifyAccessToken);

validator.validatePhone(number).then(data => {
    console.log("Got ", data);
    process.exit(0);
}).catch(err => {
    console.error(err, "Error when validating phone");
    process.exit(1);
});