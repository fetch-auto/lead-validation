const {validateNumber} = require("./numverify");

class Validator {
    constructor(numverifyAccessToken) {
        this.numverifyAccessToken = numverifyAccessToken;
    }

    validatePhone(number) {
        return validateNumber(number, this.numverifyAccessToken);
    }
}

module.exports = Validator;