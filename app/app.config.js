const { places } = require("./places");
const { getPlacesOfType, getPlaceTypes } = require("./places-utils");

module.exports = {
	allPlaces: places,
	placeTypes: getPlaceTypes(places),
};
