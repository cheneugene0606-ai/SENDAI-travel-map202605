// ==================== 完整行程數據 ====================
const itineraryData = {
    1: {
        title: "Day 1: 抵達仙台巡禮",
        date: "5/20 (三)", weather: "☀️", location: "仙台",
        bgImage: "images/day1.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER",
            location: "仙台西口", checkIn: "14:00", dates: "5/20-5/22 (3晚)",
            features: ["🛁 頂樓天然溫泉「都之湯」", "🏊 室內恆溫泳池", "🧺 洗衣機烘衣機設備", "📍 仙台站西口直達"]
        },
        locations: [
            { time: "10:00", name: "桃園機場漢堡王", desc: "出發前享用漢堡王早午餐", category: "restaurant", mealType: "breakfast", tags: ["🍔 速食"], coords: [25.0797, 121.2342] },
            { time: "11:35", name: "星宇航空 JX862", desc: "搭乘星宇航空，飛機餐體驗", category: "attraction", mealType: "lunch", tags: ["✈️ 飛行"], coords: [25.0797, 121.2342] },
            { time: "16:00", name: "仙台空港抵達", desc: "辦理入境手續", category: "attraction", mealType: null, tags: ["✈️ 抵達"], coords: [38.1397, 140.9169] },
            { time: "17:00", name: "仙台站 / 入住飯店", desc: "搭乘機場線前往仙台站入住", category: "attraction", mealType: null, tags: ["🚇 交通", "🏨 Check-in"], coords: [38.2609, 140.8824] },
            { time: "18:30", name: "善治郎牛舌 南町通店", desc: "品嚐仙台必吃炭烤牛舌", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌", "⭐ 必吃"], coords: [38.2606, 140.8828] },
            { time: "21:00", name: "二丁目酒場 総本店", desc: "在地居酒屋，品嚐宮城地酒", category: "restaurant", mealType: "snack", tags: ["🍶 居酒屋"], coords: [38.2625, 140.8739] }
        ]
    },
    2: {
        title: "Day 2: 仙台市區探索",
        date: "5/21 (四)", weather: "🌤️", location: "仙台市區",
        bgImage: "images/day2.jpg",
        hotel: { name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER", location: "仙台西口", features: ["🛁 溫泉", "📍 站前"] },
        locations: [
            { time: "08:30", name: "仙台朝市", desc: "體驗早市文化，品嚐新鮮海產早餐", category: "market", mealType: "breakfast", tags: ["🐟 海鮮", "🌅 早市"], coords: [38.2622, 140.8786] },
            { time: "10:00", name: "PARCO 購物時間", desc: "設計師品牌、動漫周邊、生活雜貨等多個品牌可選", category: "shopping", mealType: "parco", tags: ["🛍️ 購物", "👗 時尚"], coords: [38.2596, 140.8797] },
            { time: "11:30", name: "PARCO 2 購物時間", desc: "BAO BAO ISSEY MIYAKE、Aesop 等精品店", category: "shopping", mealType: "parco2", tags: ["🛍️ 購物", "👜 包包"], coords: [38.2597, 140.8797] },
            { time: "12:30", name: "洋食 hachi", desc: "仙台超人氣經典蛋包飯與漢堡排", category: "restaurant", mealType: "lunch", tags: ["🍱 洋食", "🍳 蛋包飯"], coords: [38.2596, 140.8797] },
            { time: "14:30", name: "一番町商店街散策", desc: "逛街補貨與精緻咖啡廳下午茶", category: "shopping", mealType: null, tags: ["🏪 逛街", "☕ 咖啡"], coords: [38.2584, 140.8751] },
            { time: "18:00", name: "仙令鮨 仙台站1樓店", desc: "站內高級壽司，新鮮海產現做", category: "restaurant", mealType: "dinner", tags: ["🍣 壽司", "✨ 高級"], coords: [38.2609, 140.8820] }
        ]
    },
    3: {
        title: "Day 3: 松島海岸之旅",
        date: "5/22 (五)", weather: "☀️", location: "松島",
        bgImage: "images/day3.jpg",
        locations: [
            { time: "08:30", name: "Date Cafe O'rder", desc: "站內精緻茶泡飯早餐", category: "restaurant", mealType: "breakfast", tags: ["🍚 茶泡飯"], coords: [38.2609, 140.8824] },
            { time: "10:00", name: "松島景點巡禮", desc: "五大堂、瑞巖寺、松島三景等多個景點可選", category: "attraction", mealType: "sightseeing", tags: ["🌊 日本三景", "⛩️ 寺廟"], coords: [38.3688, 141.0618] },
            { time: "12:30", name: "松島美食商店街", desc: "牡蠣漢堡、炸牡蠣等排隊名店選項", category: "restaurant", mealType: "lunch", tags: ["🦪 牡蠣", "🍴 美食"], coords: [38.3687, 141.0612] },
            { time: "15:30", name: "福浦橋散步", desc: "走過朱紅長橋前往福浦島散策", category: "attraction", mealType: null, tags: ["🌉 紅橋", "📸 拍照"], coords: [38.3676, 141.0648] }
        ]
    },
    4: {
        title: "Day 4: 仙台港探索",
        date: "5/23 (六)", weather: "⛅", location: "仙台港",
        bgImage: "images/day4.jpg",
        hotel: { name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER", location: "仙台一番町", features: ["🛁 大浴場", "🚶 逛街核心"] },
        locations: [
            { time: "10:00", name: "麒麟啤酒仙台工廠", desc: "參觀生產線並體驗啤酒試飲", category: "attraction", mealType: null, tags: ["🍺 啤酒", "🏭 見學"], coords: [38.3089, 141.0275] },
            { time: "12:30", name: "Kirin Beer Port", desc: "品嚐成吉思汗烤肉與生啤酒", category: "restaurant", mealType: "lunch", tags: ["🍖 烤肉"], coords: [38.3089, 141.0275] },
            { time: "14:00", name: "三井 Outlet 仙台港", desc: "東北最大 Outlet 盡情購物", category: "shopping", mealType: null, tags: ["🛍️ Outlet"], coords: [38.3042, 141.0386] },
            { time: "17:30", name: "入住一番町飯店", desc: "切換住宿地點至市區核心", category: "attraction", mealType: null, tags: ["🏨 換飯店"], coords: [38.2584, 140.8751] }
        ]
    },
    5: {
        title: "Day 5: 歷史建築巡禮",
        date: "5/24 (日)", weather: "☀️", location: "仙台歷史區",
        bgImage: "images/day5.jpg",
        locations: [
            { time: "09:00", name: "仙台歷史景點巡禮", desc: "瑞鳳殿、仙台城跡等多個景點可選", category: "attraction", mealType: "sightseeing", tags: ["🏯 伊達政宗", "⛩️ 歷史"], coords: [38.2459, 140.8778] },
            { time: "12:30", name: "城跡茶屋 / 附近和食", desc: "在古蹟氛圍下享用午餐", category: "restaurant", mealType: "lunch", tags: ["🍱 和食"], coords: [38.2550, 140.8625] },
            { time: "18:30", name: "利久牛舌", desc: "厚切牛舌的極致代表店", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌", "⭐ 名店"], coords: [38.2607, 140.8826] }
        ]
    },
    6: {
        title: "Day 6: 鹽竈之旅",
        date: "5/25 (一)", weather: "🌤️", location: "鹽竈",
        bgImage: "images/day6.jpg",
        locations: [
            { time: "09:30", name: "鹽竈神社", desc: "陸奧國一之宮，走石階祈福", category: "attraction", mealType: "sightseeing", tags: ["⛩️ 神社", "🌸 能量景點"], coords: [38.3147, 141.0211] },
            { time: "12:00", name: "鹽竈壽司街", desc: "世界級的高密度壽司名店方案選擇", category: "restaurant", mealType: "lunch", tags: ["🍣 壽司", "🐟 鮪魚"], coords: [38.3103, 141.0242] },
            { time: "15:00", name: "仙台市區最後採買", desc: "一番町商圈最後補貨", category: "shopping", mealType: null, tags: ["🛍️ 購物"], coords: [38.2596, 140.8797] }
        ]
    },
    7: {
        title: "Day 7: 最後採買與返程",
        date: "5/26 (二)", weather: "☀️", location: "機場",
        bgImage: "images/day7.jpg",
        locations: [
            { time: "09:00", name: "仙台站前 Fermenteria", desc: "站內精釀啤酒與咖啡", category: "restaurant", mealType: "breakfast", tags: ["🍺 精釀", "☕ 咖啡"], coords: [38.2609, 140.8820] },
            { time: "12:30", name: "牛舌專門店 陣中", desc: "機場必吃牛舌冠舌定食", category: "restaurant", mealType: "lunch", tags: ["🥩 牛舌", "✈️ 機場"], coords: [38.1397, 140.9169] },
            { time: "17:20", name: "仙台空港 起飛", desc: "搭乘星宇航空返台", category: "attraction", mealType: null, tags: ["✈️ 返程", "🌟 星宇航空"], coords: [38.1397, 140.9169] }
        ]
    }
};

// ==================== 活動與配置 ====================
const mealTypes = {
    all: { label: "全部", icon: "🍽️" },
    sightseeing: { label: "景點", icon: "🏯" },
    breakfast: { label: "早餐", icon: "☀️" },
    lunch: { label: "午餐", icon: "🍱" },
    dinner: { label: "晚餐", icon: "🌙" },
    snack: { label: "小吃", icon: "🍡" },
    parco: { label: "PARCO", icon: "🛍️" },
    parco2: { label: "PARCO 2", icon: "👜" }
};

const categories = { 
    attraction: { label: "景點", icon: "🏯" }, 
    restaurant: { label: "餐廳", icon: "🍽️" }, 
    shopping: { label: "購物", icon: "🛍️" }, 
    specialty: { label: "特產", icon: "🎁" }, 
    market: { label: "超市", icon: "🛒" } 
};

const daysConfig = [
    { day: 1, label: "DAY 1", date: "05/20", weather: "☀️" },
    { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" },
    { day: 3, label: "DAY 3", date: "05/22", weather: "☀️" },
    { day: 4, label: "DAY 4", date: "05/23", weather: "⛅" },
    { day: 5, label: "DAY 5", date: "05/24", weather: "☀️" },
    { day: 6, label: "DAY 6", date: "05/25", weather: "🌤️" },
    { day: 7, label: "DAY 7", date: "05/26", weather: "☀️" }
];

// ==================== 永久店家清單 ====================
const supermarkets = [
    { name: "Lopia Sendai", desc: "Yodobashi 內高CP值肉品生鮮超市", category: "market", tags: ["🛒 超市"], coords: [38.2598, 140.8813] },
    { name: "AEON 一番町店", desc: "種類齊全的市中心便利超市", category: "market", tags: ["🛒 連鎖"], coords: [38.2588, 140.8755] }
];

const shoppingStores = [
    { name: "LOFT 仙台店", desc: "文具美妝生活百貨", category: "shopping", tags: ["✏️ 文具"], coords: [38.2596, 140.8797] },
    { name: "LUSH PARCO店", desc: "手工沐浴球與香氛產品", category: "shopping", tags: ["🧼 香氛"], coords: [38.2596, 140.8797] },
    { name: "Aesop PARCO 2店", desc: "頂級澳洲植萃保養品牌", category: "shopping", tags: ["🧴 保養品"], coords: [38.2597, 140.8797] },
    { name: "BAO BAO ISSEY MIYAKE", desc: "三宅一生經典幾何精品包", category: "shopping", tags: ["👜 精品"], coords: [38.2597, 140.8797] },
    { name: "PARCO 吉伊卡哇專區", desc: "8F 動漫可愛周邊", category: "shopping", tags: ["🧸 吉伊卡哇"], coords: [38.2596, 140.8798] }
];

const souvenirStores = [
    { name: "Maison Cœlacanthe", desc: "必買招牌腔棘魚造型最中餅", category: "specialty", tags: ["🎁 伴手禮"], coords: [38.2598, 140.8765] },
    { name: "萩の月 仙台站店", desc: "仙台銷售冠軍的頂級卡士達蛋糕", category: "specialty", tags: ["🍰 必買甜點"], coords: [38.2609, 140.8821] }
];

// ==================== 方案選擇資料庫 ====================
const restaurantOptions = {
    "day2_parco": [
        { name: "LOFT 仙台店", desc: "日本生活百貨旗艦店，文具美妝一應俱全", tags: ["✏️ 文具", "🏠 雜貨"], coords: [38.2596, 140.8797] },
        { name: "LUSH PARCO店", desc: "天然手工香氛與沐浴球", tags: ["🧼 香氛", "🛁 沐浴"], coords: [38.2596, 140.8797] },
        { name: "吉伊卡哇專區", desc: "位於 8F 的超人氣動漫周邊", tags: ["🧸 周邊", "🎨 動漫"], coords: [38.2596, 140.8798] }
    ],
    "day2_parco2": [
        { name: "BAO BAO ISSEY MIYAKE", desc: "三宅一生代表性幾何手提包", tags: ["👜 精品", "👗 時尚"], coords: [38.2597, 140.8797] },
        { name: "Aesop PARCO 2店", desc: "高質感的天然護膚與香水", tags: ["🧴 保養", "✨ 高級品牌"], coords: [38.2597, 140.8797] }
    ],
    "day3_sightseeing": [
        { name: "五大堂", desc: "松島代表建築，朱紅色堂宇", tags: ["⛩️ 寺廟", "📸 打卡"], coords: [38.3690, 141.0625] },
        { name: "瑞巖寺", desc: "伊達政宗菩提寺，國寶級建築", tags: ["⛩️ 國寶", "🏯 歷史"], coords: [38.3685, 141.0615] },
        { name: "松島三景（觀瀾亭）", desc: "伊達家茶室，品茶賞灣邊絕景", tags: ["🍵 茶室", "🌊 海景"], coords: [38.3692, 141.0620] }
    ],
    "day5_sightseeing": [
        { name: "瑞鳳殿", desc: "伊達政宗靈廟，華麗桃山建築", tags: ["⛩️ 靈廟", "🏯 歷史"], coords: [38.2459, 140.8778] },
        { name: "仙台城跡", desc: "騎馬像所在地，俯瞰全仙台市區", tags: ["🏯 城跡", "📸 絕景"], coords: [38.2550, 140.8625] }
    ],
    "day6_lunch": [
        { name: "廻鮮寿司 塩釜港", desc: "日本迴轉壽司評價第一名店", tags: ["🍣 壽司", "⭐ 必吃"], coords: [38.3103, 141.0242] },
        { name: "すし哲 本店", desc: "鹽竈代表性壽司老店", tags: ["🍣 壽司", "✨ 職人"], coords: [38.3108, 141.0245] }
    ]
};
