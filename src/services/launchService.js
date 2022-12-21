'use strict';

const axios = require("axios");

const getLaunches = async () => {
    try {
        return await axios.get("https://api.spacexdata.com/v3/launches", {
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = {
    getLaunches
};