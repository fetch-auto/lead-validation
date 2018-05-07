#!/usr/bin/env node
const Validator = require("../src");

const kickboxApiKey = process.argv[2];
const email = process.argv[3];
console.log("Verifying email", email);

const validator = new Validator(null, kickboxApiKey);

validator.validateEmail(email).then(data => {
    console.log("Got ", data);
    process.exit(0);
}).catch(err => {
    console.error(err, "Error when validating email");
    process.exit(1);
});