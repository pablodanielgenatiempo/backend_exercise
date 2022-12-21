'use strict';

const favoriteService = require("../services/favoriteService");

const add = async (req, res) => {
    const {user_id, flight_number} = req.body;
    if (!flight_number || !user_id) {
        return {
            error: true,
            code: 502,
            message: 'flight_number_and_user_id_are_required'
        };
    }
    res.send(favoriteService.add(user_id, flight_number));
};

const remove = async (req, res) => {
    const {user_id, flight_number} = req.body;
    if (!flight_number || !user_id) {
        return {
            error: true,
            code: 502,
            message: 'flight_number_and_user_id_are_required'
        };
    }
    res.send(favoriteService.remove(user_id, flight_number));
};

module.exports = { add, remove };