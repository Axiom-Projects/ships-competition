// Ship Competition Data
const PARTICIPANTS = [
  {
    name: "Jhimi",
    color: "#e74c3c",
    ships: [
      { name: "Monte Urbasa", flag: "Portugal (Madeira)", imo: "9785835", mmsi: "255806023" },
      { name: "Shaden", flag: "Saudi Arabia", imo: "9779848", mmsi: "403530000" },
      { name: "Jag Vasant", flag: "India", imo: "9307750", mmsi: "419001387" },
      { name: "Rose 25", flag: "Palau", imo: "9275983", mmsi: "511101620" },
      { name: "Long Wind", flag: "Hong Kong", imo: "9385037", mmsi: "477372500" },
    ],
  },
  {
    name: "Murph",
    color: "#3498db",
    ships: [
      { name: "P.ALIKI", flag: "Marshall Islands", imo: "9460136", mmsi: "538010229" },
      { name: "Magic Victoria", flag: "Marshall Islands", imo: "9608867", mmsi: "538004722" },
      { name: "Nord Victor", flag: "Panama", imo: "9982536", mmsi: "352003984" },
      { name: "Eco Oracle", flag: "Marshall Islands", imo: "9936549", mmsi: "538009925" },
      { name: "Siena", flag: "Greece", imo: "9833735", mmsi: "241836000" },
    ],
  },
  {
    name: "Adrian",
    color: "#2ecc71",
    ships: [
      { name: "Abu Dhabi III", flag: "Liberia", imo: "9489027", mmsi: "636014923" },
      { name: "Spade", flag: "Cameroon", imo: "1137745", mmsi: "613701904" },
      { name: "Auroura", flag: "Panama", imo: "9262912", mmsi: "352001225" },
      { name: "Lan Jing", flag: "Curaçao", imo: "9288095", mmsi: "306254000" },
      { name: "North Star", flag: "Barbados", imo: "9299563", mmsi: "314109000" },
    ],
  },
  {
    name: "Albert",
    color: "#f39c12",
    ships: [
      { name: "Maria", flag: "Saudi Arabia", imo: "1120510", mmsi: "671536100" },
      { name: "Sands", flag: "Gambia", imo: "9220940", mmsi: "629009382" },
      { name: "Ocean Lily", flag: "Hong Kong", imo: "9284960", mmsi: "477178100" },
      { name: "Advantage Victory", flag: "Marshall Islands", imo: "9933547", mmsi: "538010019" },
      { name: "Lebrethah", flag: "Liberia", imo: "9976927", mmsi: "636024681" },
    ],
  },
  {
    name: "Sam",
    color: "#9b59b6",
    ships: [
      { name: "Karachi", flag: "Pakistan", imo: "9903413", mmsi: "463092101" },
      { name: "Sea Bird", flag: "Palau", imo: "9088536", mmsi: "511101458" },
      { name: "Diligent Warrior", flag: "Greece", imo: "9750050", mmsi: "241422000" },
      { name: "Nature Heart", flag: "Mozambique", imo: "9251585", mmsi: "650000171" },
      { name: "Camilla", flag: "Hong Kong", imo: "9254850", mmsi: "477223400" },
    ],
  },
  {
    name: "Viraj",
    color: "#1abc9c",
    ships: [
      { name: "Stoic Warrior", flag: "Liberia", imo: "1028762", mmsi: "636024896" },
      { name: "Pine Gas", flag: "India", imo: "9315680", mmsi: "419001655" },
      { name: "Galaxy Gas", flag: "Haiti", imo: "9174361", mmsi: "336897910" },
      { name: "Front Shanghai", flag: "Hong Kong", imo: "9832262", mmsi: "477539300" },
      { name: "Front Beauly", flag: "Marshall Islands", imo: "9937103", mmsi: "538010890" },
    ],
  },
  {
    name: "Tuffee",
    color: "#e67e22",
    ships: [
      { name: "Smyrni", flag: "Liberia", imo: "9493779", mmsi: "636015015" },
      { name: "Parimal", flag: "Palau", imo: "9308766", mmsi: "511101460" },
      { name: "Serifos", flag: "Liberia", imo: "9410399", mmsi: "636018827" },
      { name: "GasLog Skagen", flag: "Bermuda", imo: "9626285", mmsi: "310664000" },
      { name: "Mahadah Silver", flag: "Marshall Islands", imo: "9718777", mmsi: "538006501" },
    ],
  },
  {
    name: "Eleanor",
    color: "#e91e63",
    ships: [
      { name: "Safeen Prestige", flag: "Malta", imo: "9593517", mmsi: "249797000" },
      { name: "Sonangol Namibe", flag: "Bahamas", imo: "9325049", mmsi: "309072000" },
      { name: "Sanmar Herald", flag: "India", imo: "9330563", mmsi: "419002042" },
      { name: "Ocean Thunder", flag: "Panama", imo: "9416422", mmsi: "352003620" },
      { name: "Al Kharaitiyat", flag: "Marshall Islands", imo: "9397327", mmsi: "538003352" },
    ],
  },
];

// Real ship positions fetched from AIS data (myshiptracking.com)
// Last updated: 2026-08-10
const REAL_POSITIONS = {
  "9785835": { lat: 1.92524, lng: 102.18868 },  // Monte Urbasa
  "9779848": { lat: 29.95574, lng: 121.81427 },  // Shaden
  "9307750": { lat: -19.46830, lng: 57.40273 },  // Jag Vasant
  "9275983": { lat: 25.34574, lng: 56.50276 },  // Rose 25
  "9385037": { lat: 1.27904, lng: 104.12796 },  // Long Wind
  "9460136": { lat: 24.91684, lng: 57.34025 },  // P.ALIKI
  "9608867": { lat: 1.86716, lng: 104.84130 },  // Magic Victoria
  "9982536": { lat: 41.17160, lng: 140.06875 },  // Nord Victor
  "9936549": { lat: 6.49387, lng: 79.75057 },  // Eco Oracle
  "9833735": { lat: -34.09197, lng: 17.70994 },  // Siena
  "9489027": { lat: 25.96065, lng: 51.73067 },  // Abu Dhabi III
  "1137745": { lat: 25.65703, lng: 55.05408 },  // Spade
  "9262912": { lat: 24.79163, lng: 56.56505 },  // Auroura
  "9288095": { lat: 20.46861, lng: 59.54476 },  // Lan Jing
  "9299563": { lat: 3.68667, lng: 100.44167 },  // North Star
  "1120510": { lat: 26.08368, lng: 55.54316 },  // Maria
  "9220940": { lat: 25.35089, lng: 56.47142 },  // Sands
  "9284960": { lat: 8.06997, lng: 76.07318 },  // Ocean Lily
  "9933547": { lat: 34.58765, lng: -24.35942 },  // Advantage Victory
  "9976927": { lat: 10.04095, lng: -76.73114 },  // Lebrethah
  "9903413": { lat: 24.65508, lng: 66.79760 },  // Karachi
  "9088536": { lat: 25.39266, lng: 56.60021 },  // Sea Bird (stale)
  "9750050": { lat: 29.79433, lng: 122.11818 },  // Diligent Warrior
  "9251585": { lat: 1.83205, lng: 104.76712 },  // Nature Heart
  "9254850": { lat: 25.42152, lng: 56.61657 },  // Camilla
  "1028762": { lat: 30.92225, lng: 20.01781 },  // Stoic Warrior
  "9315680": { lat: -11.87847, lng: 47.67690 },  // Pine Gas
  "9174361": { lat: 26.17525, lng: 55.48503 },  // Galaxy Gas
  "9832262": { lat: 49.30027, lng: -4.26280 },  // Front Shanghai
  "9937103": { lat: -34.27786, lng: 26.40707 },  // Front Beauly
  "9493779": { lat: 5.23611, lng: 106.73682 },  // Smyrni
  "9308766": { lat: 29.68022, lng: 48.76020 },  // Parimal
  "9410399": { lat: 2.87504, lng: 105.12727 },  // Serifos
  "9626285": { lat: 25.63966, lng: 53.29635 },  // GasLog Skagen
  "9718777": { lat: 14.72022, lng: 119.75935 },  // Mahadah Silver
  "9593517": { lat: 25.89098, lng: 55.41337 },  // Safeen Prestige
  "9325049": { lat: 25.43794, lng: 55.29513 },  // Sonangol Namibe
  "9330563": { lat: 5.85296, lng: 81.44228 },  // Sanmar Herald
  "9416422": { lat: 1.23626, lng: 103.89073 },  // Ocean Thunder
  "9397327": { lat: 25.82425, lng: 51.87276 },  // Al Kharaitiyat
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
  Malta: "\u{1F1F2}\u{1F1F9}",
  Bahamas: "\u{1F1E7}\u{1F1F8}",
};
