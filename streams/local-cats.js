/* ---------------- Local Cats (stream) ----------------
   Every destination in Poppie's Atlas has a LOCAL CAT with a short adventure
   tale that weaves in real local heritage and landmarks. Warm, funny and
   accurate for ages 5–11. Apostrophes use curly ’ so the file stays valid JS. */
const LOCAL_CATS = {
  "maldives": {
    name: "Reef",
    story: "Reef is a sandy little cat who lives under an overwater villa, dangling a paw to tickle the parrotfish swimming below. One morning a speedboat took the guests to a tiny sandbank, and Reef sneaked aboard, riding all the way to a dot of pure white sand in the middle of the ocean. He chased a hermit crab, dipped one toe in the warm lagoon, and decided that was quite enough swimming. At sunset the spinner dolphins leapt past, and Reef purred so loudly the seaplane nearly heard him.",
    photoKw: "cat,beach,tropical"
  },
  "rabat": {
    name: "Hassan",
    story: "Hassan is a clever ginger cat who lives in the blue-and-white lanes of the Kasbah of the Udayas, where every wall is painted the colour of the sky. Each evening he trots down to the Andalusian gardens to nap among the orange trees, then climbs the wall to watch boats on the Bouregreg river. One day he wandered all the way to the old ruins of Chellah, where the tall storks clack their beaks from their nests. Hassan tried to clack back, got a feather on his nose, and sneezed his way home for mint tea.",
    photoKw: "cat,morocco,street"
  },
  "lapland": {
    name: "Lumi",
    story: "Lumi is a fluffy snow-white cat who lives at Santa Claus Village, right on the Arctic Circle line where you can stand in two places at once. She loves to hide in the elves’ post office and bat at the letters waiting for Santa. One frosty night she followed the huskies into the forest, and when she looked up the whole sky was glowing green with the Northern Lights! Lumi swished her tail, certain she had switched the lights on herself, and curled up warm by a reindeer.",
    photoKw: "cat,snow,white"
  },
  "athens": {
    name: "Niko",
    story: "Niko is a sun-loving tabby who naps among the ancient marble of the Acropolis, right beneath the mighty Parthenon temple. The guards know him well and let him stroll between the giant columns as if he owns the place — which, he believes, he does. One afternoon he chased a pigeon all the way down to the Plaka’s twisty old streets, where a kind taverna owner shared a scrap of grilled souvlaki. Full and happy, Niko climbed back up the hill to watch Athens turn golden at sunset.",
    photoKw: "cat,greece,tabby"
  },
  "rhodes": {
    name: "Petra",
    story: "Petra is a brave little cat who lives inside the medieval Old Town of Rhodes, patrolling the cobbled Street of the Knights as if she were a tiny guard. She likes to doze on the warm stone walls of the Palace of the Grand Master, where the towers cast long shadows. One summer day she wandered into the Valley of the Butterflies and was suddenly surrounded by thousands of fluttering wings! Petra leapt and twirled and caught exactly none of them, then padded down to a beach to cool her paws.",
    photoKw: "cat,greece,island"
  },
  "tenerife": {
    name: "Volcán",
    story: "Volcán is a bold black cat who lives on the slopes below Mount Teide, Spain’s tallest mountain and a real sleeping volcano. He likes to chase lizards across the black volcanic sand of the beaches, pretending the dark grains are ash from a fiery eruption. One bright morning he stowed away near the Teide cable car and rode up into the clouds, blinking at a view that stretched across the whole island. On the way home he spotted whales spouting far out at sea and decided that was the best day ever.",
    photoKw: "cat,black,canary"
  },
  "porto": {
    name: "Pastel",
    story: "Pastel is a custard-coloured cat named after Porto’s famous little tarts, and he lives in the colourful Ribeira houses stacked along the Douro river. Every morning he trots across the great double-decker Dom Luís I iron bridge, tail high, watching the rabelo boats drift below. One day he slipped into the magical Livraria Lello bookshop and curled up on the swirling red staircase, where a girl reading about wizards tickled his ears. Pastel yawned, certain that he too was a little bit magic, and went to find a warm tile to nap on.",
    photoKw: "cat,porto,street"
  },
  "istanbul": {
    name: "Pasha",
    story: "Pasha is a grand grey cat who lives between two continents, because Istanbul sits on both Europe and Asia at once. Each morning he hops a Bosphorus ferry, riding the breezy deck past waterside palaces while seagulls beg the passengers for simit bread. In the afternoon he prowls the Grand Bazaar, weaving between 4,000 shops of lanterns and sweets, hoping a kind trader will share a sliver of fish. Pasha believes he is the true sultan of the city, and honestly, most of Istanbul’s cats agree.",
    photoKw: "cat,istanbul,street"
  },
  "antalya": {
    name: "Deniz",
    story: "Deniz is a turquoise-eyed cat who lives in the cobbled lanes of Antalya’s old town, Kaleiçi, where wooden boats bob in the little harbour. She loves to perch by the ancient Hadrian’s Gate, a Roman archway over 1,800 years old, and watch the people pass beneath it. One hot day she followed the sound of rushing water to the Düden Waterfall, where a whole river leaps off a cliff straight into the sparkling sea. Deniz got a splash on her whiskers, shook it off grandly, and trotted home for a nap in the sun.",
    photoKw: "cat,turkey,harbour"
  },
  "split": {
    name: "Marko",
    story: "Marko is a cheeky cat who actually lives inside a Roman emperor’s palace — Diocletian’s Palace in Split, where people have made homes among the ancient stones for 1,700 years. He likes to slink through the cool old cellars and pop out into sunny squares to beg for scraps of fish. One afternoon he climbed the cathedral bell tower, step by dizzy step, and surveyed all the red rooftops below like a furry little king. Then he sauntered down to the Riva waterfront to watch the island ferries sail off to Brač.",
    photoKw: "cat,croatia,old,town"
  },
  "algarve": {
    name: "Sardinha",
    story: "Sardinha is a sun-baked tabby who lives on the golden cliffs of the Algarve, where the rock glows orange above the sparkling sea. She loves to watch the little boats paddle into the Benagil sea cave, the one with a round hole in its roof that lets the sunshine pour in. One morning she crept along the sandy shore of the Ria Formosa lagoon and spotted pink flamingos standing on one leg. Sardinha tried standing on one leg too, wobbled, toppled into the soft sand, and decided fishing was much more dignified.",
    photoKw: "cat,portugal,beach"
  },
  "fez": {
    name: "Zelli",
    story: "Zelli is a tiny tiger-striped cat who lives in the great medina of Fez, a maze of nearly 9,000 car-free lanes where donkeys carry the goods instead of trucks. She knows every shortcut and loves to dart through the famous blue gate, Bab Bou Jeloud, which is blue on the outside and green on the inside. One day she peeked down at the Chouara tannery, where huge stone pots are filled with rainbow-coloured dye. Zelli nearly dipped a paw in the bright yellow one, thought better of it, and went to nap on a warm tiled rooftop instead.",
    photoKw: "cat,morocco,medina"
  },
  "tirana": {
    name: "Lulu",
    story: "Lulu is a colourful little cat who matches the rainbow-painted buildings of Tirana, where the mayor brightened the whole city with patterns and paint. She loves to chase the fountains across the wide Skanderbeg Square, getting her paws delightfully wet on warm days. One adventurous afternoon she snuck onto the Dajti Express, the longest cable car in the Balkans, and glided high above the trees to the green mountaintop. Lulu peered down at the tiny city below, decided she was now the bravest cat in Albania, and trotted off to find mini-golf.",
    photoKw: "cat,colourful,street"
  },
  "iceland": {
    name: "Bjarni",
    story: "Bjarni is a thick-furred cat who lives in colourful Reykjavík, where the houses are painted bright reds and blues against the grey sky. He doesn’t mind the cold, because the streets are warmed by hot water from deep underground. One day he tagged along to see the Strokkur geyser, and just as he leaned in to sniff, WHOOSH — it blasted boiling water sky-high and he leapt three whole cat-lengths backwards! Later he watched puffins waddle along the harbour and decided those funny little birds were his new favourite thing.",
    photoKw: "cat,iceland,fluffy"
  },
  "sydney": {
    name: "Bondi",
    story: "Bondi is a beachy ginger cat who lives near Sydney’s sparkling harbour, with the best view of the sail-shaped Opera House from his favourite sunny ledge. He loves to ride the Manly ferry, riding the breezy deck past the giant coat-hanger Harbour Bridge as it arches across the water. One warm morning he padded down to Bondi Beach and dipped a careful paw in the famous Icebergs ocean pool, where the waves splash right over the edge. Bondi shook his wet paw, decided he preferred sunbathing, and stretched out grandly on the golden sand.",
    photoKw: "cat,beach,australia"
  },
  "melbourne": {
    name: "Tilly",
    story: "Tilly is a streetwise tabby who lives in Melbourne’s hidden laneways, napping beneath the colourful street art of Hosier Lane. Her favourite trick is to hop aboard the free City Circle tram and ride the rattling old carriage in a loop around town, watching the city slide by. One evening she wandered down to St Kilda pier just as the little penguins came waddling home along the breakwater. Tilly sat very still and very polite, watching the parade, then trotted home before the trams stopped for the night.",
    photoKw: "cat,city,tram"
  },
  "goldcoast": {
    name: "Surfer",
    story: "Surfer is a sandy-pawed cat who lives behind the dunes of Surfers Paradise, where the golden beach stretches as far as a cat can see. He likes to watch the wobbly beginners learning to ride the gentle rollers, twitching his whiskers with every wipeout. One day he heard roaring coasters from the nearby theme parks and the splash of the water slides, and he climbed a palm tree to spy on all the fun. Surfer decided that being a cat on a warm beach was the best ride of all, and curled up for a sun-soaked snooze.",
    photoKw: "cat,beach,surf"
  },
  "sunshinecoast": {
    name: "Noosa",
    story: "Noosa is a gentle golden cat who lives by the calm, sparkling water of Noosa Main Beach, one of the few beaches that faces north. She loves to stroll the quiet shore at dawn, leaving tiny paw-prints in the cool sand. One day she wandered toward the famous Big Pineapple and rode its little train through the gardens, ears flapping in the breeze. On the way home she spied a sleepy koala dozing high in a gum tree at the wildlife zoo, gave it a respectful nod, and ambled back to her favourite patch of sun.",
    photoKw: "cat,beach,golden"
  },
  "whitsundays": {
    name: "Coral",
    story: "Coral is a brave seafaring cat who lives among the 74 Whitsunday islands, where the sand is so white and squeaky it sounds like snow. Her favourite spot is Whitehaven Beach, seven whole kilometres of pure silica sand swirling into turquoise water. One day she stowed away on a snorkel boat out to the Great Barrier Reef and peered over the side at coral fish and a slow, friendly sea turtle. Coral decided she would not get her fur wet, thank you very much, but she watched the whole reef sparkle and purred all the way home.",
    photoKw: "cat,boat,tropical"
  },
  "brisbane": {
    name: "Banjo",
    story: "Banjo is a riverside cat who lives by the Brisbane River, where the fast CityCat ferries zip up and down all day. His favourite place is Streets Beach at South Bank, a free man-made beach and lagoon right in the middle of the city — perfect for a cat who likes sand but not the sea. One sunny day he visited Lone Pine, the biggest koala sanctuary in the world, and watched a sleepy koala munch gum leaves. Banjo gave a polite meow, hopped a CityCat back downstream, and settled in for an afternoon nap.",
    photoKw: "cat,river,city"
  },
  "auckland": {
    name: "Kauri",
    story: "Kauri is an adventurous cat who lives in Auckland, the City of Sails, which is built on top of around 50 old volcanoes. One breezy morning he climbed grassy Mount Eden, peeked into its deep green crater, and surveyed the whole harbour bristling with white sailboats. He gazed up at the towering Sky Tower and decided he would never, ever do the SkyJump off it. Instead Kauri hopped the little Devonport ferry across the harbour, sniffed the salty air, and found a sunny seaside step to call his own.",
    photoKw: "cat,harbour,sails"
  },
  "vanuatu": {
    name: "Coco",
    story: "Coco is a friendly island cat who lives among the palm trees of Port Vila, where the South Pacific water is warm and impossibly blue. She loves to watch the snorkellers swim out to Hideaway Island, home to the world’s only underwater post office, and wonders how the postcards stay dry. One day she followed a splashing sound to the Mele Cascades, blue waterfall pools that tumble down smooth rock. Coco dipped one paw, shivered happily, and decided to spend the rest of the day napping in a hammock by the sea.",
    photoKw: "cat,island,tropical"
  },
  "singapore": {
    name: "Lah",
    story: "Lah is a sleek city cat who lives in Singapore, a garden city that gleams with glass towers and greenery. At night she sneaks into Gardens by the Bay, where the giant glowing Supertrees light up like something from the future, and she watches them twinkle wide-eyed. She always pauses at Merlion Park to admire the famous lion-fish fountain spouting water into the bay. One day she even rode the cable car over to Sentosa Island, sniffed the beach, and decided the cool flower domes were a much better place for an elegant cat to nap.",
    photoKw: "cat,city,garden"
  },
  "capetown": {
    name: "Tafari",
    story: "Tafari is a proud cat who lives beneath Table Mountain, the great flat-topped giant that watches over Cape Town with clouds spilling off its edge like a tablecloth. He likes to ride the spinning cable car a little way up and feel the wind ruffle his fur. One day he padded down to Boulders Beach and found a whole colony of African penguins waddling about on the sand — Tafari had never seen such funny birds! He kept a polite distance, watched them honk and splash, then trotted to the V&A Waterfront to spot the lazy seals.",
    photoKw: "cat,capetown,mountain"
  },
  "johannesburg": {
    name: "Thabo",
    story: "Thabo is a golden cat who lives in Johannesburg, the City of Gold, right on the edge of the great African bush. He loves to listen to the lions roaring far off in the night and dreams of being just as fierce. One day he tagged along on a drive near the Lion & Safari Park and spotted real lions, cheetahs and a tall giraffe nibbling treetops — he puffed up his fur to feel just as big. Then he visited Gold Reef City, watched the roller coasters loop and twirl, and decided he much preferred keeping all four paws on the ground.",
    photoKw: "cat,golden,africa"
  },
  "paris": {
    name: "Minou",
    story: "Minou is an elegant grey cat who lives on the rooftops of Paris, leaping from chimney to chimney high above the busy streets. Her favourite view is the Eiffel Tower, especially at night when the whole iron tower sparkles and twinkles like it’s covered in stars. One afternoon she slipped into the Louvre and tiptoed past the Mona Lisa, who seemed to smile right at her. Minou took a bow, sauntered out beneath the great glass pyramid, and finished her day watching the boats glide along the river Seine while she nibbled a buttery croissant crumb.",
    photoKw: "cat,rooftop,paris"
  },
  "london": {
    name: "Pip",
    story: "Pip is a cheeky little cat who lives near the River Thames, with a fine view of the giant London Eye turning slowly against the grey sky. He loves to dodge the red double-decker buses and chase pigeons across the royal parks. One day he padded up to Buckingham Palace just in time to watch the Changing of the Guard, and he marched proudly alongside the soldiers (until a bearskin hat made him sneeze). Then Pip slipped down to the Tower of London, where the guards keep the sparkling Crown Jewels, and he napped beside a very dignified raven.",
    photoKw: "cat,london,street"
  },
  "barcelona": {
    name: "Gaudí",
    story: "Gaudí is an artistic cat who lives in Barcelona, named after the architect who built the city’s wildest, wobbliest buildings. He loves to nap in Park Güell beside the famous mosaic lizard, whose bright tiles sparkle in the sun. One morning he gazed up at the towering Sagrada Família, the tree-shaped church that has been building for over a hundred years, and decided he would visit again when it was finally done. Then Gaudí strolled down to Barceloneta beach, batted at the warm sand, and stayed out late for the Magic Fountain’s twinkling show of coloured water and music.",
    photoKw: "cat,barcelona,street"
  },
  "losangeles": {
    name: "Hollywood",
    story: "Hollywood is a glamorous cat who lives in the city of movie stars, and he is quite sure he should be one too. He loves to strut along the Hollywood Walk of Fame, sniffing the famous names set into the pavement and posing for photos he hopes someone is taking. One day he snuck onto the backlot tram at Universal Studios and rode past pretend streets and a roaring dinosaur, keeping wonderfully cool throughout. As the sun set, Hollywood padded down to the Santa Monica Pier, watched the solar Ferris wheel light up, and took a grand bow for the seagulls.",
    photoKw: "cat,hollywood,city"
  },
  "miami": {
    name: "Pastelito",
    story: "Pastelito is a sunny cat who lives among the pastel-painted Art Deco hotels of Miami’s South Beach, where the water is warm and turquoise. He loves to lounge in the shade of a candy-coloured wall and watch the rollerbladers zip by. One day he wandered toward the Wynwood Walls, streets splashed top to bottom with giant colourful murals, and felt right at home among all the art. Later he heard about the alligators in the Everglades marshes and decided that, on balance, he would admire those toothy fellows from very far away — perhaps from a comfy beach towel.",
    photoKw: "cat,miami,beach"
  },
  "fuerteventura": {
    name: "Duna",
    story: "Duna is a sandy-coloured cat who lives on the windswept island of Fuerteventura, where the golden Corralejo dunes roll on and on like a tiny desert by the sea. She loves to leave little paw-prints across the dunes and pounce on the shadows the wind makes in the sand. One day she trotted along the huge Sotavento beach and watched in wonder as the tide rushed in and turned the flats into a shallow lagoon. Duna paddled at the edge, shook her wet paws, and decided to climb up to the goats and palm valleys of old Betancuria for a nap in the shade.",
    photoKw: "cat,canary,dunes"
  },
  "adelaide": {
    name: "Banksia",
    story: "Banksia is a leafy-loving cat who lives in Adelaide, a city wrapped in green parklands and built around a gentle river. She loves to wander the grand boulevard of North Terrace, slipping between the free museums and galleries when nobody’s looking. One Saturday she snuck into the Adelaide Central Market and her nose went wild among the cheese, fruit and tasty treats — a kind stallholder shared a sliver of something delicious. Then Banksia rode out to the leafy Adelaide Hills, met the animals at the wildlife park, and dozed beneath the vines as the sun went down.",
    photoKw: "cat,park,garden"
  },
  "darwin": {
    name: "Mango",
    story: "Mango is a tropical cat who lives in Darwin, a steamy frontier city at the very top of Australia. She loves the dry-season evenings at the Mindil Beach Sunset Market, where fire-twirlers spin and the sun melts orange into the Timor Sea while she begs for a chip. One day she heard about the wild crocodiles in the rivers of Kakadu and decided, very firmly, to stay close to town. Instead Mango splashed at the safe wave lagoon down by the Darwin Waterfront, dried her fur in the warm air, and napped under a frangipani tree.",
    photoKw: "cat,tropical,sunset"
  },
  "agneswater": {
    name: "Wattle",
    story: "Wattle is a laid-back beach cat who lives at Agnes Water, home to Queensland’s most northerly surf beach — the very last spot to catch a real wave before the calm reef begins. She loves to watch the surfers bob on the long sandy main beach at dawn. One shady afternoon she padded along the Paperbark Forest boardwalk, winding between hundreds of soft, peeling paperbark trees that smell like a warm hug. As the sun dipped, Wattle wandered to the nearby town of 1770, watched a little boat drift around the headland, and yawned a long, happy yawn.",
    photoKw: "cat,beach,coast"
  },
  "herveybay": {
    name: "Splash",
    story: "Splash is a salty-whiskered cat who lives at Hervey Bay, the whale-watching capital of Australia, where giant humpbacks come to play in the calm water. He likes to sit on the long historic Urangan Pier, watching the rays glide below and the fishing lines dip into the sea. One day he heard the whales were spouting offshore and he climbed the highest post to look — sure enough, a great tail rose and slapped the water! Splash dreamed of the giant sand island of K’gari across the bay, with its dazzling blue Lake McKenzie, and purred himself to sleep.",
    photoKw: "cat,pier,sea"
  },
  "christchurch": {
    name: "Avon",
    story: "Avon is a gentle garden cat who lives in Christchurch, named after the pretty river where boats called punts drift slowly by. She loves to roam the huge Botanic Gardens and Hagley Park, dozing on the warm lawns between the glasshouses. One day she hopped aboard the heritage tram and rode it clinking past the cathedral and the shops, ears perked at the bell. Later Avon rode the gondola up the Port Hills for a grand view over the city, the sea and the plains, and decided that Christchurch was the comfiest place a garden cat could ever wish to live.",
    photoKw: "cat,garden,park"
  },
  "kentroma": {
    name: "Elia",
    story: "Elia is a sleepy seaside cat who lives in tiny Sivota, a quiet green corner of mainland Greece where pine-covered hills tumble down into turquoise coves. She loves to nap on the warm pebbles of Mega Ammos beach, one ear listening for fishing boats coming home. One bright day she watched swimmers wade across the shallow sandbar to the little islet at Bella Vraka, the water glowing so blue it looked like a swimming pool. Elia dipped a single paw, decided the sea was for fish and not for elegant cats, and curled up beneath an olive tree to dream.",
    photoKw: "cat,greece,coast"
  }
};
