// Ship Competition Data
const PARTICIPANTS = [
  {
    name: "Jhimi",
    color: "#e74c3c",
    ships: [
      { name: "Monte Urbasa", flag: "Portugal (Madeira)", imo: "9785835" },
      { name: "Shaden", flag: "Saudi Arabia", imo: "9779848" },
      { name: "Jag Vasant", flag: "India", imo: "9307750" },
      { name: "Rose 25", flag: "Palau", imo: "9275983" },
      { name: "Long Wind", flag: "Hong Kong", imo: "9385037" },
    ],
  },
  {
    name: "Murph",
    color: "#3498db",
    ships: [
      { name: "P.ALIKI", flag: "Marshall Islands", imo: "9460136" },
      { name: "Magic Victoria", flag: "Marshall Islands", imo: "9608867" },
      { name: "Nord Victor", flag: "Panama", imo: "9982536" },
      { name: "Eco Oracle", flag: "Marshall Islands", imo: "9936549" },
      { name: "Siena", flag: "Greece", imo: "9833735" },
    ],
  },
  {
    name: "Adrian",
    color: "#2ecc71",
    ships: [
      { name: "Abu Dhabi III", flag: "Liberia", imo: "9489027" },
      { name: "Spade", flag: "Cameroon", imo: "1137745" },
      { name: "Auroura", flag: "Panama", imo: "9262912" },
      { name: "Lan Jing", flag: "Curaçao", imo: "9288095" },
      { name: "North Star", flag: "Barbados", imo: "9299563" },
    ],
  },
  {
    name: "Albert",
    color: "#f39c12",
    ships: [
      { name: "Maria", flag: "Saudi Arabia", imo: "1120510" },
      { name: "Sands", flag: "Gambia", imo: "9220940" },
      { name: "Ocean Lily", flag: "Hong Kong", imo: "9284960" },
      { name: "Advantage Victory", flag: "Marshall Islands", imo: "9933547" },
      { name: "Lebrethah", flag: "Liberia", imo: "9976927" },
    ],
  },
  {
    name: "Sam",
    color: "#9b59b6",
    ships: [
      { name: "Karachi", flag: "Pakistan", imo: "9903413" },
      { name: "Sea Bird", flag: "Palau", imo: "9088536" },
      { name: "Diligent Warrior", flag: "Greece", imo: "9750050" },
      { name: "Nature Heart", flag: "Mozambique", imo: "9251585" },
      { name: "Camilla", flag: "Liberia", imo: "9254850" },
    ],
  },
  {
    name: "Viraj",
    color: "#1abc9c",
    ships: [
      { name: "Stoic Warrior", flag: "Liberia", imo: "1028762" },
      { name: "Pine Gas", flag: "India", imo: "9315680" },
      { name: "Galaxy Gas", flag: "Haiti", imo: "9174361" },
      { name: "Front Shanghai", flag: "Hong Kong", imo: "9832262" },
      { name: "Front Beauly", flag: "Marshall Islands", imo: "9937103" },
    ],
  },
  {
    name: "Tuffee",
    color: "#e67e22",
    ships: [
      { name: "Smyrni", flag: "Liberia", imo: "9493779" },
      { name: "Parimal", flag: "Palau", imo: "9308766" },
      { name: "Serifos", flag: "Liberia", imo: "9410399" },
      { name: "GasLog Skagen", flag: "Bermuda", imo: "9626285" },
      { name: "Mahadah Silver", flag: "Marshall Islands", imo: "9718777" },
    ],
  },
];

// Real ship positions fetched from AIS data (myshiptracking.com)
// Last updated: 2026-03-07
const REAL_POSITIONS = {
  "9785835": { lat: 25.91479, lng: 55.49633 },  // Monte Urbasa
  "9779848": { lat: 25.89651, lng: 55.50740 },  // Shaden
  "9307750": { lat: 25.89880, lng: 55.49858 },  // Jag Vasant
  "9275983": { lat: 25.92054, lng: 55.49507 },  // Rose 25
  "9385037": { lat: 24.50443, lng: 52.93657 },  // Long Wind
  "9460136": { lat: 25.93486, lng: 55.49418 },  // P.ALIKI
  "9608867": { lat: 27.54970, lng: 50.50326 },  // Magic Victoria
  "9982536": { lat: 25.91027, lng: 55.49898 },  // Nord Victor
  "9936549": { lat: 24.69633, lng: 53.80643 },  // Eco Oracle
  "9833735": { lat: 25.23090, lng: 54.58430 },  // Siena
  "9489027": { lat: 25.91188, lng: 55.49023 },  // Abu Dhabi III
  "1137745": { lat: 25.41512, lng: 55.32857 },  // Spade
  "9262912": { lat: 25.91162, lng: 55.48946 },  // Auroura
  "9288095": { lat: 24.49787, lng: 52.89035 },  // Lan Jing
  "9299563": { lat: 26.21887, lng: 55.90588 },  // North Star
  "1120510": { lat: 25.91210, lng: 55.49905 },  // Maria
  "9220940": { lat: 26.07955, lng: 55.78936 },  // Sands
  "9284960": { lat: 25.23233, lng: 54.58427 },  // Ocean Lily
  "9933547": { lat: 28.71708, lng: 49.30016 },  // Advantage Victory
  "9976927": { lat: 25.23017, lng: 54.58527 },  // Lebrethah
  "9903413": { lat: 25.92242, lng: 55.49420 },  // Karachi
  "9088536": { lat: 25.60720, lng: 55.16399 },  // Sea Bird
  "9750050": { lat: 25.91009, lng: 55.49949 },  // Diligent Warrior
  "9251585": { lat: 24.42162, lng: 52.82978 },  // Nature Heart
  "9254850": { lat: 25.89383, lng: 55.50583 },  // Camilla
  "1028762": { lat: 25.89788, lng: 55.50215 },  // Stoic Warrior
  "9315680": { lat: 25.90997, lng: 55.50009 },  // Pine Gas
  "9174361": { lat: 25.69140, lng: 55.11098 },  // Galaxy Gas
  "9832262": { lat: 25.89509, lng: 55.50353 },  // Front Shanghai
  "9937103": { lat: 25.89586, lng: 55.50749 },  // Front Beauly
  "9493779": { lat: 24.51188, lng: 52.88117 },  // Smyrni
  "9308766": { lat: 29.35883, lng: 49.09336 },  // Parimal
  "9410399": { lat: 25.89019, lng: 55.50395 },  // Serifos
  "9626285": { lat: 24.54601, lng: 52.87871 },  // GasLog Skagen
  "9718777": { lat: 24.51871, lng: 52.82530 },  // Mahadah Silver
};

// Strait of Hormuz coordinates
const HORMUZ = {
  center: [26.0, 54.0],
  zoom: 7,
  // Gate line - horizontal from Limah east across to Iranian coast
  gateLine: [
    [25.94, 56.42],
    [25.94, 57.4],
  ],
};

// Finish line target point (center of gate line, where the label is)
const FINISH_LINE = { lat: 25.94, lng: 56.8 };

// Actual eastbound shipping lane through the Strait of Hormuz (TSS)
// Based on key landmarks: Greater Tunb Island, Musandam, and Quoin Island
const SHIPPING_LANE = [
  { lat: 26.12, lng: 55.3 },   // South of Greater Tunb (26.25N,55.27E), eastbound lane
  { lat: 26.34, lng: 56.0 },   // Mid-strait, between Musandam and Iran
  { lat: 26.52, lng: 56.52 },  // Quoin Island (26.50N,56.52E) - traditional exit point
];

// Flag emoji mapping
const FLAG_EMOJIS = {
  "Portugal (Madeira)": "\u{1F1F5}\u{1F1F9}",
  "Saudi Arabia": "\u{1F1F8}\u{1F1E6}",
  India: "\u{1F1EE}\u{1F1F3}",
  Palau: "\u{1F1F5}\u{1F1FC}",
  "Hong Kong": "\u{1F1ED}\u{1F1F0}",
  "Marshall Islands": "\u{1F1F2}\u{1F1ED}",
  Panama: "\u{1F1F5}\u{1F1E6}",
  Greece: "\u{1F1EC}\u{1F1F7}",
  Liberia: "\u{1F1F1}\u{1F1F7}",
  Cameroon: "\u{1F1E8}\u{1F1F2}",
  Curaçao: "\u{1F1E8}\u{1F1FC}",
  Gambia: "\u{1F1EC}\u{1F1F2}",
  Pakistan: "\u{1F1F5}\u{1F1F0}",
  Mozambique: "\u{1F1F2}\u{1F1FF}",
  Haiti: "\u{1F1ED}\u{1F1F9}",
  Bermuda: "\u{1F1E7}\u{1F1F2}",
  Barbados: "\u{1F1E7}\u{1F1E7}",
};
