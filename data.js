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

      // Day-by-day port schedule (null = At Sea)
      itinerary: [
        { date: 'Jun 6',  port: 'Civitavecchia / Rome, Italy' },
        { date: 'Jun 7',  port: null },
        { date: 'Jun 8',  port: 'Naples, Italy' },
        { date: 'Jun 9',  port: null },
        { date: 'Jun 10', port: 'Santorini, Greece' },
        { date: 'Jun 11', port: 'Kusadasi / Ephesus, Turkey' },
        { date: 'Jun 12', port: 'Mykonos, Greece' },
        { date: 'Jun 13', port: 'Civitavecchia / Rome, Italy' }
      ],

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

      // Day-by-day port schedule (null = At Sea)
      itinerary: [
        { date: 'Jun 12', port: 'Civitavecchia / Rome, Italy' },
        { date: 'Jun 13', port: 'Salerno, Italy' },
        { date: 'Jun 14', port: 'Katakolon / Olympia, Greece' },
        { date: 'Jun 15', port: null },
        { date: 'Jun 16', port: 'Santorini, Greece' },
        { date: 'Jun 17', port: 'Kusadasi / Ephesus, Turkey' },
        { date: 'Jun 18', port: null },
        { date: 'Jun 19', port: 'Civitavecchia / Rome, Italy' }
      ],

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

      // Day-by-day port schedule (null = At Sea)
      itinerary: [
        { date: 'Jun 25', port: 'Piraeus / Athens, Greece' },
        { date: 'Jun 26', port: 'Katakolon / Olympia, Greece' },
        { date: 'Jun 27', port: 'Milos, Greece' },
        { date: 'Jun 28', port: 'Valletta, Malta' },
        { date: 'Jun 29', port: 'Catania / Mt. Etna, Sicily' },
        { date: 'Jun 30', port: 'Palermo, Sicily' },
        { date: 'Jul 1',  port: 'Salerno, Italy' },
        { date: 'Jul 2',  port: 'Civitavecchia / Rome, Italy' }
      ],

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
        'Colosseum & Roman Forum (the ancient empire\'s civic and ceremonial heart)',
        'Vatican Museums, Sistine Chapel & St. Peter\'s Basilica',
        'Pantheon, Trevi Fountain & Piazza Navona'
      ],
      diningVenue: 'Flavio al Velavevodetto (traditional Roman restaurant)',
      highlight: 'Rome\'s Colosseum area street performers and artisan markets'
    },
    {
      name: 'Santorini, Greece',
      sharedBy: '1,2',
      historicalSites: [
        'Akrotiri Bronze Age site (UNESCO-listed buried Minoan town)',
        'Oia village — iconic blue-domed churches and caldera panorama',
        'Ancient Thera ruins on Mesa Vouno (Hellenistic & Roman remains)'
      ],
      diningVenue: 'Astra Café (restaurant with caldera views)',
      highlight: 'Oia sunset viewing and local winery tours'
    },
    {
      name: 'Kusadasi / Ephesus, Turkey',
      sharedBy: '1,2',
      historicalSites: [
        'Ephesus ancient city — Great Theatre, Curetes Street & Terrace Houses (UNESCO)',
        'Library of Celsus facade (2nd-century CE, one of the best-preserved in the world)',
        'House of the Virgin Mary (Meryem Ana Evi — major Catholic pilgrimage site)'
      ],
      diningVenue: 'Ozbas Kofte (highly rated kebab house)',
      highlight: 'Traditional Turkish bazaar shopping experience'
    },
    {
      name: 'Naples, Italy',
      sharedBy: '1',
      historicalSites: [
        'Pompeii archaeological site (Roman city preserved by Vesuvius, UNESCO)',
        'Herculaneum (smaller, better-preserved companion site to Pompeii)',
        'National Archaeological Museum (world\'s finest collection of Pompeii artifacts)'
      ],
      diningVenue: 'L\'Ebbrezza di Noè (traditional Neapolitan cuisine)',
      highlight: 'Spaccanapoli street & the birthplace of Neapolitan pizza'
    },

    // --- PORTS in OPTIONS 2 & 3 only ---
    {
      name: 'Katakolon / Olympia, Greece',
      sharedBy: '2,3',
      historicalSites: [
        'Ancient Olympia — Temple of Zeus, Altis sanctuary & original athlete\'s stadium',
        'Archaeological Museum of Olympia (Hermes by Praxiteles, Nike of Paeonius)',
        'Museum of Ancient Greek Technology (working models of ancient innovations)'
      ],
      diningVenue: 'Taverna Olympia (traditional Greek taverna)',
      highlight: 'Kalamata olive oil tasting and artisan shops'
    },
    {
      name: 'Salerno, Italy',
      sharedBy: '2,3',
      historicalSites: [
        'Salerno Cathedral — Norman nave & crypt of St. Matthew (11th century)',
        'Arechi Castle (Lombard fortress with panoramic Gulf of Salerno views)',
        'Amalfi Coast — Positano, Amalfi & Ravello (30–60 min from port)'
      ],
      diningVenue: 'Cumpa Cosimo (traditional Campanian cuisine)',
      highlight: 'Giardino della Minerva botanical garden'
    },

    // --- OPTION 1 ONLY ---
    {
      name: 'Mykonos, Greece',
      sharedBy: '1',
      historicalSites: [
        'Delos Island (UNESCO — birthplace of Apollo, entire island is an archaeological site)',
        'Mykonos windmills & Little Venice waterfront',
        'Paraportiani Church (iconic whitewashed Cycladic architecture)'
      ],
      diningVenue: 'M-Eating (contemporary Greek cuisine)',
      highlight: 'Sunset aperitif along the Little Venice waterfront'
    },

    // --- OPTIONS 3 ONLY (EXCLUSIVE TO ALLURA) ---
    {
      name: 'Piraeus / Athens, Greece',
      sharedBy: '3',
      historicalSites: [
        'Acropolis Hill — Parthenon, Erechtheion & Propylaea (UNESCO)',
        'Acropolis Museum (world-class collection of classical Greek sculpture)',
        'Ancient Agora of Athens & Temple of Hephaestus'
      ],
      diningVenue: 'Psareia at Mikrolimano (seafood taverns)',
      highlight: 'Plaka neighborhood walk below the Acropolis — tavernas, shops & Byzantine churches'
    },
    {
      name: 'Milos, Greece',
      sharedBy: '3',
      historicalSites: [
        'Sarakiniko beach (white volcanic lunar landscape — most photographed spot in Milos)',
        'Catacombs of Milos (only early Christian catacombs in Greece, 1st century CE)',
        'Klima village — colorful syrmata boathouses carved into volcanic rock'
      ],
      diningVenue: 'Sirocco (traditional Greek taverna)',
      highlight: 'Boat tour of sea caves, geothermal springs & secluded volcanic coves'
    },
    {
      name: 'Catania / Mt. Etna, Sicily',
      sharedBy: '3',
      historicalSites: [
        'Mount Etna — cable car & crater hike on Europe\'s most active volcano (UNESCO)',
        'Catania Cathedral & Piazza del Duomo (baroque Elephant Fountain)',
        'Greek-Roman Theatre of Catania (still used for summer performances)'
      ],
      diningVenue: 'I Tre Bicchieri (Sicilian cuisine and wine)',
      highlight: 'Lively fruit and vegetable markets'
    },
    {
      name: 'Valletta, Malta',
      sharedBy: '3',
      historicalSites: [
        'St John\'s Co-Cathedral (Caravaggio\'s The Beheading of St John, ornate chapels)',
        'Upper Barrakka Gardens & Saluting Battery (panoramic Grand Harbour views)',
        'Grandmaster\'s Palace & State Rooms (history of the Knights of St John)'
      ],
      diningVenue: 'Nenu the Artisan Baker (traditional Maltese cuisine)',
      highlight: 'Mediterranean Conference Centre gardens'
    },
    {
      name: 'Palermo, Sicily',
      sharedBy: '3',
      historicalSites: [
        'Palazzo dei Normanni & Cappella Palatina (UNESCO, stunning Byzantine mosaics)',
        'Monreale Cathedral (UNESCO — finest Norman-Byzantine mosaics in the world, 5 km from port)',
        'Palermo Cathedral (12th-century Norman exterior with royal tombs)'
      ],
      diningVenue: 'Ballarò market restaurants (Sicilian street food)',
      highlight: 'Teatro Massimo opera house'
    }
  ]
};
