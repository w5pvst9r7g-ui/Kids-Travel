const REMAINING_GUIDES = [
{
  id:'adelaide', name:'Adelaide', short:'South Australia', country:'Australia', flag:'🇦🇺',
  emoji:'🍇', region:'City', tag:'Visited', colors:['#7c3aed','#f59e0b'],
  tagline:'A leafy “20-minute city” of parklands, festivals and beaches, ringed by green and wrapped around a river!',
  lat:-34.9285, lng:138.6007,
  gettingThere:{
    to:'ADL', toName:'Adelaide Airport', flightTime:'~24–27 h (2 stops)',
    route:'Dublin → Dubai / Doha → Melbourne / Sydney → Adelaide (no nonstop)',
    distance:'≈ 16,800 km', tz:'GMT +9:30 (+10:30 in summer)', best:'Mar–May & Sep–Nov (mild)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Adelaide +9:30/+10:30)',
    fun:[
      'Adelaide was carefully laid out in a grid by Colonel William Light and is completely surrounded by a ring of green parklands.',
      'It is nicknamed the “City of Churches” and also a “20-minute city” because you can drive almost anywhere in town in 20 minutes.',
      'South Australia keeps a clock half an hour different from the eastern states — its time zone is GMT +9:30! 🕤'
    ],
    kid:[
      'You can hop on a free tram down to the seaside at Glenelg and build sandcastles on the beach 🏖️',
      'Adelaide Zoo is home to the only giant pandas in the whole Southern Hemisphere! 🐼',
      'The River Torrens runs through the middle of town — you can paddle a pedal boat or ride the little Popeye cruise boat ⛵'
    ]
  },
  photos:[
    ['adelaide,city,skyline,torrens','Adelaide skyline & River Torrens',503],['glenelg,beach,adelaide,jetty','Glenelg Beach & jetty',504],
    ['adelaide,oval,cricket,ground','Adelaide Oval',505],['adelaide,central,market,produce','Adelaide Central Market',506],
    ['adelaide,hills,vineyard,green','Adelaide Hills vineyards',507],['adelaide,parklands,river,boat','Torrens parklands',508]
  ],
  attractions:[
    ['🏛️','North Terrace','A grand boulevard of museums, galleries and the state library — all free to wander.'],
    ['🛒','Adelaide Central Market','One of the biggest undercover markets in the south — cheese, fruit and tasty treats.'],
    ['🏏','Adelaide Oval','A famous cricket and footy stadium where you can climb the roof for huge views.'],
    ['⛰️','Adelaide Hills','Rolling green hills of vineyards, the cute German town of Hahndorf and a wildlife park.']
  ],
  kids:[
    ['🐼','Adelaide Zoo','Meet giant pandas, tigers and meerkats in a zoo right beside the river.',4.6,'19,000','Adelaide Zoo'],
    ['🏖️','Glenelg Beach','Catch the tram to a golden beach with a jetty, dolphins offshore and ice creams.',4.6,'7,000','Glenelg Beach Adelaide'],
    ['🐨','Cleland Wildlife Park','Hand-feed kangaroos and cuddle up close to koalas in the Adelaide Hills.',4.6,'5,500','Cleland Wildlife Park'],
    ['🌿','Adelaide Botanic Garden','Wander glasshouses, giant waterlilies and a kids’ nature playground.',4.7,'8,500','Adelaide Botanic Garden']
  ]
},
{
  id:'darwin', name:'Darwin', short:'Top End, Northern Territory', country:'Australia', flag:'🇦🇺',
  emoji:'🐊', region:'Wildlife', tag:'Visited', colors:['#16a34a','#f97316'],
  tagline:'A tropical frontier city at the gateway to crocodile rivers, waterfalls and the wild wonders of Kakadu!',
  lat:-12.4634, lng:130.8456,
  gettingThere:{
    to:'DRW', toName:'Darwin International', flightTime:'~22–25 h (1–2 stops)',
    route:'Dublin → Dubai / Doha → Singapore → Darwin (no nonstop)',
    distance:'≈ 14,300 km', tz:'GMT +9:30', best:'May–Oct (dry season — sunny & cooler)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Darwin +9:30)',
    fun:[
      'Darwin has only two seasons — the Wet and the Dry — and during the Wet it gets spectacular lightning storms almost every afternoon. ⛈️',
      'It is closer to the capitals of Indonesia and East Timor than it is to most Australian cities.',
      'Nearby Kakadu National Park is one of the biggest national parks on Earth and is famous for ancient Aboriginal rock art tens of thousands of years old.'
    ],
    kid:[
      'You can stand inside a clear cage called the “Cage of Death” and come face to face with a giant saltwater crocodile! 🐊',
      'At Crocosaurus Cove you might get to hold a baby croc and feed the big ones.',
      'On the “jumping crocs” river cruise, huge wild crocodiles leap right out of the water 🐊💦'
    ]
  },
  photos:[
    ['darwin,city,harbour,sunset','Darwin Harbour sunset',509],['kakadu,waterfall,jim,jim','Kakadu waterfalls',510],
    ['saltwater,crocodile,darwin,river','Saltwater crocodile',511],['mindil,beach,sunset,market','Mindil Beach Market',512],
    ['kakadu,rock,art,aboriginal','Kakadu rock art',513],['darwin,wetlands,jumping,croc','Jumping croc cruise',514]
  ],
  attractions:[
    ['🐊','Kakadu National Park','Waterfalls, billabongs, wild crocodiles and ancient rock art — a few hours’ drive away.'],
    ['🌅','Mindil Beach Sunset Market','Food stalls, fire-twirlers and fiery sunsets over the Timor Sea (dry season).'],
    ['💦','Litchfield National Park','Crystal swimming holes under waterfalls and giant magnetic termite mounds.'],
    ['🛳️','Darwin Waterfront','A wave lagoon and safe swimming beach right by the harbour in town.']
  ],
  kids:[
    ['🐊','Crocosaurus Cove','Meet huge saltwater crocs, hold a baby one and brave the “Cage of Death”.',4.4,'8,000','Crocosaurus Cove Darwin'],
    ['🦘','Territory Wildlife Park','Walk through an aviary and a tunnel aquarium and meet Top End animals.',4.6,'2,800','Territory Wildlife Park'],
    ['🐊','Jumping Crocodile Cruise','Watch wild crocodiles leap clear of the Adelaide River for a snack.',4.5,'3,500','Adelaide River Jumping Crocodile Cruise'],
    ['🌊','Leanyer Recreation Park','Free water park with waterslides, splash pads and a skate park.',4.6,'4,200','Leanyer Recreation Park Darwin']
  ]
},
{
  id:'agneswater', name:'Agnes Water & 1770', short:'Discovery Coast, Queensland', country:'Australia', flag:'🇦🇺',
  emoji:'🏄', region:'Beach', tag:'Visited', colors:['#0891b2','#fbbf24'],
  tagline:'Queensland’s most northerly surf beach, where the last real waves meet the start of the Great Barrier Reef!',
  lat:-24.2103, lng:151.9035,
  gettingThere:{
    to:'BDB', toName:'Bundaberg Airport (then ~2 h drive)', flightTime:'~26–29 h (2 stops)',
    route:'Dublin → Dubai → Brisbane → Bundaberg, then a 2-hour drive to Agnes Water',
    distance:'≈ 16,300 km', tz:'GMT +10', best:'Apr–Oct (warm, dry & sunny)'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Queensland +10)',
    fun:[
      'The tiny town of 1770 is named after the year Captain Cook first stepped ashore in Queensland.',
      'Agnes Water is the most northerly surf beach on the whole east coast — beyond here the Great Barrier Reef calms the waves.',
      'Queensland does not use daylight saving, so in summer its clocks run an hour behind Sydney and Melbourne.'
    ],
    kid:[
      'This is the perfect place to learn to surf — gentle beach-break waves and friendly surf schools for beginners 🏄',
      'You can walk a boardwalk through a spooky-cool forest of pale paperbark trees 🌳',
      'Take a “LARC” amphibious buggy that drives on land AND floats on water all the way to a lighthouse! 🚙🌊'
    ]
  },
  photos:[
    ['agnes,water,beach,surf','Agnes Water surf beach',515],['town,of,1770,headland','Town of 1770 headland',516],
    ['1770,sunset,boat,creek','1770 sunset cruise',517],['paperbark,forest,boardwalk,creek','Paperbark Forest walk',518],
    ['agnes,water,surf,lesson','Learning to surf',519],['eurimbula,national,park,coast','Eurimbula coast',520]
  ],
  attractions:[
    ['🏄','Agnes Water Main Beach','A long, sandy, patrolled surf beach — the last surf break heading north.'],
    ['⛵','1770 Sunset Cruise','A laid-back boat trip around the creek and headland as the sun goes down.'],
    ['🌳','Paperbark Forest Boardwalk','A short, shady 400 m trail winding through hundreds of paperbark trees.'],
    ['🏞️','Eurimbula National Park','Wild beaches, mangroves and bushland just north of the Town of 1770.']
  ],
  kids:[
    ['🏄','Reef 2 Beach Surf School','Australia’s most northerly surf school — gentle lessons for first-time groms.',4.9,'600','Reef 2 Beach Surf School Agnes Water'],
    ['🚙','LARC! Amphibious Tours','Ride a bright-pink buggy that drives on sand and floats across the water.',4.8,'900','1770 LARC Tours'],
    ['🌳','Paperbark Forest Boardwalk','An easy, leafy walk where kids spot birds among the pale paperbark trees.',4.6,'400','Paperbark Forest Agnes Water'],
    ['🏖️','Agnes Water Main Beach','Safe patrolled swimming, rock pools to explore and easy little waves.',4.7,'1,100','Agnes Water Main Beach']
  ]
},
{
  id:'herveybay', name:'Hervey Bay', short:'Fraser Coast, Queensland', country:'Australia', flag:'🇦🇺',
  emoji:'🐋', region:'Wildlife', tag:'Visited', colors:['#2563eb','#06b6d4'],
  tagline:'The whale-watching capital of Australia and the calm-water gateway to the giant sand island of K’gari!',
  lat:-25.2882, lng:152.8417,
  gettingThere:{
    to:'HVB', toName:'Hervey Bay Airport', flightTime:'~26–29 h (2 stops)',
    route:'Dublin → Dubai → Brisbane → Hervey Bay (no nonstop)',
    distance:'≈ 16,300 km', tz:'GMT +10', best:'Jul–Nov for whales; Apr–Oct warm & dry'
  },
  country_info:{
    capital:'Canberra', language:'English', currency:'Australian Dollar (A$)',
    population:'≈ 26 million', tz:'GMT +8 to +11 (Queensland +10)',
    fun:[
      'Hervey Bay is known as the whale-watching capital of the world — thousands of humpback whales rest in its calm waters on their long journey each year. 🐋',
      'It sits beside K’gari (Fraser Island), the largest sand island on the whole planet.',
      'K’gari has rainforest that grows straight out of pure sand, plus crystal-clear freshwater lakes and creeks.'
    ],
    kid:[
      'On a whale-watching boat, giant humpback whales swim right up close and sometimes leap clear out of the sea! 🐋',
      'On K’gari you can swim in Lake McKenzie, a lake of bright-blue water and squeaky-white sand 🏝️',
      'You ride along the beach like a road in a big 4WD bus, splashing through fresh creeks 🚌'
    ]
  },
  photos:[
    ['hervey,bay,humpback,whale','Humpback whale breach',521],['hervey,bay,jetty,pier','Urangan Pier',522],
    ['kgari,fraser,island,lake,mckenzie','Lake McKenzie, K’gari',523],['kgari,rainforest,sand,creek','Rainforest on sand',524],
    ['hervey,bay,dolphin,boat','Whale-watch boat',525],['kgari,75,mile,beach,4wd','K’gari beach drive',526]
  ],
  attractions:[
    ['🐋','Whale Watching Cruise','Half-day boat trips to meet playful humpback whales (July–November).'],
    ['🏝️','K’gari (Fraser Island)','The world’s biggest sand island — rainforest, lakes and beach highways.'],
    ['🌊','Lake McKenzie','A dazzling blue freshwater lake fringed by pure white silica sand.'],
    ['🎣','Urangan Pier','A long historic jetty perfect for fishing, walking and spotting rays.']
  ],
  kids:[
    ['🐋','Hervey Bay Whale Watching','Eye-to-eye encounters with humpback whales that wave their fins and breach.',4.8,'2,500','Hervey Bay Whale Watching'],
    ['🏝️','Lake McKenzie, K’gari','Swim in clear blue water and run on the softest, whitest sand you’ve ever felt.',4.8,'4,000','Lake McKenzie Fraser Island'],
    ['🦈','Reefworld Aquarium','Meet sharks, turtles and colourful reef fish, and watch feeding shows.',4.4,'1,200','Hervey Bay Reefworld Aquarium'],
    ['🛝','WetSide Water Park','Free splash park with fountains, tip buckets and waterslides on the esplanade.',4.5,'1,800','WetSide Water Education Park Hervey Bay']
  ]
},
{
  id:'christchurch', name:'Christchurch', short:'Canterbury, South Island', country:'New Zealand', flag:'🇳🇿',
  emoji:'🚣', region:'City', tag:'Visited', colors:['#0d9488','#64748b'],
  tagline:'A rebuilt garden city of punting boats and trams — the friendly gateway to the South Island and Antarctica!',
  lat:-43.5321, lng:172.6362,
  gettingThere:{
    to:'CHC', toName:'Christchurch International', flightTime:'~28–31 h (2 stops)',
    route:'Dublin → Dubai / Doha → Singapore / Sydney → Christchurch (no nonstop)',
    distance:'≈ 18,800 km', tz:'GMT +12 (+13 in summer)', best:'Dec–Mar (warm) & Sep–Nov'
  },
  country_info:{
    capital:'Wellington', language:'English & Māori', currency:'New Zealand Dollar (NZ$)',
    population:'≈ 5.2 million', tz:'GMT +12 (+13 in summer)',
    fun:[
      'Christchurch is nicknamed the “Garden City” because it is full of parks, gardens and tree-lined streets.',
      'It is a real gateway to Antarctica — planes and ships set off from here to the frozen continent.',
      'A big earthquake in 2011 damaged much of the city, so lots of clever, colourful new buildings have been built since — including a cathedral made partly of cardboard tubes!'
    ],
    kid:[
      'You can glide down the gentle River Avon in a flat-bottomed boat called a punt, pushed along with a long pole 🚣',
      'At the International Antarctic Centre you feel a real Antarctic “storm” room and meet little blue penguins 🐧',
      'Ride a restored vintage tram in a loop around the old city centre 🚋'
    ]
  },
  photos:[
    ['christchurch,punting,avon,river','Punting on the Avon',527],['christchurch,tram,city,heritage','Vintage city tram',528],
    ['christchurch,botanic,gardens,green','Botanic Gardens',529],['antarctic,centre,penguin,christchurch','Antarctic Centre penguins',530],
    ['christchurch,cardboard,cathedral','Transitional Cathedral',531],['port,hills,christchurch,gondola','Christchurch Gondola',532]
  ],
  attractions:[
    ['🌳','Botanic Gardens & Hagley Park','Huge riverside gardens with glasshouses, lawns and a playground.'],
    ['🚋','Christchurch Tram','A heritage tram looping past the cathedral, river and shops.'],
    ['🚠','Christchurch Gondola','A cable car up the Port Hills for views over the city, sea and plains.'],
    ['🐧','International Antarctic Centre','Feel an Antarctic storm, ride a Hägglund vehicle and meet rescued penguins.']
  ],
  kids:[
    ['🐧','International Antarctic Centre','Shiver in a snow-storm room, meet little blue penguins and ride an all-terrain Hägglund.',4.5,'9,500','International Antarctic Centre Christchurch'],
    ['🦜','Willowbank Wildlife Reserve','Meet a real kiwi after dark, hand-feed eels and see native NZ animals.',4.5,'4,500','Willowbank Wildlife Reserve Christchurch'],
    ['🚣','Punting on the Avon','Float down the gentle river in a flat boat steered by a poling boatie.',4.7,'2,000','Punting on the Avon Christchurch'],
    ['🛝','Margaret Mahy Playground','One of the biggest playgrounds in the country — towers, slides and water play.',4.7,'5,000','Margaret Mahy Family Playground Christchurch']
  ]
},
{
  id:'kentroma', name:'Kentroma (Sivota)', short:'Epirus, mainland Greece', country:'Greece', flag:'🇬🇷',
  emoji:'⛵', region:'Beach', tag:'Visited', colors:['#0ea5e9','#22c55e'],
  tagline:'A quiet green corner of mainland Greece, where pine-clad hills tumble into turquoise coves near little Sivota!',
  lat:39.4083, lng:20.2350,
  gettingThere:{
    to:'PVK', toName:'Aktion / Preveza (then ~1.5 h drive)', flightTime:'~4–6 h (1 stop via Athens)',
    route:'Dublin → Athens → Preveza (PVK), then a scenic drive up the Epirus coast to Sivota',
    distance:'≈ 2,800 km', tz:'GMT +2 (+3 in summer)', best:'May–Sep (warm, sunny seas)'
  },
  country_info:{
    capital:'Athens', language:'Greek', currency:'Euro (€)',
    population:'≈ 10.4 million', tz:'GMT +2 (+3 in summer)',
    fun:[
      'This stretch of coast is in Epirus, one of the greenest and most mountainous parts of Greece.',
      'The little resort of Sivota is sometimes called the “Greek Caribbean” for its bright turquoise water and tiny islets.',
      'Just offshore lie small islets you can almost walk to — including the famous sandbar of Bella Vraka.'
    ],
    kid:[
      'At Bella Vraka you can walk across a shallow sandbar through ankle-deep sea to a little island! 🏝️',
      'The water is so clear and turquoise it looks like a swimming pool 🐠',
      'You can take a boat trip to hidden coves and sea caves you can only reach from the water ⛵'
    ]
  },
  photos:[
    ['sivota,greece,turquoise,bay','Turquoise Sivota bay',533],['bella,vraka,sandbar,sivota','Bella Vraka sandbar',534],
    ['sivota,harbour,boats,epirus','Sivota harbour',535],['mega,ammos,beach,sivota','Mega Ammos beach',536],
    ['sivota,islets,boat,trip','Islet boat trip',537],['epirus,coast,pine,sea','Pine-clad Epirus coast',538]
  ],
  attractions:[
    ['🏖️','Bella Vraka Beach','Wade across a shallow sandbar to a tiny islet ringed by glowing turquoise water.'],
    ['⛵','Sivota Boat Trips','Hop on a small boat to hidden coves, sea caves and the bluest swimming spots.'],
    ['🏝️','Mega Ammos Beach','A long, sandy bay in Sivota with calm, shallow, kid-friendly water.'],
    ['🚤','Pisina Beach (the “Pool”)','A sheltered, deep-blue inlet between the islets that really does look like a pool.']
  ],
  kids:[
    ['🏝️','Bella Vraka Beach','Splash across the warm, shallow sandbar to a little island — half beach, half adventure.',4.6,'3,000','Bella Vraka Beach Sivota'],
    ['⛵','Sivota Day Boat Trip','A gentle cruise to turquoise coves and sea caves with swim stops along the way.',4.7,'1,200','Sivota boat trip Thesprotia'],
    ['🏖️','Mega Ammos Beach','Soft sand and calm, shallow water that is perfect for little paddlers.',4.5,'900','Mega Ammos Beach Sivota'],
    ['🐠','Snorkelling at Pisina','Clear, deep-blue water between the islets — great for spotting little fish.',4.6,'700','Pisina Beach Sivota Greece']
  ]
}
];
