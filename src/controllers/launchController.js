'use strict';

const fetchService = require("../services/fetchService");

const get = async (req, res) => {
    console.log('Starting ...');
    const items = await fetchService.retrieveData();
    console.log('End ...');
    res.send(items);
};

module.exports = { get };