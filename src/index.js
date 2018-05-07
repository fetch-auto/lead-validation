const {validateNumber} = require("./numverify");
const {validateEmail} = require("./kickbox");

class Validator {
    constructor(numverifyAccessToken, kickboxApiKey) {
        this.numverifyAccessToken = numverifyAccessToken;
        this.kickboxApiKey = kickboxApiKey;
    }

    validatePhone(number) {
        return validateNumber(number, this.numverifyAccessToken);
    }

    validateEmail(email) {
        return validateEmail(email, this.kickboxApiKey);
    }
}

module.exports = Validator;