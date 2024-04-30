const { places } = require("./places");
const { getPlaceTypes, getAreas } = require("./places-utils");

module.exports = {
	allPlaces: places,
	placeTypes: getPlaceTypes(places),
	areas: getAreas(places),
};
