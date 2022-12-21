'use strict';

const rocketService = require('../services/rocketService');
const launchService = require('../services/launchService');
const favoriteService = require('../services/favoriteService');

//Temporary configuration
//To add "is_favorite" item in the response
const addFavoriteItemEnabled = true;
//Then recover userId with some service
const userId = "1";

const retrieveData = async () => {
    const items = [];
    const responseLaunches = await launchService.getLaunches()
    const responseRockets = await rocketService.getRockets();

    responseLaunches.data.map((launch) => {
        const rocket = responseRockets.data.find((item) => item.rocket_id == launch.rocket.rocket_id);
        if (rocket) {
            items.push(buildData(launch, rocket));
        }
    });
    return items;
}

function buildData(launch, rocket) {
    const info = {
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        mission_patch: launch.mission_patch,
        details: launch.details,
        rocket: buildRocket(rocket)
    };
    if (addFavoriteItemEnabled) {
        info["is_favorite"] = favoriteService.exist(userId.toString(), launch.flight_number.toString());
    }
    return info;
}

function buildRocket(rocket) {
    return {
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        active: rocket.active,
        cost_per_launch: rocket.cost_per_launch,
        company: rocket.company
    };
};

module.exports = {
    retrieveData
};