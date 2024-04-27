exports.places = [
	/**
     * Approved place types: museum, restaurant, landmark, park
     * 
     * Location examples:
     * - Buckingham Palace: "Central - Green Park"
     * - Pitzhanger: "West - Ealing"
     * - Dulwich Picture Gallery: "South - Dulwich"
     * - St Albans: "Outside London - St Albans"
     * 
     * To create a new place, paste this template after the last place below:

    {
        slug: "", // leave this blank
        name: "",
        keyFacts: [
            "",
            "", // add more or delete as necessary
        ],
        description: "",
        type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
        cost: "",
        location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
        website: ""
    },

     */
	{
		slug: "osterley",
		name: "Osterley House",
		keyFacts: [
			"Pristine Georgian country house",
			"House closes during winter. Check website before planning visit", // add more or delete as necessary
		],
		description:
			"A beautifully kept example of a Georgian country house. Gardens are gorgeous, too. A great day out.",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "ca. £15pp. Check website.",
		location: "West - Osterley", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website:
			"https://www.nationaltrust.org.uk/visit/london/osterley-park-and-house",
	},

	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DO NOT PASTE ANYTHING BELOW THIS LINE
];
