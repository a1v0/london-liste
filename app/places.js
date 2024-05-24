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
      "", // at least one fact is mandatory
      "", // add more or delete as necessary
    ],
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
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Euston", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://wellcomecollection.org/",
	},
	{
		slug: "trafalgar-square", // leave this blank
		name: "Trafalgar Square",
		keyFacts: ["Can you find the measurement scales on the square?"],
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
		type: "other", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "North - Camden Town", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "cartoon-museum", // leave this blank
		name: "Cartoon Museum",
		keyFacts: ["Free for under-18s"],
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
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Southbank", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "docklands-bicycle-tour", // leave this blank
		name: "Cycling from King's Cross to Canary Wharf",
		keyFacts: [
			"Trip along Regent's Canal, through East London all the way to Canary Wharf",
			"Start at King's Cross, find the canal, go through Victoria Park, continue along the canal for ages until you reach the Limehouse Basin. Navigate to the Thames and continue cycling until you reach Canary Wharf", // add more or delete as necessary
		],
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - King's Cross", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "bank-of-england", // leave this blank
		name: "Bank of England Museum (weekdays only)",
		keyFacts: [
			"Hold a real gold bar in your hand, worth ca. £700k",
			"Interesting little museum about how money is made etc. The Building is impressive, too", // add more or delete as necessary
		],
		type: "museum", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Bank", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.bankofengland.co.uk/museum",
	},
	{
		slug: "boris-bike", // leave this blank
		name: "Boris Bikes (street-side bicycle hire)",
		keyFacts: [
			"Hire bikes for cheap and travel through the city",
			"London can look scary for cyclists but it's mostly pretty safe. Using a bike is a great way to get to know the city from different angles", // add more or delete as necessary
		],
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "not much",
		location: "Central - everywhere", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://tfl.gov.uk/modes/cycling/santander-cycles",
	},
	{
		slug: "london-bus-tour", // leave this blank
		name: "Sightseeing on a red bus",
		keyFacts: [
			"See the sights for the cost of a normal bus fare",
			"Check out the website for a list of all leisure routes. They're ordinary bus routes that go along all of the important tourist spots", // add more or delete as necessary
		],
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "ca. £2",
		location: "Central - various", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website:
			"https://tfl.gov.uk/travel-information/visiting-london/experience-london/bus-leisure-routes",
	},
	{
		slug: "roman-shards-millennium-bridge", // leave this blank
		name: "Searching for Roman artefacts at the Millennium Bridge",
		keyFacts: [
			"Throughout history, all sorts of stuff has washed up on the shores of the Thames. Now's your chance to dig it up!",
			"Go down to the river by the northern end of the Millennium Bridge, opposite the Tate Modern. You'll find stones, bones and pottery, some of which might be ancient.", // add more or delete as necessary
		],
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - St Paul's", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "changing-of-the-guard", // leave this blank
		name: "The Changing of the Guard",
		keyFacts: [
			"Every morning during summer, a beautiful ceremony of pomp and circumstance takes place outside Buckingham Palace",
		],
		type: "event", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "free",
		location: "Central - Green Park", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://changing-guard.com/dates-buckingham-palace.html",
	},
	{
		slug: "the-monument", // leave this blank
		name: "The Monument",
		keyFacts: [
			"Tower with 311 steps, built by Sir Christopher Wren to commemorate the Great Fire in 1666",
			"Cool views from the top, but not for the faint-hearted", // add more or delete as necessary
		],
		type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "£6",
		location: "Central - Bank", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "https://www.themonument.org.uk/",
	},
	{
	  slug: "london-walk", // leave this blank
    name: "London Walk",
	  keyFacts: [
	  	"Guided walking tours of London for any topic you can think of (Jack the Ripper, The Beatles, architecture...)",
	  	"Excellent quality and usually seriously interesting", // add more or delete as necessary
	  ],
	  type: "activity", // see list of approved types above. Let a1v0 know if you need to add another type.
	  cost: "ca. £20 for adults but discounts are available",
	  location: "Central - various", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
	  website: "https://www.walks.com/",
	},
	{
		slug: "borough-market", // leave this blank
		name: "Borough Market",
		keyFacts: [
			"Famous street food market with all manner of local and exotic fare",
			"The fruit and veg section of the market sometimes has interesting and rare stock, e.g. fruits you've never heard of", // add more or delete as necessary
		],
		type: "restaurant", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "ca. £10 a meal, but prices vary a lot",
		location: "Central - London Bridge", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
	{
		slug: "maltby-street-market", // leave this blank
		name: "Maltby Street Market",
		keyFacts: [
			"Trendy street food market",
			"", // add more or delete as necessary
		],
		type: "restaurant", // see list of approved types above. Let a1v0 know if you need to add another type.
		cost: "ca. £10 a meal, but prices vary a lot",
		location: "Central - London Bridge / Bermondsey", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
		website: "",
	},
  {
    slug: "st-mary-aldermary", // leave this blank
    name: "St Mary Aldermary",
    keyFacts: [
      "Café inside a beautiful church right near St Paul's", // at least one fact is mandatory
      "Enjoy your coffee in wonderful surroundings. The decorated organ and slanted alter wall are interesting", // add more or delete as necessary
    ],
    type: "restaurant", // see list of approved types above. Let a1v0 know if you need to add another type.
    cost: "regular café prices",
    location: "Central - Bank", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
    website: ""
  },
  {
    slug: "peter-jones-cafe", // leave this blank
    name: "Café with a view over Chelsea",
    keyFacts: [
      "The café/restaurant at the top of Peter Jones in Sloane Square offers an unrivalled view across Chelsea", // at least one fact is mandatory
      "", // add more or delete as necessary
    ],
    type: "restaurant", // see list of approved types above. Let a1v0 know if you need to add another type.
    cost: "regular café prices",
    location: "West - Chelsea", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
    website: ""
  },
  {
    slug: "admiralty-arch-nose", // leave this blank
    name: "Brass nose at Admiralty Arch",
    keyFacts: [
      "One of London's more eccentric quirks: a nose stuck to a wall", // at least one fact is mandatory
      "In the northern arch, about 250cm off the ground, is a brass nose", // add more or delete as necessary
      "That's basically all there is to it: it's just super weird",
    ],
    type: "landmark", // see list of approved types above. Let a1v0 know if you need to add another type.
    cost: "free",
    location: "Central - Trafalgar Square", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
    website: ""
  },
  {
    slug: "camden-passage", // leave this blank
    name: "Camden Passage (not actually in Camden)",
    keyFacts: [
      "A charming, hidden alleyway full of little shops and cafés", // at least one fact is mandatory
      "", // add more or delete as necessary
    ],
    type: "other", // see list of approved types above. Let a1v0 know if you need to add another type.
    cost: "various",
    location: "North - Angel", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
    website: ""
  },
  {
    slug: "kensington-palace-gardens", // leave this blank
    name: "Kensington Palace Gardens",
    keyFacts: [
      "London's most expensive and impressive street, full of ambassadors' residences", // at least one fact is mandatory
      "", // add more or delete as necessary
    ],
    type: "landmark", // see list of approved types above. Let a1v0 know if you need to add another type.
    cost: "free",
    location: "Central - Notting Hill", // "[region] - [area]" or "[region] - [Tube stop]". For examples, see above.
    website: ""
  },
	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DO NOT PASTE ANYTHING BELOW THIS LINE

  // RESTAURANTS
  // Mercato
  // Brothers

	// EVENTS
	// Ceremony of the Keys (needs to be booked three months in advance, but is free)
	// Trooping the Colour (just once a year)

	// MUSEUMS
	// Hendon Aircraft Museum
	// Exhibition Road
	// British Museum
	// St John Museum
	// Duxford (costs money)
  // White Cube Gallery
  // Freemasons' Hall
  // Two Temple Place
  // Wallace Collection
  // Mithras-Tempel
  // The Royal institution

	// PARKS
	// Skygarden
	// National Trust/English Heritage Stuff (requires membership)
	// Epping Forest
	// Hampstead Heath, especially The Pergola
	// Richmond Park
	// Chislehurst Caves
  // Postman's Park

	// LANDMARKS
	// Highgate Cemetery
  // Abney Park Cemetery
	// Alexandra Palace
	// Thames barriers
	// Lloyd's Building
	// Leadenhall Market
  // Kensington Palace Gardens

	// OTHER
	// Harrods
	// Excursion to Oxford or Cambridge
	// Ely
	// George Harrison Temple
	// Shree Swaminarayan Hindu Mandir, Neasden
	// St Albans
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
];
