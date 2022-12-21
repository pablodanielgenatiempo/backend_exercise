'use strict';

const axios = require("axios");

const getRockets = async () => {
    try {
        return await axios.get("https://api.spacexdata.com/v3/rockets/", {
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = {
    getRockets
};