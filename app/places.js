exports.places = [
	/**
     * Approved place types: museum, restaurant, landmark, park, event, activity, other
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
	{
		slug: "imperial-war-museum", // leave this blank
		name: "Imperial War Museum",
		keyFacts: [
			"Museum about war in general",
			"Big exhibition on WWI but interesting sections on more modern wars, too", // add more or delete as necessary
			"Despite the name, it's not particularly nationalistic",
		],
		description: "",
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "South - Elephant & Castle", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.iwm.org.uk",
	},
	{
		slug: "evensong", // leave this blank
		name: "Evensong at a major church",
		keyFacts: [
			"If you want to get into St Paul's Cathedral or Westminster Abbey for free, just attend an evensong",
			"Evensong is a service with very little audience participation. It's essentially a concert", // add more or delete as necessary
			"Last about 40 minutes and usually features wonderful music from world-class choirs",
			"Isn't limited to St Paul's or Westminster: many other churches offer high-quality music",
		],
		description: "",
		type: "event", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - various", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "thames-boat-ride", // leave this blank
		name: "Boat ride along the Thames",
		keyFacts: [
			"There are many boat routes along the Thames that run frequently and offer lovely views of the city",
			"The best routes go between Westminster or Embankment and Greenwich", // add more or delete as necessary
		],
		description: "",
		type: "other", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "not cheap. Ca. £20 for an adult",
		location: "Central - various", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.thamesclippers.com/",
	},
	{
		slug: "greenwich", // leave this blank
		name: "Greenwich",
		keyFacts: [
			"Greenwich is a beautiful area full of nice shops and museums",
			"There's a lovely part and the Royal Observatory", // add more or delete as necessary
			"It's home to various landmarks including the Cutty Sark and the Royal Naval College",
			"The Prime Meridian goes through Greenwich, hence Greenwich Meantime",
		],
		description: "",
		type: "other", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "South - Greenwich", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "bbc-prom", // leave this blank
	 	name: "BBC Prom (summer only)",
	 	keyFacts: [
	 		"Series of classical concerts in the Royal Albert Hall, with cheap standing tickets (ca. £5)",
	 		"Varied fare of excellent quality. A real cultural institution in a great location", // add more or delete as necessary
	 	],
	 	description: "",
	 	type: "event", // see list of approved types above. Let a1v0 know if you need to add another type.
	 	cost: "Ca. £5 for standing tickets, more for seated",
	 	location: "Central - South Kensington", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	 	website: "https://www.bbc.co.uk/proms",
	},
	{
	 	slug: "the-globe", // leave this blank
	 	name: "The Globe Theatre",
	 	keyFacts: [
	 		"See Shakespeare live in his own theatre, with standing tickets for £5",
	 		"A wonderful venue where you can enjoy high-class performances of works by Shakespeare and others from that era", // add more or delete as necessary
	 	],
	 	description: "",
	 	type: "event", // see list of approved types above. Let a1v0 know if you need to add another type.
	 	cost: "Ca. £5 for standing tickets, more for seated",
	 	location: "Central - Southwark", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	 	website: "https://www.shakespearesglobe.com/",
	},
	{
	 	slug: "southbank", // leave this blank
	 	name: "A Walk Along the Southbank",
	 	keyFacts: [
	 		"A beautiful stroll from Monument, along London Bridge, then across the Southbank towards the London Eye",
	 		"Lovely scenery, including the Tate Modern, Globe, Borough Market and more", // add more or delete as necessary
	 	],
	 	description: "",
	 	type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
	 	cost: "free",
	 	location: "Central - Southbank", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	 	website: "",
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

	// ACTIVITIES
	// A walk along the Southbank
	// Bicycle tour Kings Cross, Regents Canal, Docklands and back
	// Barclays Bike
	// Looking for Roman shards at the Millennium Bridge
	// London Walk (there are some very good ones, just Google them. A Beatles walk, a Jack the Ripper walk etc. and they cost about five pounds)
	// The Monument (two pounds for students, but one must climb 311 steps)
	// Billiard in a pool hall
	// RESTAURANTS
	// Borough Market / Maltby Street Market
	// EVENTS
	// Ceremony of the Keys (needs to be booked three months in advance, but is free)
	// Trooping the Colour (just once a year)
	// Changing of the Guards
	// MUSEUMS
	// Hendon Aircraft Museum
	// Exhibition Road
	// Bank of England Museum
	// British Museum
	// St John Museum
	// Duxford (costs money)
	// PARKS
	// Skygarden
	// National Trust/English Heritage Stuff (requires membership)
	// Epping Forest
	// Hampstead Heath, especially The Pergola
	// Richmond Park
	// Chislehurst Caves
	// LANDMARKS
	// Highgate Cemetery
	// Alexandra Palace
	// Thames barriers
	// Lloyd's Building
	// Leadenhall Market
	// OTHER
	
	// Harrods
	// Excursion to Oxford or Cambridge
	// Ely
	// George Harrison Temple
	// Shree Swaminarayan Hindu Mandir, Neasden
	// St Albans
	// Flea Market
	// Covent Garden
	// Southend-on-Sea
	// Billingsgate Market (requires visiting very early in the morning, between midnight and 7am)
	// Smithfield Market (requires visiting very early in the morning, between midnight and 7am)
	// New Spitalfields Market (requires visiting very early in the morning, between midnight and 7am)
	// London Silver Vaults
	// London Hackspace (Tuesday evening open night)
	// Brewery in NW1
	// Park in the Olympic area
	// The Shard 32nd floor (teure Drinks)

	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DO NOT PASTE ANYTHING BELOW THIS LINE
];
