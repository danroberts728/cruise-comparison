/**
 * CRUISE COMPARISON DATA
 * 
 * This file contains all cruise option data, ports, and amenities.
 * Update this file to modify cruise details, pricing, and itineraries.
 */

window.cruiseData = {
  // ========================================
  // CRUISE OPTIONS (Option 1, 2, 3)
  // ========================================
  cruises: [
    {
      id: 1,
      company: 'Royal Caribbean',
      ship: 'Odyssey of the Seas',
      dates: 'Jun 6–13, 2027',
      duration: '8 days',
      ports: 6,
      routeDesc: 'Civitavecchia round-trip',
      featured: false,

      // Cabin options: type and price per couple
      cabins: [
        { type: 'Ocean View Balcony', price: 4882 },
        { type: 'Junior Suite', price: 7027 }
      ],

      // Estimated total-in cost (per couple, based on balcony cabin)
      // NOTE: RC is most "à la carte" — actual costs vary widely based on choices
      estimatedTotalIn: {
        cruise: 4882,
        airfare: 2400,
        hotel: 500,
        addons: 1050,                     // ¹ Varies by choices: gratuities, beverage pkg, Wi-Fi, specialty dining upcharges
        excursions: 600,                  // ² Estimated; varies by tour selection
        dining: 0,
        total: 9432
      },

      // Ship description
      philosophy: 'High-energy, entertainment-forward',
      shipSize: 'Large ship · ~4,900 guests',

      // Customer vibe / recommendation
      vibe: 'Ship-as-destination. Best if you want entertainment and activities on sea days alongside the history ashore. The most à la carte of the three — final cost depends heavily on what you add on.',

      // Amenities and experiences on the ship
      experiences: [
        { name: 'North Star observation pod', status: 'included' },
        { name: 'iFLY skydiving simulator', status: 'included' },
        { name: 'FlowRider surf simulator', status: 'fee' },
        { name: 'SeaPlex (bumper cars, basketball)', status: 'included' },
        { name: 'Two70 theatre shows', status: 'included' },
        { name: 'Casino Royale', status: 'included' },
        { name: 'Adults-only Solarium pool', status: 'included' },
        { name: 'Rock climbing wall', status: 'included' },
        { name: 'Specialty restaurants', status: 'no' },
        { name: 'Bionic robotic bar', status: 'included' },
        { name: 'Culinary / language classes', status: 'fee' },
        { name: 'Laser tag', status: 'included' }
      ]
    },

    {
      id: 2,
      company: 'Princess Cruises',
      ship: 'Enchanted Princess',
      dates: 'Jun 12–19, 2027',
      duration: '8 days',
      ports: 5,
      routeDesc: 'Civitavecchia round-trip',
      featured: false,

      cabins: [
        { type: 'Balcony Stateroom', price: 4534 },
        { type: 'Mini-Suite', price: 4868 }
      ],

      estimatedTotalIn: {
        cruise: 4534,
        airfare: 2400,
        hotel: 500,
        addons: 1040,                     // ¹ Princess Plus: $65/guest/day × 2 × 8 days (fixed pre-purchase rate)
        excursions: 750,                  // ² Estimated; varies by tour selection
        dining: 150,                      // ³ Specialty restaurant upcharges (not included in Plus package)
        total: 9374
      },

      philosophy: 'Classic, polished, first-timer friendly',
      shipSize: 'Large ship · ~3,660 guests',
      vibe: 'The smoothest entry point for first-time cruisers. Polished and comfortable without being overwhelming. Princess Plus package makes costs more predictable than Royal Caribbean.',

      experiences: [
        { name: 'Movies Under the Stars', status: 'included' },
        { name: 'Discovery at Sea partnership', status: 'included' },
        { name: 'The Voice of the Ocean show', status: 'included' },
        { name: 'Phantom Bridge escape room', status: 'included' },
        { name: 'The Sanctuary (adults-only)', status: 'fee' },
        { name: 'Lotus Spa Enclave / Thermal', status: 'fee' },
        { name: 'Infinity Wakeview pool', status: 'included' },
        { name: 'Specialty restaurants', status: 'no' },
        { name: 'MedallionClass app (order anywhere)', status: 'included' },
        { name: 'Live jazz venue (Take Five)', status: 'included' },
        { name: 'Casino', status: 'included' },
        { name: 'Culinary classes', status: 'no' }
      ]
    },

    {
      id: 3,
      company: 'Oceania Cruises',
      ship: 'Allura',
      dates: 'Jun 25 – Jul 2, 2027',
      duration: '8 days',
      ports: 8,
      routeDesc: 'Piraeus → Civitavecchia',
      featured: false,

      cabins: [
        { type: 'French Veranda', price: 6498 },
        { type: 'Veranda B4', price: 7998 }
      ],

      estimatedTotalIn: {
        cruise: 6498,
        airfare: 2600,
        hotel: 700,
        addons: 250,                      // ¹ Premium spirits & cocktails beyond complimentary house wine/beer at meals
        excursions: 300,                  // ² Estimated additional premium tours beyond included credit
        dining: 0,
        total: 10348
      },

      philosophy: 'Refined, destination-first, cuisine-focused',
      shipSize: 'Small ship · ~1,200 guests',
      vibe: 'Destination-first. Fewer guests, quieter evenings, exceptional included dining. Strongest match for history & culture priorities. The higher fare is offset by what\'s already covered.',

      experiences: [
        { name: 'Full Culinary Centre (hands-on)', status: 'included' },
        { name: 'Culinary Discovery shore tours', status: 'included' },
        { name: 'Artist Loft', status: 'included' },
        { name: 'Guest lecture series', status: 'included' },
        { name: 'LYNC Digital Centre', status: 'included' },
        { name: 'Aquamar Spa Terrace', status: 'included' },
        { name: 'Specialty restaurants (6 total)', status: 'included' },
        { name: 'Afternoon tea (daily)', status: 'included' },
        { name: 'Macallan whisky experiences', status: 'included' },
        { name: 'Pool deck with cabanas', status: 'included' },
        { name: 'Casino', status: 'included' },
        { name: 'Thrill activities (skydiving etc.)', status: 'no' }
      ]
    }
  ],

  // ========================================
  // FOOTNOTES FOR ESTIMATED EXPENSES
  // ========================================
  // Only on items that are estimates and warrant clarification
  footnotes: {
    rc_addons: "¹ Royal Caribbean is most variable. Includes: crew gratuities (~$15.50/guest/day = $248), Premium Beverage Package (~$224), Wi-Fi pass (~$70), specialty dining upcharges (~$508). Your final cost varies significantly based on choices.",
    rc_excursions: "² Varies by port and tour choice (~$75-150/person per excursion).",
    
    princess_addons: "¹ Princess Plus fixed package at $65/guest/day (pre-purchase). Rate increases to $70/day if purchased onboard. Includes 15 drinks/day, specialty coffee, crew tips, 1-device Wi-Fi.",
    princess_excursions: "² Varies by port and tour choice (~$90-160/person per excursion). No credit included in Princess Plus package.",
    princess_dining: "³ Princess Plus does NOT include specialty restaurants—budget $75-100/person per specialty restaurant.",
    
    oceania_addons: "¹ Premium spirits & cocktails beyond complimentary house wine/beer (served only at meal times). All specialty dining, gratuities, basic wine/beer, specialty coffee, and Wi-Fi are fully included.",
    oceania_excursions: "² Estimated additional premium excursions beyond included credit. Varies by guest choice of primary amenity."
  },

  // ========================================
  // INCLUSIONS COMPARISON TABLE
  // ========================================
  // Shows what's included by default in each cruise's base fare
  // Values: 'yes' (included), 'partial' (with package), 'no' (extra charge)
  inclusions: [
    { feature: 'Specialty restaurants',  c1: 'no',      c2: 'partial',    c3: 'yes' },
    { feature: 'Wi-Fi',                  c1: 'no',      c2: 'partial',    c3: 'yes' },
    { feature: 'Gratuities',             c1: 'no',      c2: 'partial',    c3: 'yes' },
    { feature: 'Beverages',              c1: 'no',      c2: 'partial',    c3: 'partial' },
    { feature: 'Shore excursion credit', c1: 'no',      c2: 'no',         c3: 'yes' },
    { feature: 'Specialty coffee',       c1: 'no',      c2: 'no',         c3: 'yes' },
    { feature: 'Culinary classes',       c1: 'partial', c2: 'no',         c3: 'yes' },
    { feature: 'Number of ports',        c1: '5 ports', c2: '5 ports',    c3: '8 ports (bold)' }
  ],

  // ========================================
  // PORTS OF CALL
  // ========================================
  // Each port includes historical sites, dining venue, and highlight experience
  // sharedBy indicates which cruise(s) visit: 'all', '1', '2', '3', or '2,3'
  ports: [
    // --- PORTS SHARED BY ALL THREE CRUISES ---
    {
      name: 'Civitavecchia / Rome, Italy',
      sharedBy: 'all',
      historicalSites: [
        'Roman harbor structures and Torre di Lazzaretto',
        'Terme Taurine (Roman baths from 1st century)',
        'Via Popilia connection to Rome'
      ],
      diningVenue: 'Flavio al Velavevodetto (traditional Roman restaurant)',
      highlight: 'Rome\'s Colosseum area street performers and artisan markets'
    },
    {
      name: 'Santorini, Greece',
      sharedBy: '1,2',
      historicalSites: [
        'Akrotiri archaeological site (preserved Minoan town)',
        'Skaros Rock medieval fortress ruins',
        'Museum of Prehistoric Thera'
      ],
      diningVenue: 'Astra Café (restaurant with caldera views)',
      highlight: 'Oia sunset viewing and local winery tours'
    },
    {
      name: 'Kusadasi / Ephesus, Turkey',
      sharedBy: '1,2',
      historicalSites: [
        'Ephesus ancient city (UNESCO World Heritage)',
        'Library of Celsus facade (nearly intact)',
        'Panionium Ionian League ruins'
      ],
      diningVenue: 'Ozbas Kofte (highly rated kebab house)',
      highlight: 'Traditional Turkish bazaar shopping experience'
    },
    {
      name: 'Naples, Italy',
      sharedBy: '1',
      historicalSites: [
        'Royal Palace of Naples',
        'National Archaeological Museum',
        'Castel Nuovo (13th century fortress)'
      ],
      diningVenue: 'L\'Ebbrezza di Noè (traditional Neapolitan cuisine)',
      highlight: 'Gateway to Pompeii & Mount Vesuvius archaeological sites'
    },

    // --- PORTS in OPTIONS 2 & 3 only ---
    {
      name: 'Katakolon / Olympia, Greece',
      sharedBy: '2,3',
      historicalSites: [
        'Ancient Olympia archaeological site',
        'Museum of Ancient Greek Technology',
        'Pontikokastro medieval castle ruins'
      ],
      diningVenue: 'Taverna Olympia (traditional Greek taverna)',
      highlight: 'Kalamata olive oil tasting and artisan shops'
    },
    {
      name: 'Salerno, Italy',
      sharedBy: '2,3',
      historicalSites: [
        'Salerno Cathedral (11th century)',
        'Arechi Castle overlooking the Gulf',
        'Scuola Medica Salernitana ruins'
      ],
      diningVenue: 'Cumpa Cosimo (traditional Campanian cuisine)',
      highlight: 'Giardino della Minerva botanical garden'
    },

    // --- OPTION 1 ONLY ---
    {
      name: 'Mykonos, Greece',
      sharedBy: '1',
      historicalSites: [
        'Archaeological Museum of Mykonos',
        'Aegean Maritime Museum',
        'Lena\'s House (19th-century traditional residence)'
      ],
      diningVenue: 'M-Eating (contemporary Greek cuisine)',
      highlight: 'Little Venice waterfront district walking tour'
    },

    // --- OPTIONS 3 ONLY (EXCLUSIVE TO ALLURA) ---
    {
      name: 'Piraeus / Athens, Greece',
      sharedBy: '3',
      historicalSites: [
        'Archaeological Museum of Piraeus',
        'Temple of Aphrodite ruins',
        'Ancient Theatre of Zea'
      ],
      diningVenue: 'Psareia at Mikrolimano (seafood taverns)',
      highlight: 'Mikrolimano harbor district marina culture'
    },
    {
      name: 'Milos, Greece',
      sharedBy: '3',
      historicalSites: [
        'Phylakopi archaeological site',
        'Archaeological Museum of Milos',
        'Klima ancient harbor village'
      ],
      diningVenue: 'Sirocco (traditional Greek taverna)',
      highlight: 'Colorful volcanic beaches and geotourism'
    },
    {
      name: 'Catania / Mt. Etna, Sicily',
      sharedBy: '3',
      historicalSites: [
        'Greek-Roman Theatre (2nd-3rd century CE)',
        'Roman Amphitheatre',
        'Cattedrale di Catania'
      ],
      diningVenue: 'I Tre Bicchieri (Sicilian cuisine and wine)',
      highlight: 'Lively fruit and vegetable markets'
    },
    {
      name: 'Valletta, Malta',
      sharedBy: '3',
      historicalSites: [
        'St John\'s Co-Cathedral',
        'Grandmaster\'s Palace (1571-1574)',
        'Fort Saint Elmo'
      ],
      diningVenue: 'Nenu the Artisan Baker (traditional Maltese cuisine)',
      highlight: 'Mediterranean Conference Centre gardens'
    },
    {
      name: 'Palermo, Sicily',
      sharedBy: '3',
      historicalSites: [
        'Palazzo dei Normanni with Cappella Palatina',
        'Palermo Cathedral (12th-18th century)',
        'San Giovanni degli Eremiti church'
      ],
      diningVenue: 'Ballarò market restaurants (Sicilian street food)',
      highlight: 'Teatro Massimo opera house'
    }
  ]
};
