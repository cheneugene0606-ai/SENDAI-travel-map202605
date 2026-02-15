// 完整行程數據
const itineraryData = {
    1: {
        title: "Day 1: 抵達仙台巡禮",
        date: "5/20 (三)",
        weather: "☀️",
        location: "仙台",
        bgImage: "images/day1.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER",
            location: "仙台西口",
            checkIn: "14:00",
            dates: "5/20-5/22 (3晚)",
            image: "images/hotel1.jpg",
            features: ["🛁 頂樓天然溫泉「都之湯」", "🏊 室內恆溫泳池", "🧺 洗衣機烘衣機設備", "📍 仙台站西口直達"]
        },
        locations: [
            { time: "10:00", name: "桃園機場漢堡王", desc: "出發前在桃園機場享用漢堡王早午餐", category: "restaurant", mealType: "breakfast", tags: ["🍔 速食", "✈️ 機場"], coords: [25.0797, 121.2342] },
            { time: "11:35", name: "星宇航空 JX862", desc: "搭乘星宇航空，飛機餐可點濃湯及特調飲料", category: "attraction", mealType: "lunch", tags: ["✈️ 飛行", "🍽️ 飛機餐"], coords: [25.0797, 121.2342] },
            { time: "16:00", name: "仙台空港", desc: "抵達仙台空港", category: "attraction", mealType: null, tags: ["✈️ 抵達"], coords: [38.1397, 140.9169] },
            { time: "17:00", name: "仙台站", desc: "搭乘仙台空港 Access 線前往仙台站（約 25 分鐘），入住飯店", category: "attraction", mealType: null, tags: ["🚇 交通", "🏨 Check-in"], coords: [38.2609, 140.8824] },
            { time: "18:30", name: "善治郎牛舌 南町通店", desc: "品嚐仙台最著名的炭烤牛舌，體驗東北美食的魅力", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌", "⭐ 必吃"], coords: [38.2606, 140.8828] },
            { time: "21:00", name: "宮城仙台うまいもん食堂 二丁目酒場 総本店", desc: "在地居酒屋，品嚐宮城地酒與特色料理，體驗仙台夜生活", category: "restaurant", mealType: "snack", tags: ["🍶 居酒屋", "🌃 宵夜"], coords: [38.2625, 140.8739] }
        ]
    },
    2: {
        title: "Day 2: 仙台市區探索",
        date: "5/21 (四)",
        weather: "🌤️",
        location: "仙台市區",
        bgImage: "images/day2.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER",
            location: "仙台西口",
            checkIn: "14:00",
            dates: "5/20-5/22 (3晚)",
            image: "images/hotel1.jpg",
            features: ["🛁 頂樓天然溫泉「都之湯」", "🏊 室內恆溫泳池", "🧺 洗衣機烘衣機設備", "📍 仙台站西口直達"]
        },
        locations: [
            { time: "08:30", name: "仙台朝市", desc: "體驗在地早市文化，品嚐新鮮海產和特色早餐", category: "market", mealType: "breakfast", tags: ["🐟 海鮮", "🌅 早市"], coords: [38.2622, 140.8786] },
            { time: "10:00", name: "PARCO 購物時間", desc: "設計師品牌、動漫周邊、生活雜貨等多個品牌可選", category: "shopping", mealType: "parco", tags: ["🛍️ 購物", "👗 時尚"], coords: [38.2596, 140.8797] },
            { time: "11:30", name: "PARCO 2 購物時間", desc: "BAO BAO ISSEY MIYAKE、Aesop 等精品店", category: "shopping", mealType: "parco2", tags: ["🛍️ 購物", "👜 包包"], coords: [38.2597, 140.8797] },
            { time: "12:00", name: "洋食 hachi", desc: "品嚐日式洋食料理，蛋包飯和漢堡排是招牌", category: "restaurant", mealType: "lunch", tags: ["🍱 洋食", "🍳 蛋包飯"], coords: [38.2596, 140.8797] },
            { time: "14:00", name: "一番町商店街", desc: "漫步仙台最熱鬧的拱廊商店街，逛街購物", category: "shopping", mealType: null, tags: ["🏪 逛街", "☕ 咖啡廳"], coords: [38.2584, 140.8751] },
            { time: "18:00", name: "仙令鮨 仙台站1樓店", desc: "仙台站內高級壽司店，新鮮海產現做", category: "restaurant", mealType: "dinner", tags: ["🍣 壽司", "✨ 高級"], coords: [38.2609, 140.8820] },
            { time: "19:30", name: "Yodobashi Camera Multimedia Sendai", desc: "仙台站東口的大型電器百貨，模型、遊戲、相機應有盡有", category: "shopping", mealType: null, tags: ["📷 電器", "🎮 遊戲/模型"], coords: [38.2593, 140.8839] }
        ]
    },
    3: {
        title: "Day 3: 松島海岸（日本三景探險）",
        date: "5/22 (五)",
        weather: "☀️",
        location: "松島",
        bgImage: "images/day3.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Nishiguchi PREMIER",
            location: "仙台西口",
            checkIn: "14:00",
            dates: "5/20-5/22 (3晚)",
            image: "images/hotel1.jpg",
            features: ["🛁 頂樓天然溫泉「都之湯」", "🏊 室內恆溫泳池", "🧺 洗衣機烘衣機設備", "📍 仙台站西口直達"]
        },
        locations: [
            { time: "08:00", name: "Date Cafe O'rder（仙台站內）", desc: "出發前必吃！推薦茶泡飯套餐或飯糰，精緻的宮城在地特色", category: "restaurant", mealType: "breakfast", tags: ["🍚 茶泡飯", "🍙 飯糰"], coords: [38.2609, 140.8824] },
            { time: "09:30", name: "松島海岸車站前", desc: "抵達松島海岸站，日本三景之旅起點", category: "attraction", mealType: null, tags: ["🌊 日本三景", "📸 車站"], coords: [38.3685, 141.0592] },
            { time: "10:00", name: "松島景點巡禮", desc: "五大堂、瑞巖寺、松島三景等多個景點可選", category: "attraction", mealType: "sightseeing", tags: ["🌊 日本三景", "⛩️ 寺廟"], coords: [38.3688, 141.0618] },
            { time: "12:30", name: "松島美食商店街", desc: "牡蠣漢堡、生牡蠣丼、爆彈炸牡蠣等排隊名店，點擊查看選項", category: "restaurant", mealType: "lunch", tags: ["🦪 牡蠣", "⭐ 必吃"], coords: [38.3687, 141.0612] },
            { time: "14:30", name: "松島小吃時間", desc: "牛肉包、牡蠣咖哩麵包、拉斯薯條等特色小吃", category: "restaurant", mealType: "snack", tags: ["🍔 小吃", "🥔 炸物"], coords: [38.3686, 141.0612] },
            { time: "15:30", name: "松島蒲鉾本舖", desc: "體驗自己動手燒烤魚板（笹かま），現烤現吃", category: "attraction", mealType: null, tags: ["🐟 魚板", "🔥 體驗"], coords: [38.3684, 141.0612] },
            { time: "16:00", name: "福浦橋入口", desc: "走過紅色福浦橋前往福浦島散步，祈求良緣", category: "attraction", mealType: null, tags: ["🌉 紅橋", "💕 結緣"], coords: [38.3676, 141.0648] },
            { time: "18:30", name: "返回仙台", desc: "搭乘 JR 仙石線返回仙台", category: "attraction", mealType: null, tags: ["🚇 交通"], coords: [38.2609, 140.8824] }
        ]
    },
    4: {
        title: "Day 4: 麒麟啤酒工廠 & 三井 Outlet",
        date: "5/23 (六)",
        weather: "⛅",
        location: "仙台港",
        bgImage: "images/day4.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
            location: "仙台一番町",
            checkIn: "14:00",
            dates: "5/23-5/26 (3晚)",
            image: "images/hotel2.jpg",
            features: ["📍 一番町商圈核心", "🚶 步行可達主要景點", "🛁 大浴場", "🧺 洗衣機烘衣機設備"]
        },
        locations: [
            { time: "08:30", name: "珈琲館 仙台青葉通店", desc: "在經典的日式咖啡館享用炭火咖啡與早午餐", category: "restaurant", mealType: "breakfast", tags: ["☕ 咖啡", "🥪 早餐"], coords: [38.2605, 140.8790] },
            { time: "10:00", name: "麒麟啤酒仙台工廠（需預約）", desc: "參觀生產線，最後享有三杯免費生啤酒/飲料試飲", category: "attraction", mealType: null, tags: ["🍺 啤酒工廠", "🏭 見學"], coords: [38.3089, 141.0275] },
            { time: "12:00", name: "Kirin Beer Port Sendai", desc: "工廠附設餐廳，必點成吉思汗烤羊肉搭配一番搾生啤酒", category: "restaurant", mealType: "lunch", tags: ["🍖 烤羊肉", "🍺 生啤酒"], coords: [38.3089, 141.0275] },
            { time: "13:30", name: "三井 Outlet Park 仙台港", desc: "東北最大 Outlet，BEAMS、United Arrows 等品牌", category: "shopping", mealType: null, tags: ["🛍️ Outlet", "👟 運動品牌"], coords: [38.3042, 141.0386] },
            { time: "14:30", name: "仙台海洋森林水族館", desc: "Outlet 旁，超大型水槽與海豚海獅表演", category: "attraction", mealType: null, tags: ["🐬 水族館", "🐟 海洋生物"], coords: [38.3025, 141.0445] },
            { time: "19:00", name: "一番町周邊晚餐", desc: "飯店周邊有眾多餐廳選擇", category: "restaurant", mealType: "dinner", tags: ["🍽️ 晚餐", "🌃 市區"], coords: [38.2584, 140.8751] }
        ]
    },
    5: {
        title: "Day 5: 仙台歷史巡禮",
        date: "5/24 (日)",
        weather: "☀️",
        location: "仙台歷史景點",
        bgImage: "images/day5.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
            location: "仙台一番町",
            checkIn: "14:00",
            dates: "5/23-5/26 (3晚)",
            image: "images/hotel2.jpg",
            features: ["📍 一番町商圈核心", "🚶 步行可達主要景點", "🛁 大浴場", "🧺 洗衣機烘衣機設備"]
        },
        locations: [
            { time: "09:00", name: "仙台歷史景點巡禮", desc: "瑞鳳殿、仙台城跡、大崎八幡宮等景點可選", category: "attraction", mealType: "sightseeing", tags: ["⛩️ 歷史", "🏯 伊達政宗"], coords: [38.2459, 140.8778] },
            { time: "12:30", name: "城跡茶屋", desc: "在仙台城跡附近享用傳統和食", category: "restaurant", mealType: "lunch", tags: ["🍱 和食", "🏯 景觀餐廳"], coords: [38.2550, 140.8625] },
            { time: "18:30", name: "利久牛舌", desc: "再次品嚐仙台名物牛舌", category: "restaurant", mealType: "dinner", tags: ["🍖 牛舌", "⭐ 名店"], coords: [38.2607, 140.8826] }
        ]
    },
    6: {
        title: "Day 6: 鹽竈巡禮（壽司與名酒之城）",
        date: "5/25 (一)",
        weather: "🌤️",
        location: "鹽竈",
        bgImage: "images/day6.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
            location: "仙台一番町",
            checkIn: "14:00",
            dates: "5/23-5/26 (3晚)",
            image: "images/hotel2.jpg",
            features: ["📍 一番町商圈核心", "🚶 步行可達主要景點", "🛁 大浴場", "🧺 洗衣機烘衣機設備"]
        },
        locations: [
            { time: "09:30", name: "鹽竈神社", desc: "陸奧國一之宮，走 202 階石階祈求長壽，俯瞰鹽竃港", category: "attraction", mealType: "sightseeing", tags: ["⛩️ 神社", "🌸 能量景點"], coords: [38.3147, 141.0211] },
            { time: "12:00", name: "鹽竈壽司街", desc: "6 家頂級壽司店任選！點擊查看選項", category: "restaurant", mealType: "lunch", tags: ["🍣 壽司", "🐟 鮪魚"], coords: [38.3103, 141.0242] },
            { time: "18:30", name: "仙台市區晚餐", desc: "在市區選擇喜歡的餐廳用餐", category: "restaurant", mealType: "dinner", tags: ["🍽️ 晚餐", "🌃 自由選擇"], coords: [38.2596, 140.8797] }
        ]
    },
    7: {
        title: "Day 7: 最後採買與返程",
        date: "5/26 (二)",
        weather: "☀️",
        location: "仙台市區 & 仙台機場",
        bgImage: "images/day7.jpg",
        locations: [
            { time: "08:30", name: "站內精釀 Fermenteria", desc: "享受最後的早晨咖啡或晨酒", category: "restaurant", mealType: "breakfast", tags: ["🍺 精釀", "☕ 咖啡"], coords: [38.2609, 140.8820] },
            { time: "12:30", name: "牛舌專門店 陣中", desc: "機場必吃美食！位於 1F，推薦招牌「陣中冠舌」", category: "restaurant", mealType: "lunch", tags: ["🥩 牛舌", "✈️ 機場"], coords: [38.1397, 140.9169] },
            { time: "17:20", name: "仙台空港 起飛", desc: "搭乘星宇航空 JX863 返台", category: "attraction", mealType: null, tags: ["✈️ 返程", "🌟 星宇航空"], coords: [38.1397, 140.9169] }
        ]
    }
};

// 配置與時段設定
const daysConfig = [
    { day: 1, label: "DAY 1", date: "05/20", weather: "☀️" },
    { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" },
    { day: 3, label: "DAY 3", date: "05/22", weather: "☀️" },
    { day: 4, label: "DAY 4", date: "05/23", weather: "⛅" },
    { day: 5, label: "DAY 5", date: "05/24", weather: "☀️" },
    { day: 6, label: "DAY 6", date: "05/25", weather: "🌤️" },
    { day: 7, label: "DAY 7", date: "05/26", weather: "☀️" }
];

const categories = {
    all: { label: "全部", icon: "📍" },
    attraction: { label: "景點", icon: "🏯" },
    restaurant: { label: "餐廳", icon: "🍽️" },
    shopping: { label: "購物", icon: "🛍️" },
    specialty: { label: "特產", icon: "🎁" },
    market: { label: "超市", icon: "🛒" }
};

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

// 獨立名單
const supermarkets = [
    { name: "Lopia Sendai", desc: "平價超市，肉品生鮮便宜", category: "market", tags: ["🛒 超市", "🥩 肉品"], coords: [38.2598, 140.8813], hours: "10:00-21:00" },
    { name: "AEON 一番町店", desc: "種類齊全，品質保證", category: "market", tags: ["🛒 連鎖", "🍱 熟食"], coords: [38.2588, 140.8755], hours: "09:00-23:00" }
];

const shoppingStores = [
    { name: "PARCO 吉伊卡哇", desc: "粉絲必訪周邊店", category: "shopping", tags: ["🎨 動漫", "🧸 吉伊卡哇"], coords: [38.2596, 140.8798], hours: "10:00-20:00" },
    { name: "LOFT 仙台店", desc: "生活雜貨、文具百貨", category: "shopping", tags: ["✏️ 文具", "🏠 生活"], coords: [38.2596, 140.8797], hours: "10:00-20:00" },
    { name: "LUSH 仙台PARCO", desc: "手工化妝品、沐浴球", category: "shopping", tags: ["🧼 香氛", "🛁 沐浴"], coords: [38.2596, 140.8797], hours: "10:00-20:00" },
    { name: "Aesop PARCO 2店", desc: "澳洲天然保養品牌", category: "shopping", tags: ["🧴 保養", "✨ 高級"], coords: [38.2597, 140.8797], hours: "10:00-20:00" },
    { name: "BAO BAO ISSEY MIYAKE", desc: "三宅一生經典包款", category: "shopping", tags: ["👜 包包", "✨ 設計師"], coords: [38.2597, 140.8797], hours: "10:00-20:00" }
];

const souvenirStores = [
    { name: "Maison Cœlacanthe", desc: "腔棘魚最中必買", category: "specialty", tags: ["🎁 伴手禮", "🍰 甜點"], coords: [38.2598, 140.8765], hours: "10:00-19:00" },
    { name: "萩の月", desc: "仙台第一伴手禮", category: "specialty", tags: ["🎁 必買", "🍰 蛋糕"], coords: [38.2609, 140.8821], hours: "09:00-21:00" }
];

const restaurantOptions = {
    "day2_parco": [
        { name: "LOFT 仙台店", desc: "文具、美妝、居家用品", tags: ["✏️ 文具", "🏠 生活"], coords: [38.2596, 140.8797] },
        { name: "LUSH 仙台PARCO", desc: "手工沐浴球、香氛", tags: ["🧼 香氛", "🛁 沐浴"], coords: [38.2596, 140.8797] },
        { name: "吉伊卡哇專區", desc: "動漫周邊專賣", tags: ["🎨 動漫", "🧸 周邊"], coords: [38.2596, 140.8798] }
    ],
    "day2_parco2": [
        { name: "BAO BAO ISSEY MIYAKE", desc: "經典幾何包款", tags: ["👜 包包", "✨ 設計師"], coords: [38.2597, 140.8797] },
        { name: "Aesop PARCO 2店", desc: "香氛與天然保養品", tags: ["🧴 保養", "✨ 高級"], coords: [38.2597, 140.8797] }
    ],
    "day3_sightseeing": [
        { name: "五大堂", desc: "朱紅色堂宇", tags: ["⛩️ 寺廟", "📸 打卡"], coords: [38.3690, 141.0625] },
        { name: "瑞巖寺", desc: "國寶級建築", tags: ["⛩️ 國寶", "🏯 歷史"], coords: [38.3685, 141.0615] },
        { name: "松島三景（觀瀾亭）", desc: "邊品茶邊賞景", tags: ["🍵 茶室", "🌊 海景"], coords: [38.3692, 141.0620] }
    ],
    "day5_sightseeing": [
        { name: "瑞鳳殿", desc: "伊達政宗靈廟", tags: ["⛩️ 靈廟", "🏯 歷史"], coords: [38.2459, 140.8778] },
        { name: "仙台城跡", desc: "俯瞰仙台市區", tags: ["🏯 城跡", "📸 絕景"], coords: [38.2550, 140.8625] }
    ],
    "day6_sightseeing": [
        { name: "鹽竈神社 本殿", desc: "走202階祈福", tags: ["⛩️ 一之宮", "⛰️ 爬階"], coords: [38.3147, 141.0211] },
        { name: "志波彥神社", desc: "祈求豐收", tags: ["⛩️ 神社", "🌾 農業"], coords: [38.3150, 141.0215] }
    ],
    "day6_lunch": [
        { name: "廻鮮寿司 塩釜港", desc: "排隊第一名店", tags: ["🍣 壽司", "⭐ 必吃"], coords: [38.3103, 141.0242] },
        { name: "鹽竈すし哲", desc: "職人手藝老店", tags: ["🍣 壽司", "✨ 老店"], coords: [38.3108, 141.0245] }
    ]
};
