const { places } = require("./places");
const { getPlaceTypes } = require("./places-utils");

module.exports = {
	allPlaces: places,
	placeTypes: getPlaceTypes(places),
};
