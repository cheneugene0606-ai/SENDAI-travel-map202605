const itineraryData = {
    1: { title: "Day 1: 抵達仙台", date: "5/20", weather: "☀️", location: "仙台", bgImage: "images/day1.jpg", hotel: { name: "Daiwa Roynet 西口", location: "仙台西口", image: "images/hotel1.jpg", features: ["🛁 溫泉", "📍 站前"] }, locations: [
        { time: "10:00", name: "桃園機場", desc: "早午餐", category: "restaurant", mealType: "breakfast", tags: ["🍔"], coords: [25.0797, 121.2342] },
        { time: "11:35", name: "星宇航空", desc: "飛往仙台", category: "attraction", mealType: "lunch", tags: ["✈️"], coords: [25.0797, 121.2342] },
        { time: "18:30", name: "善治郎牛舌", desc: "必吃炭烤", category: "restaurant", mealType: "dinner", tags: ["🍖"], coords: [38.2606, 140.8828] }
    ]},
    2: { title: "Day 2: 市區探索", date: "5/21", weather: "🌤️", location: "仙台", bgImage: "images/day2.jpg", hotel: { name: "Daiwa Roynet 西口", location: "仙台西口", image: "images/hotel1.jpg", features: ["🛁 溫泉"] }, locations: [
        { time: "08:30", name: "仙台朝市", desc: "海鮮早餐", category: "market", mealType: "breakfast", tags: ["🐟"], coords: [38.2622, 140.8786] },
        { time: "10:00", name: "PARCO", desc: "動漫雜貨", category: "shopping", mealType: "parco", tags: ["🛍️"], coords: [38.2596, 140.8797] },
        { time: "11:30", name: "PARCO 2", desc: "精品保養", category: "shopping", mealType: "parco2", tags: ["👜"], coords: [38.2597, 140.8797] },
        { time: "12:30", name: "洋食 hachi", desc: "蛋包飯", category: "restaurant", mealType: "lunch", tags: ["🍳"], coords: [38.2596, 140.8797] }
    ]},
    3: { title: "Day 3: 松島海岸", date: "5/22", weather: "☀️", location: "松島", bgImage: "images/day3.jpg", locations: [
        { time: "10:00", name: "松島景點", desc: "五大堂", category: "attraction", mealType: "sightseeing", tags: ["🌊"], coords: [38.3688, 141.0618] },
        { time: "12:30", name: "松島美食", desc: "牡蠣", category: "restaurant", mealType: "lunch", tags: ["🦪"], coords: [38.3687, 141.0612] }
    ]},
    4: { title: "Day 4: 水族館之旅", date: "5/23", weather: "⛅", location: "仙台港", bgImage: "images/day4.jpg", hotel: { name: "Daiwa Roynet 一番町", location: "一番町", image: "images/hotel2.jpg", features: ["🛀 大浴場"] }, locations: [
        { time: "09:30", name: "仙台水族館", desc: "海豚表演", category: "attraction", mealType: null, tags: ["🐬"], coords: [38.3025, 141.0445] },
        { time: "13:30", name: "三井 Outlet", desc: "購物", category: "shopping", mealType: null, tags: ["🛍️"], coords: [38.3042, 141.0386] }
    ]},
    5: { title: "Day 5: 歷史巡禮", date: "5/24", weather: "☀️", location: "歷史區", bgImage: "images/day5.jpg", locations: [
        { time: "09:00", name: "瑞鳳殿", desc: "伊達靈廟", category: "attraction", mealType: "sightseeing", tags: ["🏯"], coords: [38.2459, 140.8778] },
        { time: "18:30", name: "利久牛舌", desc: "晚餐", category: "restaurant", mealType: "dinner", tags: ["🍖"], coords: [38.2607, 140.8826] }
    ]},
    6: { title: "Day 6: 鹽竈", date: "5/25", weather: "🌤️", location: "鹽竈", bgImage: "images/day6.jpg", locations: [
        { time: "09:30", name: "鹽竈神社", desc: "祈福", category: "attraction", mealType: "sightseeing", tags: ["⛩️"], coords: [38.3147, 141.0211] },
        { time: "12:00", name: "壽司街", desc: "名店任選", category: "restaurant", mealType: "lunch", tags: ["🍣"], coords: [38.3103, 141.0242] }
    ]},
    7: { title: "Day 7: 返程", date: "5/26", weather: "☀️", location: "機場", bgImage: "images/day7.jpg", locations: [
        { time: "12:30", name: "陣中", desc: "機場牛舌", category: "restaurant", mealType: "lunch", tags: ["🥩"], coords: [38.1397, 140.9169] },
        { time: "17:20", name: "星宇航空", desc: "返台", category: "attraction", mealType: null, tags: ["✈️"], coords: [38.1397, 140.9169] }
    ]}
};

const mealTypes = { all: { label: "全部", icon: "📍" }, sightseeing: { label: "景點", icon: "🏯" }, breakfast: { label: "早餐", icon: "🍳" }, lunch: { label: "午餐", icon: "🍱" }, dinner: { label: "晚餐", icon: "🍽️" }, parco: { label: "PARCO", icon: "🛍️" }, parco2: { label: "PARCO 2", icon: "👜" } };
const categories = { attraction: {label:"景點", icon:"🏯"}, restaurant: {label:"餐廳", icon:"🍽️"}, shopping: {label:"購物", icon:"🛍️"}, specialty: {label:"特產", icon:"🎁"}, market: {label:"超市", icon:"🛒"} };
const daysConfig = [{ day: 1, label: "DAY 1", date: "05/20", weather: "☀️" }, { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" }, { day: 3, label: "DAY 3", date: "05/22", weather: "☀️" }, { day: 4, label: "DAY 4", date: "05/23", weather: "⛅" }, { day: 5, label: "DAY 5", date: "05/24", weather: "☀️" }, { day: 6, label: "DAY 6", date: "05/25", weather: "🌤️" }, { day: 7, label: "DAY 7", date: "05/26", weather: "☀️" }];

const supermarkets = [{ name: "Lopia", desc: "平價超市", coords: [38.2598, 140.8813] }, { name: "AEON", desc: "連鎖超市", coords: [38.2588, 140.8755] }];
const shoppingStores = [{ name: "LOFT", desc: "文具", coords: [38.2596, 140.8797] }, { name: "LUSH", desc: "香氛", coords: [38.2596, 140.8797] }];
const souvenirStores = [{ name: "萩の月", desc: "名產", coords: [38.2609, 140.8821] }];

const restaurantOptions = {
    "day2_parco": [{ name: "LOFT", desc: "文具", tags: ["✏️"], coords: [38.2596, 140.8797] }, { name: "吉伊卡哇", desc: "動漫", tags: ["🧸"], coords: [38.2596, 140.8798] }],
    "day2_parco2": [{ name: "BAO BAO", desc: "包包", tags: ["👜"], coords: [38.2597, 140.8797] }, { name: "Aesop", desc: "保養", tags: ["🧴"], coords: [38.2597, 140.8797] }],
    "day3_sightseeing": [{ name: "五大堂", desc: "寺廟", tags: ["⛩️"], coords: [38.3690, 141.0625] }, { name: "瑞巖寺", desc: "國寶", tags: ["🏯"], coords: [38.3685, 141.0615] }],
    "day5_sightseeing": [{ name: "瑞鳳殿", desc: "靈廟", tags: ["⛩️"], coords: [38.2459, 140.8778] }, { name: "仙台城", desc: "城跡", tags: ["🏯"], coords: [38.2550, 140.8625] }],
    "day6_lunch": [{ name: "塩釜港", desc: "迴轉壽司", tags: ["🍣"], coords: [38.3103, 141.0242] }, { name: "すし哲", desc: "職人壽司", tags: ["🍣"], coords: [38.3108, 141.0245] }]
};
