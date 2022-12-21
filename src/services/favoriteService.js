'use strict';

const favorites = [];

function exist (userId, flightNumber) {
    return favorites.some(
        f => f.userId == userId && f.flightNumber == flightNumber);
}

function add (userId, flightNumber) {
    if (!exist(userId, flightNumber)) {
        favorites.push({userId, flightNumber});
        //For test purposes
        console.log(favorites);
        return  {
            error: false,
            code: 200,
            message: 'added_successfully'
        };
    }
    //For test purposes
    console.log(favorites);
    return  {
        error: true,
        code: 400,
        message: 'already_exist'
    };
}


function remove (userId, flightNumber) {
    const index = favorites.findIndex(
        f => f.userId == userId && f.flightNumber == flightNumber);

    if (index >= 0) {
        favorites.splice(index, 1);
        console.log(favorites);
        return {
            error: false,
            code: 200,
            message: 'element_removed'
        };
    }
    //For test purposes
    console.log(favorites);
    return {
        error: true,
        code: 400,
        message: 'not_found'
    };
}

module.exports = {
    add,
    exist,
    remove
}
