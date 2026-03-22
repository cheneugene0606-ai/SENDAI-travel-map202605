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
            features: [
                "🛁 頂樓天然溫泉「都之湯」",
                "🏊 室內恆溫泳池",
                "🧺 洗衣機烘衣機設備",
                "📍 仙台站西口直達"
            ]
        },
        locations: [
            {
                time: "10:00",
                name: "桃園機場漢堡王",
                desc: "出發前在桃園機場享用漢堡王早午餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍔 速食", "✈️ 機場"],
                coords: [25.0797, 121.2342]
            },
            {
                time: "11:35",
                name: "星宇航空 JX862",
                desc: "搭乘星宇航空，飛機餐可點濃湯及特調飲料",
                category: "attraction",
                mealType: "lunch",
                tags: ["✈️ 飛行", "🍽️ 飛機餐"],
                coords: [25.0797, 121.2342]
            },
            {
                time: "16:00",
                name: "仙台空港",
                desc: "抵達仙台空港",
                category: "attraction",
                mealType: null,
                tags: ["✈️ 抵達"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "17:00",
                name: "仙台站",
                desc: "搭乘仙台空港 Access 線前往仙台站（約 25 分鐘），入住飯店",
                category: "attraction",
                mealType: null,
                tags: ["🚇 交通", "🏨 Check-in"],
                coords: [38.2609, 140.8824]
            },
            {
                time: "18:30",
                name: "善治郎牛舌 南町通店",
                desc: "品嚐仙台最著名的炭烤牛舌，體驗東北美食的魅力",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍖 牛舌", "⭐ 必吃"],
                coords: [38.2606, 140.8828]
            },
            {
                time: "21:00",
                name: "宮城仙台うまいもん食堂 二丁目酒場 総本店",
                desc: "在地居酒屋，品嚐宮城地酒與特色料理，體驗仙台夜生活",
                category: "restaurant",
                mealType: "snack",
                tags: ["🍶 居酒屋", "🌃 宵夜"],
                coords: [38.2625, 140.8739]
            }
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
            features: [
                "🛁 頂樓天然溫泉「都之湯」",
                "🏊 室內恆溫泳池",
                "🧺 洗衣機烘衣機設備",
                "📍 仙台站西口直達"
            ]
        },
        locations: [
            {
                time: "08:30",
                name: "仙台朝市",
                desc: "體驗在地早市文化，品嚐新鮮海產和特色早餐",
                category: "market",
                mealType: "breakfast",
                tags: ["🐟 海鮮", "🌅 早市"],
                coords: [38.2622, 140.8786]
            },
            {
                time: "10:00",
                name: "市區百貨購物",
                desc: "PARCO、LOFT、S-PAL 等百貨公司，多個品牌可選",
                category: "shopping",
                mealType: "shopping",
                tags: ["🛍️ 購物", "🏬 百貨"],
                coords: [38.2596, 140.8797]
            },
            {
                time: "14:00",
                name: "一番町商店街",
                desc: "漫步仙台最熱鬧的拱廊商店街，逛街購物",
                category: "shopping",
                mealType: null,
                tags: ["🏪 逛街", "☕ 咖啡廳"],
                coords: [38.2584, 140.8751]
            },
            {
                time: "15:00",
                name: "榴岡天滿宮",
                desc: "仙台著名學問之神，賞梅名所",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛩️ 神社", "🌸 賞梅"],
                coords: [38.2605, 140.8904]
            },
            {
                time: "16:00",
                name: "洋食 hachi",
                desc: "品嚐日式洋食料理，蛋包飯和漢堡排是招牌",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍱 洋食", "🍳 蛋包飯"],
                coords: [38.2596, 140.8797]
            },
            {
                time: "18:00",
                name: "仙令鮨 仙台站1樓店",
                desc: "仙台站內高級壽司店，新鮮海產現做",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍣 壽司", "✨ 高級"],
                coords: [38.2609, 140.8820]
            },
            {
                time: "19:30",
                name: "Yodobashi Camera Multimedia Sendai",
                desc: "仙台站東口的大型電器百貨，模型、遊戲、相機應有盡有",
                category: "shopping",
                mealType: null,
                tags: ["📷 電器", "🎮 遊戲/模型"],
                coords: [38.2593, 140.8839]
            }
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
            checkIn: "已入住",
            dates: "5/20-5/23 (3晚)",
            image: "images/hotel1.jpg",
            features: [
                "🛁 頂樓天然溫泉「都之湯」",
                "🏊 室內恆溫泳池",
                "🧺 洗衣機烘衣機設備",
                "📍 仙台站西口直達"
            ]
        },
        locations: [
            {
                time: "07:30",
                name: "茶泡飯 えん S-PAL仙台店",
                desc: "享用日式茶泡飯早餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍚 茶泡飯", "☀️ 早餐"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "08:00",
                name: "飯店 Check-out",
                desc: "退房後寄放行李，準備出發松島",
                category: "attraction",
                mealType: null,
                tags: ["🏨 退房"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "09:00",
                name: "松島海岸",
                desc: "搭乘 JR 仙石線前往松島海岸站（約 40 分鐘）",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🚃 交通", "🌊 海景"],
                coords: [38.3686, 141.0636]
            },
            {
                time: "12:00",
                name: "松島午餐",
                desc: "品嚐松島新鮮海鮮料理",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🦞 海鮮", "🍱 定食"],
                coords: [38.3686, 141.0636]
            },
            {
                time: "13:30",
                name: "松島灣觀光船",
                desc: "搭乘觀光船遊覽松島灣美景（約 50 分鐘）",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛵ 遊船", "🌊 美景"],
                coords: [38.3686, 141.0636]
            },
            {
                time: "15:00",
                name: "瑞巖寺",
                desc: "伊達家菩提寺，國寶級建築",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛩️ 寺廟", "🏛️ 國寶"],
                coords: [38.3717, 141.0656]
            },
            {
                time: "16:00",
                name: "円通院",
                desc: "美麗日式庭園，紅葉名所",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🌸 庭園", "🍁 紅葉"],
                coords: [38.3720, 141.0658]
            },
            {
                time: "17:30",
                name: "返回仙台",
                desc: "搭乘 JR 仙石線返回仙台站",
                category: "attraction",
                mealType: null,
                tags: ["🚃 交通"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "19:30",
                name: "仙台站周邊晚餐",
                desc: "西口周邊多家居酒屋和餐廳可選",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍶 居酒屋", "🌃 晚餐"],
                coords: [38.2605, 140.8789]
            }
        ]
    },
    4: {
        title: "Day 4: 麒麟啤酒工廠 & 三井 Outlet",
        date: "5/23 (六)",
        weather: "⛅",
        location: "仙台周邊",
        bgImage: "images/day4.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
            location: "仙台一番町",
            checkIn: "14:00",
            dates: "5/23-5/26 (3晚)",
            image: "images/hotel2.jpg",
            features: [
                "🏙️ 市中心最佳位置",
                "🛍️ 步行到一番町商店街 3 分鐘",
                "🍜 周邊餐廳林立"
            ]
        },
        locations: [
            {
                time: "08:00",
                name: "西口飯店退房",
                desc: "退房並寄放行李",
                category: "attraction",
                mealType: null,
                tags: ["🏨 退房"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "09:00",
                name: "珈琲館 仙台青葉通店",
                desc: "享用咖啡廳早餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["☕ 咖啡廳", "🍳 早餐"],
                coords: [38.2599, 140.8785]
            },
            {
                time: "10:00",
                name: "麒麟啤酒仙台工廠",
                desc: "參觀啤酒製造過程，免費試飲新鮮啤酒（需預約）",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🍺 啤酒", "🏭 工廠見學"],
                coords: [38.2789, 140.9544]
            },
            {
                time: "12:30",
                name: "三井 Outlet Park 仙台港",
                desc: "東北最大 Outlet，購物天堂",
                category: "shopping",
                mealType: "shopping",
                tags: ["🛍️ Outlet", "👜 購物"],
                coords: [38.2858, 141.0331]
            },
            {
                time: "13:00",
                name: "Outlet 午餐",
                desc: "Outlet 內多家餐廳可選",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍱 午餐", "🍜 多選擇"],
                coords: [38.2858, 141.0331]
            },
            {
                time: "15:00",
                name: "仙台うみの杜水族館",
                desc: "東北最大水族館，海豚海獅表演",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🐟 水族館", "🐬 海洋生物"],
                coords: [38.2858, 141.0444]
            },
            {
                time: "17:00",
                name: "返回仙台市區",
                desc: "搭乘電車返回仙台站",
                category: "attraction",
                mealType: null,
                tags: ["🚃 交通"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "17:30",
                name: "Check-in 一番町飯店",
                desc: "入住 Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
                category: "attraction",
                mealType: null,
                tags: ["🏨 Check-in", "🏨 換飯店"],
                coords: [38.2626, 140.8742]
            },
            {
                time: "18:30",
                name: "一番町晚餐",
                desc: "飯店周邊餐廳選擇",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍽️ 晚餐"],
                coords: [38.2605, 140.8789]
            }
        ]
    },
    5: {
        title: "Day 5: 仙台歷史巡禮",
        date: "5/24 (日)",
        weather: "☀️",
        location: "仙台市區",
        bgImage: "images/day5.jpg",
        hotel: {
            name: "Daiwa Roynet Hotel Sendai Ichibancho PREMIER",
            location: "仙台一番町",
            checkIn: "已入住",
            image: "images/hotel2.jpg",
            features: ["🏙️ 市中心", "🛍️ 一番町"]
        },
        locations: [
            {
                time: "08:30",
                name: "Humming Meal Market",
                desc: "仙台站內健康早餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍳 早餐", "🚉 車站"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "09:30",
                name: "搭乘 Loople 仙台觀光巴士",
                desc: "購買一日券，西口 16 號乘車處",
                category: "attraction",
                mealType: null,
                tags: ["🚌 觀光巴士", "🎫 一日券"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "10:00",
                name: "瑞鳳殿",
                desc: "伊達政宗陵墓，華麗桃山建築",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛩️ 陵墓", "🏛️ 建築"],
                coords: [38.2473, 140.8711]
            },
            {
                time: "11:30",
                name: "仙台城跡（青葉城）",
                desc: "伊達政宗銅像、仙台市景觀",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🏯 城跡", "📸 景觀"],
                coords: [38.2547, 140.8433]
            },
            {
                time: "12:30",
                name: "ちゅんちゅん堂",
                desc: "仙台城跡旁的可愛甜點店",
                category: "restaurant",
                mealType: "snack",
                tags: ["🍰 甜點", "☕ 咖啡"],
                coords: [38.2547, 140.8433]
            },
            {
                time: "13:30",
                name: "大崎八幡宮",
                desc: "國寶級神社，黑漆金裝飾",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛩️ 神社", "🏛️ 國寶"],
                coords: [38.2808, 140.8531]
            },
            {
                time: "14:30",
                name: "石亭(せきてい) 八幡茶屋",
                desc: "大崎八幡宮旁的傳統日式料理",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍱 午餐", "🏯 傳統"],
                coords: [38.2808, 140.8531]
            },
            {
                time: "16:00",
                name: "返回飯店",
                desc: "回飯店休息",
                category: "attraction",
                mealType: null,
                tags: ["🏨 休息"],
                coords: [38.2626, 140.8742]
            },
            {
                time: "18:30",
                name: "Dining Chikara-ya 仙台站前店",
                desc: "牛舌料理專門店，仙台站前分店",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🥩 牛舌", "🍽️ 晚餐"],
                coords: [38.2608, 140.8818]
            }
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
            checkIn: "已入住",
            image: "images/hotel2.jpg",
            features: ["🏙️ 市中心", "🛍️ 一番町"]
        },
        locations: [
            {
                time: "08:30",
                name: "飯店早餐",
                desc: "享用早餐後準備出發",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🏨 飯店", "🍳 早餐"],
                coords: [38.2626, 140.8742]
            },
            {
                time: "09:30",
                name: "搭乘 JR 仙石線前往鹽竈",
                desc: "仙台站 → 本鹽釜站（約 25 分鐘）",
                category: "attraction",
                mealType: null,
                tags: ["🚃 交通"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "10:00",
                name: "鹽竈神社",
                desc: "東北鎮守、陸奧國一之宮",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["⛩️ 神社", "🏛️ 歷史"],
                coords: [38.3156, 141.0219]
            },
            {
                time: "11:30",
                name: "鹽竈市場壽司街",
                desc: "新鮮壽司，CP 值超高",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍣 壽司", "🐟 海鮮"],
                coords: [38.3122, 141.0194]
            },
            {
                time: "13:30",
                name: "鹽竈水產物仲卸市場",
                desc: "新鮮海產、伴手禮採購",
                category: "market",
                mealType: "shopping",
                tags: ["🦞 海鮮", "🎁 伴手禮"],
                coords: [38.3122, 141.0194]
            },
            {
                time: "15:00",
                name: "鹽竈酒造見學",
                desc: "參觀日本酒釀造過程（浦霞酒造）",
                category: "attraction",
                mealType: "sightseeing",
                tags: ["🍶 日本酒", "🏭 酒藏"],
                coords: [38.3089, 141.0186]
            },
            {
                time: "17:00",
                name: "返回仙台",
                desc: "搭乘 JR 仙石線返回仙台",
                category: "attraction",
                mealType: null,
                tags: ["🚃 交通"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "18:30",
                name: "最後晚餐",
                desc: "一番町或仙台站選擇最後一晚晚餐",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍽️ 晚餐", "🎊 最後一晚"],
                coords: [38.2626, 140.8742]
            }
        ]
    },
    7: {
        title: "Day 7: 最後採買與返程",
        date: "5/26 (二)",
        weather: "☀️",
        location: "仙台 → 台北",
        bgImage: "images/day7.jpg",
        locations: [
            {
                time: "09:00",
                name: "松屋 仙台一番町店",
                desc: "日式平價牛丼連鎖店早餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍱 牛丼", "🍳 早餐"],
                coords: [38.2620, 140.8740]
            },
            {
                time: "09:30",
                name: "飯店退房",
                desc: "退房後寄放行李",
                category: "attraction",
                mealType: null,
                tags: ["🏨 退房"],
                coords: [38.2626, 140.8742]
            },
            {
                time: "10:00",
                name: "最後採買",
                desc: "一番町、仙台站最後購物",
                category: "shopping",
                mealType: "shopping",
                tags: ["🛍️ 購物", "🎁 伴手禮"],
                coords: [38.2605, 140.8789]
            },
            {
                time: "12:00",
                name: "前往仙台機場",
                desc: "搭乘仙台空港 Access 線前往機場",
                category: "attraction",
                mealType: null,
                tags: ["🚃 交通", "✈️ 機場"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "14:00",
                name: "仙台機場午餐",
                desc: "機場內享用最後一餐",
                category: "restaurant",
                mealType: "lunch",
                tags: ["✈️ 機場", "🍱 午餐"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "17:20",
                name: "星宇航空 JX863",
                desc: "仙台機場起飛返回台北",
                category: "attraction",
                mealType: null,
                tags: ["✈️ 返程"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "20:10",
                name: "抵達桃園機場",
                desc: "平安返回台灣",
                category: "attraction",
                mealType: null,
                tags: ["🛬 抵達"],
                coords: [25.0797, 121.2342]
            }
        ]
    }
};
// 天數選擇器設定
const daysConfig = [
    { day: 1, label: "Day 1", date: "5/20 (三)" },
    { day: 2, label: "Day 2", date: "5/21 (四)" },
    { day: 3, label: "Day 3", date: "5/22 (五)" },
    { day: 4, label: "Day 4", date: "5/23 (六)" },
    { day: 5, label: "Day 5", date: "5/24 (日)" },
    { day: 6, label: "Day 6", date: "5/25 (一)" },
    { day: 7, label: "Day 7", date: "5/26 (二)" }
];

// 用餐時段定義
const mealTypes = {
    all: { label: "全部", icon: "🍽️" },
    sightseeing: { label: "景點", icon: "🏯" },
    breakfast: { label: "早餐", icon: "☀️" },
    lunch: { label: "午餐", icon: "🍱" },
    dinner: { label: "晚餐", icon: "🌙" },
    snack: { label: "小吃", icon: "🍡" },
    shopping: { label: "購物", icon: "🛍️" }
};

// 分類定義
const categories = {
    all: { label: "全部行程", icon: "🔴" },
    attraction: { label: "景點", icon: "🎯" },
    restaurant: { label: "餐廳", icon: "🍽️" },
    shopping: { label: "購物", icon: "🛍️" },
    specialty: { label: "特產", icon: "🎁" },
    market: { label: "市場", icon: "🏪" }
};

// 超市清單
const supermarkets = [
    {
        name: "業務超市 仙台站東口店",
        desc: "大容量便宜食材、零食",
        coords: [38.2598, 140.8822],
        tags: ["💰 便宜", "🍱 食材"],
        hours: "9:00-21:00"
    },
    {
        name: "AEON 仙台店",
        desc: "大型綜合超市，生活用品齊全",
        coords: [38.2642, 140.8701],
        tags: ["🛒 綜合", "🏬 大型"],
        hours: "9:00-22:00"
    },
    {
        name: "AEON 仙台幸町店",
        desc: "24 小時營業的綜合超市",
        coords: [38.2558, 140.9031],
        tags: ["🌙 24H", "🛒 綜合"],
        hours: "24小時"
    },
    {
        name: "TRIAL 仙台富沢店",
        desc: "超低價超市，日用品便宜",
        coords: [38.2344, 140.8733],
        tags: ["💰 便宜", "🧴 日用品"],
        hours: "10:00-21:00"
    },
    {
        name: "ドン・キホーテ（驚安殿堂）仙台駅西口本店",
        desc: "藥妝、零食、電器應有盡有",
        coords: [38.2589, 140.8778],
        tags: ["💊 藥妝", "🎁 雜貨"],
        hours: "10:00-凌晨2:00"
    },
    {
        name: "西友 仙台一番町店",
        desc: "市中心超市，營業到深夜",
        coords: [38.2617, 140.8736],
        tags: ["🛒 超市", "🌙 深夜"],
        hours: "9:00-23:00"
    }
];

// 購物店家清單
const shoppingStores = [
    {
        name: "仙台 PARCO",
        desc: "時尚百貨，設計師品牌、角色周邊",
        coords: [38.2596, 140.8797],
        tags: ["👗 時尚", "🎁 周邊"],
        hours: "10:00-20:00"
    },
    {
        name: "仙台 PARCO 2",
        desc: "精品店鋪、BAO BAO ISSEY MIYAKE",
        coords: [38.2597, 140.8797],
        tags: ["👜 包包", "✨ 精品"],
        hours: "10:00-20:00"
    },
    {
        name: "S-PAL 仙台",
        desc: "仙台站直結百貨，伴手禮首選",
        coords: [38.2605, 140.8789],
        tags: ["🎁 伴手禮", "🍰 甜點"],
        hours: "10:00-21:00"
    },
    {
        name: "藤崎百貨",
        desc: "仙台老字號高級百貨",
        coords: [38.2624, 140.8745],
        tags: ["🏬 百貨", "✨ 精品"],
        hours: "10:00-19:00"
    },
    {
        name: "一番町商店街",
        desc: "仙台最熱鬧商店街",
        coords: [38.2626, 140.8742],
        tags: ["🛍️ 購物", "🍜 美食"],
        hours: "店家各異"
    },
    {
        name: "AER 大樓",
        desc: "仙台站前地標，31樓免費展望台",
        coords: [38.2606, 140.8816],
        tags: ["🏙️ 展望台", "🛍️ 購物"],
        hours: "10:00-20:00"
    },
    {
        name: "LOFT 仙台店",
        desc: "生活雜貨、文具、創意小物天堂",
        coords: [38.2596, 140.8797],
        tags: ["📝 文具", "🎁 雜貨"],
        hours: "10:00-20:00"
    },
    {
        name: "無印良品 仙台一番町店",
        desc: "MUJI 大型店鋪",
        coords: [38.2622, 140.8744],
        tags: ["🏠 生活", "👕 服飾"],
        hours: "10:00-20:00"
    },
    {
        name: "LUSH 仙台PARCO店",
        desc: "天然手工化妝品、沐浴用品",
        coords: [38.2596, 140.8797],
        tags: ["🧼 化妝品", "🛁 沐浴"],
        hours: "10:00-20:00"
    },
    {
        name: "Aesop 仙台PARCO 2店",
        desc: "澳洲高級保養品牌",
        coords: [38.2597, 140.8797],
        tags: ["💄 保養品", "✨ 精品"],
        hours: "10:00-20:00"
    },
    {
        name: "東急ハンズ（Tokyu Hands）仙台店",
        desc: "創意生活雜貨、文具、DIY 用品",
        coords: [38.2625, 140.8746],
        tags: ["🔧 DIY", "🎨 創意"],
        hours: "10:00-20:00"
    },
    {
        name: "ヨドバシカメラ 仙台店",
        desc: "大型電器賣場，免稅優惠",
        coords: [38.2608, 140.8818],
        tags: ["📱 電器", "💰 免稅"],
        hours: "9:30-22:00"
    },
    {
        name: "ビックカメラ 仙台駅前店",
        desc: "電器、相機、藥妝綜合賣場",
        coords: [38.2598, 140.8802],
        tags: ["📷 相機", "💊 藥妝"],
        hours: "10:00-21:00"
    }
];

// 伴手禮店家清單
const souvenirStores = [
    {
        name: "ずんだ茶寮（Zunda Saryo）",
        desc: "毛豆泥甜點專門店，必買毛豆麻糬",
        coords: [38.2605, 140.8789],
        tags: ["🍡 毛豆", "🎁 伴手禮"],
        hours: "8:00-21:00"
    },
    {
        name: "菓匠三全",
        desc: "萩之月本舖，仙台最有名伴手禮",
        coords: [38.2605, 140.8789],
        tags: ["🌕 萩之月", "🍰 甜點"],
        hours: "9:00-21:00"
    },
    {
        name: "白松がモナカ本舗",
        desc: "仙台百年老店，最中餅名店",
        coords: [38.2619, 140.8738],
        tags: ["🥮 和菓子", "🏛️ 老舖"],
        hours: "9:00-19:00"
    },
    {
        name: "喜久水庵",
        desc: "生銅鑼燒專門店",
        coords: [38.2605, 140.8789],
        tags: ["🥞 銅鑼燒", "🍰 甜點"],
        hours: "9:00-21:00"
    },
    {
        name: "玉澤総本店",
        desc: "仙台駄菓子老舖",
        coords: [38.2624, 140.8745],
        tags: ["🍬 傳統", "🏛️ 老舖"],
        hours: "10:00-19:00"
    },
    {
        name: "伊達の牛たん本舗",
        desc: "牛舌真空包、牛舌仙貝伴手禮",
        coords: [38.2605, 140.8789],
        tags: ["🥩 牛舌", "🎁 特產"],
        hours: "9:00-21:00"
    },
    {
        name: "かまぼこの鐘崎",
        desc: "高級魚板專門店",
        coords: [38.2605, 140.8789],
        tags: ["🍥 魚板", "🎁 特產"],
        hours: "9:00-21:00"
    },
    {
        name: "阿部蒲鉾店",
        desc: "笹かまぼこ（竹葉魚板）名店",
        coords: [38.2622, 140.8741],
        tags: ["🍥 魚板", "🎋 竹葉"],
        hours: "9:00-19:00"
    },
    {
        name: "支倉焼本舗",
        desc: "支倉燒、仙台銘菓",
        coords: [38.2605, 140.8789],
        tags: ["🍰 甜點", "🎁 伴手禮"],
        hours: "9:00-21:00"
    },
    {
        name: "仙台まころん（Macaron）",
        desc: "創意馬卡龍，日式風味",
        coords: [38.2596, 140.8797],
        tags: ["🍰 馬卡龍", "🌸 和風"],
        hours: "10:00-20:00"
    },
    {
        name: "陣中（Jinchu）",
        desc: "仙台名產牛舌仙貝",
        coords: [38.2605, 140.8789],
        tags: ["🍘 仙貝", "🥩 牛舌"],
        hours: "9:00-21:00"
    },
    {
        name: "ゆべし（柚餅子）専門店",
        desc: "柚子麻糬傳統和菓子",
        coords: [38.2624, 140.8745],
        tags: ["🍊 柚子", "🥮 和菓子"],
        hours: "10:00-19:00"
    },
    {
        name: "九重本舗玉澤",
        desc: "霜柱（糖霜點心）名店",
        coords: [38.2605, 140.8789],
        tags: ["🍬 傳統", "❄️ 霜柱"],
        hours: "9:00-21:00"
    },
    {
        name: "仙台駅お土産街（伴手禮街）",
        desc: "S-PAL 地下一樓伴手禮集中地",
        coords: [38.2605, 140.8789],
        tags: ["🎁 伴手禮", "🏬 集中地"],
        hours: "8:00-21:00"
    },
    {
        name: "榮太樓（Eitaro）",
        desc: "仙台傳統和菓子老舖",
        coords: [38.2619, 140.8738],
        tags: ["🥮 和菓子", "🏛️ 老舖"],
        hours: "9:00-19:00"
    },
    {
        name: "菓子工房 かしわや",
        desc: "手工餅乾、蛋糕",
        coords: [38.2622, 140.8744],
        tags: ["🍪 餅乾", "🍰 蛋糕"],
        hours: "10:00-19:00"
    }
];

// 餐廳清單
const restaurants = [
    {
        name: "牛たん炭焼 利久（Rikyu）",
        desc: "仙台最有名的牛舌連鎖店",
        coords: [38.2605, 140.8789],
        tags: ["🥩 牛舌", "🔥 炭烤"],
        hours: "11:00-22:00"
    },
    {
        name: "喜助（Kisuke）",
        desc: "與利久齊名的牛舌名店",
        coords: [38.2605, 140.8789],
        tags: ["🥩 牛舌", "⭐ 名店"],
        hours: "11:00-22:00"
    },
    {
        name: "伊達の牛たん本舗",
        desc: "厚切牛舌專門店",
        coords: [38.2605, 140.8789],
        tags: ["🥩 牛舌", "🍖 厚切"],
        hours: "11:00-22:00"
    },
    {
        name: "善治郎（Zenjiro）",
        desc: "味噌烤牛舌特色店",
        coords: [38.2622, 140.8741],
        tags: ["🥩 牛舌", "🧂 味噌"],
        hours: "11:00-21:00"
    },
    {
        name: "すし波奈（Sushi Hana）",
        desc: "高級壽司，新鮮海產",
        coords: [38.2625, 140.8745],
        tags: ["🍣 壽司", "🐟 海鮮"],
        hours: "11:30-14:00, 17:00-22:00"
    },
    {
        name: "廻転寿司 根室花まる",
        desc: "人氣迴轉壽司，CP 值高",
        coords: [38.2605, 140.8789],
        tags: ["🍣 壽司", "💰 平價"],
        hours: "11:00-22:00"
    },
    {
        name: "すし政（Sushimasa）",
        desc: "老字號江戶前壽司",
        coords: [38.2619, 140.8738],
        tags: ["🍣 壽司", "🏛️ 老舖"],
        hours: "11:00-14:00, 17:00-21:00"
    },
    {
        name: "仙台朝市食堂",
        desc: "早市內的海鮮丼飯",
        coords: [38.2614, 140.8772],
        tags: ["🍚 海鮮丼", "🌅 早市"],
        hours: "6:00-14:00"
    },
    {
        name: "中華そば嘉一（Kaichi）",
        desc: "仙台味噌拉麵名店",
        coords: [38.2598, 140.8802],
        tags: ["🍜 拉麵", "🧂 味噌"],
        hours: "11:00-21:00"
    },
    {
        name: "麺屋政宗（Masamune）",
        desc: "濃厚豚骨拉麵",
        coords: [38.2622, 140.8744],
        tags: ["🍜 拉麵", "🐷 豚骨"],
        hours: "11:00-23:00"
    },
    {
        name: "彦いち（Hikoichi）",
        desc: "辛味噌拉麵專門店",
        coords: [38.2617, 140.8736],
        tags: ["🍜 拉麵", "🌶️ 辣味"],
        hours: "11:00-22:00"
    },
    {
        name: "一番町 居酒屋街",
        desc: "多家居酒屋聚集，氛圍熱鬧",
        coords: [38.2626, 140.8742],
        tags: ["🍶 居酒屋", "🍢 串燒"],
        hours: "17:00-凌晨"
    },
    {
        name: "炭火焼肉 牛門（Gyumon）",
        desc: "高品質和牛燒肉",
        coords: [38.2624, 140.8745],
        tags: ["🥩 燒肉", "🐄 和牛"],
        hours: "17:00-23:00"
    },
    {
        name: "焼肉レストラン ひがしやま",
        desc: "平價燒肉吃到飽",
        coords: [38.2620, 140.8740],
        tags: ["🥩 燒肉", "💰 吃到飽"],
        hours: "11:30-14:00, 17:00-23:00"
    },
    {
        name: "定義山 三角油揚（Aburaage）",
        desc: "超大三角炸豆皮，必吃名物",
        coords: [38.3669, 140.6572],
        tags: ["🍢 炸豆皮", "⭐ 名物"],
        hours: "9:00-16:00"
    },
    {
        name: "松島 さかな市場",
        desc: "松島新鮮海鮮市場食堂",
        coords: [38.3686, 141.0636],
        tags: ["🦞 海鮮", "🍱 市場"],
        hours: "8:00-17:00"
    },
    {
        name: "松島 かき小屋",
        desc: "現烤牡蠣小屋",
        coords: [38.3686, 141.0636],
        tags: ["🦪 牡蠣", "🔥 炭烤"],
        hours: "10:00-16:00"
    },
    {
        name: "鹽竈市場壽司街",
        desc: "新鮮壽司，CP 值超高",
        coords: [38.3122, 141.0194],
        tags: ["🍣 壽司", "🐟 海鮮"],
        hours: "8:00-15:00"
    }
];
// 餐廳/景點選項
const restaurantOptions = {
    // Day 1 早餐
    "day1_breakfast": [
        {
            name: "桃園機場漢堡王",
            desc: "機場美食廣場，漢堡王早午餐",
            tags: ["🍔 速食", "✈️ 機場"],
            hours: "24小時",
            coords: [25.0797, 121.2342]
        }
    ],

    // Day 1 午餐（飛機餐）
    "day1_lunch": [
        {
            name: "星宇航空 JX862 飛機餐",
            desc: "可點濃湯及特調飲料",
            tags: ["✈️ 飛機餐", "🍽️ 機上"],
            hours: "飛行中",
            coords: [25.0797, 121.2342]
        }
    ],

    // Day 1 晚餐
    "day1_dinner": [
        {
            name: "善治郎牛舌 南町通店",
            desc: "味噌烤牛舌專門店，招牌厚切牛舌",
            tags: ["🥩 牛舌", "🧂 味噌"],
            hours: "11:00-21:00",
            coords: [38.2606, 140.8828]
        },
        {
            name: "牛たん炭焼 利久 仙台駅店",
            desc: "仙台最有名的牛舌連鎖，炭火現烤",
            tags: ["🥩 牛舌", "⭐ 名店"],
            hours: "11:00-22:00",
            coords: [38.2605, 140.8789]
        },
        {
            name: "喜助 仙台駅店",
            desc: "與利久齊名，厚切牛舌",
            tags: ["🥩 牛舌", "🍖 厚切"],
            hours: "11:00-22:00",
            coords: [38.2605, 140.8789]
        }
    ],

    // Day 1 宵夜
    "day1_snack": [
        {
            name: "宮城仙台うまいもん食堂 二丁目酒場 総本店",
            desc: "在地居酒屋，品嚐宮城地酒與特色料理",
            tags: ["🍶 居酒屋", "🌃 宵夜"],
            hours: "17:00-凌晨2:00",
            coords: [38.2625, 140.8739]
        },
        {
            name: "一番町居酒屋街",
            desc: "多家居酒屋選擇，氛圍熱鬧",
            tags: ["🍶 居酒屋", "🍢 串燒"],
            hours: "17:00-凌晨",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 2 早餐
    "day2_breakfast": [
        {
            name: "マルモ",
            desc: "仙台朝市人氣店家，新鮮海鮮料理（中央 4-3-28 朝市ビル 1F 奥）",
            tags: ["🐟 海鮮", "⭐ 人氣"],
            hours: "07:00-15:00",
            coords: [38.2622, 140.8773],
            url: "https://www.google.com/maps/place/%E4%BB%99%E5%8F%B0%E6%9C%9D%E5%B8%82/@38.2622,140.8773,17z"
        },
        {
            name: "浜伸 渡邊商店（はましん食堂）",
            desc: "朝市老字號食堂，海鮮定食豐富",
            tags: ["🍱 定食", "✨ 老店"],
            hours: "07:00-14:30",
            coords: [38.2620, 140.8785]
        },
        {
            name: "おにぎり処 あみ",
            desc: "現做美味飯糰專賣店，早餐好選擇",
            tags: ["🍙 飯糰", "🍚 現做"],
            hours: "07:00-14:00",
            coords: [38.2623, 140.8788]
        },
        {
            name: "齊藤熟食店",
            desc: "熟食專門店，現做便當和小菜",
            tags: ["🍱 便當", "🥘 熟食"],
            hours: "07:30-15:00",
            coords: [38.2621, 140.8787]
        },
        {
            name: "伊藤商店 仙台朝市店",
            desc: "朝市內的人氣餐飲店",
            tags: ["🐟 海鮮", "💰 平價"],
            hours: "07:00-15:00",
            coords: [38.2624, 140.8789]
        }
    ],

    // Day 2 PARCO 購物
    "day2_shopping": [
        {
            name: "🏬 PARCO 本館",
            desc: "設計師品牌、動漫周邊集中地",
            tags: ["🏢 百貨", "👗 時尚"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797],
            isCategory: true,
            stores: [
                {
                    name: "COMME des GARÇONS",
                    desc: "川久保玲前衛時尚品牌，黑色系列經典",
                    tags: ["👗 時尚", "✨ 設計師"],
                    hours: "10:00-20:00"
                },
                {
                    name: "CA4LA",
                    desc: "日本帽子專賣店，款式豐富多樣",
                    tags: ["🎩 帽子", "👒 配件"],
                    hours: "10:00-20:00"
                },
                {
                    name: "LUSH 仙台PARCO店",
                    desc: "天然手工化妝品、沐浴用品",
                    tags: ["🧼 化妝品", "🛁 沐浴"],
                    hours: "10:00-20:00"
                },
                {
                    name: "PARCO 吉伊卡哇專區",
                    desc: "吉伊卡哇周邊商品專賣，粉絲必訪",
                    tags: ["🎨 動漫", "🧸 角色"],
                    hours: "10:00-20:00"
                },
                {
                    name: "PARCO 三麗鷗專區",
                    desc: "Hello Kitty、美樂蒂等三麗鷗角色商品",
                    tags: ["🎀 三麗鷗", "🛍️ 周邊"],
                    hours: "10:00-20:00"
                },
                {
                    name: "Disney Store 仙台",
                    desc: "迪士尼官方商品專賣店",
                    tags: ["🏰 迪士尼", "🎁 周邊"],
                    hours: "10:00-20:00"
                }
            ]
        },
        {
            name: "🏬 PARCO 2 館",
            desc: "精品店鋪集中地",
            tags: ["🏢 百貨", "✨ 精品"],
            hours: "10:00-20:00",
            coords: [38.2597, 140.8797],
            isCategory: true,
            stores: [
                {
                    name: "BAO BAO ISSEY MIYAKE",
                    desc: "三宅一生經典包款，立體幾何設計獨特",
                    tags: ["👜 包包", "✨ 設計師"],
                    hours: "10:00-20:00"
                },
                {
                    name: "Aesop 仙台PARCO 2店",
                    desc: "澳洲高級保養品牌",
                    tags: ["💄 保養品", "✨ 精品"],
                    hours: "10:00-20:00"
                }
            ]
        },
        {
            name: "🏬 LOFT",
            desc: "生活雜貨、文具天堂",
            tags: ["🏢 百貨", "📝 文具"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797],
            isCategory: true,
            stores: [
                {
                    name: "文具區",
                    desc: "日本文具、手帳、筆記本",
                    tags: ["📝 文具", "✏️ 書寫"],
                    hours: "10:00-20:00"
                },
                {
                    name: "生活雜貨區",
                    desc: "創意小物、居家用品",
                    tags: ["🎁 雜貨", "🏠 生活"],
                    hours: "10:00-20:00"
                }
            ]
        },
        {
            name: "🏬 S-PAL",
            desc: "仙台站直結百貨",
            tags: ["🏢 百貨", "👗 服飾"],
            hours: "10:00-21:00",
            coords: [38.2605, 140.8789],
            isCategory: true,
            stores: [
                {
                    name: "3F 女裝樓層",
                    desc: "多個日系品牌女裝",
                    tags: ["👗 女裝", "👚 服飾"],
                    hours: "10:00-21:00"
                },
                {
                    name: "無印良品 S-PAL店",
                    desc: "MUJI 生活用品、服飾",
                    tags: ["🏠 生活", "👕 無印"],
                    hours: "10:00-21:00"
                },
                {
                    name: "clear S-PAL仙台店",
                    desc: "日系眼鏡品牌，時尚款式多樣",
                    tags: ["👓 眼鏡", "🕶️ 配件"],
                    hours: "10:00-21:00"
                }
            ]
        }
    ],

    // Day 2 景點
    "day2_sightseeing": [
        {
            name: "榴岡天滿宮",
            desc: "仙台著名學問之神，境內有百年梅樹",
            tags: ["⛩️ 神社", "🌸 賞梅"],
            hours: "自由參觀",
            coords: [38.2605, 140.8904]
        }
    ],

    // Day 2 午餐
    "day2_lunch": [
        {
            name: "洋食 hachi",
            desc: "日式洋食料理，蛋包飯和漢堡排是招牌",
            tags: ["🍱 洋食", "🍳 蛋包飯"],
            hours: "11:00-21:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "牛たん炭焼 利久",
            desc: "牛舌午餐定食",
            tags: ["🥩 牛舌"],
            hours: "11:00-22:00",
            coords: [38.2605, 140.8789]
        },
        {
            name: "廻転寿司 根室花まる",
            desc: "高CP值迴轉壽司",
            tags: ["🍣 壽司"],
            hours: "11:00-22:00",
            coords: [38.2605, 140.8789]
        }
    ],

    // Day 2 晚餐
    "day2_dinner": [
        {
            name: "仙令鮨 仙台站1樓店",
            desc: "仙台站內高級壽司店，新鮮海產現做",
            tags: ["🍣 壽司", "✨ 高級"],
            hours: "11:00-21:00",
            coords: [38.2609, 140.8820]
        },
        {
            name: "すし波奈（Sushi Hana）",
            desc: "高級壽司，新鮮海產",
            tags: ["🍣 壽司", "🐟 海鮮"],
            hours: "11:30-14:00, 17:00-22:00",
            coords: [38.2625, 140.8745]
        },
        {
            name: "一番町居酒屋",
            desc: "多家居酒屋選擇",
            tags: ["🍶 居酒屋"],
            hours: "17:00-凌晨",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 3 早餐
    "day3_breakfast": [
        {
            name: "茶泡飯 えん S-PAL仙台店",
            desc: "日式茶泡飯早餐，清爽開胃",
            tags: ["🍚 茶泡飯", "☀️ 早餐"],
            hours: "07:00-23:00",
            coords: [38.2605, 140.8789]
        }
    ],

    // Day 3 景點
    "day3_sightseeing": [
        {
            name: "五大堂",
            desc: "松島代表性小寺廟，朱紅色橋樑",
            tags: ["⛩️ 寺廟", "📸 打卡"],
            hours: "自由參觀",
            coords: [38.3686, 141.0636]
        },
        {
            name: "瑞巖寺",
            desc: "伊達家菩提寺，國寶級建築",
            tags: ["⛩️ 寺廟", "🏛️ 國寶"],
            hours: "8:00-17:00",
            coords: [38.3717, 141.0656]
        },
        {
            name: "円通院",
            desc: "美麗庭園，紅葉名所",
            tags: ["🌸 庭園", "🍁 紅葉"],
            hours: "8:30-17:00",
            coords: [38.3720, 141.0658]
        },
        {
            name: "觀瀾亭",
            desc: "伊達政宗茶室，品茶賞景",
            tags: ["🍵 茶室", "🌊 海景"],
            hours: "8:30-17:00",
            coords: [38.3686, 141.0636]
        }
    ],

    // Day 3 午餐
    "day3_lunch": [
        {
            name: "松島 さかな市場",
            desc: "新鮮海鮮丼飯、烤魚",
            tags: ["🦞 海鮮", "🍱 丼飯"],
            hours: "8:00-17:00",
            coords: [38.3686, 141.0636]
        },
        {
            name: "松島 かき小屋",
            desc: "現烤牡蠣，無限續",
            tags: ["🦪 牡蠣", "🔥 炭烤"],
            hours: "10:00-16:00",
            coords: [38.3686, 141.0636]
        },
        {
            name: "洗心庵",
            desc: "景觀餐廳，眺望松島灣",
            tags: ["🌊 海景", "🍱 定食"],
            hours: "11:00-15:00",
            coords: [38.3686, 141.0636]
        }
    ],

    // Day 3 晚餐
    "day3_dinner": [
        {
            name: "一番町居酒屋街",
            desc: "多家居酒屋選擇",
            tags: ["🍶 居酒屋"],
            hours: "17:00-凌晨",
            coords: [38.2626, 140.8742]
        },
        {
            name: "善治郎",
            desc: "味噌烤牛舌",
            tags: ["🥩 牛舌"],
            hours: "11:00-21:00",
            coords: [38.2622, 140.8741]
        },
        {
            name: "炭火焼肉 牛門",
            desc: "高品質和牛燒肉",
            tags: ["🥩 燒肉"],
            hours: "17:00-23:00",
            coords: [38.2624, 140.8745]
        }
    ],

    // Day 4 早餐
    "day4_breakfast": [
        {
            name: "珈琲館 仙台青葉通店",
            desc: "咖啡廳早餐，咖啡、吐司、沙拉",
            tags: ["☕ 咖啡廳", "🍳 早餐"],
            hours: "07:00-22:00",
            coords: [38.2599, 140.8785]
        }
    ],

    // Day 4 景點
    "day4_sightseeing": [
        {
            name: "麒麟啤酒仙台工廠",
            desc: "參觀啤酒製造過程，免費試飲新鮮啤酒（需預約）",
            tags: ["🍺 啤酒", "🏭 工廠見學"],
            hours: "需預約",
            coords: [38.2789, 140.9544]
        },
        {
            name: "仙台うみの杜水族館",
            desc: "東北最大水族館，海豚海獅表演精彩",
            tags: ["🐟 水族館", "🐬 海洋生物"],
            hours: "09:00-17:30",
            coords: [38.2858, 141.0444]
        }
    ],

    // Day 4 購物
    "day4_shopping": [
        {
            name: "三井 Outlet Park 仙台港",
            desc: "東北最大 Outlet，120+ 品牌",
            tags: ["🛍️ Outlet", "👜 購物"],
            hours: "10:00-20:00",
            coords: [38.2858, 141.0331]
        },
        {
            name: "BLUE LABEL / BLACK LABEL CRESTBRIDGE",
            desc: "英倫風格服飾品牌",
            tags: ["👗 服飾", "🎩 英倫"],
            hours: "10:00-20:00",
            coords: [38.2858, 141.0331]
        }
    ],

    // Day 4 午餐
    "day4_lunch": [
        {
            name: "Outlet 美食廣場",
            desc: "多家餐廳選擇：拉麵、丼飯、洋食",
            tags: ["🍱 多選擇", "🍜 美食廣場"],
            hours: "11:00-20:00",
            coords: [38.2858, 141.0331]
        }
    ],

    // Day 4 晚餐
    "day4_dinner": [
        {
            name: "仙台站牛舌街",
            desc: "仙台站內多家牛舌名店",
            tags: ["🥩 牛舌", "🏪 選擇多"],
            hours: "11:00-22:00",
            coords: [38.2605, 140.8789]
        },
        {
            name: "一番町居酒屋",
            desc: "飯店周邊居酒屋",
            tags: ["🍶 居酒屋"],
            hours: "17:00-凌晨",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 5 早餐
    "day5_breakfast": [
        {
            name: "Humming Meal Market",
            desc: "仙台站內健康早餐，新鮮沙拉和飲品",
            tags: ["🍳 早餐", "🚉 車站"],
            hours: "07:00-22:00",
            coords: [38.2605, 140.8789]
        }
    ],

    // Day 5 景點
    "day5_sightseeing": [
        {
            name: "瑞鳳殿",
            desc: "伊達政宗陵墓，華麗桃山建築",
            tags: ["⛩️ 陵墓", "🏛️ 建築"],
            hours: "9:00-16:30",
            coords: [38.2473, 140.8711]
        },
        {
            name: "仙台城跡（青葉城）",
            desc: "伊達政宗銅像、全景觀景台",
            tags: ["🏯 城跡", "📸 景觀"],
            hours: "自由參觀",
            coords: [38.2547, 140.8433]
        },
        {
            name: "大崎八幡宮",
            desc: "國寶級神社，黑漆金裝飾",
            tags: ["⛩️ 神社", "🏛️ 國寶"],
            hours: "自由參觀",
            coords: [38.2808, 140.8531]
        }
    ],

    // Day 5 點心
    "day5_snack": [
        {
            name: "ちゅんちゅん堂",
            desc: "仙台城跡旁的可愛甜點咖啡店",
            tags: ["🍰 甜點", "☕ 咖啡"],
            hours: "10:00-17:00",
            coords: [38.2547, 140.8433]
        }
    ],

    // Day 5 午餐
    "day5_lunch": [
        {
            name: "石亭(せきてい) 八幡茶屋",
            desc: "大崎八幡宮旁的傳統日式料理",
            tags: ["🍱 午餐", "🏯 傳統"],
            hours: "11:00-15:00",
            coords: [38.2808, 140.8531]
        }
    ],

    // Day 5 晚餐
    "day5_dinner": [
        {
            name: "Dining Chikara-ya 仙台站前店",
            desc: "牛舌料理專門店，招牌厚切牛舌",
            tags: ["🥩 牛舌", "🍽️ 晚餐"],
            hours: "11:00-22:00",
            coords: [38.2608, 140.8818]
        }
    ],

    // Day 6 早餐
    "day6_breakfast": [
        {
            name: "飯店早餐",
            desc: "Daiwa Roynet Hotel 自助早餐",
            tags: ["🏨 飯店", "🍳 自助"],
            hours: "6:30-10:00",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 6 景點
    "day6_sightseeing": [
        {
            name: "鹽竈神社",
            desc: "東北鎮守、陸奧國一之宮",
            tags: ["⛩️ 神社", "🏛️ 歷史"],
            hours: "自由參觀",
            coords: [38.3156, 141.0219]
        },
        {
            name: "鹽竈酒造見學（浦霞酒造）",
            desc: "參觀日本酒釀造過程",
            tags: ["🍶 日本酒", "🏭 酒藏"],
            hours: "需預約",
            coords: [38.3089, 141.0186]
        }
    ],

    // Day 6 午餐
    "day6_lunch": [
        {
            name: "鹽竈市場壽司街",
            desc: "新鮮壽司，CP 值超高",
            tags: ["🍣 壽司", "🐟 海鮮"],
            hours: "8:00-15:00",
            coords: [38.3122, 141.0194]
        }
    ],

    // Day 6 購物
    "day6_shopping": [
        {
            name: "鹽竈水產物仲卸市場",
            desc: "新鮮海產、伴手禮採購",
            tags: ["🦞 海鮮", "🎁 伴手禮"],
            hours: "8:00-15:00",
            coords: [38.3122, 141.0194]
        }
    ],

    // Day 6 晚餐
    "day6_dinner": [
        {
            name: "最後晚餐",
            desc: "一番町或仙台站選擇最後一晚晚餐",
            tags: ["🍽️ 晚餐", "🎊 最後一晚"],
            hours: "17:00-22:00",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 7 早餐
    "day7_breakfast": [
        {
            name: "松屋 仙台一番町店",
            desc: "日式平價牛丼連鎖店，快速方便",
            tags: ["🍱 牛丼", "🍳 早餐"],
            hours: "24小時營業",
            coords: [38.2620, 140.8740]
        }
    ],

    // Day 7 購物
    "day7_shopping": [
        {
            name: "S-PAL 仙台",
            desc: "仙台站伴手禮集中地",
            tags: ["🎁 伴手禮", "🏬 百貨"],
            hours: "8:00-21:00",
            coords: [38.2605, 140.8789]
        },
        {
            name: "一番町最後採買",
            desc: "飯店周邊最後購物",
            tags: ["🛍️ 購物", "🎁 伴手禮"],
            hours: "10:00-20:00",
            coords: [38.2626, 140.8742]
        }
    ],

    // Day 7 午餐
    "day7_lunch": [
        {
            name: "仙台機場午餐",
            desc: "機場內餐廳選擇，牛舌便當或拉麵",
            tags: ["✈️ 機場", "🍱 午餐"],
            hours: "機場營業時間",
            coords: [38.1397, 140.9169]
        }
    ]
};