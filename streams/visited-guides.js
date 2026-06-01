const VISITED_GUIDES = [
{
  id:'sydney', name:'Sydney', short:'New South Wales, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🌉', region:'City', tag:'Visited', colors:['#0ea5e9','#f59e0b'],
  tagline:'A sparkling harbour city with a sail-shaped Opera House, golden beaches and a giant coat-hanger bridge!',
  lat:-33.8688, lng:151.2093,
  gettingThere:{
    to:'SYD', toName:'Sydney Kingsford Smith', flightTime:'~22–24 h (1 stop)',
    route:'Dublin → Dubai / Doha / Abu Dhabi → Sydney (no nonstop)',
    distance:'≈ 17,250 km', tz:'GMT +10 (+11 in summer)', best:'Sep–Nov & Mar–May (mild)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Sydney +10/+11)',
    fun:[
      'The Sydney Opera House roof is made of over a million white tiles shaped like sails.',
      'You can climb right to the top of the Sydney Harbour Bridge — locals call it “the Coathanger”.',
      'Sydney is in the Southern Hemisphere, so Christmas Day lands in the middle of summer! 🎄☀️'
    ],
    kid:[
      'Bondi Beach has a sea pool carved into the rocks where waves splash right in! 🌊',
      'Catch a yellow-and-green ferry across the harbour — it’s like a boat bus.',
      'At Taronga Zoo you can see kangaroos and koalas with the city skyline behind them 🦘'
    ]
  },
  photos:[
    ['sydney,opera,house,harbour','Sydney Opera House',401],['sydney,harbour,bridge','Harbour Bridge',402],
    ['bondi,beach,sydney','Bondi Beach',403],['sydney,ferry,harbour','Harbour ferry',404],
    ['taronga,zoo,koala','Taronga Zoo',405],['sydney,skyline,sunset','City skyline',406]
  ],
  attractions:[
    ['🎭','Sydney Opera House','Tour inside the world’s most famous sail-shaped building.'],
    ['🌉','Harbour Bridge Climb','Walk up the arch of the giant steel bridge for huge views.'],
    ['🏖️','Bondi Beach','Surf, sand and a sea pool right at the edge of the ocean.'],
    ['⛴️','Manly Ferry','A breezy harbour ferry ride past the Opera House to Manly.']
  ],
  kids:[
    ['🦘','Taronga Zoo','Koalas, kangaroos and a Sky Safari cable car over the harbour.',4.6,'48,000','Taronga Zoo Sydney'],
    ['🐠','SEA LIFE Sydney Aquarium','Walk through a glass tunnel under sharks, rays and dugongs.',4.4,'30,000','SEA LIFE Sydney Aquarium Darling Harbour'],
    ['🐧','WILD LIFE Sydney Zoo','Meet koalas, wallabies and a giant saltwater croc in the city.',4.3,'14,000','WILD LIFE Sydney Zoo Darling Harbour'],
    ['🏖️','Bondi Icebergs Pool','Splash in the famous ocean pool where waves wash over the edge.',4.7,'9,000','Bondi Icebergs Pool Sydney']
  ]
},
{
  id:'melbourne', name:'Melbourne', short:'Victoria, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🚋', region:'City', tag:'Visited', colors:['#7c3aed','#10b981'],
  tagline:'A fun-loving city of rattling trams, hidden laneways, penguins and the world’s biggest cricket ground!',
  lat:-37.8136, lng:144.9631,
  gettingThere:{
    to:'MEL', toName:'Melbourne (Tullamarine)', flightTime:'~23–25 h (1 stop)',
    route:'Dublin → Dubai / Doha / Abu Dhabi → Melbourne (no nonstop)',
    distance:'≈ 17,000 km', tz:'GMT +10 (+11 in summer)', best:'Mar–May & Sep–Nov'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Melbourne +10/+11)',
    fun:[
      'Melbourne has the biggest tram network in the world — and the city-centre loop is free to ride!',
      'It’s been voted one of the world’s most liveable cities many times over.',
      'People say you can get “four seasons in one day” because the weather changes so fast! 🌦️'
    ],
    kid:[
      'Tiny “fairy” penguins waddle ashore at St Kilda pier every evening at dusk 🐧',
      'Ride a free City Circle tram in a loop around the whole city centre.',
      'The lanes are covered in colourful street art you can hunt for like a treasure map. 🎨'
    ]
  },
  photos:[
    ['melbourne,tram,city','City trams',407],['melbourne,laneway,street,art','Street-art laneways',408],
    ['melbourne,skyline,yarra','Yarra River skyline',409],['st,kilda,penguin','St Kilda penguins',410],
    ['melbourne,mcg,cricket','The MCG',411],['melbourne,royal,botanic,gardens','Botanic Gardens',412]
  ],
  attractions:[
    ['🚋','Free City Circle Tram','Hop on a heritage tram that loops the whole city for free.'],
    ['🎨','Hosier Lane','A laneway splashed top to bottom with ever-changing street art.'],
    ['🏟️','Melbourne Cricket Ground','Tour the giant “MCG”, one of the biggest stadiums on Earth.'],
    ['🐧','St Kilda Penguins','Watch little penguins come home along the breakwater at dusk.']
  ],
  kids:[
    ['🐠','SEA LIFE Melbourne Aquarium','Penguins, sharks and a four-metre croc named Pinjarra.',4.4,'27,000','SEA LIFE Melbourne Aquarium'],
    ['🦁','Melbourne Zoo','Gorillas, lions and a butterfly house in the leafy Royal Park.',4.6,'34,000','Melbourne Zoo Parkville'],
    ['🔬','Scienceworks','Hands-on science, a lightning room and a planetarium.',4.6,'8,500','Scienceworks Spotswood Melbourne'],
    ['🐨','Melbourne Star / Royal Botanic Gardens','Green lawns, a kids’ garden and a maze to explore.',4.7,'22,000','Royal Botanic Gardens Melbourne']
  ]
},
{
  id:'goldcoast', name:'Gold Coast', short:'Queensland, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🎢', region:'Beach', tag:'Visited', colors:['#f59e0b','#06b6d4'],
  tagline:'Surf beaches, theme parks and roller coasters galore — Australia’s sunshine playground!',
  lat:-28.0167, lng:153.4000,
  gettingThere:{
    to:'OOL', toName:'Gold Coast Airport', flightTime:'~24–26 h (1–2 stops)',
    route:'Dublin → Dubai / Doha → Brisbane or Sydney → Gold Coast',
    distance:'≈ 16,650 km', tz:'GMT +10', best:'Apr–May & Sep–Oct (warm, dry)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +10 (no daylight saving in QLD)',
    fun:[
      'The Gold Coast has about 57 km of golden surf beaches in a row.',
      'It’s home to some of Australia’s biggest theme parks all clustered together.',
      'Surfers Paradise glows with neon and is one of Australia’s top surfing spots. 🏄'
    ],
    kid:[
      'You can ride world-class roller coasters AND a flume that drenches you! 🎢',
      'Spot dolphins and a polar bear in the same day at the marine park.',
      'The beaches are so wide you can build a whole sandcastle city. 🏖️'
    ]
  },
  photos:[
    ['surfers,paradise,beach','Surfers Paradise',413],['gold,coast,skyline,beach','Beach skyline',414],
    ['gold,coast,theme,park,roller,coaster','Theme-park coasters',415],['gold,coast,surfing','Surf lessons',416],
    ['dolphin,sea,world','Marine park',417],['gold,coast,sunrise,beach','Beach sunrise',418]
  ],
  attractions:[
    ['🏄','Surfers Paradise Beach','Wide golden sand and gentle rollers great for learning to surf.'],
    ['🎢','Dreamworld','Big roller coasters plus a tiger island and koala cuddles.'],
    ['🐬','Sea World','Dolphins, polar bears, penguins and splashy water rides.'],
    ['🌧️','Wet’n’Wild','A giant water park packed with slides and a wave pool.']
  ],
  kids:[
    ['🎢','Dreamworld','Australia’s biggest theme park — coasters, tigers and koalas.',4.5,'33,000','Dreamworld Gold Coast Coomera'],
    ['🐬','Sea World Gold Coast','Dolphins, penguins, rides and a polar bear habitat.',4.5,'27,000','Sea World Gold Coast Main Beach'],
    ['🦸','Warner Bros. Movie World','Superhero coasters and Looney Tunes parades.',4.5,'29,000','Warner Bros Movie World Gold Coast'],
    ['🐨','Currumbin Wildlife Sanctuary','Hand-feed rainbow lorikeets and meet koalas and kangaroos.',4.6,'24,000','Currumbin Wildlife Sanctuary']
  ]
},
{
  id:'sunshinecoast', name:'Sunshine Coast', short:'Queensland, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🐨', region:'Beach', tag:'Visited', colors:['#fbbf24','#0ea5e9'],
  tagline:'Calm family beaches, a famous wildlife zoo and giant pineapples under the Queensland sun!',
  lat:-26.6500, lng:153.0667,
  gettingThere:{
    to:'MCY', toName:'Sunshine Coast Airport', flightTime:'~24–26 h (1–2 stops)',
    route:'Dublin → Dubai / Doha → Brisbane or Sydney → Sunshine Coast',
    distance:'≈ 16,500 km', tz:'GMT +10', best:'Apr–May & Sep–Oct'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +10 (no daylight saving in QLD)',
    fun:[
      'The Sunshine Coast is named for its long sunny days and easygoing beach towns.',
      'Australia Zoo here was made famous by “Crocodile Hunter” Steve Irwin.',
      'The Big Pineapple is a giant fibreglass fruit you can actually walk inside! 🍍'
    ],
    kid:[
      'The bays at Noosa and Mooloolaba have calm, shallow water just right for little swimmers.',
      'You can watch a real crocodile feeding show at Australia Zoo. 🐊',
      'Climb the funny Glass House Mountains shaped like pointy hats. ⛰️'
    ]
  },
  photos:[
    ['noosa,beach,queensland','Noosa beach',419],['mooloolaba,beach','Mooloolaba bay',420],
    ['australia,zoo,crocodile','Australia Zoo',421],['glass,house,mountains','Glass House Mountains',422],
    ['big,pineapple,queensland','The Big Pineapple',423],['sunshine,coast,surf','Surf and sand',424]
  ],
  attractions:[
    ['🐊','Australia Zoo','Steve Irwin’s zoo with crocs, tigers, koalas and a daily wildlife show.'],
    ['🏖️','Noosa Main Beach','A rare north-facing beach with calm, sparkling water.'],
    ['🍍','The Big Pineapple','A giant landmark pineapple with a fun train and treetop course.'],
    ['🐠','SEA LIFE Sunshine Coast','Touch pools, seals and an underwater tunnel at Mooloolaba.']
  ],
  kids:[
    ['🐊','Australia Zoo','Home of the Crocodile Hunter — crocs, koalas and feeding shows.',4.6,'46,000','Australia Zoo Beerwah'],
    ['🐠','SEA LIFE Sunshine Coast Aquarium','Seals, sharks and a glass tunnel at Mooloolaba.',4.4,'13,000','SEA LIFE Sunshine Coast Aquarium Mooloolaba'],
    ['🍓','The Big Pineapple','Train rides, a treetop ropes course and a wildlife zoo.',4.2,'4,500','The Big Pineapple Woombye'],
    ['🎢','Aussie World','Old-school carnival rides and dodgems for all ages.',4.4,'9,500','Aussie World Palmview']
  ]
},
{
  id:'whitsundays', name:'The Whitsundays', short:'Queensland, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🐠', region:'Beach', tag:'Visited', colors:['#14b8a6','#fcd34d'],
  tagline:'74 island gems, the swirling white sands of Whitehaven and the edge of the Great Barrier Reef!',
  lat:-20.2667, lng:148.7000,
  gettingThere:{
    to:'PPP', toName:'Whitsunday Coast (Proserpine)', flightTime:'~26–28 h (2 stops)',
    route:'Dublin → Dubai / Doha → Brisbane → Whitsunday Coast (for Airlie Beach)',
    distance:'≈ 15,900 km', tz:'GMT +10', best:'Apr–Oct (dry, calm, no stingers)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +10 (no daylight saving in QLD)',
    fun:[
      'The Whitsundays are 74 islands scattered along the Great Barrier Reef.',
      'Whitehaven Beach has sand that is 98% pure silica — squeaky-white and cool underfoot.',
      'Heart Reef is a coral reef naturally shaped like a heart you can see from a plane. ❤️'
    ],
    kid:[
      'Snorkel straight off the boat to see clownfish like Nemo on the reef! 🐠',
      'At Airlie Beach there’s a free swimming lagoon with a man-made beach.',
      'The white sand of Whitehaven swirls into the blue sea like a painting. 🎨'
    ]
  },
  photos:[
    ['whitehaven,beach,whitsundays','Whitehaven Beach',425],['hill,inlet,whitsundays','Hill Inlet swirls',426],
    ['great,barrier,reef,snorkel','Reef snorkelling',427],['whitsunday,islands,aerial','Island aerials',428],
    ['airlie,beach,lagoon','Airlie Beach lagoon',429],['heart,reef,coral','Heart Reef',430]
  ],
  attractions:[
    ['🏝️','Whitehaven Beach','Seven km of pure white silica sand and turquoise water.'],
    ['🤿','Great Barrier Reef Snorkel','Boat out to the reef to swim with coral fish and turtles.'],
    ['🛟','Airlie Beach Lagoon','A free seaside swimming lagoon safe from stingers.'],
    ['🚁','Heart Reef Scenic Flight','Soar over the islands to spot the heart-shaped reef.']
  ],
  kids:[
    ['🏖️','Whitehaven Beach','Build castles in the whitest, squeakiest sand on Earth.',4.8,'4,000','Whitehaven Beach Whitsunday Island'],
    ['🛟','Airlie Beach Lagoon','A free, safe lagoon with a sandy beach and lifeguards.',4.6,'6,500','Airlie Beach Lagoon'],
    ['🐠','Reefworld Pontoon (Cruise Whitsundays)','A reef platform with a glass viewing chamber and snorkelling.',4.6,'3,200','Cruise Whitsundays Reefworld Airlie Beach'],
    ['🐊','Whitsunday Crocodile Safari','Cruise a wetland to spot wild crocs and birds.',4.5,'1,400','Whitsunday Crocodile Safari']
  ]
},
{
  id:'brisbane', name:'Brisbane', short:'Queensland, Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🌇', region:'City', tag:'Visited', colors:['#f97316','#22c55e'],
  tagline:'A sunny river city with a man-made city beach and the biggest koala sanctuary in the world!',
  lat:-27.4698, lng:153.0251,
  gettingThere:{
    to:'BNE', toName:'Brisbane Airport', flightTime:'~23–25 h (1 stop)',
    route:'Dublin → Dubai / Doha → Brisbane (no nonstop)',
    distance:'≈ 16,550 km', tz:'GMT +10', best:'Apr–May & Sep–Oct'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +10 (no daylight saving in QLD)',
    fun:[
      'Brisbane wraps around a big winding river you cross by ferries called CityCats.',
      'South Bank has a free sandy lagoon — a real beach right in the middle of the city!',
      'It’s sunny here about 280 days a year. ☀️'
    ],
    kid:[
      'Cuddle a koala at Lone Pine — the world’s first and biggest koala sanctuary 🐨',
      'Splash at Streets Beach, a free lagoon with sand in the city centre.',
      'Zoom along the river on a speedy CityCat ferry. ⛴️'
    ]
  },
  photos:[
    ['brisbane,city,river','Brisbane River',431],['south,bank,brisbane,lagoon','South Bank lagoon',432],
    ['lone,pine,koala','Lone Pine koalas',433],['brisbane,citycat,ferry','CityCat ferry',434],
    ['story,bridge,brisbane','Story Bridge',435],['brisbane,skyline,sunset','City sunset',436]
  ],
  attractions:[
    ['🏖️','Streets Beach, South Bank','A free man-made beach and lagoon in the heart of the city.'],
    ['🐨','Lone Pine Koala Sanctuary','Hold a koala and hand-feed kangaroos.'],
    ['⛴️','CityCat River Cruise','Ride the fast ferries up and down the Brisbane River.'],
    ['🎡','Wheel of Brisbane','A giant observation wheel for big views over South Bank.']
  ],
  kids:[
    ['🐨','Lone Pine Koala Sanctuary','The world’s biggest koala sanctuary — cuddles and roos.',4.6,'30,000','Lone Pine Koala Sanctuary Brisbane'],
    ['🏖️','Streets Beach (South Bank Parklands)','A free city lagoon with sand, palms and lifeguards.',4.7,'27,000','Streets Beach South Bank Parklands Brisbane'],
    ['🔬','Queensland Museum & Sciencentre','Dinosaur skeletons and a hands-on science zone.',4.6,'17,000','Queensland Museum Sciencentre Brisbane'],
    ['🎢','Wheel of Brisbane','A 60-metre Ferris wheel with views across the river.',4.4,'4,800','Wheel of Brisbane South Bank']
  ]
},
{
  id:'auckland', name:'Auckland', short:'North Island, New Zealand', country:'New Zealand', flag:'🇳🇿',
  emoji:'⛵', region:'City', tag:'Visited', colors:['#0284c7','#16a34a'],
  tagline:'The “City of Sails” built on 50 volcanoes, with a sky tower you can jump off!',
  lat:-36.8485, lng:174.7633,
  gettingThere:{
    to:'AKL', toName:'Auckland Airport', flightTime:'~26–29 h (1–2 stops)',
    route:'Dublin → Dubai / Doha → Auckland (one of the longest trips on Earth)',
    distance:'≈ 18,350 km', tz:'GMT +12 (+13 in summer)', best:'Nov–Apr (warmer)'
  },
  country_info:{
    capital:'Wellington', language:'English, Māori & NZ Sign Language', currency:'New Zealand Dollar (NZ$)',
    population:'≈ 5.2 million', tz:'GMT +12 (+13 in summer)',
    fun:[
      'Auckland is built on a field of about 50 volcanoes — some are now grassy parks!',
      'The Sky Tower is the tallest building in the Southern Hemisphere at 328 m.',
      'New Zealand has more sheep than people — about 5 sheep for every person! 🐑'
    ],
    kid:[
      'Brave grown-ups can leap off the Sky Tower on a wire (SkyJump). 😮',
      'Walk through a glass tunnel surrounded by sharks and stingrays.',
      'Climb a real (sleeping!) volcano cone like Mount Eden for huge views. 🌋'
    ]
  },
  photos:[
    ['auckland,sky,tower,city','Sky Tower',437],['auckland,harbour,sailboats','City of Sails',438],
    ['mount,eden,auckland,volcano','Mount Eden crater',439],['auckland,domain,park','Auckland Domain',440],
    ['rangitoto,island,auckland','Rangitoto Island',441],['auckland,skyline,sunset','Harbour sunset',442]
  ],
  attractions:[
    ['🗼','Sky Tower','Glass-floor lifts and views for miles — plus a daring SkyJump.'],
    ['🌋','Mount Eden (Maungawhau)','Walk up a grassy volcano with a deep crater and city views.'],
    ['🐠','SEA LIFE Kelly Tarlton’s','A curved glass tunnel through sharks, rays and penguins.'],
    ['⛴️','Devonport Ferry','A short harbour hop to a seaside village and old forts.']
  ],
  kids:[
    ['🐧','SEA LIFE Kelly Tarlton’s Aquarium','Walk under sharks and meet a colony of penguins.',4.4,'12,000','SEA LIFE Kelly Tarltons Auckland'],
    ['🦁','Auckland Zoo','Giraffes, a tropical rainforest dome and NZ native birds.',4.6,'18,000','Auckland Zoo Western Springs'],
    ['🚂','MOTAT (Museum of Transport & Technology)','Tram rides, planes and hands-on science.',4.5,'7,500','MOTAT Auckland'],
    ['🌋','Rainbow’s End','New Zealand’s biggest theme park with the Stratosfear ride.',4.3,'9,000','Rainbows End Manukau Auckland']
  ]
},
{
  id:'vanuatu', name:'Port Vila', short:'Efate, Vanuatu', country:'Vanuatu', flag:'🇻🇺',
  emoji:'🌴', region:'Beach', tag:'Visited', colors:['#10b981','#fbbf24'],
  tagline:'A South Pacific island capital with underwater post offices, waterfalls and friendly volcano villages!',
  lat:-17.7333, lng:168.3167,
  gettingThere:{
    to:'VLI', toName:'Bauerfield (Port Vila)', flightTime:'~28–31 h (2–3 stops)',
    route:'Dublin → Dubai / Doha → Brisbane / Sydney / Auckland → Port Vila',
    distance:'≈ 16,400 km', tz:'GMT +11', best:'Apr–Oct (dry season)'
  },
  country_info:{
    capital:'Port Vila', language:'Bislama, English & French', currency:'Vatu (VUV)',
    population:'≈ 320,000', tz:'GMT +11',
    fun:[
      'Vanuatu is a chain of about 80 islands made by volcanoes in the South Pacific.',
      'Hideaway Island has the world’s only underwater post office — post a waterproof postcard!',
      'Vanuatu is one of the most language-rich places on Earth, with over 100 languages. 🗣️'
    ],
    kid:[
      'Snorkel right off the beach to see coral and reef fish in warm, calm water. 🐠',
      'Splash down the natural stone terraces of the Mele Cascades waterfalls. 💦',
      'Fly across the rainforest on a jungle zipline! 🌳'
    ]
  },
  photos:[
    ['vanuatu,beach,palm','Island beach',443],['mele,cascades,waterfall,vanuatu','Mele Cascades',444],
    ['hideaway,island,vanuatu,snorkel','Hideaway Island',445],['port,vila,harbour','Port Vila harbour',446],
    ['vanuatu,coral,reef,fish','Coral reef',447],['vanuatu,village,culture','Island village',448]
  ],
  attractions:[
    ['💌','Hideaway Island','Snorkel the reef and post a card at the underwater post office.'],
    ['💦','Mele Cascades','Climb the blue waterfall pools and slide down smooth rock.'],
    ['🌳','Vanuatu Jungle Zipline','Whizz through the rainforest on six long zip lines.'],
    ['🛖','Ekasup Cultural Village','Meet ni-Vanuatu families and learn island ways of life.']
  ],
  kids:[
    ['💦','Mele Cascades Waterfall','Wade and paddle up a staircase of crystal-clear pools.',4.7,'2,500','Mele Cascades Vanuatu'],
    ['🐠','Hideaway Island Marine Reserve','Easy beach snorkelling and the underwater post office.',4.4,'1,700','Hideaway Island Vanuatu'],
    ['🌉','Vanuatu Jungle Zipline & Skybridge','Zip lines and a treetop bridge over the rainforest.',4.7,'900','Vanuatu Jungle Zipline Port Vila'],
    ['🏞️','Eden on the River','River swimming, a ropes course, mini-golf and farm animals.',4.5,'700','Eden on the River Vanuatu']
  ]
},
{
  id:'singapore', name:'Singapore', short:'Singapore', country:'Singapore', flag:'🇸🇬',
  emoji:'🦁', region:'City', tag:'Visited', colors:['#dc2626','#0ea5e9'],
  tagline:'A futuristic garden city with supertrees, a night zoo and a rooftop infinity pool in the clouds!',
  lat:1.3521, lng:103.8198,
  gettingThere:{
    to:'SIN', toName:'Singapore Changi', flightTime:'~14–16 h (1 stop)',
    route:'Dublin → Dubai / Doha / Istanbul → Singapore (no nonstop)',
    distance:'≈ 11,150 km', tz:'GMT +8', best:'Feb–Apr (driest); warm all year'
  },
  country_info:{
    capital:'Singapore (a city-state)', language:'English, Malay, Mandarin & Tamil', currency:'Singapore Dollar (S$)',
    population:'≈ 5.9 million', tz:'GMT +8',
    fun:[
      'Singapore is a whole country that’s really just one big city on an island.',
      'Changi Airport has a 40-metre indoor waterfall and a butterfly garden!',
      'Its national symbol, the Merlion, is half-lion and half-fish. 🦁🐟'
    ],
    kid:[
      'The Supertrees light up at night in a free music and lights show. 🌳✨',
      'Singapore Zoo lets you have breakfast right next to orangutans! 🦧',
      'You can ride a cable car across to Sentosa, the fun-park island.'
    ]
  },
  photos:[
    ['gardens,by,the,bay,supertree','Supertree Grove',449],['marina,bay,sands,singapore','Marina Bay Sands',450],
    ['singapore,merlion,skyline','Merlion & skyline',451],['sentosa,island,singapore','Sentosa island',452],
    ['singapore,changi,jewel,waterfall','Changi Jewel waterfall',453],['singapore,zoo,orangutan','Singapore Zoo',454]
  ],
  attractions:[
    ['🌳','Gardens by the Bay','Giant glowing Supertrees and two cool flower domes.'],
    ['🦁','Merlion Park','Snap a photo with the famous lion-fish fountain.'],
    ['🎢','Sentosa Island','Beaches, a luge, cable cars and Universal Studios.'],
    ['💧','Jewel Changi','The world’s tallest indoor waterfall inside the airport.']
  ],
  kids:[
    ['🌺','Gardens by the Bay','Supertrees, the Cloud Forest waterfall and a kids’ water park.',4.7,'130,000','Gardens by the Bay Singapore'],
    ['🦁','Singapore Zoo','Open-air zoo where you can have breakfast with orangutans.',4.6,'58,000','Singapore Zoo Mandai'],
    ['🎬','Universal Studios Singapore','Movie-themed coasters and rides on Sentosa.',4.6,'67,000','Universal Studios Singapore Sentosa'],
    ['🐠','S.E.A. Aquarium','One of the world’s biggest aquariums with a huge ocean tank.',4.5,'42,000','SEA Aquarium Sentosa Singapore']
  ]
},
{
  id:'capetown', name:'Cape Town', short:'Western Cape, South Africa', country:'South Africa', flag:'🇿🇦',
  emoji:'⛰️', region:'City', tag:'Visited', colors:['#0891b2','#f59e0b'],
  tagline:'A city under a flat-topped mountain, with a cable car, beach penguins and two oceans meeting!',
  lat:-33.9249, lng:18.4241,
  gettingThere:{
    to:'CPT', toName:'Cape Town Int’l', flightTime:'~14–17 h (1 stop)',
    route:'Dublin → London / Doha / Dubai / Istanbul → Cape Town (no nonstop)',
    distance:'≈ 9,950 km', tz:'GMT +2', best:'Oct–Apr (warm, dry)'
  },
  country_info:{
    capital:'Pretoria, Cape Town & Bloemfontein (three capitals)', language:'11 official, incl. English, Afrikaans, isiZulu, isiXhosa', currency:'South African Rand (R)',
    population:'≈ 61 million', tz:'GMT +2',
    fun:[
      'South Africa is the only country with THREE capital cities — Cape Town is one of them.',
      'Table Mountain is so flat on top it looks like a giant table, often with a cloud “tablecloth”.',
      'At Cape Point you can see where two great oceans seem to meet. 🌊'
    ],
    kid:[
      'African penguins waddle around Boulders Beach right next to swimmers! 🐧',
      'Ride a rotating cable car up to the top of Table Mountain.',
      'Watch for baboons, dassies and ostriches near Cape Point.'
    ]
  },
  photos:[
    ['table,mountain,cape,town','Table Mountain',455],['boulders,beach,penguins','Boulders penguins',456],
    ['cape,point,lighthouse','Cape Point',457],['cape,town,waterfront,harbour','V&A Waterfront',458],
    ['cape,town,cable,car','Cableway',459],['cape,town,beach,camps,bay','Camps Bay beach',460]
  ],
  attractions:[
    ['⛰️','Table Mountain Cableway','A spinning cable car to a flat mountain top in the clouds.'],
    ['🐧','Boulders Beach','Swim and paddle beside a colony of wild African penguins.'],
    ['🌊','Cape of Good Hope','A dramatic clifftop where you feel the two oceans meet.'],
    ['⚓','V&A Waterfront','A harbour full of seals, boats, a wheel and a giant aquarium.']
  ],
  kids:[
    ['⛰️','Table Mountain Aerial Cableway','Ride the rotating car to the famous flat summit.',4.7,'46,000','Table Mountain Aerial Cableway Cape Town'],
    ['🐧','Boulders Beach Penguin Colony','Boardwalks beside hundreds of African penguins.',4.7,'27,000','Boulders Beach Penguin Colony Simons Town'],
    ['🐠','Two Oceans Aquarium','Sharks, rays and a kelp forest at the V&A Waterfront.',4.6,'24,000','Two Oceans Aquarium Cape Town'],
    ['🎡','V&A Waterfront & Cape Wheel','A giant observation wheel, seals and street performers.',4.7,'120,000','V&A Waterfront Cape Town']
  ]
},
{
  id:'johannesburg', name:'Johannesburg', short:'Gauteng, South Africa', country:'South Africa', flag:'🇿🇦',
  emoji:'🦁', region:'Wildlife', tag:'Visited', colors:['#ca8a04','#15803d'],
  tagline:'A golden city on the edge of the African bush, where lions and rhinos roam on safari!',
  lat:-26.2041, lng:28.0473,
  gettingThere:{
    to:'JNB', toName:'O.R. Tambo (Johannesburg)', flightTime:'~13–16 h (1 stop)',
    route:'Dublin → London / Doha / Dubai / Istanbul → Johannesburg (no nonstop)',
    distance:'≈ 9,400 km', tz:'GMT +2', best:'May–Sep (dry; best game viewing)'
  },
  country_info:{
    capital:'Pretoria, Cape Town & Bloemfontein (three capitals)', language:'11 official, incl. English, isiZulu, Afrikaans, Sesotho', currency:'South African Rand (R)',
    population:'≈ 61 million', tz:'GMT +2',
    fun:[
      'Johannesburg grew up almost overnight when gold was found here in 1886.',
      'It’s nicknamed the “City of Gold” — eGoli in the Zulu language.',
      'It’s one of the world’s biggest cities NOT built on a river or coast. 🏙️'
    ],
    kid:[
      'Go on a real safari nearby and look for the “Big Five” animals. 🦁🐘🦏🐃🐆',
      'Visit the Cradle of Humankind, where some of the oldest human fossils were found.',
      'Meet lion cubs and feed giraffes at the wildlife parks. 🦒'
    ]
  },
  photos:[
    ['johannesburg,skyline,city','Joburg skyline',461],['lion,safari,south,africa','Safari lions',462],
    ['giraffe,south,africa,bush','Bush giraffes',463],['rhino,safari,south,africa','Rhino sighting',464],
    ['johannesburg,gold,reef,city','Gold Reef City',465],['elephant,safari,south,africa','Safari elephants',466]
  ],
  attractions:[
    ['🦁','Lion & Safari Park','Drive among lions, cheetahs and giraffes near the city.'],
    ['🎢','Gold Reef City','A gold-rush theme park with rides and an old mine tour.'],
    ['🦴','Cradle of Humankind','Caves and a museum about our earliest ancestors.'],
    ['🐘','Pilanesberg Safari','A nearby park to spot the Big Five in an old volcano crater.']
  ],
  kids:[
    ['🦁','Lion & Safari Park','Self-drive past lions and cuddle-feed giraffes.',4.4,'14,000','Lion and Safari Park Johannesburg'],
    ['🎢','Gold Reef City Theme Park','Roller coasters plus a working gold-mine tour.',4.3,'45,000','Gold Reef City Johannesburg'],
    ['🐘','Johannesburg Zoo','Lions, gorillas, elephants and a night-time zoo walk.',4.4,'30,000','Johannesburg Zoo'],
    ['🦴','Maropeng & Sterkfontein Caves','Explore caves and a fun museum about early humans.',4.4,'7,000','Maropeng Cradle of Humankind']
  ]
},
{
  id:'paris', name:'Paris', short:'Île-de-France, France', country:'France', flag:'🇫🇷',
  emoji:'🗼', region:'City', tag:'Visited', colors:['#2563eb','#ec4899'],
  tagline:'The City of Light — an iron tower that twinkles, a glass pyramid and Disneyland down the road!',
  lat:48.8566, lng:2.3522,
  gettingThere:{
    to:'CDG', toName:'Paris Charles de Gaulle', flightTime:'~1 h 50 (nonstop ✅)',
    route:'Dublin → Paris nonstop (Aer Lingus / Ryanair / Air France)',
    distance:'≈ 780 km', tz:'GMT +1 (+2 in summer)', best:'Apr–Jun & Sep–Oct'
  },
  country_info:{
    capital:'Paris', language:'French', currency:'Euro (€)',
    population:'≈ 68 million', tz:'GMT +1 (+2 in summer)',
    fun:[
      'The Eiffel Tower sparkles with thousands of lights for five minutes every hour after dark.',
      'France is the most-visited country in the whole world.',
      'The glass pyramid at the Louvre is the doorway to the world’s biggest art museum. 🔺'
    ],
    kid:[
      'Disneyland Paris has a pink fairytale castle and Star Wars rides. 🏰',
      'Take a boat down the River Seine past Notre-Dame cathedral. ⛵',
      'Try a warm crêpe with chocolate from a street stand — délicieux! 🥞'
    ]
  },
  photos:[
    ['eiffel,tower,paris','Eiffel Tower',467],['louvre,pyramid,paris','Louvre pyramid',468],
    ['disneyland,paris,castle','Disneyland Paris',469],['seine,river,paris,boat','River Seine',470],
    ['notre,dame,paris','Notre-Dame',471],['paris,crepe,street','Paris crêpes',472]
  ],
  attractions:[
    ['🗼','Eiffel Tower','Ride a lift up the iron tower and watch it sparkle at night.'],
    ['🏰','Disneyland Paris','Two theme parks of rides, parades and Disney characters.'],
    ['🖼️','The Louvre','Meet the Mona Lisa inside the giant glass-pyramid museum.'],
    ['⛵','Seine River Cruise','Glide past the famous sights from the water.']
  ],
  kids:[
    ['🏰','Disneyland Paris','Europe’s favourite theme-park resort with two parks.',4.6,'380,000','Disneyland Paris'],
    ['🗼','Eiffel Tower','Glass lifts, a top deck and a sparkling light show.',4.6,'350,000','Eiffel Tower Paris'],
    ['🔬','Cité des Enfants (La Villette)','A whole hands-on science playground built just for kids.',4.5,'30,000','Cite des Enfants Cite des Sciences Paris'],
    ['🦁','Parc Zoologique de Paris','A modern zoo with lions, giraffes and a rainforest dome.',4.4,'24,000','Parc Zoologique de Paris Vincennes']
  ]
},
{
  id:'london', name:'London', short:'England, United Kingdom', country:'United Kingdom', flag:'🇬🇧',
  emoji:'🎡', region:'City', tag:'Visited', colors:['#1d4ed8','#dc2626'],
  tagline:'Red buses, royal palaces, a giant Ferris wheel and the wizarding world of Harry Potter!',
  lat:51.5074, lng:-0.1278,
  gettingThere:{
    to:'LHR', toName:'London Heathrow', flightTime:'~1 h 25 (nonstop ✅)',
    route:'Dublin → London nonstop (Aer Lingus / Ryanair / BA)',
    distance:'≈ 460 km', tz:'GMT +0 (+1 in summer)', best:'May–Sep'
  },
  country_info:{
    capital:'London', language:'English', currency:'Pound Sterling (£)',
    population:'≈ 67 million', tz:'GMT +0 (+1 in summer)',
    fun:[
      'The Tube (London Underground) is the oldest underground railway in the world.',
      'Big Ben is really the name of the giant bell inside the famous clock tower.',
      'The King’s guards wear tall, furry black hats and aren’t allowed to laugh! 🎩'
    ],
    kid:[
      'Ride the London Eye, a 135-metre wheel, for a view over the whole city. 🎡',
      'Watch the Changing of the Guard at Buckingham Palace.',
      'Explore the real film sets at the Harry Potter Studio Tour. ⚡'
    ]
  },
  photos:[
    ['london,big,ben,parliament','Big Ben',473],['tower,bridge,london','Tower Bridge',474],
    ['london,eye,thames','London Eye',475],['buckingham,palace,guard','Buckingham Palace',476],
    ['london,red,bus,phone,box','Red buses',477],['harry,potter,studio,london','Potter studio',478]
  ],
  attractions:[
    ['🎡','The London Eye','A giant wheel over the Thames with glass capsules.'],
    ['🏰','Tower of London','A real castle guarding the sparkling Crown Jewels.'],
    ['💂','Buckingham Palace','Watch the famous Changing of the Guard ceremony.'],
    ['⚡','Harry Potter Studio Tour','Walk the actual film sets and ride a broomstick.']
  ],
  kids:[
    ['⚡','Warner Bros. Studio Tour (Harry Potter)','Step onto the real Hogwarts film sets.',4.8,'85,000','Warner Bros Studio Tour London Harry Potter'],
    ['🦖','Natural History Museum','Dinosaur skeletons and a roaring animatronic T-rex — free!',4.7,'180,000','Natural History Museum London'],
    ['🐠','SEA LIFE London Aquarium','Sharks, penguins and a glass walkway over rays.',4.4,'48,000','SEA LIFE London Aquarium'],
    ['🎡','London Eye','Ride a glass pod high above the River Thames.',4.5,'130,000','London Eye']
  ]
},
{
  id:'barcelona', name:'Barcelona', short:'Catalonia, Spain', country:'Spain', flag:'🇪🇸',
  emoji:'⛪', region:'City', tag:'Visited', colors:['#e11d48','#f59e0b'],
  tagline:'A wavy, colourful city of Gaudí’s fairytale buildings, sunny beaches and a magic fountain!',
  lat:41.3851, lng:2.1734,
  gettingThere:{
    to:'BCN', toName:'Barcelona–El Prat', flightTime:'~2 h 40 (nonstop ✅)',
    route:'Dublin → Barcelona nonstop (Aer Lingus / Ryanair / Vueling)',
    distance:'≈ 1,470 km', tz:'GMT +1 (+2 in summer)', best:'Apr–Jun & Sep–Oct'
  },
  country_info:{
    capital:'Madrid', language:'Spanish & Catalan', currency:'Euro (€)',
    population:'≈ 48 million', tz:'GMT +1 (+2 in summer)',
    fun:[
      'The Sagrada Família church has been under construction for over 140 years!',
      'Architect Antoni Gaudí built houses that look like dragons, bones and melting candles.',
      'Barcelona has a beach right next to the city centre. 🏖️'
    ],
    kid:[
      'Park Güell is like a giant playground with a wavy mosaic dragon lizard. 🦎',
      'The Magic Fountain dances with coloured water and music at night. 💦🌈',
      'Ride a cable car high over the harbour to Montjuïc hill.'
    ]
  },
  photos:[
    ['sagrada,familia,barcelona','Sagrada Família',479],['park,guell,barcelona,mosaic','Park Güell',480],
    ['barcelona,beach,barceloneta','Barceloneta beach',481],['casa,batllo,gaudi,barcelona','Gaudí houses',482],
    ['barcelona,magic,fountain,montjuic','Magic Fountain',483],['barcelona,gothic,quarter,street','Gothic Quarter',484]
  ],
  attractions:[
    ['⛪','Sagrada Família','Gaudí’s towering, tree-like church full of colour and light.'],
    ['🦎','Park Güell','A wavy fairytale park with the famous mosaic lizard.'],
    ['🏖️','Barceloneta Beach','Golden city sand for paddling and sandcastles.'],
    ['💦','Magic Fountain of Montjuïc','An evening show of coloured water, lights and music.']
  ],
  kids:[
    ['🐠','L’Aquàrium de Barcelona','An 80-metre underwater tunnel with sharks.',4.3,'40,000','LAquarium de Barcelona'],
    ['🎢','Tibidabo Amusement Park','A hilltop fairground with old planes and big views.',4.5,'18,000','Tibidabo Amusement Park Barcelona'],
    ['🦁','Barcelona Zoo','Lions, hippos and a farm corner in the city park.',4.2,'40,000','Barcelona Zoo Parc de la Ciutadella'],
    ['🦎','Park Güell','Explore Gaudí’s colourful mosaic park and dragon stairs.',4.6,'160,000','Park Guell Barcelona']
  ]
},
{
  id:'losangeles', name:'Los Angeles', short:'California, United States', country:'United States', flag:'🇺🇸',
  emoji:'🎬', region:'City', tag:'Visited', colors:['#f59e0b','#0ea5e9'],
  tagline:'The home of Hollywood, movie-studio thrill rides and the original Disneyland — lights, camera, fun!',
  lat:34.0522, lng:-118.2437,
  gettingThere:{
    to:'LAX', toName:'Los Angeles Int’l', flightTime:'~11–12 h (nonstop ✅)',
    route:'Dublin → Los Angeles nonstop (Aer Lingus)',
    distance:'≈ 8,200 km', tz:'GMT −8 (−7 in summer)', best:'Mar–May & Sep–Nov'
  },
  country_info:{
    capital:'Washington, D.C.', language:'English', currency:'US Dollar ($)',
    population:'≈ 335 million', tz:'GMT −5 to −10 (LA −8/−7)',
    fun:[
      'The Hollywood Sign’s letters are each about 13.7 m (45 ft) tall!',
      'LA was the birthplace of the movie industry — “Tinseltown”.',
      'Disneyland in nearby Anaheim was the very first Disney park, opened in 1955. 🏰'
    ],
    kid:[
      'Ride behind the scenes of real movies on the Universal Studios tram. 🎬',
      'Find your favourite star’s name on the Hollywood Walk of Fame. ⭐',
      'Build your own world at the giant LEGOLAND nearby. 🧱'
    ]
  },
  photos:[
    ['hollywood,sign,los,angeles','Hollywood Sign',485],['santa,monica,pier,beach','Santa Monica Pier',486],
    ['universal,studios,hollywood','Universal Studios',487],['hollywood,walk,of,fame,stars','Walk of Fame',488],
    ['los,angeles,skyline,sunset','LA skyline',489],['venice,beach,los,angeles','Venice Beach',490]
  ],
  attractions:[
    ['🎬','Universal Studios Hollywood','A working film studio with rides and a backlot tram tour.'],
    ['⭐','Hollywood Walk of Fame','Hunt for famous names set into the pavement.'],
    ['🎡','Santa Monica Pier','A seaside funfair with a solar Ferris wheel and a beach.'],
    ['🏰','Disneyland Anaheim','The original “Happiest Place on Earth”, a short trip away.']
  ],
  kids:[
    ['🎬','Universal Studios Hollywood','Studio tram tour plus Super Nintendo World and Harry Potter.',4.6,'120,000','Universal Studios Hollywood'],
    ['🏰','Disneyland Park (Anaheim)','The first Disney park with classic rides and Star Wars land.',4.7,'160,000','Disneyland Park Anaheim California'],
    ['🎡','Santa Monica Pier & Pacific Park','A beach funfair with a solar-powered Ferris wheel.',4.6,'68,000','Santa Monica Pier Pacific Park'],
    ['🧱','LEGOLAND California','Build, ride and splash in a whole park made for LEGO fans.',4.5,'31,000','LEGOLAND California Carlsbad']
  ]
},
{
  id:'miami', name:'Miami', short:'Florida, United States', country:'United States', flag:'🇺🇸',
  emoji:'🌴', region:'Beach', tag:'Visited', colors:['#06b6d4','#ec4899'],
  tagline:'Pastel Art Deco buildings, warm turquoise water and a gateway to the Everglades alligators!',
  lat:25.7617, lng:-80.1918,
  gettingThere:{
    to:'MIA', toName:'Miami Int’l', flightTime:'~11–13 h (1 stop)',
    route:'Dublin → London / New York → Miami (no nonstop)',
    distance:'≈ 6,650 km', tz:'GMT −5 (−4 in summer)', best:'Nov–Apr (dry, warm)'
  },
  country_info:{
    capital:'Washington, D.C.', language:'English (lots of Spanish too)', currency:'US Dollar ($)',
    population:'≈ 335 million', tz:'GMT −5 to −10 (Miami −5/−4)',
    fun:[
      'South Beach is famous for its rows of pastel Art Deco hotels from the 1930s.',
      'The Everglades nearby is a huge “river of grass” full of alligators.',
      'Miami’s Little Havana feels like a slice of Cuba, full of music and colour. 🎶'
    ],
    kid:[
      'Build sandcastles on warm, soft South Beach sand. 🏖️',
      'Zoom across the marshes on an airboat to spot wild alligators. 🐊',
      'Look out for bright-painted lifeguard towers in every colour. 🌈'
    ]
  },
  photos:[
    ['south,beach,miami,art,deco','South Beach Art Deco',491],['miami,beach,lifeguard,tower','Lifeguard towers',492],
    ['miami,skyline,downtown','Miami skyline',493],['everglades,airboat,alligator','Everglades airboat',494],
    ['miami,little,havana','Little Havana',495],['miami,beach,palm,sunset','Beach sunset',496]
  ],
  attractions:[
    ['🏖️','South Beach','Warm turquoise water and pastel Art Deco hotels.'],
    ['🐊','Everglades Airboat Tour','Skim the marshes to spot wild alligators and birds.'],
    ['🐬','Miami Seaquarium','Dolphins, sea turtles and manatees by the bay.'],
    ['🎨','Wynwood Walls','Streets covered in giant, colourful murals.']
  ],
  kids:[
    ['🦁','Zoo Miami','A huge open-air zoo with a monorail and a wildlife splash zone.',4.6,'34,000','Zoo Miami'],
    ['🔬','Frost Science Museum','A planetarium, aquarium and hands-on science downtown.',4.6,'15,000','Frost Science Museum Miami'],
    ['🦜','Jungle Island','Tropical animals, lemurs and a beach play zone.',4.2,'12,000','Jungle Island Miami'],
    ['🐊','Everglades Safari Park Airboat','Family airboat rides to see gators up close.',4.5,'10,000','Everglades Safari Park Airboat Tours']
  ]
},
{
  id:'fuerteventura', name:'Fuerteventura', short:'Canary Islands, Spain', country:'Spain', flag:'🇪🇸',
  emoji:'🏜️', region:'Beach', tag:'Visited', colors:['#fcd34d','#0ea5e9'],
  tagline:'Endless golden dunes, warm Atlantic waves and year-round sun on a windswept island paradise!',
  lat:28.3587, lng:-14.0537,
  gettingThere:{
    to:'FUE', toName:'Fuerteventura Airport', flightTime:'~4 h 45 (nonstop ✅)',
    route:'Dublin → Fuerteventura nonstop (Ryanair / TUI, mostly seasonal)',
    distance:'≈ 3,000 km', tz:'GMT +0 (+1 in summer)', best:'All year — sunniest Apr–Oct ☀️'
  },
  country_info:{
    capital:'Madrid', language:'Spanish', currency:'Euro (€)',
    population:'≈ 48 million', tz:'GMT +0 (+1 in summer)',
    fun:[
      'Fuerteventura has the longest, sandiest beaches in all the Canary Islands.',
      'The Corralejo dunes are a desert of golden sand right beside the sea.',
      'It’s one of the closest Canary Islands to Africa — only about 100 km away! 🌍'
    ],
    kid:[
      'Run down giant sand dunes that feel just like a real desert. 🏜️',
      'The shallow lagoons are warm and calm — perfect for little paddlers.',
      'Spot Barbary ground squirrels that beg for snacks at viewpoints. 🐿️'
    ]
  },
  photos:[
    ['corralejo,dunes,fuerteventura','Corralejo dunes',497],['fuerteventura,beach,turquoise','Turquoise beach',498],
    ['fuerteventura,lagoon,sotavento','Sotavento lagoon',499],['fuerteventura,windsurf','Windsurfing',500],
    ['fuerteventura,lighthouse,coast','Coastal lighthouse',501],['fuerteventura,sunset,beach','Beach sunset',502]
  ],
  attractions:[
    ['🏜️','Corralejo Sand Dunes','A natural park of huge golden dunes by the sea.'],
    ['🏖️','Sotavento Beach','A vast shallow lagoon that fills and empties with the tide.'],
    ['🐐','Betancuria Village','The island’s pretty old capital with goats and palm valleys.'],
    ['🌊','Ajuy Caves','Black-sand beach and sea caves carved into the cliffs.']
  ],
  kids:[
    ['🐬','Oasis Wildlife Fuerteventura','A botanical zoo with sea lions, reptiles and a camel safari.',4.4,'9,500','Oasis Wildlife Fuerteventura La Lajita'],
    ['🌵','Acua Water Park','Slides, a lazy river and splash zones in Corralejo.',4.3,'5,500','Acua Water Park Corralejo'],
    ['🏜️','Corralejo Natural Park Dunes','Roll and slide down a real sand-dune desert.',4.7,'8,000','Corralejo Natural Park Dunes Fuerteventura'],
    ['🐠','Baku Family Park','Mini-golf, a small water park and play areas at Corralejo.',4.2,'3,800','Baku Family Park Corralejo']
  ]
}
];
