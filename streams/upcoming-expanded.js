// Expanded guide content for the two upcoming trips — merged over DESTS via Object.assign.
// Maldives = Kandima Resort, Dhaalu Atoll (family trip 23 Jul–9 Aug 2026).
// Sunshine Coast = Queensland, Australia (Christmas, Dec 2026).
const UPCOMING_EXPAND = {
  "maldives": {
    tagline:'Turquoise lagoons, an overwater villa and the longest waterslide in the Maldives — splash, snorkel and seaplane your way through Kandima!',
    attractions:[
      ['🤿','House Reef Snorkelling','Kandima’s coral reef starts right off the beach — meet parrotfish, rays and turtles.'],
      ['💦','The Big Waterslide','Whoosh down Kandima’s giant slide straight into the pool — the island’s most famous splash.'],
      ['🚤','Sandbank Picnic','Speedboat to Thilabolhufushi, a tiny island of pure white sand in the middle of the ocean.'],
      ['🐬','Sunset Dolphin Cruise','Hop on a boat at golden hour and watch pods of spinner dolphins leap beside you.'],
      ['🌊','Aquaholics Water Sports','Jet-ski, parasailing, sea-bob, banana-boat and glass-bottom kayak adventures.'],
      ['🏎️','Fast Track E-Karting','Race the longest and fastest electric go-kart circuit in the Maldives (ages 10+).'],
      ['🎣','Sunset Fishing','Sail out on a traditional dhoni and try handline fishing as the sky turns orange.'],
      ['🍦','Burju Café Ice Cream','Cool down with scoops of ice cream and milkshakes at the island’s sweet-treat café.']
    ],
    kids:[
      ['🛝','Kandiland Kids Club','Pirate ship, splash zone, slides & games for ages 6 mo–12 yrs, with friendly carers.',4.7,'1,460','Kandima Maldives Kandiland kids club'],
      ['💦','The Big Waterslide','A giant slide straight into the pool — Kandima’s most famous splash.',4.6,'980','Kandima Maldives waterslide'],
      ['🌊','Aquaholics Water Sports','Jet-ski, parasailing, sea-bob and banana-boat rides on the lagoon.',4.7,'1,210','Kandima Maldives Aquaholics water sports'],
      ['🐠','Glass-Bottom Kayak','Paddle over the lagoon and watch the reef through the see-through floor.',4.6,'640','Kandima Maldives water sports'],
      ['🤿','House Reef Snorkelling','Swim straight off the beach to meet reef fish, rays and sea turtles.',4.8,'1,540','Kandima Maldives house reef snorkelling'],
      ['🐬','Sunset Dolphin Cruise','Sail out at sunset to spot pods of wild spinner dolphins leaping by.',4.7,'870','Kandima Maldives dolphin cruise'],
      ['🏎️','Fast Track E-Karting','The longest e-go-kart track in the Maldives — for thrill-seekers aged 10+.',4.5,'420','Kandima Maldives Fast Track go kart'],
      ['🏝️','Sandbank Picnic','A speedboat drops you on a deserted sandbank with a picnic hamper.',4.8,'560','Kandima Maldives sandbank picnic']
    ],
    photos:[
      ['maldives overwater villa lagoon','Our overwater villa',701],
      ['maldives white sand beach','Powdery white-sand beach',702],
      ['maldives seaplane landing water','Seaplane to Kandima',703],
      ['snorkeling sea turtle reef','Snorkel safari',704],
      ['coral reef tropical fish','Colourful coral reef',705],
      ['waterslide resort pool splash','The big waterslide',706],
      ['glass bottom kayak lagoon','Glass-bottom kayak',707],
      ['spinner dolphins ocean sunset','Dolphin cruise',708],
      ['sandbank island ocean aerial','Sandbank picnic',709],
      ['maldives palm sunset silhouette','Island sunset',710]
    ],
    highlights:[
      'Sleep in an overwater villa and watch fish swim right under your feet 🐠',
      'Ride the seaplane that lands on the water to reach Kandima 🛩️',
      'Zoom down the longest waterslide in the Maldives 💦',
      'Snorkel the house reef and find turtles, rays and baby reef sharks 🐢',
      'Speedboat to a tiny private sandbank for a picnic in the middle of the sea 🏝️'
    ],
    tips:[
      'Bring reef-safe sunscreen — it protects the coral and the fish 🐟',
      'The seaplane to Kandima takes ~35 min — grab a window seat for the view! 🛩️',
      'Kandiland kids club welcomes ages 6 mo–12 yrs; ages 4+ can stay without a grown-up.',
      'July–August is warm and humid — pack a rash vest and a hat for all that water play.'
    ]
  },
  "sunshinecoast": {
    tagline:'Calm family beaches, Steve Irwin’s wildlife zoo and giant pineapples under the warm Queensland Christmas sun!',
    attractions:[
      ['🐊','Australia Zoo','Steve Irwin’s zoo at Beerwah with crocs, tigers, koalas and the Wildlife Warriors show.'],
      ['🏖️','Noosa Main Beach','A rare north-facing beach with calm, sparkling water just right for little swimmers.'],
      ['🍍','The Big Pineapple','A giant walk-in pineapple landmark with a train ride and a treetop ropes course.'],
      ['🐠','SEA LIFE Sunshine Coast','Touch pools, seals, sharks and an underwater glass tunnel at Mooloolaba.'],
      ['🎢','Aussie World','Over 30 old-school carnival rides, dodgems, a Ferris wheel and mazes.'],
      ['🫚','The Ginger Factory','Ride the 120-year-old Ginger Train, taste ginger treats and meet the gingerbread man (free entry!).'],
      ['🏰','Sunshine Castle','A quirky medieval castle at Bli Bli with armour, a dragon and a doll museum.'],
      ['⛰️','Glass House Mountains','Climb and explore craggy volcanic peaks shaped like pointy hats.']
    ],
    kids:[
      ['🐊','Australia Zoo','Home of the Crocodile Hunter — crocs, koalas and the Crocoseum feeding shows.',4.6,'46,000','Australia Zoo Beerwah'],
      ['🐠','SEA LIFE Sunshine Coast Aquarium','Seals, sharks and a glass tunnel at Mooloolaba.',4.4,'13,000','SEA LIFE Sunshine Coast Aquarium Mooloolaba'],
      ['🎢','Aussie World','Over 30 carnival rides, dodgems and slides for all ages.',4.4,'9,800','Aussie World Palmview'],
      ['🍍','The Big Pineapple','Train rides, a treetop ropes course and a wildlife zoo.',4.2,'4,700','The Big Pineapple Woombye'],
      ['🫚','The Ginger Factory','A historic ginger train, a boat ride and free-entry gardens at Yandina.',4.3,'7,100','The Ginger Factory Yandina'],
      ['🛶','Noosa Everglades','Cruise or canoe the mirror-still waterways — one of only two everglades on Earth.',4.6,'1,300','Noosa Everglades Eco Safaris'],
      ['🏰','Sunshine Castle','A medieval castle at Bli Bli with armour, a dragon and a doll museum.',3.8,'1,000','Sunshine Castle Bli Bli'],
      ['🏖️','Mooloolaba Beach','A patrolled golden beach with calm swimming, rock pools and an esplanade.',4.7,'5,400','Mooloolaba Beach']
    ],
    photos:[
      ['noosa main beach queensland','Noosa Main Beach',711],
      ['mooloolaba beach esplanade','Mooloolaba bay',712],
      ['australia zoo crocodile show','Australia Zoo',713],
      ['glass house mountains queensland','Glass House Mountains',714],
      ['big pineapple woombye landmark','The Big Pineapple',715],
      ['koala eucalyptus tree australia','Cuddly koalas',716],
      ['noosa everglades river reflection','Noosa Everglades',717],
      ['ginger factory train garden','The Ginger Train',718],
      ['maleny hinterland rolling hills','Maleny hinterland',719],
      ['sunshine coast surf golden sand','Surf and sand',720]
    ],
    highlights:[
      'Meet crocs, koalas and tigers at Steve Irwin’s Australia Zoo 🐊',
      'Splash in the calm, shallow bays at Noosa and Mooloolaba 🏖️',
      'Walk inside the giant Big Pineapple and ride the little train 🍍',
      'Cruise the mirror-still Noosa Everglades to spot birds and wildlife 🛶',
      'Climb the funny pointy Glass House Mountains ⛰️'
    ],
    tips:[
      'Australia Zoo is a full day — go early to catch the morning animal encounters.',
      'It’s summer at Christmas in Queensland — pack sun hats, swimmers and lots of water 🌞',
      'Always swim between the red-and-yellow flags on patrolled beaches.',
      'The Ginger Factory has free entry — a great budget-friendly rainy-day stop.'
    ]
  }
};
