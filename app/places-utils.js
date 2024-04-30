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

exports.getAreas = (places) => {
	const areas = {};

	for (let place of places) {
		const location = place.location;
		const locationComponents = location.split(" ");
		const area = locationComponents[0];

		if (areas[area] === undefined) {
			areas[area] = [];
		}

		areas[area].push(place);
	}

	return areas;
};
