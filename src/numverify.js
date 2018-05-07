const axios = require("axios");

const NUMVERIFY_URL = "https://apilayer.net/api/validate";

const validateNumber = (number, accessKey) => {
    return axios.get(NUMVERIFY_URL, {
        params: {
            access_key: accessKey,
            number
        }
    }).then(res => {
        const {valid, ...metadata} = res.data;
        return {
            isValid: valid,
            metadata
        };
    });
};

module.exports = {validateNumber};