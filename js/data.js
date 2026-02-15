const itineraryData = {
    1: {
        title: "Day 1: 抵達仙台巡禮",
        date: "5/20 (三)", weather: "☀️", location: "仙台",
        bgImage: "images/day1.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER",
            location: "仙台西口", checkIn: "14:00", dates: "5/20-5/22 (3晚)",
            features: ["🛁 頂樓天然溫泉", "🏊 恆溫泳池", "🧺 自助洗衣", "📍 站前直達"]
        },
        locations: [
            { time: "10:00", name: "桃園機場漢堡王", desc: "出發前早午餐", category: "restaurant", mealType: "breakfast", tags: ["🍔 速食"], coords: [25.0797, 121.2342] },
            { time: "11:35", name: "星宇航空 JX862", desc: "飛機餐體驗", category: "attraction", mealType: "lunch", tags: ["✈️ 飛行"], coords: [25.0797, 121.2342] },
            { time: "18:30", name: "善治郎牛舌", desc: "仙台必吃炭烤牛舌", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌"], coords: [38.2606, 140.8828] },
            { time: "21:00", name: "二丁目酒場 総本店", desc: "在地居酒屋體驗", category: "restaurant", mealType: "snack", tags: ["🍶 居酒屋"], coords: [38.2625, 140.8739] }
        ]
    },
    2: {
        title: "Day 2: 仙台市區探索",
        date: "5/21 (四)", weather: "🌤️", location: "仙台市區",
        bgImage: "images/day2.jpg",
        hotel: { name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER", location: "仙台西口", features: ["🛁 溫泉", "📍 站前"] },
        locations: [
            { time: "08:30", name: "仙台朝市", desc: "在地早市海鮮早餐", category: "market", mealType: "breakfast", tags: ["🐟 海鮮"], coords: [38.2622, 140.8786] },
            { time: "10:00", name: "PARCO 購物時間", desc: "動漫周邊、生活雜貨、時尚品牌", category: "shopping", mealType: "parco", tags: ["🛍️ 購物"], coords: [38.2596, 140.8797] },
            { time: "11:30", name: "PARCO 2 購物時間", desc: "BAO BAO、Aesop 等精品保養", category: "shopping", mealType: "parco2", tags: ["👜 精品"], coords: [38.2597, 140.8797] },
            { time: "12:30", name: "洋食 hachi", desc: "日式洋食經典蛋包飯", category: "restaurant", mealType: "lunch", tags: ["🍳 蛋包飯"], coords: [38.2596, 140.8797] },
            { time: "18:00", name: "仙令鮨 仙台站店", desc: "站內高級現做壽司", category: "restaurant", mealType: "dinner", tags: ["🍣 壽司"], coords: [38.2609, 140.8820] }
        ]
    },
    3: {
        title: "Day 3: 松島海岸之旅",
        date: "5/22 (五)", weather: "☀️", location: "松島",
        bgImage: "images/day3.jpg",
        locations: [
            { time: "10:00", name: "松島景點巡禮", desc: "五大堂、瑞巖寺、觀瀾亭等", category: "attraction", mealType: "sightseeing", tags: ["🌊 日本三景"], coords: [38.3688, 141.0618] },
            { time: "12:30", name: "松島美食街", desc: "牡蠣、生魚片丼等名店", category: "restaurant", mealType: "lunch", tags: ["🦪 牡蠣"], coords: [38.3687, 141.0612] }
        ]
    },
    4: {
        title: "Day 4: 仙台港探索",
        date: "5/23 (六)", weather: "⛅", location: "仙台港",
        bgImage: "images/day4.jpg",
        hotel: { name: "Daiwa Roynet Hotel Sendai Ichibancho", location: "一番町", features: ["🛀 大浴場", "📍 商圈中心"] },
        locations: [
            { time: "10:00", name: "麒麟啤酒仙台工廠", desc: "工廠見學與試飲", category: "attraction", mealType: null, tags: ["🍺 啤酒"], coords: [38.3089, 141.0275] },
            { time: "13:30", name: "三井 Outlet 仙台港", desc: "東北最大購物中心", category: "shopping", mealType: null, tags: ["🛍️ Outlet"], coords: [38.3042, 141.0386] }
        ]
    },
    5: {
        title: "Day 5: 歷史建築巡禮",
        date: "5/24 (日)", weather: "☀️", location: "仙台歷史區",
        bgImage: "images/day5.jpg",
        locations: [
            { time: "09:00", name: "歷史景點巡禮", desc: "瑞鳳殿、仙台城跡等", category: "attraction", mealType: "sightseeing", tags: ["🏯 伊達政宗"], coords: [38.2459, 140.8778] },
            { time: "18:30", name: "利久牛舌", desc: "厚切牛舌極致饗宴", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌"], coords: [38.2607, 140.8826] }
        ]
    },
    6: {
        title: "Day 6: 鹽竈之旅",
        date: "5/25 (一)", weather: "🌤️", location: "鹽竈",
        bgImage: "images/day6.jpg",
        locations: [
            { time: "09:30", name: "鹽竈神社", desc: "陸奧國一之宮祈福", category: "attraction", mealType: "sightseeing", tags: ["⛩️ 神社"], coords: [38.3147, 141.0211] },
            { time: "12:00", name: "鹽竈壽司街", desc: "壽司名店方案選擇", category: "restaurant", mealType: "lunch", tags: ["🍣 壽司"], coords: [38.3103, 141.0242] }
        ]
    },
    7: {
        title: "Day 7: 採買與返程",
        date: "5/26 (二)", weather: "☀️", location: "機場",
        bgImage: "images/day7.jpg",
        locations: [
            { time: "12:30", name: "陣中 仙台機場店", desc: "最後牛舌午餐", category: "restaurant", mealType: "lunch", tags: ["🥩 機場必吃"], coords: [38.1397, 140.9169] },
            { time: "17:20", name: "星宇航空", desc: "起飛返台", category: "attraction", mealType: null, tags: ["✈️ 返程"], coords: [38.1397, 140.9169] }
        ]
    }
};

const mealTypes = {
    all: { label: "全部", icon: "📍" },
    sightseeing: { label: "景點", icon: "🏯" },
    breakfast: { label: "早餐", icon: "🍳" },
    lunch: { label: "午餐", icon: "🍱" },
    dinner: { label: "晚餐", icon: "🍽️" },
    snack: { label: "點心", icon: "🍡" },
    parco: { label: "PARCO", icon: "🛍️" },
    parco2: { label: "PARCO 2", icon: "👜" }
};

const categories = { attraction: { label: "景點", icon: "🏯" }, restaurant: { label: "餐廳", icon: "🍽️" }, shopping: { label: "購物", icon: "🛍️" }, specialty: { label: "特產", icon: "🎁" }, market: { label: "超市", icon: "🛒" } };

const daysConfig = [{ day: 1, label: "DAY 1", date: "05/20", weather: "☀️" }, { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" }, { day: 3, label: "DAY 3", date: "05/22", weather: "☀️" }, { day: 4, label: "DAY 4", date: "05/23", weather: "⛅" }, { day: 5, label: "DAY 5", date: "05/24", weather: "☀️" }, { day: 6, label: "DAY 6", date: "05/25", weather: "🌤️" }, { day: 7, label: "DAY 7", date: "05/26", weather: "☀️" }];

const supermarkets = [{ name: "Lopia Sendai", desc: "平價肉品生鮮超市", category: "market", tags: ["🛒 超市"], coords: [38.2598, 140.8813] }, { name: "AEON 一番町店", desc: "連鎖大型超市", category: "market", tags: ["🛒 連鎖"], coords: [38.2588, 140.8755] }];

const shoppingStores = [{ name: "LOFT 仙台店", desc: "生活雜貨文具百貨", category: "shopping", tags: ["✏️ 文具"], coords: [38.2596, 140.8797] }, { name: "LUSH PARCO店", desc: "手工香氛沐浴球", category: "shopping", tags: ["🧼 香氛"], coords: [38.2596, 140.8797] }, { name: "Aesop PARCO 2店", desc: "天然植萃保養", category: "shopping", tags: ["🧴 保養"], coords: [38.2597, 140.8797] }];

const souvenirStores = [{ name: "Maison Cœlacanthe", desc: "招牌最中必買", category: "specialty", tags: ["🎁 伴手禮"], coords: [38.2598, 140.8765] }, { name: "萩の月", desc: "仙台第一名產", category: "specialty", tags: ["🍰 甜點"], coords: [38.2609, 140.8821] }];

const restaurantOptions = {
    "day2_parco": [
        { name: "LOFT 仙台店", desc: "文具美妝生活雜貨", tags: ["✏️ 文具"], coords: [38.2596, 140.8797] },
        { name: "吉伊卡哇專區", desc: "PARCO 8F 動漫周邊", tags: ["🎨 動漫"], coords: [38.2596, 140.8798] }
    ],
    "day2_parco2": [
        { name: "BAO BAO ISSEY MIYAKE", desc: "經典幾何精品包", tags: ["👜 精品"], coords: [38.2597, 140.8797] },
        { name: "Aesop PARCO 2店", desc: "頂級香氛保養", tags: ["🧴 保養"], coords: [38.2597, 140.8797] }
    ],
    "day6_lunch": [
        { name: "廻鮮寿司 塩釜港", desc: "排隊首選名店", tags: ["🍣 壽司"], coords: [38.3103, 141.0242] },
        { name: "すし哲 本店", desc: "職人傳統手藝", tags: ["🍣 老店"], coords: [38.3108, 141.0245] }
    ]
};
