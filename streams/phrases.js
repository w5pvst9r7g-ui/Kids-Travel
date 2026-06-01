/* Poppie's Atlas — Languages feature
 * Kid-friendly phrases for every language across our destinations.
 * For non-Latin scripts (Greek, Arabic, Dhivehi) we use Latin transliteration
 * so kids can read along. "say" = simple say-it-like-this pronunciation.
 * English destinations teach FUN LOCAL LINGO instead of plain translations.
 */

const LANG_PHRASES = {
  "French": {
    native: "Français", flag: "🇫🇷",
    phrases: [
      {en:"Hello", local:"Bonjour", say:"bon-ZHOOR"},
      {en:"Goodbye", local:"Au revoir", say:"oh ruh-VWAH"},
      {en:"Please", local:"S'il vous plaît", say:"seel voo PLEH"},
      {en:"Thank you", local:"Merci", say:"mair-SEE"},
      {en:"Yes", local:"Oui", say:"WEE"},
      {en:"No", local:"Non", say:"NOH(n)"},
      {en:"My name is…", local:"Je m'appelle…", say:"zhuh ma-PELL"},
      {en:"How are you?", local:"Ça va?", say:"sah VAH?"},
      {en:"Where is the toilet?", local:"Où sont les toilettes?", say:"oo soh lay twa-LET?"},
      {en:"How much is it?", local:"C'est combien?", say:"say kom-bee-YEN?"},
      {en:"Can I have an ice cream please?", local:"Une glace, s'il vous plaît?", say:"oon GLASS, seel voo PLEH?"},
      {en:"Water please", local:"De l'eau, s'il vous plaît", say:"duh LOH, seel voo PLEH"},
      {en:"Help!", local:"Au secours!", say:"oh suh-KOOR!"},
      {en:"Wow / Cool!", local:"Super!", say:"soo-PAIR!"},
      {en:"One, Two, Three", local:"Un, deux, trois", say:"uh, DUH, TRWAH"}
    ]
  },

  "Spanish": {
    native: "Español", flag: "🇪🇸",
    phrases: [
      {en:"Hello", local:"Hola", say:"OH-lah"},
      {en:"Goodbye", local:"Adiós", say:"ah-dee-OHS"},
      {en:"Please", local:"Por favor", say:"por fah-VOR"},
      {en:"Thank you", local:"Gracias", say:"GRAH-see-ahs"},
      {en:"Yes", local:"Sí", say:"SEE"},
      {en:"No", local:"No", say:"NOH"},
      {en:"My name is…", local:"Me llamo…", say:"meh YAH-moh"},
      {en:"How are you?", local:"¿Cómo estás?", say:"KOH-moh es-TAHS?"},
      {en:"Where is the toilet?", local:"¿Dónde está el baño?", say:"DON-deh es-TAH el BAH-nyoh?"},
      {en:"How much is it?", local:"¿Cuánto cuesta?", say:"KWAN-toh KWES-tah?"},
      {en:"Can I have an ice cream please?", local:"Un helado, por favor", say:"oon eh-LAH-doh, por fah-VOR"},
      {en:"Water please", local:"Agua, por favor", say:"AH-gwah, por fah-VOR"},
      {en:"Help!", local:"¡Ayuda!", say:"ah-YOO-dah!"},
      {en:"Wow / Cool!", local:"¡Genial!", say:"heh-nee-AHL!"},
      {en:"One, Two, Three", local:"Uno, dos, tres", say:"OO-noh, DOSS, TRESS"}
    ]
  },

  "Portuguese": {
    native: "Português", flag: "🇵🇹",
    phrases: [
      {en:"Hello", local:"Olá", say:"oh-LAH"},
      {en:"Goodbye", local:"Adeus", say:"ah-DEH-oosh"},
      {en:"Please", local:"Por favor", say:"poor fah-VOR"},
      {en:"Thank you", local:"Obrigado / Obrigada", say:"oh-bree-GAH-doo (boys) / -dah (girls)"},
      {en:"Yes", local:"Sim", say:"SEENG"},
      {en:"No", local:"Não", say:"NOWNG"},
      {en:"My name is…", local:"Chamo-me…", say:"SHAH-moo-muh"},
      {en:"How are you?", local:"Tudo bem?", say:"TOO-doo BENG?"},
      {en:"Where is the toilet?", local:"Onde é a casa de banho?", say:"OND-eh eh ah KAH-zah duh BAH-nyoo?"},
      {en:"How much is it?", local:"Quanto custa?", say:"KWAN-too KOOSH-tah?"},
      {en:"Can I have an ice cream please?", local:"Um gelado, por favor", say:"oong zhuh-LAH-doo, poor fah-VOR"},
      {en:"Water please", local:"Água, por favor", say:"AH-gwah, poor fah-VOR"},
      {en:"Help!", local:"Socorro!", say:"soo-KOH-rroo!"},
      {en:"Wow / Cool!", local:"Fixe!", say:"FEESH!"},
      {en:"One, Two, Three", local:"Um, dois, três", say:"OONG, DOYSH, TRESH"}
    ]
  },

  "Greek": {
    native: "Ελληνικά (Elliniká)", flag: "🇬🇷",
    phrases: [
      {en:"Hello", local:"Yiá sou", say:"YAH soo"},
      {en:"Goodbye", local:"Antío", say:"ah-DEE-oh"},
      {en:"Please", local:"Parakaló", say:"pah-rah-kah-LOH"},
      {en:"Thank you", local:"Efcharistó", say:"ef-hah-ree-STOH"},
      {en:"Yes", local:"Ne", say:"NEH"},
      {en:"No", local:"Óchi", say:"OH-hee"},
      {en:"My name is…", local:"Me léne…", say:"meh LEH-neh"},
      {en:"How are you?", local:"Ti kánis?", say:"tee KAH-niss?"},
      {en:"Where is the toilet?", local:"Pou íne i toualéta?", say:"poo EE-neh ee twa-LEH-tah?"},
      {en:"How much is it?", local:"Póso káni?", say:"POH-soh KAH-nee?"},
      {en:"Can I have an ice cream please?", local:"Éna pagotó, parakaló", say:"EH-nah pah-goh-TOH, pah-rah-kah-LOH"},
      {en:"Water please", local:"Neró, parakaló", say:"neh-ROH, pah-rah-kah-LOH"},
      {en:"Help!", local:"Voíthia!", say:"VOH-ee-thee-ah!"},
      {en:"Wow / Cool!", local:"Téleio!", say:"TEH-lee-oh!"},
      {en:"One, Two, Three", local:"Éna, dío, tría", say:"EH-nah, THEE-oh, TREE-ah"}
    ]
  },

  "Croatian": {
    native: "Hrvatski", flag: "🇭🇷",
    phrases: [
      {en:"Hello", local:"Bok", say:"BOHK"},
      {en:"Goodbye", local:"Doviđenja", say:"doh-vee-JEN-yah"},
      {en:"Please", local:"Molim", say:"MOH-leem"},
      {en:"Thank you", local:"Hvala", say:"HVAH-lah"},
      {en:"Yes", local:"Da", say:"DAH"},
      {en:"No", local:"Ne", say:"NEH"},
      {en:"My name is…", local:"Zovem se…", say:"ZOH-vem seh"},
      {en:"How are you?", local:"Kako si?", say:"KAH-koh see?"},
      {en:"Where is the toilet?", local:"Gdje je WC?", say:"g-DYEH yeh VEH-tseh?"},
      {en:"How much is it?", local:"Koliko košta?", say:"KOH-lee-koh KOSH-tah?"},
      {en:"Can I have an ice cream please?", local:"Jedan sladoled, molim", say:"YEH-dan SLAH-doh-led, MOH-leem"},
      {en:"Water please", local:"Vodu, molim", say:"VOH-doo, MOH-leem"},
      {en:"Help!", local:"Upomoć!", say:"OO-poh-moch!"},
      {en:"Wow / Cool!", local:"Super!", say:"SOO-per!"},
      {en:"One, Two, Three", local:"Jedan, dva, tri", say:"YEH-dan, DVAH, TREE"}
    ]
  },

  "Turkish": {
    native: "Türkçe", flag: "🇹🇷",
    phrases: [
      {en:"Hello", local:"Merhaba", say:"MER-hah-bah"},
      {en:"Goodbye", local:"Hoşça kal", say:"HOSH-cha kahl"},
      {en:"Please", local:"Lütfen", say:"LOOT-fen"},
      {en:"Thank you", local:"Teşekkürler", say:"teh-shek-koor-LER"},
      {en:"Yes", local:"Evet", say:"EH-vet"},
      {en:"No", local:"Hayır", say:"HAH-yuhr"},
      {en:"My name is…", local:"Benim adım…", say:"beh-NEEM ah-DUHM"},
      {en:"How are you?", local:"Nasılsın?", say:"NAH-suhl-suhn?"},
      {en:"Where is the toilet?", local:"Tuvalet nerede?", say:"too-vah-LET NEH-reh-deh?"},
      {en:"How much is it?", local:"Ne kadar?", say:"neh kah-DAR?"},
      {en:"Can I have an ice cream please?", local:"Bir dondurma, lütfen", say:"beer don-door-MAH, LOOT-fen"},
      {en:"Water please", local:"Su, lütfen", say:"SOO, LOOT-fen"},
      {en:"Help!", local:"İmdat!", say:"eem-DAHT!"},
      {en:"Wow / Cool!", local:"Harika!", say:"hah-ree-KAH!"},
      {en:"One, Two, Three", local:"Bir, iki, üç", say:"BEER, ee-KEE, OOCH"}
    ]
  },

  "Arabic": {
    native: "Darija (Moroccan Arabic) العربية", flag: "🇲🇦",
    phrases: [
      {en:"Hello (Peace be with you)", local:"Salam", say:"sah-LAHM"},
      {en:"Goodbye", local:"Bslama", say:"buh-slah-MAH"},
      {en:"Please", local:"Afak", say:"ah-FAHK"},
      {en:"Thank you", local:"Shukran", say:"SHOOK-rahn"},
      {en:"Yes", local:"Naam / Iyeh", say:"NAH-am / EE-yeh"},
      {en:"No", local:"La", say:"LAH"},
      {en:"My name is…", local:"Smiti…", say:"SMEE-tee"},
      {en:"How are you?", local:"Labas?", say:"lah-BAHS?"},
      {en:"Where is the toilet?", local:"Fin kayn l-mirhad?", say:"FEEN kine el-meer-HAHD?"},
      {en:"How much is it?", local:"Bish-hal?", say:"bish-HAHL?"},
      {en:"Can I have an ice cream please?", local:"Afak, bghit glas", say:"ah-FAHK, b-GHEET glahs"},
      {en:"Water please", local:"Afak, l-ma", say:"ah-FAHK, el-MAH"},
      {en:"Help!", local:"Aawnni!", say:"AH-oo-nee!"},
      {en:"Wow / Cool!", local:"Zwin!", say:"ZWEEN!"},
      {en:"One, Two, Three", local:"Wahed, juj, tlata", say:"WAH-hed, ZHOOZH, TLAH-tah"}
    ]
  },

  "Albanian": {
    native: "Shqip", flag: "🇦🇱",
    phrases: [
      {en:"Hello", local:"Përshëndetje", say:"per-shen-DET-yeh"},
      {en:"Goodbye", local:"Mirupafshim", say:"mee-roo-PAHF-sheem"},
      {en:"Please", local:"Ju lutem", say:"yoo LOO-tem"},
      {en:"Thank you", local:"Faleminderit", say:"fah-leh-MEEN-deh-reet"},
      {en:"Yes", local:"Po", say:"POH"},
      {en:"No", local:"Jo", say:"YOH"},
      {en:"My name is…", local:"Unë quhem…", say:"OO-nuh CHOO-hem"},
      {en:"How are you?", local:"Si je?", say:"see YEH?"},
      {en:"Where is the toilet?", local:"Ku është tualeti?", say:"koo USH-tuh too-ah-LEH-tee?"},
      {en:"How much is it?", local:"Sa kushton?", say:"sah koosh-TOHN?"},
      {en:"Can I have an ice cream please?", local:"Një akullore, ju lutem", say:"nyuh ah-koo-LLOH-reh, yoo LOO-tem"},
      {en:"Water please", local:"Ujë, ju lutem", say:"OO-yuh, yoo LOO-tem"},
      {en:"Help!", local:"Ndihmë!", say:"un-DEEM!"},
      {en:"Wow / Cool!", local:"Sa bukur!", say:"sah BOO-koor!"},
      {en:"One, Two, Three", local:"Një, dy, tre", say:"NYUH, DUE, TREH"}
    ]
  },

  "Icelandic": {
    native: "Íslenska", flag: "🇮🇸",
    phrases: [
      {en:"Hello", local:"Halló", say:"HAH-loh"},
      {en:"Goodbye", local:"Bless", say:"BLESS"},
      {en:"Please (would you…)", local:"Gjörðu svo vel", say:"GYUR-thoo svo VEL"},
      {en:"Thank you", local:"Takk", say:"TAHK"},
      {en:"Yes", local:"Já", say:"YOW"},
      {en:"No", local:"Nei", say:"NAY"},
      {en:"My name is…", local:"Ég heiti…", say:"YEHG HAY-tee"},
      {en:"How are you?", local:"Hvað segirðu?", say:"kvath SEH-yir-thoo?"},
      {en:"Where is the toilet?", local:"Hvar er klósettið?", say:"kvar er KLOH-seh-tith?"},
      {en:"How much is it?", local:"Hvað kostar þetta?", say:"kvath KOS-tar THEH-tah?"},
      {en:"Can I have an ice cream please?", local:"Má ég fá ís?", say:"MOW yehg FOW EES?"},
      {en:"Water please", local:"Vatn, takk", say:"VAHTN, TAHK"},
      {en:"Help!", local:"Hjálp!", say:"HYOWLP!"},
      {en:"Wow / Cool!", local:"Geggjað!", say:"GED-jath!"},
      {en:"One, Two, Three", local:"Einn, tveir, þrír", say:"AYTN, TVAYR, THREER"}
    ]
  },

  "Dhivehi": {
    native: "Dhivehi ދިވެހި", flag: "🇲🇻",
    phrases: [
      {en:"Hello", local:"Assalaamu alaikum", say:"ah-sah-LAH-moo ah-LAY-koom"},
      {en:"Goodbye", local:"Dhanee", say:"DHAH-nee"},
      {en:"Please", local:"Adhes kohffa", say:"AH-dhes KOH-fah"},
      {en:"Thank you", local:"Shukuriyyaa", say:"shoo-koo-ree-YAH"},
      {en:"Yes", local:"Aan", say:"AAN"},
      {en:"No", local:"Noon", say:"NOON"},
      {en:"My name is…", local:"Aharenge nakee…", say:"ah-hah-REN-geh NAH-kee"},
      {en:"How are you?", local:"Haalu kihineh?", say:"HAH-loo kee-hee-NEH?"},
      {en:"Where is the toilet?", local:"Faakhaanaa kobaa?", say:"fah-KHAH-naa koh-BAA?"},
      {en:"How much is it?", local:"Agu kihaavareh?", say:"AH-goo kee-HAA-vah-reh?"},
      {en:"Can I have an ice cream please?", local:"Ice cream eh dheeba?", say:"ICE-creem eh DHEE-bah?"},
      {en:"Water please", local:"Fen dheeba", say:"FEN DHEE-bah"},
      {en:"Help!", local:"Eheyves!", say:"eh-HEY-ves!"},
      {en:"Wow / Cool!", local:"Varah salhi!", say:"VAH-rah SAL-hee!"},
      {en:"One, Two, Three", local:"Ekeh, dheyh, thineh", say:"EH-keh, DHEY, THEE-neh"}
    ]
  },

  "Bislama": {
    native: "Bislama", flag: "🇻🇺",
    phrases: [
      {en:"Hello", local:"Halo", say:"HAH-loh"},
      {en:"Goodbye", local:"Tata", say:"TAH-tah"},
      {en:"Please", local:"Plis", say:"PLEES"},
      {en:"Thank you", local:"Tankyu", say:"TANK-yoo"},
      {en:"Yes", local:"Yes", say:"YES"},
      {en:"No", local:"No", say:"NOH"},
      {en:"My name is…", local:"Nem blong mi…", say:"NEM blong MEE"},
      {en:"How are you?", local:"Yu olraet?", say:"yoo ol-RITE?"},
      {en:"Where is the toilet?", local:"Toilet i stap wea?", say:"TOY-let ee stap WAY-ah?"},
      {en:"How much is it?", local:"Hemia hamas?", say:"HEM-ya hah-MAHS?"},
      {en:"Can I have an ice cream please?", local:"Mi wantem wan aiskrim, plis", say:"mee WAN-tem wan ICE-creem, PLEES"},
      {en:"Water please", local:"Wota, plis", say:"WO-tah, PLEES"},
      {en:"Help!", local:"Halpem mi!", say:"HAL-pem MEE!"},
      {en:"Wow / Cool!", local:"Hemi naes tumas!", say:"HEM-ee NICE too-MAHS!"},
      {en:"One, Two, Three", local:"Wan, tu, tri", say:"WAN, TOO, TREE"}
    ]
  },

  "Finnish": {
    native: "Suomi", flag: "🇫🇮",
    phrases: [
      {en:"Hello", local:"Hei", say:"HAY"},
      {en:"Goodbye", local:"Hei hei", say:"HAY HAY"},
      {en:"Please (thanks)", local:"Kiitos", say:"KEE-toss"},
      {en:"Thank you", local:"Kiitos", say:"KEE-toss"},
      {en:"Yes", local:"Kyllä", say:"KOO-lah"},
      {en:"No", local:"Ei", say:"AY"},
      {en:"My name is…", local:"Nimeni on…", say:"NEE-meh-nee on"},
      {en:"How are you?", local:"Mitä kuuluu?", say:"MEE-tah KOO-loo?"},
      {en:"Where is the toilet?", local:"Missä on vessa?", say:"MISS-ah on VES-sah?"},
      {en:"How much is it?", local:"Paljonko se maksaa?", say:"PAHL-yon-koh seh MAHK-sah?"},
      {en:"Can I have an ice cream please?", local:"Saisinko jäätelön?", say:"SIGH-sin-koh YAA-teh-lurn?"},
      {en:"Water please", local:"Vettä, kiitos", say:"VET-tah, KEE-toss"},
      {en:"Help!", local:"Apua!", say:"AH-poo-ah!"},
      {en:"Wow / Cool!", local:"Mahtavaa!", say:"MAH-tah-vaa!"},
      {en:"One, Two, Three", local:"Yksi, kaksi, kolme", say:"OOK-see, KAHK-see, KOHL-meh"}
    ]
  },

  /* ----- ENGLISH-SPEAKING DESTINATIONS: fun local lingo, not translations ----- */

  "English (Australia)": {
    native: "Aussie English", flag: "🇦🇺",
    phrases: [
      {en:"Hello / Hi", local:"G'day", say:"g'DAY"},
      {en:"Afternoon", local:"Arvo", say:"AR-voh"},
      {en:"Flip-flops", local:"Thongs", say:"THONGZ"},
      {en:"Lots / a heap", local:"Heaps", say:"HEEPS"},
      {en:"McDonald's", local:"Maccas", say:"MAK-uhz"},
      {en:"Breakfast", local:"Brekkie", say:"BREK-ee"},
      {en:"Sandwich", local:"Sanga", say:"SANG-uh"},
      {en:"Mosquito", local:"Mozzie", say:"MOZ-ee"},
      {en:"Sunglasses", local:"Sunnies", say:"SUN-eez"},
      {en:"Swimsuit (Queensland)", local:"Togs", say:"TOGZ"},
      {en:"Very / really", local:"Heaps good", say:"HEEPS good"},
      {en:"No worries / it's fine", local:"No wuckas", say:"no WUK-uhz"},
      {en:"Cool! / Great!", local:"Ripper!", say:"RIP-uh!"},
      {en:"Good on you (well done)", local:"Good onya", say:"good ON-yuh"},
      {en:"Goodbye", local:"Hooroo", say:"hoo-ROO"}
    ]
  },

  "English (New Zealand)": {
    native: "Kiwi English & Māori", flag: "🇳🇿",
    phrases: [
      {en:"Hi / Hello (Māori)", local:"Kia ora", say:"KEE-ah OR-ah"},
      {en:"Welcome (Māori)", local:"Haere mai", say:"HIGH-reh MY"},
      {en:"Thank you (Māori)", local:"Kia ora / Ngā mihi", say:"KEE-ah OR-ah / ngah MEE-hee"},
      {en:"Great / awesome", local:"Sweet as", say:"SWEET az"},
      {en:"Flip-flops", local:"Jandals", say:"JAN-dulz"},
      {en:"Cool / no problem", local:"Choice", say:"CHOYSS"},
      {en:"Cold box / chilly bin", local:"Chilly bin", say:"CHIL-ee bin"},
      {en:"Friend / mate", local:"Bro / cuz", say:"BROH / KUZ"},
      {en:"Lots", local:"Heaps", say:"HEEPS"},
      {en:"Land / country (Māori)", local:"Aotearoa", say:"ah-oh-teh-ah-ROH-ah"},
      {en:"Yummy food", local:"Kai", say:"KYE"},
      {en:"Family (Māori)", local:"Whānau", say:"FAH-noh"},
      {en:"Cool! / Wow!", local:"Mean!", say:"MEEN!"},
      {en:"Goodbye / see ya", local:"Hooray / Ka kite", say:"HOO-ray / kah KEE-teh"},
      {en:"One, Two, Three (Māori)", local:"Tahi, rua, toru", say:"TAH-hee, ROO-ah, TOH-roo"}
    ]
  },

  "English (USA)": {
    native: "American English", flag: "🇺🇸",
    phrases: [
      {en:"Hi / Hello", local:"Howdy", say:"HOW-dee"},
      {en:"Hi everyone", local:"Hey y'all", say:"hey YAWL"},
      {en:"Great / fantastic", local:"Awesome", say:"AW-sum"},
      {en:"Fizzy drink", local:"Soda / pop", say:"SOH-dah"},
      {en:"Fries", local:"French fries", say:"french FRIZE"},
      {en:"Cookies", local:"Cookies", say:"KUK-eez"},
      {en:"Cool!", local:"Sweet!", say:"SWEET!"},
      {en:"Sweets / candy", local:"Candy", say:"KAN-dee"},
      {en:"Sidewalk (footpath)", local:"Sidewalk", say:"SIDE-wawk"},
      {en:"Sneakers (trainers)", local:"Sneakers", say:"SNEE-kerz"},
      {en:"Restroom (toilet)", local:"Restroom", say:"REST-room"},
      {en:"Very / really", local:"Super", say:"SOO-per"},
      {en:"Wow!", local:"No way!", say:"no WAY!"},
      {en:"Buddy / friend", local:"Buddy", say:"BUD-ee"},
      {en:"Goodbye", local:"See ya later", say:"see ya LAY-ter"}
    ]
  },

  "English (UK)": {
    native: "British English", flag: "🇬🇧",
    phrases: [
      {en:"Hello", local:"Hiya", say:"HY-uh"},
      {en:"Goodbye", local:"Cheerio", say:"cheer-ee-OH"},
      {en:"Toilet", local:"Loo", say:"LOO"},
      {en:"Great / fantastic", local:"Brilliant", say:"BRILL-yunt"},
      {en:"Chips (fries)", local:"Chips", say:"CHIPS"},
      {en:"Crisps (potato chips)", local:"Crisps", say:"KRISPS"},
      {en:"Sweets / candy", local:"Sweets", say:"SWEETS"},
      {en:"Trousers", local:"Trousers", say:"TROW-zerz"},
      {en:"Jumper (sweater)", local:"Jumper", say:"JUM-per"},
      {en:"Rubbish / yuck", local:"Rubbish", say:"RUB-ish"},
      {en:"Tired (sleepy)", local:"Knackered", say:"NAK-erd"},
      {en:"Hungry (very)", local:"Peckish", say:"PEK-ish"},
      {en:"Cool! / Great!", local:"Smashing!", say:"SMASH-ing!"},
      {en:"Thank you", local:"Ta / Cheers", say:"TAH / CHEERZ"},
      {en:"Goodbye (informal)", local:"Ta-ra", say:"tah-RAH"}
    ]
  },

  "English (Singapore)": {
    native: "Singlish", flag: "🇸🇬",
    phrases: [
      {en:"Friendly word added to the end", local:"Lah", say:"LAH"},
      {en:"Yes, it's possible!", local:"Can!", say:"KAN!"},
      {en:"No / cannot", local:"Cannot", say:"KAN-not"},
      {en:"Delicious / awesome", local:"Shiok", say:"SHEE-ock"},
      {en:"Food / let's eat", local:"Makan", say:"MAH-kahn"},
      {en:"Hawker food court", local:"Hawker centre", say:"HAW-ker SEN-ter"},
      {en:"Why like that?", local:"Why like dat?", say:"why like DAT?"},
      {en:"A little bit", local:"A bit only", say:"a BIT OH-nee"},
      {en:"To queue / line up", local:"Chope (save a seat)", say:"CHOHP"},
      {en:"Wow! / really?!", local:"Wah!", say:"WAH!"},
      {en:"Are you okay?", local:"You okay or not?", say:"you oh-KAY or not?"},
      {en:"Let's go!", local:"Go go go!", say:"GO GO GO!"},
      {en:"Hello (Malay)", local:"Apa khabar", say:"AH-pah kah-BAR"},
      {en:"Thank you (Malay)", local:"Terima kasih", say:"teh-REE-mah KAH-see"},
      {en:"One, Two, Three (Malay)", local:"Satu, dua, tiga", say:"SAH-too, DOO-ah, TEE-gah"}
    ]
  },

  "English (South Africa)": {
    native: "South African English", flag: "🇿🇦",
    phrases: [
      {en:"Hello (Zulu)", local:"Sawubona", say:"sah-woo-BOH-nah"},
      {en:"Thank you (Zulu)", local:"Ngiyabonga", say:"ngee-yah-BONG-gah"},
      {en:"Hi / hello (Afrikaans)", local:"Howzit", say:"HOW-zit"},
      {en:"Cool / no problem", local:"Lekker", say:"LECK-uh"},
      {en:"Yes (Afrikaans)", local:"Ja", say:"YAH"},
      {en:"Now-now (soon)", local:"Now-now", say:"now-NOW"},
      {en:"Barbecue", local:"Braai", say:"BRYE"},
      {en:"Traffic light", local:"Robot", say:"ROH-bot"},
      {en:"Friend / mate", local:"Boet / china", say:"BOOT / CHY-nah"},
      {en:"Sweets / candy", local:"Lekkers / sweets", say:"LECK-erz"},
      {en:"Flip-flops", local:"Slops", say:"SLOPS"},
      {en:"Let's go!", local:"Come, let's go", say:"come, lets GO"},
      {en:"Wow! / awesome!", local:"Eish! / Lekker!", say:"AYSH! / LECK-uh!"},
      {en:"Goodbye (Afrikaans)", local:"Totsiens", say:"TOT-seens"},
      {en:"One, Two, Three (Zulu)", local:"Kunye, kubili, kuthathu", say:"KOON-yeh, koo-BEE-lee, koo-TAH-too"}
    ]
  }
};

/* Maps EVERY destination id in DESTS to its language key above. */
const DEST_LANG = {
  "maldives": "Dhivehi",
  "rabat": "Arabic",
  "lapland": "Finnish",
  "athens": "Greek",
  "rhodes": "Greek",
  "tenerife": "Spanish",
  "porto": "Portuguese",
  "istanbul": "Turkish",
  "antalya": "Turkish",
  "split": "Croatian",
  "algarve": "Portuguese",
  "fez": "Arabic",
  "tirana": "Albanian",
  "iceland": "Icelandic",
  "sydney": "English (Australia)",
  "melbourne": "English (Australia)",
  "goldcoast": "English (Australia)",
  "sunshinecoast": "English (Australia)",
  "whitsundays": "English (Australia)",
  "brisbane": "English (Australia)",
  "auckland": "English (New Zealand)",
  "vanuatu": "Bislama",
  "singapore": "English (Singapore)",
  "capetown": "English (South Africa)",
  "johannesburg": "English (South Africa)",
  "paris": "French",
  "london": "English (UK)",
  "barcelona": "Spanish",
  "losangeles": "English (USA)",
  "miami": "English (USA)",
  "fuerteventura": "Spanish",
  "adelaide": "English (Australia)",
  "darwin": "English (Australia)",
  "agneswater": "English (Australia)",
  "herveybay": "English (Australia)",
  "christchurch": "English (New Zealand)",
  "kentroma": "Greek"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { LANG_PHRASES, DEST_LANG };
}
