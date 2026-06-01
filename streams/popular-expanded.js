// Poppie's Atlas — expanded detail for six popular destination guides.
// Merged into DESTS via Object.assign (only the fields below are overridden).
const POPULAR_EXPAND = {
  "sydney": {
    tagline:'A sparkling harbour city of sail-shaped sails, golden surf beaches and a giant climb-up “coat-hanger” bridge — plus koalas with a skyline view!',
    attractions:[
      ['🎭','Sydney Opera House','Tour inside the world’s most famous sail-shaped building right on the water.'],
      ['🌉','Harbour Bridge Climb','Walk up the arch of the giant steel “coat-hanger” for enormous harbour views.'],
      ['🦘','Taronga Zoo','Koalas, kangaroos and a Sky Safari cable car gliding right over the harbour.'],
      ['🏖️','Bondi Beach','Surf, sand and the famous Icebergs sea pool carved into the rocks.'],
      ['⛴️','Manly Ferry','A breezy harbour ferry ride past the Opera House to a seaside town.'],
      ['🐠','SEA LIFE Sydney Aquarium','Walk through a glass tunnel under sharks, rays and dugongs at Darling Harbour.'],
      ['🎡','Luna Park','A vintage funfair with a giant laughing-face entrance and a Ferris wheel.'],
      ['🌃','Sydney Tower Eye','Zoom up the tallest tower for a 360° view and a glass-floor SkyWalk.']
    ],
    kids:[
      ['🦘','Taronga Zoo','Koalas, kangaroos and a Sky Safari cable car over the harbour.',4.6,'48,000','Taronga Zoo Sydney'],
      ['🐠','SEA LIFE Sydney Aquarium','Walk through a glass tunnel under sharks, rays and dugongs.',4.4,'30,000','SEA LIFE Sydney Aquarium Darling Harbour'],
      ['🎡','Luna Park Sydney','A free-entry funfair under a giant laughing face by the harbour.',4.5,'24,000','Luna Park Sydney Milsons Point'],
      ['🐧','WILD LIFE Sydney Zoo','Meet koalas, wallabies and a giant saltwater croc in the city.',4.3,'14,000','WILD LIFE Sydney Zoo Darling Harbour'],
      ['🏖️','Bondi Icebergs Pool','Splash in the famous ocean pool where waves wash over the edge.',4.7,'9,000','Bondi Icebergs Pool Sydney'],
      ['🌃','Sydney Tower Eye','The tallest viewpoint in the city with a glass-floor SkyWalk.',4.4,'12,000','Sydney Tower Eye'],
      ['🏝️','Bondi Beach','Golden sand, gentle rock pools and Australia’s most famous surf.',4.7,'40,000','Bondi Beach Sydney'],
      ['🚂','Powerhouse Museum','Hands-on science, trains, space and steam-engine fun for curious kids.',4.5,'7,500','Powerhouse Museum Ultimo Sydney']
    ],
    photos:[
      ['sydney opera house harbour','Sydney Opera House',740],
      ['sydney harbour bridge climb','Harbour Bridge climb',741],
      ['bondi beach icebergs pool','Bondi Icebergs pool',742],
      ['sydney harbour ferry skyline','Harbour ferry',743],
      ['taronga zoo koala sydney','Cuddly koalas',744],
      ['luna park sydney face entrance','Luna Park funfair',745],
      ['sydney aquarium glass tunnel shark','SEA LIFE aquarium',746],
      ['sydney tower eye city view','Sydney Tower Eye',747],
      ['manly beach surf sydney','Manly Beach',748],
      ['sydney skyline sunset harbour','City at sunset',749]
    ],
    highlights:[
      'Tour inside the sail-shaped Sydney Opera House on the harbour 🎭',
      'Climb to the very top of the giant “coat-hanger” Harbour Bridge 🌉',
      'Ride the Sky Safari cable car over Taronga Zoo to find koalas 🦘',
      'Splash in the Bondi Icebergs sea pool while waves crash over the edge 🌊',
      'Catch a yellow-and-green ferry across the harbour — it’s a boat bus! ⛴️'
    ],
    tips:[
      'Get an Opal card for ferries, trains and buses — kids travel cheaply.',
      'Christmas lands in summer here, so pack sun hats, swimmers and sunscreen 🌞',
      'Always swim between the red-and-yellow flags on patrolled beaches.',
      'The ferry to Manly is the best-value “harbour cruise” in the city — sit outside! ⛴️'
    ]
  },
  "singapore": {
    tagline:'A green garden city of super-trees, the world’s best airport with an indoor waterfall, and a whole island of theme parks!',
    attractions:[
      ['🌳','Gardens by the Bay','Giant glowing Supertrees and cloud-forest domes with an indoor waterfall.'],
      ['🦁','Singapore Zoo','An open rainforest zoo where you can have breakfast with orangutans.'],
      ['🎢','Universal Studios Singapore','Roller coasters, minions and movie worlds on Sentosa island.'],
      ['🐠','S.E.A. Aquarium','One of the world’s biggest aquariums with a huge ocean viewing window.'],
      ['💎','Jewel Changi Airport','The world’s tallest indoor waterfall inside a glass-domed jungle.'],
      ['🚠','Sentosa Cable Car','Glide high above the harbour to the fun island of Sentosa.'],
      ['🌃','Singapore Flyer','A giant observation wheel with sky-high city and sea views.'],
      ['🐦','Bird Paradise','Walk through huge aviaries full of flamingos, parrots and penguins.']
    ],
    kids:[
      ['🌳','Gardens by the Bay','Glowing Supertrees, a misty Cloud Forest and a Far East garden.',4.7,'150,000','Gardens by the Bay Singapore'],
      ['🦁','Singapore Zoo','An open rainforest zoo famous for breakfast with the orangutans.',4.7,'70,000','Singapore Zoo Mandai'],
      ['🎢','Universal Studios Singapore','Coasters, minions and movie worlds on Sentosa island.',4.6,'80,000','Universal Studios Singapore Sentosa'],
      ['🐠','S.E.A. Aquarium','A giant ocean tank with sharks, rays and a huge viewing window.',4.5,'40,000','S.E.A. Aquarium Sentosa Singapore'],
      ['💎','Jewel Changi Airport','The world’s tallest indoor waterfall and a treetop bouncing net.',4.7,'90,000','Jewel Changi Airport'],
      ['🐦','Bird Paradise','Walk-through aviaries with flamingos, parrots, penguins and lories.',4.6,'15,000','Bird Paradise Mandai Singapore'],
      ['🐬','River Wonders','Meet giant pandas, manatees and a boat trip down the Amazon.',4.5,'18,000','River Wonders Singapore'],
      ['🏖️','Adventure Cove Waterpark','Slides, a lazy river and snorkelling over a reef on Sentosa.',4.5,'12,000','Adventure Cove Waterpark Sentosa']
    ],
    photos:[
      ['gardens by the bay supertree','Glowing Supertrees',750],
      ['cloud forest dome waterfall singapore','Cloud Forest dome',751],
      ['singapore zoo orangutan','Singapore Zoo',752],
      ['universal studios singapore globe','Universal Studios',753],
      ['sea aquarium ocean tank singapore','S.E.A. Aquarium',754],
      ['jewel changi airport waterfall','Jewel waterfall',755],
      ['sentosa cable car harbour','Sentosa cable car',756],
      ['singapore flyer observation wheel','Singapore Flyer',757],
      ['merlion marina bay singapore','The Merlion',758],
      ['marina bay sands skyline night','Marina Bay at night',759]
    ],
    highlights:[
      'Watch the giant Supertrees light up in a free nightly show 🌳',
      'Stand under the world’s tallest indoor waterfall at Jewel Changi 💎',
      'Have breakfast beside the orangutans at Singapore Zoo 🦧',
      'Ride coasters and meet minions at Universal Studios on Sentosa 🎢',
      'Glide over the harbour on the Sentosa cable car 🚠'
    ],
    tips:[
      'It’s hot and humid all year — carry water and plan an indoor break midday 🌞',
      'Get an EZ-Link card for the clean, fast MRT trains — easy with kids.',
      'Sentosa packs zoos, beaches and theme parks together — book a full day.',
      'Tap water is safe to drink, so refill bottles everywhere to stay cool 💧'
    ]
  },
  "paris": {
    tagline:'The City of Light with a twinkling iron tower, buttery pastries, a giant art palace — and Disneyland just a train ride away!',
    attractions:[
      ['🗼','Eiffel Tower','Ride the lift up the sparkling iron tower for views over all of Paris.'],
      ['🏰','Disneyland Paris','Castles, parades and Mickey just a short train ride from the city.'],
      ['🖼️','The Louvre','The world’s biggest art museum, home to the smiling Mona Lisa.'],
      ['🎠','Jardin d’Acclimatation','A leafy theme park with rides, a little train and a petting farm.'],
      ['🔬','Cité des Enfants','A hands-on science playground for kids inside a giant science city.'],
      ['⛪','Sacré-Cœur','A white-domed church on the city’s highest hill, reached by a funicular.'],
      ['🚣','Luxembourg Gardens','Sail toy boats on the pond and ride the old-fashioned carousel.'],
      ['🛥️','Seine River Cruise','Float past Notre-Dame and the bridges on a glass-topped boat.']
    ],
    kids:[
      ['🏰','Disneyland Paris','Two parks of castles, coasters, parades and Mickey Mouse.',4.6,'250,000','Disneyland Paris Marne-la-Vallee'],
      ['🗼','Eiffel Tower','Ride the lift up the iron tower that sparkles every night.',4.7,'350,000','Eiffel Tower Paris'],
      ['🎠','Jardin d’Acclimatation','A leafy theme park with rides, a train and a petting farm.',4.4,'14,000','Jardin d Acclimatation Paris'],
      ['🔬','Cité des Enfants','A hands-on science playground for ages 2–12 in La Villette.',4.5,'20,000','Cite des Enfants Paris'],
      ['🖼️','The Louvre','Spot the Mona Lisa and mummies in the world’s biggest art museum.',4.7,'300,000','Louvre Museum Paris'],
      ['🦒','Ménagerie du Jardin des Plantes','A pretty old city zoo with red pandas, tortoises and small cats.',4.3,'12,000','Menagerie Jardin des Plantes Paris'],
      ['🚣','Luxembourg Gardens','Sail toy boats on the pond and ride the vintage carousel.',4.7,'90,000','Jardin du Luxembourg Paris'],
      ['🦕','Galerie de Paléontologie','A spooky hall packed with dinosaur skeletons and giant whale bones.',4.6,'9,000','Galerie de Paleontologie Paris']
    ],
    photos:[
      ['eiffel tower paris sparkle','The Eiffel Tower',760],
      ['disneyland paris castle','Disneyland Paris',761],
      ['louvre pyramid paris','The Louvre pyramid',762],
      ['jardin acclimatation carousel paris','Jardin d’Acclimatation',763],
      ['cite des enfants science kids','Cité des Enfants',764],
      ['sacre coeur montmartre paris','Sacré-Cœur',765],
      ['luxembourg gardens toy boats pond','Luxembourg Gardens',766],
      ['seine river cruise bridge paris','Seine river cruise',767],
      ['french pastry croissant macaron','Buttery pastries',768],
      ['paris eiffel tower night lights','Paris at night',769]
    ],
    highlights:[
      'Watch the Eiffel Tower sparkle with twinkly lights every night 🗼',
      'Hop a train to Disneyland Paris for castles and parades 🏰',
      'Find the smiling Mona Lisa inside the giant Louvre 🖼️',
      'Sail a little wooden boat on the pond in the Luxembourg Gardens 🚣',
      'Taste a warm buttery croissant from a real Paris bakery 🥐'
    ],
    tips:[
      'The Metro is fast and cheap — under-4s ride free; buy a kids’ ticket pack.',
      'Book Eiffel Tower and Louvre tickets online to skip the long queues.',
      'Disneyland Paris is its own day-trip on the RER A train — leave early 🏰',
      'Pack a picnic for the parks — Paris gardens are perfect for a lunch break 🥖'
    ]
  },
  "london": {
    tagline:'A royal city of red buses and beefeaters, with a giant river wheel, dinosaur halls and the real Harry Potter film studios!',
    attractions:[
      ['🎡','London Eye','Ride the giant river wheel in a glass pod for sky-high city views.'],
      ['🦕','Natural History Museum','Dinosaur skeletons, a blue-whale hall and a roaring animatronic T-Rex.'],
      ['🪄','Harry Potter Studio Tour','Walk the real film sets, taste Butterbeer and ride a broomstick.'],
      ['🦁','ZSL London Zoo','Lions, penguins and a walk-through monkey forest in Regent’s Park.'],
      ['🔬','Science Museum','Hands-on space rockets, a flight gallery and a kids’ play area.'],
      ['👑','Tower of London','See the sparkly Crown Jewels and meet the famous Beefeaters and ravens.'],
      ['🕰️','Big Ben & Westminster','Spot the world’s most famous clock tower beside the river.'],
      ['🚌','Red Bus & Tube','Ride a double-decker bus and the rumbly Underground trains.']
    ],
    kids:[
      ['🎡','London Eye','A giant river wheel with glass pods and huge city views.',4.5,'120,000','London Eye'],
      ['🦕','Natural History Museum','Dinosaurs, a blue-whale skeleton and an earthquake floor.',4.7,'180,000','Natural History Museum London'],
      ['🪄','Warner Bros. Studio Tour London','The real Harry Potter sets, Butterbeer and broomstick rides.',4.8,'90,000','Warner Bros Studio Tour London Harry Potter'],
      ['🦁','ZSL London Zoo','Lions, penguins and a walk-through monkey forest.',4.5,'60,000','ZSL London Zoo Regents Park'],
      ['🔬','Science Museum','Space rockets, flight machines and the Wonderlab play gallery.',4.7,'90,000','Science Museum London'],
      ['👑','Tower of London','The sparkly Crown Jewels, Beefeaters and the famous ravens.',4.6,'90,000','Tower of London'],
      ['🐠','SEA LIFE London Aquarium','A shark walk and a glass tunnel right beside the London Eye.',4.3,'40,000','SEA LIFE London Aquarium'],
      ['🚂','London Transport Museum','Climb aboard old buses, trams and Tube trains in Covent Garden.',4.6,'12,000','London Transport Museum Covent Garden']
    ],
    photos:[
      ['london eye river thames','The London Eye',770],
      ['natural history museum london dinosaur','Natural History Museum',771],
      ['harry potter studio tour great hall','Harry Potter Studios',772],
      ['london zoo penguins','London Zoo',773],
      ['science museum london rocket','Science Museum',774],
      ['tower of london crown jewels beefeater','Tower of London',775],
      ['big ben westminster clock tower','Big Ben',776],
      ['london red double decker bus','Red double-decker bus',777],
      ['buckingham palace guard london','Palace guards',778],
      ['tower bridge london night','Tower Bridge at night',779]
    ],
    highlights:[
      'Ride a glass pod up the giant London Eye for sky-high views 🎡',
      'Stand under the blue whale and meet dinosaurs at the Natural History Museum 🦕',
      'Walk the real Harry Potter film sets and taste Butterbeer 🪄',
      'See the sparkling Crown Jewels and the ravens at the Tower of London 👑',
      'Ride the top deck of a red double-decker bus 🚌'
    ],
    tips:[
      'The big museums (Natural History, Science) are free — just walk in! 🆓',
      'Get an Oyster card or tap a card on buses and the Tube; under-11s ride free.',
      'Book the Harry Potter Studio Tour weeks ahead — it sells out fast 🪄',
      'Pack a raincoat — London weather changes fast, even in summer ☔'
    ]
  },
  "capetown": {
    tagline:'A mountain-by-the-sea city with a flat-topped peak, a colony of waddling penguins and a fun harbour full of boats and seals!',
    attractions:[
      ['🚠','Table Mountain Cable Car','Ride a spinning cable car to the flat top for views over the whole city.'],
      ['🐧','Boulders Beach Penguins','Walk a boardwalk right beside a colony of waddling African penguins.'],
      ['🐠','Two Oceans Aquarium','A kelp forest, sharks, turtles and a touch pool at the V&A Waterfront.'],
      ['⚓','V&A Waterfront','A harbour full of boats, seals, a giant wheel and street performers.'],
      ['🦓','Cape Point','A wild clifftop reserve with baboons, ostriches and a lighthouse.'],
      ['🌿','Kirstenbosch Gardens','A famous garden with a treetop “Boomslang” canopy walkway.'],
      ['🎢','Ratanga Junction / Cool Runnings','Toboggan rides and family fun near the city.'],
      ['🚲','Sea Point Promenade','A breezy seaside walk with playgrounds and a tidal pool.']
    ],
    kids:[
      ['🚠','Table Mountain Cable Car','A rotating cable car up to the flat-topped mountain peak.',4.7,'45,000','Table Mountain Aerial Cableway Cape Town'],
      ['🐧','Boulders Beach Penguins','A boardwalk beside a colony of African penguins at Simon’s Town.',4.7,'30,000','Boulders Beach Penguin Colony Simons Town'],
      ['🐠','Two Oceans Aquarium','A kelp forest, sharks, turtles and a kids’ touch pool.',4.6,'25,000','Two Oceans Aquarium Cape Town'],
      ['⚓','V&A Waterfront','A harbour with seals, a wheel and the Cape Wheel of Excellence.',4.6,'90,000','V&A Waterfront Cape Town'],
      ['🌿','Kirstenbosch Botanical Garden','A famous garden with the “Boomslang” treetop canopy walkway.',4.8,'40,000','Kirstenbosch National Botanical Garden'],
      ['🦓','Cape Point Nature Reserve','Clifftop walks, a lighthouse, baboons and ostriches.',4.7,'30,000','Cape Point Cape Town'],
      ['🛝','Blue Train Park','A little train, playground and trampolines at Mouille Point.',4.4,'4,000','Blue Train Park Mouille Point Cape Town'],
      ['🦒','World of Birds','A walk-through bird and monkey sanctuary in Hout Bay.',4.4,'6,500','World of Birds Wildlife Sanctuary Hout Bay']
    ],
    photos:[
      ['table mountain cape town aerial','Table Mountain',780],
      ['table mountain cable car','Spinning cable car',781],
      ['boulders beach african penguins','Boulders penguins',782],
      ['two oceans aquarium kelp forest','Two Oceans Aquarium',783],
      ['va waterfront cape town harbour','V&A Waterfront',784],
      ['kirstenbosch boomslang canopy walkway','Kirstenbosch canopy',785],
      ['cape point lighthouse cliffs','Cape Point',786],
      ['cape town twelve apostles coast','The Twelve Apostles',787],
      ['cape fur seals harbour','Harbour seals',788],
      ['cape town sunset signal hill','City at sunset',789]
    ],
    highlights:[
      'Ride the spinning cable car to the flat top of Table Mountain 🚠',
      'Walk the boardwalk beside real waddling penguins at Boulders Beach 🐧',
      'Meet sharks, turtles and a kelp forest at the Two Oceans Aquarium 🐠',
      'Spot seals and ride the big wheel at the V&A Waterfront ⚓',
      'Cross the wobbly “Boomslang” treetop walkway at Kirstenbosch 🌿'
    ],
    tips:[
      'Table Mountain shuts the cable car on windy days — go early on a clear morning.',
      'Don’t feed the cheeky baboons at Cape Point and keep car windows shut 🐒',
      'It’s winter in June–August here, so pack layers and a raincoat 🧥',
      'Buy Table Mountain cable car tickets online to skip the queue 🎟️'
    ]
  },
  "losangeles": {
    tagline:'The sunny city of movie magic, with the original Disneyland, film-studio thrill rides, a beach pier and a hilltop space dome!',
    attractions:[
      ['🏰','Disneyland','The original Disney park with Sleeping Beauty Castle and Galaxy’s Edge.'],
      ['🎬','Universal Studios Hollywood','A working film studio with a backlot tram and movie thrill rides.'],
      ['🔭','Griffith Observatory','A hilltop space dome with telescopes and the Hollywood Sign view.'],
      ['🎡','Santa Monica Pier','A seaside funfair with a solar Ferris wheel right over the ocean.'],
      ['🚀','California Science Center','Touch exhibits and see a real Space Shuttle, Endeavour.'],
      ['🦖','La Brea Tar Pits','Bubbling tar pits with mammoth and sabre-tooth-cat fossils.'],
      ['⭐','Hollywood Walk of Fame','Find your favourite star’s name on the famous pavement stars.'],
      ['🐠','Aquarium of the Pacific','Touch rays and sea jellies down the coast in Long Beach.']
    ],
    kids:[
      ['🏰','Disneyland Park','The original Disney park with the castle and Star Wars land.',4.7,'200,000','Disneyland Park Anaheim'],
      ['🎬','Universal Studios Hollywood','A film-studio tram tour and Super Nintendo World rides.',4.6,'120,000','Universal Studios Hollywood'],
      ['🔭','Griffith Observatory','A free hilltop space dome with telescopes and Hollywood Sign views.',4.7,'70,000','Griffith Observatory Los Angeles'],
      ['🎡','Santa Monica Pier','A seaside funfair with a solar Ferris wheel over the ocean.',4.6,'80,000','Santa Monica Pier Pacific Park'],
      ['🚀','California Science Center','Free hands-on science and the real Space Shuttle Endeavour.',4.7,'40,000','California Science Center Los Angeles'],
      ['🦖','La Brea Tar Pits & Museum','Bubbling tar pits with mammoth and sabre-tooth fossils.',4.5,'14,000','La Brea Tar Pits and Museum'],
      ['🐠','Aquarium of the Pacific','Touch rays, sea jellies and a shark lagoon in Long Beach.',4.7,'30,000','Aquarium of the Pacific Long Beach'],
      ['🦁','Los Angeles Zoo','Gorillas, elephants and a reptile house in Griffith Park.',4.4,'24,000','Los Angeles Zoo Griffith Park']
    ],
    photos:[
      ['disneyland castle anaheim','Disneyland castle',790],
      ['universal studios hollywood globe','Universal Studios',791],
      ['griffith observatory los angeles','Griffith Observatory',792],
      ['santa monica pier ferris wheel','Santa Monica Pier',793],
      ['california science center space shuttle','Space Shuttle Endeavour',794],
      ['la brea tar pits mammoth','La Brea Tar Pits',795],
      ['hollywood sign hills los angeles','The Hollywood Sign',796],
      ['hollywood walk of fame star','Walk of Fame',797],
      ['venice beach boardwalk palm trees','Venice Beach',798],
      ['los angeles sunset downtown skyline','City at sunset',799]
    ],
    highlights:[
      'Meet Mickey at the original Disneyland in Anaheim 🏰',
      'Ride the studio backlot tram at Universal Studios Hollywood 🎬',
      'Touch a real Space Shuttle at the free California Science Center 🚀',
      'Ride the solar Ferris wheel out over the sea at Santa Monica Pier 🎡',
      'Spot the Hollywood Sign from the hilltop Griffith Observatory 🔭'
    ],
    tips:[
      'LA is huge and spread out — plan one or two areas per day to cut driving 🚗',
      'Griffith Observatory and the science centre are free — great budget days! 🆓',
      'Book Disneyland and Universal tickets online and arrive at park opening.',
      'Pack sunscreen and a sun hat — Southern California is sunny most of the year 🌞'
    ]
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = POPULAR_EXPAND; }
