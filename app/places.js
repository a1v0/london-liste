exports.places = [
	/**
     * Approved place types: museum, restaurant, landmark, park, other
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
	{
		slug: "old-bailey",
		name: "The Old Bailey",
		keyFacts: [
			"Britain's highest criminal court",
			"Under-14s not allowed",
			"No electronic devices allowed, but there are shops on the street that will keep your possessions safe (for a small fee)",
		],
		description: "",
		type: "other",
		cost: "Free, but you might need to pay to lock up your possessions",
		location: "Central - Chancery Lane",
		website: "",
	},
	{
		slug: "wellcome-collection", // leave this blank
		name: "Wellcome Collection",
		keyFacts: [
			"Interesting mix between art and science",
			"Temporary exhibitions usually exceptionally good",
			"Gift shop full of interesting books and toys",
		],
		description: "",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Euston", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://wellcomecollection.org/",
	},
	{
		slug: "trafalgar-square", // leave this blank
		name: "Trafalgar Square",
		keyFacts: ["Can you find the measurement scales on the square?"],
		description: "",
		type: "landmark", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Leicester Square", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "camden-town", // leave this blank
		name: "Camden Town",
		keyFacts: [
			"Trendy, slightly grungy and punky area",
			"Great food market", // add more or delete as necessary
			"Walking there for King's Cross is a nice route along the canal",
		],
		description: "",
		type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "North - Camden Town", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "cartoon-museum", // leave this blank
		name: "Cartoon Museum",
		keyFacts: ["Free for under-18s"],
		description: "",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "Free for under-18s",
		location: "Central - Holborn", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.cartoonmuseum.org/",
	},
	{
		slug: "petrie-museum", // leave this blank
		name: "Petrie Museum",
		keyFacts: [
			"An Egyptological museum very different from the British Museum",
			"Fewer mummies/royalty and more everyday objects, e.g. agricultural equipment",
			"Oldest existing shirt at ca. 3000 years old",
		],
		description: "",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Euston", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.ucl.ac.uk/culture/petrie-museum",
	},
	{
		slug: "hunterian-museum", // leave this blank
		name: "Hunterian Museum",
		keyFacts: [
			"Fascinating museum about anatomy and surgery, featuring many human and animal remains",
		],
		description: "",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Holborn", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://hunterianmuseum.org/",
	},
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },
	// {
	// 	slug: "", // leave this blank
	// 	name: "",
	// 	keyFacts: [
	// 		"",
	// 		"", // add more or delete as necessary
	// 	],
	// 	description: "",
	// 	type: "", // see list of approved types above. Let a1v0 know if you need to add another type.
	// 	cost: "",
	// 	location: "", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	// 	website: "",
	// },

	// Hunterian Museum
	// London Walk (there are some very good ones, just Google them. A Beatles walk, a Jack the Ripper walk etc. and they cost about five pounds)
	// Excursion to Oxford or Cambridge
	// Exhibition Road
	// Imperial War Museum
	// Billiard in a pool hall
	// BBC Prom (standing tickets for five pounds)
	// Globe Theatre (standing tickets for five pounds)
	// Alexandra Palace
	// Borough Market / Maltby Street Market
	// Thames barriers
	// Harrods
	// Ely
	// George Harrison Temple
	// Duxford (costs money)
	// Ceremony of the Keys (needs to be booked three months in advance, but is free)
	// National Trust/English Heritage Stuff (requires membership)
	// Westminster-Greenwich Boat Ride
	// Greenwich
	// Hendon Aircraft Museum
	// Changing of the Guards
	// Trooping the Colour (just once a year)
	// Shree Swaminarayan Hindu Mandir, Neasden
	// A walk along the Southbank
	// The Monument (two pounds for students, but one must climb 311 steps)
	// St Albans
	// Flea Market
	// Covent Garden
	// Southend-on-Sea
	// Hampstead Heath, especially The Pergola
	// Lloyd's Building, Leadenhall Market
	// Billingsgate Market (requires visiting very early in the morning, between midnight and 7am)
	// Smithfield Market (requires visiting very early in the morning, between midnight and 7am)
	// New Spitalfields Market (requires visiting very early in the morning, between midnight and 7am)
	// London Silver Vaults
	// Epping Forest
	// Bank of England Museum
	// British Museum
	// Richmond Park

	// London Hackspace (Tuesday evening open night)

	// Brewery in NW1
	// Chislehurst Caves
	// Bicycle tour Kings Cross, Regents Canal, Docklands and back
	// Park in the Olympic area
	// Barclays Bike
	// Highgate Cemetery
	// Skygarden
	// The Shard 32nd floor (teure Drinks)
	// Looking for Roman shards at the Millennium Bridge
	// Evensong @ St Paul's

	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DO NOT PASTE ANYTHING BELOW THIS LINE
];
