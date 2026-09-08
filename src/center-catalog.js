// PTD1 PokéCenter's visible catalogs, inspected read-only on 2026-09-07.
// Source URLs and remaining server-only uncertainties: work/pokecenter-reference.md.
// Currency amounts describe free virtual currency in this port. No payment links.

const freeze = value => {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};

// Tuple: species ID, displayed name, displayed moves, optional starting level.
const battle = [
  [3,'Venusaur',['Solar Beam']],
  [6,'Charizard',['Flamethrower']],
  [9,'Blastoise',['Aqua Tail']],
  [12,'Butterfree',['Bug Buzz']],
  [15,'Beedrill',['Poison Jab']],
  [18,'Pidgeot',['Wing Attack']],
  [20,'Raticate',['Super Fang']],
  [22,'Fearow',['Drill Peck']],
  [24,'Arbok',['Acid Spray']],
  [26,'Raichu',['Thunderbolt']],
  [28,'Sandslash',['Crush Claw']],
  [31,'Nidoqueen',['Earth Power']],
  [34,'Nidoking',['Earth Power']],
  [36,'Clefable',['Metronome']],
  [37,'Vulpix',['Inferno']],
  [40,'Wigglytuff',['Double Slap']],
  [42,'Golbat',['Poison Fang']],
  [45,'Vileplume',['Petal Dance']],
  [47,'Parasect',['Giga Drain']],
  [49,'Venomoth',['Signal Beam']],
  [51,'Dugtrio',['Dig']],
  [53,'Persian',['Slash']],
  [55,'Golduck',['Scratch']],
  [57,'Primeape',['Cross Chop']],
  [59,'Arcanine',['Fire Fang']],
  [62,'Poliwrath',['Dynamic Punch']],
  [65,'Alakazam',['Psychic']],
  [68,'Machamp',['Cross Chop']],
  [71,'Victreebel',['Leaf Storm']],
  [73,'Tentacruel',['Water Pulse']],
  [76,'Golem',['Bulldoze']],
  [78,'Rapidash',['Tackle','Growl']],
  [80,'Slowbro',['Tackle','Yawn','Curse']],
  [82,'Magneton',['Discharge']],
  [83,'Farfetchd',['Air Slash']],
  [85,'Dodrio',['Peck','Growl']],
  [87,'Dewgong',['Headbutt']],
  [91,'Cloyster',['Tackle']],
  [94,'Gengar',['Shadow Ball']],
  [95,'Onix',['Iron Tail']],
  [97,'Hypno',['Psychic']],
  [99,'Kingler',['Slam']],
  [101,'Electrode',['Electro Ball']],
  [103,'Exeggutor',['Hypnosis','Uproar','Barrage']],
  [105,'Marowak',['Bone Rush']],
  [108,'Lickitung',['Lick']],
  [110,'Weezing',['Tackle']],
  [112,'Rhydon',['Horn Attack','Tail Whip']],
  [113,'Chansey',['Defense Curl','Growl','Pound']],
  [114,'Tangela',['Constrict','Ingrain']],
  [115,'Kangaskhan',['Comet Punch','Leer']],
  [119,'Seaking',['Peck']],
  [121,'Starmie',['Swift']],
  [122,'Mr. Mime',['Psychic']],
  [123,'Scyther',['X-Scissor']],
  [124,'Jynx',['Ice Punch']],
  [125,'Electabuzz',['Quick Attack','Leer','Thunder Shock']],
  [126,'Magmar',['Ember']],
  [127,'Pinsir',['Thrash']],
  [128,'Tauros',['Tackle']],
  [130,'Gyarados',['Hyper Beam']],
  [131,'Lapras',['Ice Beam']],
  [132,'Ditto',['Transform']],
  [133,'Eevee',['Last Resort']],
  [137,'Porygon',['Psybeam']],
  [139,'Omastar',['Constrict']],
  [141,'Kabutops',['Scratch']],
  [142,'Aerodactyl',['Wing Attack']],
  [143,'Snorlax',['Tackle']],
  [149,'Dragonite',['Dragon Rush']],
];

const common = [
  [10,'Caterpie',['Tackle','String Shot']],
  [13,'Weedle',['Poison Sting','String Shot']],
  [16,'Pidgey',['Tackle']],
  [19,'Rattata',['Tackle','Tail Whip']],
  [21,'Spearow',['Peck','Growl']],
  [23,'Ekans',['Wrap','Leer']],
  [25,'Pikachu',['Thunder Shock','Growl']],
  [27,'Sandshrew',['Scratch']],
  [29,'Nidoran F',['Scratch','Growl']],
  [32,'Nidoran M',['Peck','Leer']],
  [39,'Jigglypuff',['Pound','Sing']],
  [41,'Zubat',['Leech Life']],
  [46,'Paras',['Scratch']],
  [50,'Diglett',['Scratch']],
  [56,'Mankey',['Scratch','Leer','Low Kick']],
  [74,'Geodude',['Tackle','Defense Curl']],
  [81,'Magnemite',['Tackle']],
  [83,'Farfetchd',['Peck','Leer']],
  [84,'Doduo',['Peck','Growl']],
  [92,'Gastly',['Lick']],
  [95,'Onix',['Tackle']],
  [102,'Exeggcute',['Hypnosis','Uproar','Barrage']],
  [109,'Koffing',['Tackle']],
  [111,'Rhyhorn',['Horn Attack','Tail Whip']],
];

const uncommon = [
  [35,'Clefairy',['Pound','Growl']],
  [37,'Vulpix',['Ember']],
  [43,'Oddish',['Absorb']],
  [48,'Venonat',['Tackle']],
  [52,'Meowth',['Scratch','Growl']],
  [54,'Psyduck',['Scratch','Water Sport']],
  [58,'Growlithe',['Bite','Roar']],
  [60,'Poliwag',['Bubble']],
  [63,'Abra',['Teleport','Ice Punch']],
  [66,'Machop',['Low Kick','Leer']],
  [69,'Bellsprout',['Vine Whip']],
  [77,'Ponyta',['Tackle','Growl']],
  [79,'Slowpoke',['Tackle','Yawn','Curse']],
  [86,'Seel',['Headbutt']],
  [88,'Grimer',['Pound']],
  [90,'Shellder',['Tackle']],
  [96,'Drowzee',['Pound','Hypnosis']],
  [98,'Krabby',['Bubble']],
  [100,'Voltorb',['Tackle','Charge']],
  [104,'Cubone',['Bone Club']],
  [106,'Hitmonlee',['Double Kick']],
  [107,'Hitmonchan',['Comet Punch']],
  [108,'Lickitung',['Lick']],
  [113,'Chansey',['Defense Curl','Growl','Pound']],
  [114,'Tangela',['Constrict','Ingrain']],
  [115,'Kangaskhan',['Comet Punch','Leer']],
  [116,'Horsea',['Bubble']],
  [118,'Goldeen',['Peck']],
  [122,'Mr. Mime',['Confusion','Barrier']],
  [123,'Scyther',['Quick Attack','Leer']],
  [124,'Jynx',['Pound','Lick','Lovely Kiss','Powder Snow']],
  [125,'Electabuzz',['Quick Attack','Leer','Thunder Shock']],
  [126,'Magmar',['Tackle']],
  [127,'Pinsir',['Vice Grip','Focus Energy']],
  [128,'Tauros',['Tackle']],
  [129,'Magikarp',['Tackle','Splash']],
  [132,'Ditto',['Transform']],
  [137,'Porygon',['Tackle','Conversion']],
  [138,'Omanyte',['Constrict']],
  [140,'Kabuto',['Scratch']],
  [142,'Aerodactyl',['Wing Attack']],
  [147,'Dratini',['Wrap','Leer']],
];

const rare = [
  [1,'Bulbasaur',['Tackle','Growl'],5],
  [4,'Charmander',['Scratch','Growl'],5],
  [7,'Squirtle',['Tackle','Tail Whip'],5],
  [131,'Lapras',['Water Gun']],
  [133,'Eevee',['Tackle','Tail Whip','Helping Hand']],
  [143,'Snorlax',['Tackle']],
];

// Tuple adds the regular cost. MissingNo and Mew are only listed shiny/shadow.
const legendary = [
  [144,'Articuno',['Gust','Powder Snow'],1,5],
  [145,'Zapdos',['Peck','Thunder Shock'],1,5],
  [146,'Moltres',['Wing Attack','Ember'],1,5],
  [150,'Mewtwo',['Confusion','Disable','Barrier'],1,5],
  [243,'Raikou',['Thunder','Thunder Wave'],40,10],
  [244,'Entei',['Fire Blast','Fire Fang'],40,10],
  [245,'Suicune',['Blizzard','Hydro Pump'],40,10],
  [251,'Celebi',['Confusion'],1,10],
  [382,'Kyogre',['Water Pulse','Ancient Power'],40,10],
  [383,'Groudon',['Mud Shot','Ancient Power'],40,10],
  [385,'Jirachi',['Encore','Confusion'],1,10],
  [386,'Deoxys',['Leer','Wrap'],40,10],
  [494,'Victini',['Tackle','Incinerate','Quick Attack','Focus Energy'],1,10],
  [493,'Arceus',['Cosmic Power','Seismic Toss'],40,20],
];
const legendaryVariants = [
  ...legendary.slice(0,4),
  [1010,'MissingNo.',['Water Gun','Sky Attack'],1,5],
  [151,'Mew',['Pound','Reflect Type'],1,10],
  ...legendary.slice(4),
];

const entry = (category, referenceId, row, variant, cost, level = row[3] ?? 1) => ({
  id:`${category}-${referenceId}`, category, referenceId,
  speciesId:row[0], name:row[1], variant, level, moves:[...row[2]], cost, currency:'icu',
});
const pair = (category, rows, shinyCost, shadowCost) => [
  ...rows.map((row,i)=>entry(category,i+1,row,'shiny',shinyCost)),
  ...rows.map((row,i)=>entry(category,i+rows.length+1,row,'shadow',shadowCost)),
];

export const ADOPTION_CATALOG = freeze([
  ...battle.map((row,i)=>entry('battle',i+1,row,'regular',1,90)),
  ...pair('common',common,1,2),
  ...pair('uncommon',uncommon,5,10),
  ...pair('rare',rare,5,10),
  ...legendary.map((row,i)=>entry('legendary',i+1,row,'regular',row[4])),
  ...legendaryVariants.map((row,i)=>entry('legendary',i+15,row,'shiny',row[4]===5?10:row[4]+10)),
  ...legendaryVariants.map((row,i)=>entry('legendary',i+31,row,'shadow',row[4]===5?20:row[4]+20)),
]);

export const ADOPTION_CATEGORIES = freeze([
  {id:'battle',label:'Ready For Battle Non-Shiny Pokémon'},
  {id:'common',label:'Common Shiny and Shadow Pokémon'},
  {id:'uncommon',label:'Uncommon Shiny and Shadow Pokémon'},
  {id:'rare',label:'Rare Shiny and Shadow Pokémon'},
  {id:'legendary',label:'Legendary Regular, Shiny and Shadow Pokémon'},
  {id:'trainer',label:'Trainer Adoption'},
]);

export const TRAINER_ADOPTION_BANDS = freeze([
  {id:2,min:2,max:2},{id:3,min:3,max:4},{id:4,min:5,max:9},
  {id:5,min:10,max:14},{id:6,min:15,max:19},{id:7,min:20,max:20},
]);

// Integer weights total 100,000 in each tier; percentages are the visible source odds.
const prize = (currency, amount, weight) => ({currency,amount,weight,percent:weight/1000});
export const DAILY_PRIZES = freeze({
  common:{id:'common',label:'Common',cost:1000,currency:'pokedollars',requirements:{type:'none'},outcomes:[
    prize('casino',1000,50000),prize('casino',10000,49934),prize('icu',1,50),
    prize('icu',5,10),prize('icu',10,5),prize('icu',20,1),
  ]},
  uncommon:{id:'uncommon',label:'Uncommon',cost:10000,currency:'pokedollars',requirements:{type:'badges',count:3},outcomes:[
    prize('casino',10000,50000),prize('casino',25000,49835),prize('icu',1,100),
    prize('icu',5,50),prize('icu',10,10),prize('icu',20,5),
  ]},
  rare:{id:'rare',label:'Rare',cost:100000,currency:'pokedollars',requirements:{type:'completed-level',name:'Route 17'},outcomes:[
    prize('casino',50000,50000),prize('casino',100000,49340),prize('icu',1,500),
    prize('icu',5,100),prize('icu',10,50),prize('icu',20,10),
  ]},
});

const cornerSpecies = [
  [63,'Abra',['Teleport'],120,9000],
  [35,'Clefairy',['Pound','Growl'],500,15000],
  [127,'Pinsir',['Vice Grip','Focus Energy'],2500,50000],
  [123,'Scyther',['Quick Attack','Leer'],2800,100000],
  [137,'Porygon',['Tackle','Conversion'],5500,120000],
  [147,'Dratini',['Wrap','Leer'],6500,150000],
];
export const CORNER_REWARDS = freeze([
  ...['regular','shiny'].flatMap((variant,j)=>cornerSpecies.map((row,i)=>({
    id:`corner-${j*6+i+1}`,referenceId:j*6+i+1,kind:'pokemon',speciesId:row[0],
    name:row[1],variant,level:1,moves:[...row[2]],cost:row[j+3],currency:'casino',
    shinyChance:variant==='regular'?.01:0,
  }))),
  {id:'corner-13',referenceId:13,kind:'egg',name:'Shiny Pokémon',variant:'shiny',level:1,
    cost:200000,currency:'casino',pool:'non-evolved',displayMoves:['Tackle']},
  {id:'corner-14',referenceId:14,kind:'egg',name:'Shadow Pokémon',variant:'shadow',level:1,
    cost:400000,currency:'casino',pool:'non-evolved',displayMoves:['Shadow Rush']},
]);

export const SLOT_RULES = freeze({
  machineCount:9,spinCost:50,currency:'casino',maxSpinsPerDay:50,
  winningDirections:['horizontal','diagonal'],matchingSymbols:3,
  payouts:[
    {symbol:'seven',name:'7',amount:30000},
    {symbol:'bar',name:'BAR',amount:10000},
    {symbol:'arbok',name:'Arbok',amount:1500},
    {symbol:'jiggly',name:'Jigglypuff',amount:1500},
    {symbol:'voltorb',name:'Voltorb',amount:1500},
    {symbol:'cherry',name:'Cherry',amount:800},
    {symbol:'pokeballSlot',name:'Poké Ball',amount:0},
  ],
  // The read-only pages do not expose reel odds, per-machine differences, or reset timezone.
  referenceSymbolWeights:null,referenceResetTimezone:null,
});

export const CONVERSION_COSTS = freeze({
  shiny:{eligibleVariants:['regular'],targetVariant:'shiny',removeHackedTag:true,
    prices:[{currency:'icu',amount:10},{currency:'casino',amount:750000}]},
  shadow:{eligibleVariants:['regular'],targetVariant:'shadow',removeHackedTag:true,
    prices:[{currency:'icu',amount:10},{currency:'casino',amount:1500000}]},
  removeHackedTag:{
    single:[{currency:'icu',amount:1},{currency:'casino',amount:500000}],
    profile:[{currency:'icu',amount:10}],
  },
});
