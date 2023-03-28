const map = L.map("map").setView([51.816779685284295, 5.802648308100235], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const defibrillatorIcon = L.icon({
  iconUrl: "../leaflet/images/defibrillator.jpg",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -32],
});

function addAEDs(aeds) {
  aeds.forEach((aed) => {
    L.marker([aed.lat, aed.lon], {
      icon: defibrillatorIcon,
    })
      .bindPopup((aed.name ? "<b>" + aed.name + "</b><br>" : "") + aed.street)
      .addTo(map);
  });
}

const aeds = [
  {
    lat: 51.80935844842275,
    lon: 5.797522519886307,
    name: "Wijkkantoor Talis",
    street: "Meijhorst 2218",
  },
  {
    lat: 51.813278105438954,
    lon: 5.7926082813238535,
    name: "Dierenkliniek de Berendonck",
    street: "Meijhorst 9266",
  },
  {
    lat: 51.81206571907335,
    lon: 5.801131127435973,
    name: "Wijkcentrum Dukenburg",
    street: "Meijhorst 7039",
  },
  {
    lat: 51.81407852480086,
    lon: 5.7961197274784535,
    name: "Wijkkantoor Talis (Schuylenburch)",
    street: "Meijhorst 1400",
  },
  {
    lat: 51.81090062592653,
    lon: 5.801586527752244,
    name: "Wooncentrum de Meiberg",
    street: "Meijhorst 7201",
  },
  {
    lat: 51.81490312649038,
    lon: 5.793607083605918,
    name: "Vijverhorst",
    street: "Meijhorst 1770",
  },
  {
    lat: 51.810555575389664,
    lon: 5.798718693631663,
    name: "Sporthal Meijhorst",
    street: "Meijhorst 1107",
  },
  {
    lat: 51.81225289021527,
    lon: 5.78458621107989,
    name: "Tennisvereniging Smash",
    street: "Staddijk 125",
  },
  {
    lat: 51.81340013514601,
    lon: 5.794646309607268,
    name: "Huisartsenpraktijk het Meijhuis",
    street: "Meijhorst 9301",
  },
  {
    lat: 51.811692007883984,
    lon: 5.80171047106156,
    name: "Ontmoetingskerk Meijhorst",
    street: "Meijhorst 7033",
  },
  {
    lat: 51.81417018904376,
    lon: 5.800933219434202,
    name: "Tandheelkundig centrum Nijmegen",
    street: "Meijhorst 6011",
  },
  {
    lat: 51.81020342691654,
    lon: 5.801574811726974,
    name: "Gezondheidscentrum de Schakel",
    street: "Meijhorst 1003",
  },
  {
    lat: 51.81480345814288,
    lon: 5.801166708199451,
    name: "Hara",
    street: "Meijhorst 6002",
  },
  {
    lat: 51.81276095861526,
    lon: 5.789556149346262,
    name: "Voetbal oranje blauw",
    street: "Staddijk 117",
  },
  {
    lat: 51.81059338273736,
    lon: 5.799471133731805,
    name: "De Horizon",
    street: "Meijhorst 2001",
  },
  {
    lat: 51.81653620083467,
    lon: 5.7887283287750755,
    street: "Tolhuis 1401",
  },
  {
    lat: 51.81723309080097,
    lon: 5.7960300493166805,
    street: "Tolhuis 2430",
  },
  {
    lat: 51.82028736265647,
    lon: 5.790641248329058,
    street: "Tolhuis 7333",
  },
  {
    lat: 51.822634110250746,
    lon: 5.7911817563003165,
    name: "Triavium",
    street: "Van Rosenburgweg 2",
  },
  {
    lat: 51.81797456559146,
    lon: 5.789778304427189,
    name: "Creatief Centrum",
    street: "Tolhuis 4444",
  },
  {
    lat: 51.81452712659799,
    lon: 5.7813986283743946,
    name: "Uitvaartcentrum Waalstede",
    street: "Staddijk 130",
  },
  {
    lat: 51.81867859721773,
    lon: 5.797124135585324,
    street: "Tolhuis 2228",
  },
  {
    lat: 51.82346704758227,
    lon: 5.796182326863477,
    name: "HEMA",
    street: "Zwanenveld 90-126",
  },
  {
    lat: 51.823361712481194,
    lon: 5.797926104233579,
    name: "Albert Heijn",
    street: "Zwanenveld 5505",
  },
  {
    lat: 51.81928781572134,
    lon: 5.801232341127572,
    name: "Wijkkantoor Talis",
    street: "Zwanenveld 2102",
  },
  {
    lat: 51.82123954156201,
    lon: 5.796553240066016,
    street: "Zwanenveld 6329",
  },
  {
    lat: 51.82164996747767,
    lon: 5.8062668166190585,
    street: "Zwanenveld 3202a",
  },
  {
    lat: 51.82289214181643,
    lon: 5.798557821249886,
    name: "De Zwaan",
    street: "Zwanenveld 6504",
  },
  {
    lat: 51.82247268882146,
    lon: 5.804470184568043,
    street: "Zwanenveld 4254",
  },
  {
    lat: 51.820959235201755,
    lon: 5.8001158523182665,
    name: "Wooncentrum de Vlechting",
    street: "Zwanenveld 7380",
  },
  {
    lat: 51.82258943596007,
    lon: 5.797557327627234,
    name: "Fysiotherapie Zwanenveld",
    street: "Zwanenveld 9080h",
  },
  {
    lat: 51.81343505428046,
    lon: 5.81013354292503,
    name: "Fysiotherapie Fy-Fit",
    street: "Lankforst 1437",
  },
  {
    lat: 51.8152395877771,
    lon: 5.803873452687258,
    name: "Valckenaer",
    street: "Lankforst 5438",
  },
  {
    lat: 51.816021174403495,
    lon: 5.80807305307155,
    street: "Lankforst 39e straat",
  },
  {
    lat: 51.81665937975906,
    lon: 5.805591841122993,
    name: "Brasserie 't Zusje",
    street: "Lankforst 5101",
  },
  {
    lat: 51.806636532992975,
    lon: 5.813134510716693,
    name: "Woontoren Tonder",
    street: "Malvert 9002",
  },
  {
    lat: 51.80618117722848,
    lon: 5.8092442580892545,
    street: "Malvert 1229",
  },
  {
    lat: 51.80985229936854,
    lon: 5.8098151792564625,
    name: "Wijkcentrum de Turf",
    street: "Malvert 5134",
  },
  {
    lat: 51.80893038109196,
    lon: 5.808000302566257,
    name: "Jumbo",
    street: "Malvert 7023",
  },
  {
    lat: 51.80964153008441,
    lon: 5.808106669572586,
    name: "Gezondheidscentrum de Brug",
    street: "Malvert 5133",
  },
  {
    lat: 51.80928834155537,
    lon: 5.8127432442415605,
    name: "Wooncentrum de Wollewei",
    street: "Malvert 8001",
  },
  {
    lat: 51.80659530988742,
    lon: 5.803088848686082,
    name: "Autobedrijf de Baaij",
    street: "Aldenhof 1101",
  },
  {
    lat: 51.80554781596714,
    lon: 5.797187930017665,
    street: "Aldenhof 14e straat",
  },
  {
    lat: 51.809157095716614,
    lon: 5.801207185782098,
    name: "Fysiotherapie Aldenhof",
    street: "Aldenhof 7003",
  },
  {
    lat: 51.80592602022081,
    lon: 5.7982123473872464,
    name: "Lindenberg Aldenhof",
    street: "Aldenhof 1390",
  },
  {
    lat: 51.80256170438721,
    lon: 5.796369193694389,
    name: "SVE Trajanus",
    street: "Staddijk 35",
  },
  {
    lat: 51.801833866010625,
    lon: 5.7967374393582505,
    name: "Hockeyclub HCQZ",
    street: "Staddijk 33",
  },
  {
    lat: 51.807320313923555,
    lon: 5.802914025506341,
    name: "Woongenoot",
    street: "Aldenhof 5002",
  },
  {
    lat: 51.80182346501199,
    lon: 5.806909123822071,
    name: "Fysiotherapie Dukenburg",
    street: "Weezenhof 5516",
  },
  {
    lat: 51.80313061736801,
    lon: 5.807968813207804,
    name: "Huiskamer Talis",
    street: "Weezenhof 4100",
  },
  {
    lat: 51.79886049637433,
    lon: 5.804697747376435,
    street: "Weezenhof 2666",
  },
  {
    lat: 51.799998355468425,
    lon: 5.81350972450379,
    street: "Weezenhof 8405",
  },
  {
    lat: 51.7997597527954,
    lon: 5.810554690570244,
    street: "Weezenhof 8282",
  },
  {
    lat: 51.800605010194474,
    lon: 5.801503643560833,
    street: "Weezenhof 2323",
  },
  {
    lat: 51.80387025399412,
    lon: 5.812340738896133,
    street: "Weezenhof 6263",
  },
  {
    lat: 51.80207970412018,
    lon: 5.807637275442857,
    name: "Lidl",
    street: "Weezenhof 5530",
  },
  {
    lat: 51.82490705577745,
    lon: 5.797744441183057,
    name: "Budget Home Store",
    street: "Wijchenseweg 150",
  },
  {
    lat: 51.825322383568505,
    lon: 5.800507490459633,
    name: "Saison",
    street: "Wijchenseweg 174",
  },
  {
    lat: 51.825411035876115,
    lon: 5.80267231216144,
    name: "Leen Bakker",
    street: "Wijchenseweg 190",
  },
  {
    lat: 51.823264016635065,
    lon: 5.784836528633342,
    name: "Liander",
    street: "Wijchenseweg 6",
  },
  {
    lat: 51.82365099778542,
    lon: 5.78565097322734,
    name: "Planon",
    street: "Wijchenseweg 8",
  },
  {
    lat: 51.82406846936663,
    lon: 5.788875809737278,
    name: "Scholten Awater",
    street: "Wijchenseweg 20",
  },
  {
    lat: 51.82397773670922,
    lon: 5.78847621661338,
    name: "ABAB",
    street: "Wijchenseweg 20",
  },
  {
    lat: 51.82407067325074,
    lon: 5.789130654607912,
    name: "Strukton",
    street: "Wijchenseweg 20",
  },
  {
    lat: 51.82495625478385,
    lon: 5.793759842033041,
    name: "KION",
    street: "Wijchenseweg 102",
  },
  {
    lat: 51.82601817401101,
    lon: 5.797175605788114,
    name: "GX Software",
    street: "Wijchenseweg 111",
  },
  {
    lat: 51.82508135991811,
    lon: 5.794629056839302,
    name: "Croon",
    street: "Wijchenseweg 112",
  },
  {
    lat: 51.82506290513866,
    lon: 5.794555223581482,
    name: "Groenendaal & van Krijl",
    street: "Wijchenseweg 118",
  },
  {
    lat: 51.825157282840635,
    lon: 5.795491710238765,
    name: "Partner in Petfood",
    street: "Wijchenseweg 122",
  },
  {
    lat: 51.82574188337085,
    lon: 5.792174949168311,
    street: "Takenhofplein 1",
  },
  {
    lat: 51.824416290820814,
    lon: 5.790936466767874,
    name: "Bovemij",
    street: "Takenhofplein 2",
  },
  {
    lat: 51.82584860788743,
    lon: 5.7908913873851295,
    name: "Standvast Wonen",
    street: "Takenhofplein 3",
  },
  {
    lat: 51.82572933401774,
    lon: 5.790695776109831,
    name: "GHW assurantie",
    street: "Takenhofplein 3",
  },
  {
    lat: 51.82560757930948,
    lon: 5.790555834196045,
    name: "Logitech",
    street: "Takenhofplein 3",
  },
  {
    lat: 51.825404992346456,
    lon: 5.790427438358822,
    name: "Biotronic",
    street: "Takenhofplein 3",
  },
  {
    lat: 51.82441055387157,
    lon: 5.7925363674838835,
    name: "SVB",
    street: "Takenhofplein 4",
  },
  {
    lat: 51.83341663511248,
    lon: 5.788392847348658,
    name: "Wijkatelier Lindenholt",
    street: "Zellersacker 1003",
  },
  {
    lat: 51.836271928236826,
    lon: 5.79745442962362,
    street: "Meeuwse acker 1233",
  },
  {
    lat: 51.833737512528174,
    lon: 5.792731546501095,
    name: "Sporthal de Horstacker",
    street: "Horstacker 1401",
  },
  {
    lat: 51.837540026599804,
    lon: 5.796722335782942,
    name: "Voetbalclub SCE",
    street: "Meeuwse acker 2029",
  },
  {
    lat: 51.83894353253078,
    lon: 5.784766299548058,
    name: "Jongerencentrum de Sprok",
    street: "Weteringweg 51",
  },
  {
    lat: 51.83913977418017,
    lon: 5.780419677209421,
    street: "Drieskensacker 1504",
  },
  {
    lat: 51.83644202454907,
    lon: 5.780206083861961,
    street: "Hillekensacker 1556",
  },
  {
    lat: 51.83179212797308,
    lon: 5.7747009546062165,
    street: "Leuvensbroek 3331",
  },
  {
    lat: 51.83151962338678,
    lon: 5.780833769519011,
    name: "Wijkcentrum de Brack",
    street: "Leuvensbroek 1200",
  },
  {
    lat: 51.830182096811996,
    lon: 5.789287013405344,
    street: "Hegdambroek 1064",
  },
  {
    lat: 51.82944213875715,
    lon: 5.776233452048968,
    street: "Holtgesbroek 1004",
  },
  {
    lat: 51.8321479564375,
    lon: 5.780429361193168,
    name: "Jumbo",
    street: "Leuvensbroek 1028",
  },
  {
    lat: 51.83517978824452,
    lon: 5.804820181381315,
    street: "De Wellenkamp 1533",
  },
  {
    lat: 51.83088103869234,
    lon: 5.799901191405313,
    street: "De Gildekamp 3054",
  },
  {
    lat: 51.829864941959016,
    lon: 5.801155200895398,
    name: "Wijkcentrum de Kampenaar",
    street: "Zwanenstraat 1a",
  },
  {
    lat: 51.828882752805185,
    lon: 5.795630288612696,
    street: "De Voorstenkamp 1394",
  },
  {
    lat: 51.82669022097379,
    lon: 5.806679003765908,
    street: "Draaiom 148",
  },
  {
    lat: 51.82991911332684,
    lon: 5.801455436085286,
    name: "Medisch Centrum onder de Linde",
    street: "Sint Agnetenweg 75",
  },
  {
    lat: 51.82978885282446,
    lon: 5.801910641756298,
    name: "Mondzorg024",
    street: "Sint Agnetenweg 73a",
  },
  {
    lat: 51.83683991705621,
    lon: 5.8042169156079355,
    name: "Tennisclub Lindenholt",
    street: "De Wellenkamp 1150",
  },
  {
    lat: 51.827091789942685,
    lon: 5.788268447141176,
    name: "Portaal",
    street: "Kerkenbos 1001",
  },
  {
    lat: 51.82639346190642,
    lon: 5.787356352468595,
    name: "REA College",
    street: "Kerkenbos 1003",
  },
  {
    lat: 51.827637742831946,
    lon: 5.787244244112036,
    name: "Croes Bouwtechnisch Ingenieursbureau",
    street: "Kerkenbos 1006",
  },
  {
    lat: 51.82517676446153,
    lon: 5.78405500029933,
    name: "Orient Plaza",
    street: "Kerkenbos 1017",
  },
  {
    lat: 51.82605358380561,
    lon: 5.78447133191034,
    street: "Kerkenbos 1018b",
  },
  {
    lat: 51.82452908601768,
    lon: 5.783158419799337,
    name: "BDO accountants",
    street: "Kerkenbos 1023",
  },
  {
    lat: 51.82505231894388,
    lon: 5.781973679760545,
    name: "BCI ventures",
    street: "Kerkenbos 1031",
  },
  {
    lat: 51.824341359019826,
    lon: 5.780675379261079,
    name: "Arbo Unie",
    street: "Kerkenbos 1049",
  },
  {
    lat: 51.8248662042963,
    lon: 5.779869278732645,
    street: "Kerkenbos 1053",
  },
  {
    lat: 51.824270396439246,
    lon: 5.77901084615141,
    name: "Aon",
    street: "Kerkenbos 1061",
  },
  {
    lat: 51.82489658854066,
    lon: 5.779250462137629,
    name: "BHV.nl",
    street: "Kerkenbos 1063",
  },
  {
    lat: 51.8250929606455,
    lon: 5.77833304324052,
    name: "Bedrijfspolie",
    street: "Kerkenbos 1075b",
  },
  {
    lat: 51.82625034814605,
    lon: 5.778205531007054,
    name: "Foto Verreijt",
    street: "Kerkenbos 1093",
  },
  {
    lat: 51.826314740537256,
    lon: 5.778191105751831,
    name: "Kompas veiligheidsgroep",
    street: "Kerkenbos 1095",
  },
  {
    lat: 51.827336441485535,
    lon: 5.78941567844137,
    name: "Eppendorf",
    street: "Kerkenbos 1101",
  },
  {
    lat: 51.82690167590612,
    lon: 5.790229199930306,
    name: "Hartman BV",
    street: "Kerkenbos 1103",
  },
  {
    lat: 51.82677085901016,
    lon: 5.781002790766281,
    name: "Kliniek voor Mondgezondheid",
    street: "Kerkenbos 1250",
  },
];

addAEDs(aeds);

console.log(`Rendered ${aeds.length} AEDs`);
