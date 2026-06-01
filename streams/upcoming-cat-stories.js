/* Poppie's Atlas — local cat story series for the 3 upcoming destinations.
   Each entry: { name, photoKw, stories:[{title,text} x5] } */
const UPCOMING_CAT_STORIES = {
  "rabat": {
    name: "Zellij",
    photoKw: "cat,morocco,kasbah",
    stories: [
      {
        title: "The Blue-and-White Maze",
        text: "Zellij was a stripy little cat who lived in the Kasbah of the Udayas, where every wall and lane is painted blue and white. One sleepy morning he chased a fat bumblebee down a twisty alley, turned left, turned right, and — uh oh — got himself muddled in the maze. Every corner looked the same shade of sky-blue! Then he spotted the great stone gate of the kasbah up high and the sparkling Atlantic Ocean below. “That’s home,” he purred, and trotted back, tail held proud, past pots of pink geraniums."
      },
      {
        title: "The Storks of Chellah",
        text: "Zellij padded out to Chellah, the old garden of Roman ruins on the edge of Rabat. High on the crumbling towers sat enormous stork nests, big as bathtubs! The storks went CLACK-CLACK-CLACK with their long red beaks, like castanets. Zellij froze, eyes huge. One baby stork peeked down and clacked hello. Zellij tried to clack back with his little teeth, but only managed a squeaky “mew.” The storks didn’t mind. He spent all afternoon watching them swoop over the wildflowers, dreaming of wings of his own."
      },
      {
        title: "The Midnight Medina Mix-up",
        text: "One evening Zellij wandered into the medina souk, the busy market full of lanterns, spices and stalls. He sniffed cinnamon, leather slippers and sizzling kebabs, and his whiskers tingled. But when the shutters rolled down for the night, the lanes went quiet and dark. A kind tea-seller found Zellij curled in a basket of mint leaves, sneezing little minty sneezes. The man laughed, poured himself a glass of frothy mint tea, and walked Zellij home along the river under a sky full of stars. What a sleepy, spicy adventure!"
      },
      {
        title: "Hassan Tower Lookout",
        text: "Zellij loved the Hassan Tower, the tall stone minaret that was never quite finished, standing among rows and rows of broken columns like a stone forest. He bounced from column to column — hop, hop, hop — pretending he was king of all Rabat. A little girl visiting with her family giggled and rolled a tiny pinecone for him to chase. From the very top column Zellij could see the whole city, the blue tram crossing to Salé, and seagulls riding the breeze. “Best lookout in Morocco,” he decided, with a happy stretch."
      },
      {
        title: "A Day at Rabat Beach",
        text: "On the hottest day of summer Zellij followed the Bouregreg river all the way down to Rabat beach, where the Atlantic waves came rolling in. Surfers paddled out and children built sandcastles with seashell windows. Zellij did NOT like getting his paws wet — he leapt sideways every time a wave fizzed near him! Instead he found a warm patch of sand near the marina, watched the fishing boats bob, and nibbled a sardine a friendly fisherman shared. As the sun set orange over the water, Zellij purred himself to sleep."
      }
    ]
  },
  "maldives": {
    name: "Coco",
    photoKw: "cat,maldives,beach",
    stories: [
      {
        title: "The Cat Who Lived Over the Sea",
        text: "Coco was a sandy-cream cat who lived at Kandima, a resort on a tiny island in the Maldives. Her favourite spot was the wooden walkway out to the overwater villas, built on stilts right above the lagoon. She would flatten herself on the warm planks and peer down through the gaps at the turquoise water. Parrotfish in rainbow colours zoomed by, and once a stingray glided past like a flying carpet! Coco patted the air above the water, very curious, but far too clever to ever actually go for a swim."
      },
      {
        title: "Turtles on the House Reef",
        text: "Just off Kandima’s beach is the house reef, where the coral begins and the sea turtles come to munch. Coco crept to the very edge of the sand, where the lagoon turned deep blue. A snorkeller waved and pointed: a green sea turtle was paddling slowly along the reef, flippers waving like hello. Coco’s ears shot straight up. The turtle surfaced, took a big breath — PFFFT — and looked right at her with sleepy eyes. Coco gave a polite little chirp. Then the turtle dived down again into the coral garden below."
      },
      {
        title: "The Seaplane Surprise",
        text: "One morning a great noise rumbled across the lagoon. Coco scampered up a palm tree to look. A seaplane — a plane with floats instead of wheels — was landing right on the water, sending up a sparkling spray! It taxied to the jetty and out stepped a family with sun hats and suitcases, here for their island holiday. Coco trotted down to inspect the new arrivals. A small boy crouched and offered his hand, and Coco bumped it with her nose. “You’re the welcome cat!” he laughed. Coco rather liked that job."
      },
      {
        title: "The Sandbank Picnic",
        text: "Coco sneaked aboard a speedboat one sunny afternoon — and ended up on a sandbank, a tiny island of pure white sand far out in the ocean, with no trees at all, just sea in every direction. The family spread a picnic blanket while spinner dolphins leaped in the distance. Coco patrolled the little island in about twenty steps, then sat regally in the middle like a queen on her sandy throne. A cheeky seabird tried to steal a sandwich, so Coco gave one mighty “MEOW!” and saved the day. Hero cat!"
      },
      {
        title: "The Big Waterslide",
        text: "Coco had heard about Kandima’s famous giant waterslide, the one that swooshes you straight down into the pool. She climbed to the top to investigate, peeking over the slippery blue edge. Children whooshed past, shrieking with happy laughter, splash after splash after splash. Coco leaned a little too far — and her paw slipped! She scrambled back just in time, fur all puffed up. “Sliding is for humans,” she decided firmly. Instead she found a comfy sun-lounger at Kandiland, the kids’ club, and supervised all the splashing from a safe, dry distance."
      }
    ]
  },
  "sunshinecoast": {
    name: "Banjo",
    photoKw: "cat,australia,beach",
    stories: [
      {
        title: "Banjo Goes to Australia Zoo",
        text: "Banjo was a ginger cat with a crooked tail who lived on the Sunshine Coast in Queensland. One day he padded into Australia Zoo, the famous wildlife park, and got the fright of his fur — a crocodile show was on! A keeper tossed food and the croc leaped from the water with an enormous SNAP. Banjo shot straight up a gum tree. Up there he met a sleepy koala munching leaves, who blinked at him very slowly. “G’day,” yawned the koala. Banjo decided koalas were much better company than crocodiles, and stayed for a chat."
      },
      {
        title: "Climbing the Glass House Mountains",
        text: "Banjo set off to explore the Glass House Mountains, the funny pointy peaks that rise up out of the bushland like giant stone hats. He scampered up a grassy slope, past tall gum trees full of chattering rainbow lorikeets. A mob of kangaroos was resting in the shade, and a joey peeked out of its mum’s pouch to stare at the little ginger cat. From a sunny boulder Banjo could see all the mountains lined up — Tibrogargan, Beerwah and the rest — looking out over the green hills. He felt as tall as a mountain himself."
      },
      {
        title: "The Noosa Everglades Paddle",
        text: "Banjo found a kayak tied up at the Noosa Everglades, where the river runs so still it mirrors the sky like glass — they call it the “River of Mirrors.” He hopped aboard for a sneaky ride. The kayak drifted between paperbark trees as kookaburras laughed “ooo-ooo-ha-ha-ha!” overhead. A turtle popped its head up, and a great pelican floated by, eyeing Banjo’s tail. When the kayak gently bumped the bank, Banjo leapt to shore with a soggy paw, very proud of his quiet adventure through one of the prettiest waterways in Queensland."
      },
      {
        title: "Inside the Big Pineapple",
        text: "Near Woombye stands the Big Pineapple — a giant fibreglass pineapple so huge you can walk right inside it! Banjo squeezed through the door and climbed the spiral stairs all the way to the spiky leafy top, his eyes wide. From up there he watched the little train chug through the gardens below and children whizzing along the treetop ropes course. A girl eating a pineapple ice-cream spotted him and shared a tiny cool drip on a spoon. Banjo licked it, sneezed at the sweetness, and decided the Big Pineapple was the silliest, sunniest place he’d ever been."
      },
      {
        title: "Sunset at Mooloolaba Beach",
        text: "To finish his week of adventures, Banjo trotted down to Mooloolaba beach, where the water is calm and gentle and perfect for little swimmers. Families packed up their buckets and spades as the sky turned pink and gold. Banjo chased a tiny sand crab — who scuttled into its hole and popped a bubble at him! — then sat on the warm sand to watch the last surfers ride the soft waves home. Up in the green Maleny hinterland the lights began to twinkle. Banjo gave a big, happy yawn. “Best. Coast. Ever,” he purred."
      }
    ]
  }
};
if (typeof module !== 'undefined' && module.exports) { module.exports = UPCOMING_CAT_STORIES; }
