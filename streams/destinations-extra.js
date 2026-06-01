// Extra destinations for Globie's Atlas — drop straight into the DESTS array.
const EXTRA_DESTS = [
{
  id:'antalya', name:'Antalya', short:'Turquoise Coast', country:'Turkey', flag:'🇹🇷',
  emoji:'🏖️', region:'Beach', tag:'Wishlist', colors:['#0ea5e9','#14b8a6'],
  tagline:'A turquoise sea, tumbling waterfalls and a Roman old town with a castle gate!',
  lat:36.8969, lng:30.7133,
  gettingThere:{
    to:'AYT', toName:'Antalya', flightTime:'~5 h (nonstop, seasonal SunExpress) — otherwise ~6–8 h (1 stop)',
    route:'Dublin → Antalya nonstop in summer, or Dublin → Istanbul / Frankfurt → Antalya',
    distance:'≈ 3,400 km', tz:'GMT +3', best:'May–Oct (warm, sunny beach weather)'
  },
  country_info:{
    capital:'Ankara', language:'Turkish', currency:'Turkish Lira (TRY)',
    population:'≈ 85 million (Turkey)', tz:'GMT +3',
    fun:[
      'Türkiye sits on two continents at once — part in Europe and part in Asia!',
      'Antalya’s coast is called the “Turquoise Coast” because the sea really is that colour.',
      'Santa Claus (St Nicholas) actually lived in ancient Türkiye, near Antalya. 🎅'
    ],
    kid:[
      'A waterfall called Düden tumbles straight off a cliff into the sea — splashy! 💦',
      'You can walk through Hadrian’s Gate, a Roman archway over 1,800 years old.',
      'The Land of Legends theme park has SpongeBob, PAW Patrol and 40 water slides! 🛝'
    ]
  },
  photos:[
    ['antalya,turkey,coast','Turquoise coast',301],['antalya,old,town,kaleici','Kaleiçi old town',302],
    ['duden,waterfall,antalya','Düden Waterfall',303],['hadrians,gate,antalya','Hadrian’s Gate',304],
    ['antalya,harbour,boats','Old harbour boats',305],['antalya,beach,konyaalti','Konyaaltı beach',306]
  ],
  attractions:[
    ['🏰','Kaleiçi Old Town','Cobbled lanes, a Roman gate and a harbour full of wooden boats.'],
    ['💦','Düden Waterfalls','A river that leaps right off a cliff into the sparkling sea.'],
    ['🏛️','Aspendos Theatre','A 2,000-year-old Roman theatre where you can shout and hear an echo.'],
    ['⛰️','Taurus Mountains','Cable-car country with pine forests and snowy peaks behind the beach.']
  ],
  kids:[
    ['🎢','The Land of Legends','Theme park with 40 water slides, a dolphin show and SpongeBob.',4.5,'34,000','The Land of Legends Theme Park Belek Antalya'],
    ['🐠','Antalya Aquarium','Walk through the world’s longest underwater tunnel past sharks & rays.',4.4,'31,000','Antalya Aquarium'],
    ['🏖️','Konyaaltı Beach','A long pebbly beach with mountains behind and a fun seaside park.',4.5,'24,000','Konyaalti Beach Antalya'],
    ['🚡','Tünektepe Cable Car','Ride up over the bay for a bird’s-eye view of the whole coast.',4.5,'4,500','Tunektepe Teleferik Antalya']
  ]
},
{
  id:'split', name:'Split', short:'Dalmatia, Croatia', country:'Croatia', flag:'🇭🇷',
  emoji:'🏛️', region:'City', tag:'Wishlist', colors:['#3b82f6','#06b6d4'],
  tagline:'Live inside a real Roman emperor’s palace, then hop a boat to sunny islands!',
  lat:43.5081, lng:16.4402,
  gettingThere:{
    to:'SPU', toName:'Split', flightTime:'~3 h (nonstop)',
    route:'Dublin → Split nonstop (Aer Lingus, Ryanair, Croatia Airlines)',
    distance:'≈ 1,800 km', tz:'GMT +1', best:'May–Sep (warm sea & sunshine)'
  },
  country_info:{
    capital:'Zagreb', language:'Croatian', currency:'Euro (€)',
    population:'≈ 3.9 million', tz:'GMT +1',
    fun:[
      'Split grew up inside a palace a Roman emperor built to retire in over 1,700 years ago!',
      'Croatia has more than 1,000 islands sprinkled along its sparkling Adriatic coast.',
      'The necktie was invented in Croatia — that’s why it’s called a “cravat”. 👔'
    ],
    kid:[
      'People still live and run shops inside Diocletian’s Palace — a city within a fort. 🏰',
      'You can catch a ferry to islands like Brač and Hvar for a beach picnic. ⛴️',
      'Climb Marjan hill to a playground, a petting zoo and a giant view of the sea.'
    ]
  },
  photos:[
    ['split,croatia,palace','Diocletian’s Palace',311],['split,riva,waterfront','The Riva waterfront',312],
    ['split,bell,tower','Cathedral bell tower',313],['brac,island,beach','Brač island beach',314],
    ['marjan,hill,split','Marjan hill view',315],['split,old,town,street','Old-town lanes',316]
  ],
  attractions:[
    ['🏛️','Diocletian’s Palace','A whole old town built inside a Roman emperor’s palace.'],
    ['🔔','Cathedral Bell Tower','Climb the stone tower for a dizzying view over the red rooftops.'],
    ['⛴️','Island Ferries','Hop a boat to Brač, Hvar or the blue caves for the day.'],
    ['🌲','Marjan Hill','A green park hill with trails, a zoo and pebbly swimming coves.']
  ],
  kids:[
    ['🌲','Marjan Park','Forest trails, a playground, petting zoo and viewpoints over the sea.',4.6,'9,500','Marjan Park Split'],
    ['🏖️','Bačvice Beach','A shallow sandy beach where locals play the bat-and-ball game picigin.',4.3,'7,800','Bacvice Beach Split'],
    ['🐉','Žnjan Beach','A long, family-friendly pebble beach with slides and splash zones.',4.3,'5,200','Znjan Beach Split'],
    ['🏛️','Diocletian’s Palace','Wander the ancient cellars and squares of a living Roman fortress.',4.7,'42,000','Diocletian Palace Split']
  ]
},
{
  id:'algarve', name:'Algarve', short:'Faro, Portugal', country:'Portugal', flag:'🇵🇹',
  emoji:'🏖️', region:'Beach', tag:'Best deal', colors:['#f59e0b','#0ea5e9'],
  tagline:'Golden cliffs, hidden sea caves and a dolphin-filled water park — nonstop from Dublin!',
  lat:37.0194, lng:-7.9304,
  gettingThere:{
    to:'FAO', toName:'Faro', flightTime:'~3 h (nonstop)',
    route:'Dublin → Faro nonstop (Aer Lingus & Ryanair, daily)',
    distance:'≈ 1,830 km', tz:'GMT +0 (same as Dublin)', best:'May–Sep (hot, sunny beach season)'
  },
  country_info:{
    capital:'Lisbon', language:'Portuguese', currency:'Euro (€)',
    population:'≈ 10 million', tz:'GMT +0',
    fun:[
      'The Algarve has over 100 golden-sand beaches tucked under tall orange cliffs.',
      'Portugal is one of the oldest countries in Europe, with the same borders for 800 years.',
      'Cork comes from Portugal’s oak trees — bark is peeled off and grows right back! 🌳'
    ],
    kid:[
      'You can kayak into the Benagil sea cave with a hole in the roof letting the sun in. 🛶',
      'The Ria Formosa lagoon is full of birds and you might spot dolphins from a boat. 🐬',
      'Zoomarine has dolphin shows, a water park and rides all in one place!'
    ]
  },
  photos:[
    ['algarve,cliffs,beach','Golden cliffs',321],['benagil,cave,algarve','Benagil sea cave',322],
    ['faro,old,town,portugal','Faro old town',323],['ria,formosa,algarve','Ria Formosa lagoon',324],
    ['lagos,ponta,piedade','Ponta da Piedade',325],['algarve,beach,sunset','Beach sunset',326]
  ],
  attractions:[
    ['🛶','Benagil Cave','A golden sea cave with a sky-hole, reached by kayak or boat.'],
    ['🪨','Ponta da Piedade','Sculpted orange cliffs and arches you cruise through by boat.'],
    ['🦩','Ria Formosa','A lagoon of sandbanks, flamingos and seahorses near Faro.'],
    ['🏖️','Praia da Marinha','One of Europe’s prettiest beaches, framed by rock arches.']
  ],
  kids:[
    ['🐬','Zoomarine','Dolphin & sea-lion shows, a water park, rides and a tropical bird show.',4.5,'24,000','Zoomarine Algarve Guia Albufeira'],
    ['💦','Slide & Splash','A huge water park with twisty slides, lazy rivers and a bird show.',4.5,'12,000','Slide & Splash Lagoa Algarve'],
    ['🌊','Aquashow Park','Water park and theme park combo with slides and a roller coaster.',4.4,'9,000','Aquashow Park Quarteira Algarve'],
    ['🐎','Quinta do Lago','A nature park with a wooden lake bridge, trails and a kids’ adventure park.',4.6,'3,400','Quinta do Lago Nature Trail Algarve']
  ]
},
{
  id:'fez', name:'Fez', short:'Imperial City, Morocco', country:'Morocco', flag:'🇲🇦',
  emoji:'🕌', region:'City', tag:'Wishlist', colors:['#d97706','#1e3a8a'],
  tagline:'Get happily lost in the world’s biggest car-free maze — a 1,200-year-old medina!',
  lat:34.0181, lng:-5.0078,
  gettingThere:{
    to:'FEZ', toName:'Fès–Saïss', flightTime:'~7–8 h (1 stop, no nonstop)',
    route:'Dublin → London / Paris / Casablanca → Fez (Casablanca is the big gateway)',
    distance:'≈ 2,250 km', tz:'GMT +1', best:'Mar–May & Sep–Nov (warm, not too hot)'
  },
  country_info:{
    capital:'Rabat', language:'Arabic & Tamazight (Berber); French widely spoken',
    currency:'Moroccan Dirham (MAD)', population:'≈ 37 million (Morocco)', tz:'GMT +1',
    fun:[
      'Fez has the oldest still-working university in the world, founded way back in 859 AD.',
      'Its medina, Fes el-Bali, is one of the largest car-free city areas on the whole planet.',
      'Goods are still carried through the lanes by donkeys and mules instead of cars. 🫏'
    ],
    kid:[
      'The medina is a maze of about 9,000 tiny streets — like a real-life treasure hunt! 🗺️',
      'At the tanneries you peek down at huge stone pots of rainbow-coloured dye.',
      'You can sip frothy mint tea poured from way up high to make bubbles. 🍵'
    ]
  },
  photos:[
    ['fez,morocco,medina','The great medina',331],['fez,tannery,chouara','Chouara tannery',332],
    ['fez,bab,boujloud','Blue Gate (Bab Bou Jeloud)',333],['fez,medersa,bou,inania','Tiled medersa',334],
    ['jnan,sbil,gardens,fez','Jnan Sbil gardens',335],['fez,rooftops,morocco','Medina rooftops',336]
  ],
  attractions:[
    ['🧭','Fes el-Bali Medina','The giant walled old city — thousands of car-free, mazey lanes.'],
    ['🟦','Bab Bou Jeloud','The famous blue-and-green tiled gateway into the medina.'],
    ['🎨','Chouara Tannery','Look down on bright pots of dye where leather is coloured by hand.'],
    ['🏫','Bou Inania Medersa','A dazzling old school covered head to toe in carved tiles and wood.']
  ],
  kids:[
    ['🌳','Jnan Sbil Gardens','Shady royal gardens with a lake, fountains and giant fish to feed.',4.5,'4,200','Jardin Jnan Sbil Fez'],
    ['🏺','Borj Nord & Arms Museum','A hilltop fort with cannons and a huge view over the whole medina.',4.2,'1,300','Borj Nord Fez'],
    ['🍪','Cooking & Souk Walk','Family food tours through the souks tasting bread, olives and pastries.',4.9,'1,100','Fez cooking class medina food tour'],
    ['🚪','Bab Bou Jeloud (Blue Gate)','Snap a photo at the famous tiled gate — blue outside, green inside.',4.5,'3,800','Bab Bou Jeloud Blue Gate Fez']
  ]
},
{
  id:'tirana', name:'Tirana', short:'Albania', country:'Albania', flag:'🇦🇱',
  emoji:'🚡', region:'City', tag:'Best deal', colors:['#ef4444','#10b981'],
  tagline:'A rainbow-bright capital with the Balkans’ longest cable car — and a wild Riviera nearby!',
  lat:41.3275, lng:19.8187,
  gettingThere:{
    to:'TIA', toName:'Tirana (Rinas)', flightTime:'~3.5 h (nonstop, Ryanair)',
    route:'Dublin → Tirana nonstop (Ryanair)',
    distance:'≈ 2,400 km', tz:'GMT +1', best:'May–Sep (warm; beaches at their best)'
  },
  country_info:{
    capital:'Tirana', language:'Albanian', currency:'Albanian Lek (ALL)',
    population:'≈ 2.8 million', tz:'GMT +1',
    fun:[
      'Albanians nod their head for “no” and shake it for “yes” — the opposite of many places!',
      'Tirana’s mayor painted the grey old buildings in bright colours and patterns.',
      'Albania has thousands of little dome-shaped bunkers dotted across the country. 🛖'
    ],
    kid:[
      'The Dajti Express is the longest cable car in the Balkans — over a kilometre long! 🚡',
      'You can explore a secret underground bunker turned into a museum at Bunk’Art.',
      'The Albanian Riviera nearby has turquoise pebble beaches just like the Caribbean. 🏖️'
    ]
  },
  photos:[
    ['tirana,albania,skanderbeg,square','Skanderbeg Square',341],['dajti,cable,car,tirana','Dajti cable car',342],
    ['tirana,colourful,buildings','Colourful buildings',343],['tirana,grand,park,lake','Grand Park lake',344],
    ['albanian,riviera,beach','Albanian Riviera',345],['tirana,pyramid,albania','The Pyramid of Tirana',346]
  ],
  attractions:[
    ['🚡','Dajti Express','A cable car that glides up the mountain to forest views and mini-golf.'],
    ['🟥','Skanderbeg Square','A vast main square with fountains kids run through in summer.'],
    ['🛖','Bunk’Art','A giant secret bunker turned into a maze-like museum.'],
    ['🌊','Albanian Riviera','A short drive south to turquoise pebble beaches and coves.']
  ],
  kids:[
    ['🚡','Dajti Ekspres Cable Car','Ride the Balkans’ longest cable car up to mini-golf and a zipline.',4.6,'6,500','Dajti Ekspres Cable Car Tirana'],
    ['🌳','Grand Park (Parku i Madh)','A big park with a lake, paddle boats, paths and lots of room to run.',4.5,'9,000','Grand Park Parku i Madh Tirana'],
    ['🛖','Bunk’Art 1','Explore a huge underground Cold-War bunker full of rooms and stories.',4.6,'7,200','Bunk Art 1 Tirana'],
    ['🎡','Tirana Cloud / Pazari i Ri','A lively market square with snacks, plus the leafy New Bazaar to wander.',4.4,'2,600','Pazari i Ri New Bazaar Tirana']
  ]
},
{
  id:'iceland', name:'Reykjavík', short:'Iceland', country:'Iceland', flag:'🇮🇸',
  emoji:'🌋', region:'Snow', tag:'Wishlist', colors:['#38bdf8','#1e293b'],
  tagline:'Land of fire and ice — erupting geysers, baby volcanoes, puffins and a steamy blue lagoon!',
  lat:64.1466, lng:-21.9426,
  gettingThere:{
    to:'KEF', toName:'Keflavík (Reykjavík)', flightTime:'~2.5 h (nonstop, Icelandair)',
    route:'Dublin → Keflavík nonstop (Icelandair) — about 45 min from the city',
    distance:'≈ 1,500 km', tz:'GMT +0 (same as Dublin)', best:'Jun–Aug for puffins & midnight sun; Sep–Mar for Northern Lights'
  },
  country_info:{
    capital:'Reykjavík', language:'Icelandic', currency:'Icelandic Króna (ISK)',
    population:'≈ 390,000', tz:'GMT +0',
    fun:[
      'Iceland has about 130 volcanoes and sits right where two of Earth’s plates pull apart.',
      'Almost all its heat and power come from underground hot water and steam — geothermal!',
      'There are no mosquitoes in Iceland at all, and more sheep than people. 🐑'
    ],
    kid:[
      'The Strokkur geyser blasts boiling water into the sky every few minutes! ⛲',
      'You can spot puffins, the cutest little black-and-orange seabirds, in summer.',
      'The Blue Lagoon is a warm milky-blue pool you can swim in even when it snows. ❄️'
    ]
  },
  photos:[
    ['reykjavik,iceland,city','Colourful Reykjavík',351],['strokkur,geysir,iceland','Strokkur geyser',352],
    ['blue,lagoon,iceland','Blue Lagoon',353],['gullfoss,waterfall,iceland','Gullfoss waterfall',354],
    ['puffin,iceland','Puffins',355],['iceland,volcano,lava','Volcano & lava',356]
  ],
  attractions:[
    ['⛲','Geysir & Strokkur','A hot-spring field where Strokkur erupts sky-high every few minutes.'],
    ['💧','Gullfoss Waterfall','A thundering two-step waterfall on the famous Golden Circle.'],
    ['🌋','Volcano Country','Walk on black lava fields and, when one wakes up, watch it glow.'],
    ['🐧','Puffin Boat Trips','Hop a boat from the harbour to spot puffins and even whales.']
  ],
  kids:[
    ['♨️','Blue Lagoon','Swim in a steamy, milky-blue geothermal pool — kids under 13 go free.',4.4,'30,000','Blue Lagoon Iceland'],
    ['🌋','Perlan – Wonders of Iceland','A glass-dome museum with a real ice cave, volcano show and planetarium.',4.6,'8,500','Perlan Reykjavik'],
    ['🐋','Whales of Iceland','Walk among life-sized models of giant whales that hang from the ceiling.',4.5,'2,400','Whales of Iceland Reykjavik'],
    ['🐧','Reykjavík Whale & Puffin Tour','Boat out from the old harbour to find puffins, dolphins and whales.',4.5,'6,000','Reykjavik whale watching old harbour']
  ]
}
];
