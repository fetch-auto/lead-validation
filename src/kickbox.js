const kickbox = require("kickbox");

const parseResponse = response => {
    return {
        result: response.result,
        score: response.sendex,
        disposable: response.disposable,
        reason: response.reason,
        raw: response
    };
};


const validateEmail = (email, apiKey) => {
    const client = kickbox.client(apiKey).kickbox();

    return new Promise((resolve, reject) => {
        client.verify(email, {timeout: 12000}, (err, response) => {
            if (err) {
                return reject(err);
            }
            resolve(parseResponse(response.body));
        });
    });
};

module.exports = {validateEmail};