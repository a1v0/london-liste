exports.getPlaceTypes = (places) => {
	const placeTypes = {};

	for (let place of places) {
		const type = place.type;
		if (placeTypes[type] === undefined) {
			placeTypes[type] = [];
		}

		placeTypes[type].push(place);
	}

	return placeTypes;
};
