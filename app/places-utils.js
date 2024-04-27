exports.getPlacesOfType = (type, places) => {
	const placesOfType = places.filter((place) => {
		return place.type === type;
	});

	return placesOfType;
};
