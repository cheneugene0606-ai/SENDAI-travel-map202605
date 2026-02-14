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
                name: "PARCO 購物時間",
                desc: "逛設計師品牌與動漫周邊，多個品牌可選",
                category: "shopping",
                mealType: "shopping",
                tags: ["🛍️ 購物", "👗 時尚"],
                coords: [38.2596, 140.8797]
            },
            {
                time: "12:00",
                name: "洋食 hachi",
                desc: "品嚐日式洋食料理，蛋包飯和漢堡排是招牌",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍱 洋食", "🍳 蛋包飯"],
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
                time: "08:00",
                name: "Date Cafe O'rder（仙台站內）",
                desc: "出發前必吃！推薦茶泡飯套餐或飯糰，精緻的宮城在地特色",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍚 茶泡飯", "🍙 飯糰"],
                coords: [38.2609, 140.8824]
            },
            {
                time: "09:30",
                name: "松島海岸車站前",
                desc: "抵達松島海岸站，日本三景之旅起點",
                category: "attraction",
                mealType: null,
                tags: ["🌊 日本三景", "📸 車站"],
                coords: [38.3685, 141.0592] 
            },
            {
                time: "10:00",
                name: "松島遊覽船乘船處",
                desc: "丸文松島汽船或松島島巡り観光船，乘船遊覽松島灣",
                category: "attraction",
                mealType: null,
                tags: ["⛵ 遊船", "🌅 絕景"],
                coords: [38.3688, 141.0618]
            },
            {
                time: "11:00",
                name: "五大堂",
                desc: "松島的象徵性建築，重要文化財，透橋很有特色",
                category: "attraction",
                mealType: null,
                tags: ["⛩️ 寺廟", "🏛️ 重要文化財"],
                coords: [38.3696, 141.0633]
            },
            {
                time: "11:30",
                name: "瑞巖寺（國寶）",
                desc: "伊達政宗的菩提寺，國寶級的建築與庭園",
                category: "attraction",
                mealType: null,
                tags: ["⛩️ 寺廟", "🏛️ 國寶"],
                coords: [38.3705, 141.0600]
            },
            {
                time: "12:30",
                name: "松島美食商店街",
                desc: "牡蠣漢堡、生牡蠣丼、爆彈炸牡蠣等排隊名店，點擊查看選項",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🦪 牡蠣", "⭐ 必吃"],
                coords: [38.3687, 141.0612]
            },
            {
                time: "14:30",
                name: "松島小吃時間",
                desc: "牛肉包、牡蠣咖哩麵包、拉斯薯條等特色小吃",
                category: "restaurant",
                mealType: "snack",
                tags: ["🍔 小吃", "🥔 炸物"],
                coords: [38.3686, 141.0612]
            },
            {
                time: "15:30",
                name: "松島蒲鉾本舖",
                desc: "體驗自己動手燒烤魚板（笹かま），現烤現吃",
                category: "attraction",
                mealType: null,
                tags: ["🐟 魚板", "🔥 體驗"],
                coords: [38.3684, 141.0612]
            },
            {
                time: "16:00",
                name: "福浦橋入口",
                desc: "走過紅色福浦橋前往福浦島散步，祈求良緣",
                category: "attraction",
                mealType: null,
                tags: ["🌉 紅橋", "💕 結緣"],
                coords: [38.3676, 141.0648]
            },
            {
                time: "17:00",
                name: "松島伴手禮採買",
                desc: "松華堂蜂蜜蛋糕、雪竹屋仙貝、松島武藤屋地酒",
                category: "specialty",
                mealType: null,
                tags: ["🎁 伴手禮", "🍶 地酒"],
                coords: [38.3685, 141.0612]
            },
            {
                time: "18:30",
                name: "返回仙台",
                desc: "搭乘 JR 仙石線返回仙台（約 40 分鐘）",
                category: "attraction",
                mealType: null,
                tags: ["🚇 交通"],
                coords: [38.2609, 140.8824]
            }
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
            features: [
                "📍 一番町商圈核心",
                "🚶 步行可達主要景點",
                "🛁 大浴場",
                "🧺 洗衣機烘衣機設備"
            ]
        },
        locations: [
            {
                time: "08:30",
                name: "珈琲館 仙台青葉通店",
                desc: "在經典的日式咖啡館享用炭火咖啡與早午餐",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["☕ 咖啡", "🥪 早餐"],
                coords: [38.2605, 140.8790]
            },
            {
                time: "10:00",
                name: "麒麟啤酒仙台工廠（需預約）",
                desc: "參觀生產線，最後享有三杯免費生啤酒/飲料試飲",
                category: "attraction",
                mealType: null,
                tags: ["🍺 啤酒工廠", "🏭 見學"],
                coords: [38.3089, 141.0275]
            },
            {
                time: "12:00",
                name: "Kirin Beer Port Sendai",
                desc: "工廠附設餐廳，必點成吉思汗烤羊肉搭配一番搾生啤酒",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍖 烤羊肉", "🍺 生啤酒"],
                coords: [38.3089, 141.0275]
            },
            {
                time: "13:30",
                name: "三井 Outlet Park 仙台港",
                desc: "東北最大 Outlet，BEAMS、United Arrows、Nike、Adidas 等 120+ 品牌",
                category: "shopping",
                mealType: null,
                tags: ["🛍️ Outlet", "👟 運動品牌"],
                coords: [38.3042, 141.0386]
            },
            {
                time: "14:30",
                name: "仙台海洋森林水族館",
                desc: "Outlet 旁，超大型水槽與東北特有魚種，海豚海獅表演精彩",
                category: "attraction",
                mealType: null,
                tags: ["🐬 水族館", "🐟 海洋生物"],
                coords: [38.3025, 141.0445]
            },
            {
                time: "16:00",
                name: "麒麟工廠限定商店",
                desc: "必買啤酒酵母米果與工廠限定起司餅乾",
                category: "specialty",
                mealType: null,
                tags: ["🎁 伴手禮", "🍺 限定"],
                coords: [38.3089, 141.0275]
            },
            {
                time: "17:00",
                name: "Check-in 一番町飯店",
                desc: "入住第二間飯店，位於一番町購物區",
                category: "attraction",
                mealType: null,
                tags: ["🏨 換飯店"],
                coords: [38.2584, 140.8751]
            },
            {
                time: "19:00",
                name: "一番町周邊晚餐",
                desc: "飯店周邊有眾多餐廳選擇",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍽️ 晚餐", "🌃 市區"],
                coords: [38.2584, 140.8751]
            }
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
            features: [
                "📍 一番町商圈核心",
                "🚶 步行可達主要景點",
                "🛁 大浴場",
                "🧺 洗衣機烘衣機設備"
            ]
        },
        locations: [
            {
                time: "09:00",
                name: "瑞鳳殿",
                desc: "伊達政宗的靈廟，華麗的桃山文化建築",
                category: "attraction",
                mealType: null,
                tags: ["⛩️ 靈廟", "🎨 桃山文化"],
                coords: [38.2459, 140.8778]
            },
            {
                time: "11:00",
                name: "仙台城跡（青葉城）",
                desc: "登高望遠，眺望仙台市街，伊達政宗騎馬像必拍",
                category: "attraction",
                mealType: null,
                tags: ["🏯 城跡", "👁️ 展望台"],
                coords: [38.2553, 140.8619]
            },
            {
                time: "12:30",
                name: "城跡茶屋",
                desc: "在仙台城跡附近享用傳統和食",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍱 和食", "🏯 景觀餐廳"],
                coords: [38.2550, 140.8625]
            },
            {
                time: "14:00",
                name: "大崎八幡宮",
                desc: "國寶級神社，伊達政宗建造的權現造建築",
                category: "attraction",
                mealType: null,
                tags: ["⛩️ 神社", "🏛️ 國寶"],
                coords: [38.2803, 140.8542]
            },
            {
                time: "16:00",
                name: "仙台車站周邊",
                desc: "逛逛車站周邊商場，採買伴手禮",
                category: "shopping",
                mealType: null,
                tags: ["🛍️ 購物", "🎁 伴手禮"],
                coords: [38.2609, 140.8824]
            },
            {
                time: "18:30",
                name: "利久牛舌",
                desc: "再次品嚐仙台名物牛舌（不同店家）",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍖 牛舌", "⭐ 名店"],
                coords: [38.2607, 140.8826]
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
            checkIn: "14:00",
            dates: "5/23-5/26 (3晚)",
            image: "images/hotel2.jpg",
            features: [
                "📍 一番町商圈核心",
                "🚶 步行可達主要景點",
                "🛁 大浴場",
                "🧺 洗衣機烘衣機設備"
            ]
        },
        locations: [
            {
                time: "09:30",
                name: "鹽竈神社",
                desc: "陸奧國一之宮，走 202 階石階祈求長壽，俯瞰鹽竃港",
                category: "attraction",
                mealType: null,
                tags: ["⛩️ 神社", "🌸 能量景點"],
                coords: [38.3147, 141.0211]
            },
            {
                time: "11:00",
                name: "鹽釜車站周邊散策",
                desc: "逛逛在地商店街、市場，感受漁港城市的氣氛",
                category: "shopping",
                mealType: null,
                tags: ["🚶 散步", "🏪 在地商店"],
                coords: [38.3120, 141.0220]
            },
            {
                time: "12:00",
                name: "鹽竈壽司街",
                desc: "6 家頂級壽司店任選！廻鮮壽司、鮪魚專門店、すし哲等，點擊查看選項",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍣 壽司", "🐟 鮪魚"],
                coords: [38.3103, 141.0242]
            },
            {
                time: "13:30",
                name: "鹽竈伴手禮採買",
                desc: "菓匠榮太樓生銅鑼燒、松島武藤屋地酒、浦霞酒造名酒",
                category: "specialty",
                mealType: null,
                tags: ["🎁 伴手禮", "🍶 地酒"],
                coords: [38.3115, 141.0225]
            },
            {
                time: "14:00",
                name: "返回仙台市區",
                desc: "搭乘 JR 仙石線返回仙台（約 20 分鐘）",
                category: "attraction",
                mealType: null,
                tags: ["🚇 交通"],
                coords: [38.2609, 140.8824]
            },
            {
                time: "15:00",
                name: "仙台市區購物",
                desc: "PARCO、一番町、S-PAL 等商圈自由逛街，最後採買",
                category: "shopping",
                mealType: null,
                tags: ["🛍️ 購物", "🎁 伴手禮"],
                coords: [38.2596, 140.8797]
            },
            {
                time: "18:30",
                name: "仙台市區晚餐",
                desc: "在市區選擇喜歡的餐廳用餐",
                category: "restaurant",
                mealType: "dinner",
                tags: ["🍽️ 晚餐", "🌃 自由選擇"],
                coords: [38.2596, 140.8797]
            }
        ]
    },
    7: {
        title: "Day 7: 最後採買與返程",
        date: "5/26 (二)",
        weather: "☀️",
        location: "仙台市區 & 仙台機場",
        bgImage: "images/day7.jpg",
        locations: [
            {
                time: "08:30",
                name: "SENDAI STATION BREWERY Fermenteria",
                desc: "站內精釀啤酒釀造所，享受最後的早晨咖啡或晨酒",
                category: "restaurant",
                mealType: "breakfast",
                tags: ["🍺 精釀啤酒", "☕ 咖啡", "✨ 站內"],
                coords: [38.2609, 140.8820]
            },
            {
                time: "10:00",
                name: "廣瀨通、青葉通",
                desc: "最後的購物時光，補齊伴手禮",
                category: "shopping",
                mealType: null,
                tags: ["🛍️ 購物", "🎁 伴手禮"],
                coords: [38.2592, 140.8789]
            },
            {
                time: "11:30",
                name: "Check-out & 前往機場",
                desc: "提早飯店退房，搭乘包車前往仙台機場（預留充裕時間用餐）",
                category: "attraction",
                mealType: null,
                tags: ["🏨 退房", "🚗 交通"],
                coords: [38.2584, 140.8751]
            },
            {
                time: "12:30",
                name: "牛タン専門レストラン 陣中 仙台機場店",
                desc: "機場必吃美食！位於 1F，推薦招牌「陣中冠舌」定食",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🥩 牛舌", "✨ 機場必吃", "✈️ 機場"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "13:30",
                name: "Airport Restaurant TREGION GALLEY",
                desc: "位於機場 3F，這裡有「那間仙台精釀」！提供東北六縣精釀啤酒與義大利麵",
                category: "restaurant",
                mealType: "lunch",
                tags: ["🍺 精釀啤酒", "🍝 義大利麵", "✨ 東北精釀"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "14:30",
                name: "だし廊 -GoLD-",
                desc: "位於 2F 國內線管制區內，如果進得去必吃這間知名的貝類高湯拉麵",
                category: "restaurant",
                mealType: "snack",
                tags: ["🍜 拉麵", "✨ 名店"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "15:00",
                name: "機場伴手禮 & 登機手續",
                desc: "逛逛 Date Marche 購買最後的毛豆泥甜點，辦理登機",
                category: "shopping",
                mealType: null,
                tags: ["🛍️ 購物", "✈️ 登機"],
                coords: [38.1397, 140.9169]
            },
            {
                time: "17:20",
                name: "仙台空港 起飛",
                desc: "搭乘星宇航空 JX863 返台（17:20起飛）",
                category: "attraction",
                mealType: null,
                tags: ["✈️ 返程", "🌟 星宇航空"],
                coords: [38.1397, 140.9169]
            }
        ]
    }
};

// 天數配置
const daysConfig = [
    { day: 1, label: "DAY 1", date: "05/20", weather: "☀️" },
    { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" },
    { day: 3, label: "DAY 3", date: "05/22", weather: "☀️" },
    { day: 4, label: "DAY 4", date: "05/23", weather: "⛅" },
    { day: 5, label: "DAY 5", date: "05/24", weather: "☀️" },
    { day: 6, label: "DAY 6", date: "05/25", weather: "🌤️" },
    { day: 7, label: "DAY 7", date: "05/26", weather: "☀️" }
];

// 分類設定
const categories = {
    all: { label: "全部", icon: "📍" },
    attraction: { label: "景點", icon: "🏯" },
    restaurant: { label: "餐廳", icon: "🍽️" },
    shopping: { label: "購物", icon: "🛍️" },
    specialty: { label: "特產", icon: "🎁" },
    market: { label: "超市", icon: "🛒" }
};

// 用餐時段設定
const mealTypes = {
    all: { label: "全部", icon: "🍽️" },
    breakfast: { label: "早餐", icon: "☀️" },
    lunch: { label: "午餐", icon: "🍱" },
    dinner: { label: "晚餐", icon: "🌙" }
};

// 獨立超市列表
const supermarkets = [
    {
        name: "Lopia Sendai Yodobashi",
        desc: "平價超市，肉品和生鮮特別便宜",
        category: "market",
        tags: ["🛒 超市", "🥩 肉品"],
        coords: [38.2598, 140.8813],
        hours: "10:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=Lopia+Sendai+Yodobashi"
    },
    {
        name: "成城石井 仙台 S-PAL 店",
        desc: "高級進口超市，有許多精緻食材和甜點",
        category: "specialty",
        tags: ["🛒 高級超市", "🍰 甜點"],
        coords: [38.2608, 140.8820],
        hours: "10:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=成城石井+仙台"
    },
    {
        name: "KALDI 仙台 S-PAL 店",
        desc: "咖啡豆和進口食品專賣店，伴手禮好選擇",
        category: "specialty",
        tags: ["☕ 咖啡", "🌍 進口食品"],
        coords: [38.2609, 140.8819],
        hours: "10:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=KALDI+仙台+S-PAL"
    },
    {
        name: "佐藤商會 仙台朝市店",
        desc: "朝市內的海鮮和當地特產店",
        category: "market",
        tags: ["🐟 海鮮", "🎁 特產"],
        coords: [38.2622, 140.8786],
        hours: "08:00-17:00",
        url: "https://www.google.com/maps/search/?api=1&query=佐藤商會+仙台朝市"
    },
    {
        name: "業務超市 仙台一番町店",
        desc: "大容量平價超市，適合大採購",
        category: "market",
        tags: ["🛒 業務超市", "💰 便宜"],
        coords: [38.2580, 140.8745],
        hours: "09:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=業務超市+仙台"
    },
    {
        name: "AEON 超市 仙台一番町店",
        desc: "日本最大連鎖超市，商品種類齊全，品質有保證",
        category: "market",
        tags: ["🛒 連鎖超市", "🍱 便當熟食"],
        coords: [38.2588, 140.8755],
        hours: "09:00-23:00",
        url: "https://www.google.com/maps/search/?api=1&query=AEON+仙台一番町"
    }
];

// 獨立購物店列表
const shoppingStores = [
    {
        name: "PARCO 吉伊卡哇專區",
        desc: "吉伊卡哇周邊商品專賣，粉絲必訪",
        category: "shopping",
        tags: ["🎨 動漫", "🧸 吉伊卡哇"],
        coords: [38.2596, 140.8798],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=PARCO+仙台+吉伊卡哇"
    },
    {
        name: "PARCO 三麗鷗專區",
        desc: "Hello Kitty、美樂蒂等三麗鷗角色商品",
        category: "shopping",
        tags: ["🎀 三麗鷗", "🛍️ 周邊"],
        coords: [38.2597, 140.8798],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=PARCO+仙台+三麗鷗"
    },
    {
        name: "Disney Store 仙台",
        desc: "迪士尼官方商品專賣店",
        category: "shopping",
        tags: ["🏰 迪士尼", "🎁 周邊"],
        coords: [38.2596, 140.8799],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=Disney+Store+仙台"
    },
    {
        name: "ABC-MART GRAND STAGE Sendai Shop",
        desc: "日本最大鞋類連鎖店旗艦店，運動鞋潮鞋應有盡有",
        category: "shopping",
        tags: ["👟 運動鞋", "🛍️ 潮鞋"],
        coords: [38.2600, 140.8820],
        hours: "10:00-20:30",
        url: "https://www.google.com/maps/search/?api=1&query=ABC-MART+仙台"
    },
    {
        name: "松島武藤屋 Mutouya",
        desc: "著名地酒專賣店，採買宮城地酒與東北精釀啤酒",
        category: "shopping",
        tags: ["🍶 地酒", "🍺 精釀啤酒"],
        coords: [38.3687, 141.0612],
        hours: "09:30-17:30",
        url: "https://www.google.com/maps/search/?api=1&query=武藤屋+松島"
    },
    {
        name: "浦霞酒造（鹽竈）",
        desc: "鹽竈名酒發源地，必買浦霞禪純米吟釀或氣泡感的浦霞 No.12",
        category: "shopping",
        tags: ["🍶 日本酒", "✨ 名酒"],
        coords: [38.3115, 141.0228],
        hours: "09:00-17:00",
        url: "https://www.google.com/maps/search/?api=1&query=浦霞酒造+鹽竈"
    },
    {
        name: "Yodobashi Camera Multimedia Sendai",
        desc: "仙台站東口的大型電器百貨，模型、遊戲、相機應有盡有",
        category: "shopping",
        tags: ["📷 電器", "🎮 遊戲/模型"],
        coords: [38.2593, 140.8839],
        hours: "09:30-22:00",
        url: "https://www.google.com/maps/search/?api=1&query=ヨドバシカメラ+仙台"
    },
    {
        name: "COMME des GARÇONS",
        desc: "川久保玲經典設計品牌，前衛時尚",
        category: "shopping",
        tags: ["👗 時尚", "✨ 設計師品牌"],
        coords: [38.2596, 140.8797],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=COMME+des+GARÇONS+仙台+PARCO"
    },
    {
        name: "CA4LA",
        desc: "日本帽子品牌專賣店，款式豐富多樣",
        category: "shopping",
        tags: ["🎩 帽子", "👒 配件"],
        coords: [38.2596, 140.8797],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=CA4LA+仙台+PARCO"
    },
    {
        name: "BAO BAO ISSEY MIYAKE Sendai Parco 2 Store",
        desc: "三宅一生經典包款，立體幾何設計獨特",
        category: "shopping",
        tags: ["👜 包包", "✨ 設計師品牌"],
        coords: [38.2597, 140.8797],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=BAO+BAO+ISSEY+MIYAKE+仙台+PARCO"
    }
];

// 獨立伴手禮店列表
const souvenirStores = [
    {
        name: "茅乃舍 仙台店",
        desc: "高湯包等日式調味料名店，送禮自用兩相宜",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍲 調味料"],
        coords: [38.2590, 140.8780],
        hours: "10:00-19:00",
        url: "https://www.google.com/maps/search/?api=1&query=茅乃舍+仙台"
    },
    {
        name: "茅乃舍 PARCO 2 店",
        desc: "茅乃舍 PARCO 分店，方便採購伴手禮",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍲 調味料"],
        coords: [38.2595, 140.8797],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=茅乃舍+PARCO+仙台"
    },
    {
        name: "Maison Cœlacanthe",
        desc: "腔棘魚造型甜點專賣店，招牌シーラカンス最中必買",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍰 甜點", "🐟 造型"],
        coords: [38.2598, 140.8765],
        hours: "10:00-19:00",
        url: "https://www.google.com/maps/search/?api=1&query=Maison+Cœlacanthe+仙台"
    },
    {
        name: "kazunori ikeda individuel Minamimachidori",
        desc: "池田一紀主廚的甜點專賣店，精品級伴手禮",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍮 法式甜點"],
        coords: [38.2605, 140.8828],
        hours: "10:00-18:30",
        url: "https://www.google.com/maps/search/?api=1&query=kazunori+ikeda+仙台"
    },
    {
        name: "久世福商店 仙台Clis Road店",
        desc: "精選日本各地優質食材和調味料，伴手禮種類豐富",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍱 食材"],
        coords: [38.2612, 140.8802],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=久世福商店+仙台"
    },
    {
        name: "松華堂菓子店（松島）",
        desc: "必買經典蜂蜜蛋糕，濃郁不膩，松島名店",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍰 蜂蜜蛋糕"],
        coords: [38.3685, 141.0612],
        hours: "09:00-17:30",
        url: "https://www.google.com/maps/search/?api=1&query=松華堂+松島"
    },
    {
        name: "菓匠 榮太樓（鹽竈）",
        desc: "必買生銅鑼燒，冷藏過後內餡像冰淇淋般綿密",
        category: "specialty",
        tags: ["🎁 伴手禮", "🥞 銅鑼燒"],
        coords: [38.3118, 141.0223],
        hours: "09:00-18:00",
        url: "https://www.google.com/maps/search/?api=1&query=榮太郎+鹽竈"
    },
    {
        name: "丹六園",
        desc: "仙台知名和菓子老店，必買仙台銘菓",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍡 和菓子"],
        coords: [38.2606, 140.8816],
        hours: "09:00-19:00",
        url: "https://www.google.com/maps/search/?api=1&query=丹六園+仙台"
    },
    {
        name: "熊谷屋仙臺駄菓子本舗 エスパル店",
        desc: "仙台傳統零食專賣店，懷舊駄菓子",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍬 零食"],
        coords: [38.2608, 140.8821],
        hours: "10:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=熊谷屋+エスパル仙台"
    },
    {
        name: "ロワイヤルテラッセ エスパル店",
        desc: "法式甜點專賣店，精緻蛋糕與巧克力",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍰 法式甜點"],
        coords: [38.2607, 140.8821],
        hours: "10:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=ロワイヤルテラッセ+エスパル仙台"
    },
    {
        name: "伊達のこみち",
        desc: "仙台站內伴手禮專區，集結宮城名產",
        category: "specialty",
        tags: ["🎁 伴手禮", "🏪 綜合"],
        coords: [38.2609, 140.8818],
        hours: "09:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=伊達のこみち+仙台駅"
    },
    {
        name: "牛タン専門店 陣中 仙台駅2F",
        desc: "牛舌專門店伴手禮，真空包裝牛舌",
        category: "specialty",
        tags: ["🎁 伴手禮", "🥩 牛舌"],
        coords: [38.2609, 140.8822],
        hours: "09:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=陣中+仙台駅"
    },
    {
        name: "萩の月",
        desc: "仙台最有名的伴手禮，柔軟海綿蛋糕包裹卡士達奶油",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍰 蛋糕", "⭐ 必買"],
        coords: [38.2609, 140.8821],
        hours: "09:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=萩の月+仙台駅"
    },
    {
        name: "くりをかし",
        desc: "栗子甜點專賣店，精緻栗子和菓子",
        category: "specialty",
        tags: ["🎁 伴手禮", "🌰 栗子"],
        coords: [38.2607, 140.8819],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=くりをかし+仙台"
    },
    {
        name: "白松がモナカ",
        desc: "仙台傳統最中餅，經典和菓子老店",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍡 和菓子", "✨ 老店"],
        coords: [38.2606, 140.8818],
        hours: "09:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=白松がモナカ+仙台"
    },
    {
        name: "あんバター最中",
        desc: "紅豆奶油最中，創新口味最中餅",
        category: "specialty",
        tags: ["🎁 伴手禮", "🍡 最中", "🧈 奶油"],
        coords: [38.2605, 140.8817],
        hours: "10:00-20:00",
        url: "https://www.google.com/maps/search/?api=1&query=あんバター最中+仙台"
    }
];

// 獨立餐廳列表（值得專程前往的餐廳）
const restaurants = [
    {
        name: "善治郎 仙台站前本店",
        desc: "仙台必吃牛舌老店，厚切牛舌香嫩多汁",
        category: "restaurant",
        tags: ["🥩 牛舌", "⭐ 必吃"],
        coords: [38.2598, 140.8805],
        hours: "11:00-22:00",
        url: "https://www.google.com/maps/search/?api=1&query=善治郎+仙台站前本店"
    },
    {
        name: "仙令鮨 仙台站1樓店",
        desc: "仙台站內高級壽司店，新鮮海產現做",
        category: "restaurant",
        tags: ["🍣 壽司", "✨ 高級"],
        coords: [38.2609, 140.8820],
        hours: "11:00-22:00",
        url: "https://www.google.com/maps/search/?api=1&query=仙令鮨+仙台駅"
    },
    {
        name: "マルモ",
        desc: "仙台朝市人氣店家，新鮮海鮮料理",
        category: "restaurant",
        tags: ["🐟 海鮮", "⭐ 朝市"],
        coords: [38.2623, 140.8787],
        hours: "07:00-15:00",
        url: "https://www.google.com/maps/search/?api=1&query=マルモ+仙台朝市"
    },
    {
        name: "浜伸 渡邊商店（はましん食堂）",
        desc: "朝市老字號食堂，海鮮定食豐富",
        category: "restaurant",
        tags: ["🍱 定食", "✨ 老店"],
        coords: [38.2620, 140.8785],
        hours: "07:00-14:30",
        url: "https://www.google.com/maps/search/?api=1&query=はましん食堂+仙台朝市"
    },
    {
        name: "おにぎり処 あみ",
        desc: "現做美味飯糰專賣店，早餐好選擇",
        category: "restaurant",
        tags: ["🍙 飯糰", "🍚 朝市"],
        coords: [38.2623, 140.8788],
        hours: "07:00-14:00",
        url: "https://www.google.com/maps/search/?api=1&query=おにぎり処+あみ+仙台朝市"
    },
    {
        name: "齊藤熟食店",
        desc: "熟食專門店，現做便當和小菜",
        category: "restaurant",
        tags: ["🍱 便當", "🥘 熟食"],
        coords: [38.2621, 140.8787],
        hours: "07:30-15:00",
        url: "https://www.google.com/maps/search/?api=1&query=齊藤熟食店+仙台朝市"
    },
    {
        name: "伊藤商店 仙台朝市店",
        desc: "朝市內的人氣餐飲店",
        category: "restaurant",
        tags: ["🐟 海鮮", "💰 朝市"],
        coords: [38.2624, 140.8789],
        hours: "07:00-15:00",
        url: "https://www.google.com/maps/search/?api=1&query=伊藤商店+仙台朝市"
    },
    {
        name: "閣 仙台站前店",
        desc: "高級牛舌專門店，定食套餐豐富",
        category: "restaurant",
        tags: ["🥩 牛舌", "✨ 高級"],
        coords: [38.2605, 140.8815],
        hours: "11:00-22:30",
        url: "https://www.google.com/maps/search/?api=1&query=閣+仙台站前店"
    },
    {
        name: "廻鮮寿司 塩釜港",
        desc: "鹽竈排隊第一名店，迴轉壽司中的極品",
        category: "restaurant",
        tags: ["🍣 壽司", "🐟 海鮮"],
        coords: [38.3103, 141.0242],
        hours: "11:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=廻鮮寿司+塩釜港"
    },
    {
        name: "松島魚市場",
        desc: "必吃牡蠣漢堡！水產市場直送的新鮮牡蠣",
        category: "restaurant",
        tags: ["🦪 牡蠣", "🍔 漢堡"],
        coords: [38.3683, 141.0645],
        hours: "10:00-17:00",
        url: "https://www.google.com/maps/search/?api=1&query=松島魚市場"
    },
    {
        name: "牡蠣屋フライ亭",
        desc: "2025 新開幕！招牌巨大爆彈炸牡蠣",
        category: "restaurant",
        tags: ["🦪 炸牡蠣", "🆕 新店"],
        coords: [38.3688, 141.0641],
        hours: "11:30-18:00",
        url: "https://www.google.com/maps/search/?api=1&query=牡蠣屋フライ亭+松島"
    },
    {
        name: "塩竈すし哲 本店",
        desc: "鹽竈老字號壽司店，職人手藝精湛",
        category: "restaurant",
        tags: ["🍣 壽司", "✨ 老店"],
        coords: [38.3108, 141.0245],
        hours: "11:30-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=塩竈すし哲+本店"
    },
    {
        name: "まぐろ専門店 がお",
        desc: "鮪魚專門店，鮪魚解體秀值得一看",
        category: "restaurant",
        tags: ["🐟 鮪魚", "👨‍🍳 專門店"],
        coords: [38.3110, 141.0238],
        hours: "11:00-15:00",
        url: "https://www.google.com/maps/search/?api=1&query=まぐろ専門店+がお+鹽竈"
    },
    {
        name: "洋食 hachi",
        desc: "人氣洋食餐廳，漢堡排與蛋包飯必吃",
        category: "restaurant",
        tags: ["🍽️ 洋食", "⭐ 必吃"],
        coords: [38.2596, 140.8797],
        hours: "11:30-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=洋食+hachi+仙台"
    },
    {
        name: "蝦味拉麵 蝦助",
        desc: "名掛丁人氣拉麵，濃厚蝦湯令人難忘",
        category: "restaurant",
        tags: ["🍜 拉麵", "🦐 蝦湯"],
        coords: [38.2590, 140.8752],
        hours: "11:00-22:00",
        url: "https://www.google.com/maps/search/?api=1&query=蝦助+仙台"
    },
    {
        name: "鰻の成瀬 仙台一番町店",
        desc: "鰻魚飯專門店，肥美鰻魚入口即化",
        category: "restaurant",
        tags: ["🐟 鰻魚", "✨ 專門店"],
        coords: [38.2585, 140.8750],
        hours: "11:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=鰻の成瀬+仙台"
    },
    {
        name: "焼肉・ホルモン伽樂(かぐら)",
        desc: "燒肉與內臟專門店，CP值高",
        category: "restaurant",
        tags: ["🥩 燒肉", "🍖 內臟"],
        coords: [38.2595, 140.8758],
        hours: "17:00-24:00",
        url: "https://www.google.com/maps/search/?api=1&query=伽樂+仙台"
    },
    {
        name: "ホシヤマ珈琲店 アエル店",
        desc: "仙台老牌咖啡店，經典咖啡與蛋糕",
        category: "restaurant",
        tags: ["☕ 咖啡", "🍰 甜點"],
        coords: [38.2610, 140.8825],
        hours: "09:00-21:00",
        url: "https://www.google.com/maps/search/?api=1&query=ホシヤマ珈琲+仙台"
    }
];

// 餐廳備選選項資料庫
const restaurantOptions = {
    "day1_dinner": [
        {
            name: "善治郎牛舌 南町通店",
            desc: "仙台必吃牛舌老店，厚切牛舌香嫩多汁",
            tags: ["🥩 牛舌", "⭐ 必吃"],
            hours: "11:00-22:00",
            coords: [38.2606, 140.8828]
        },
        {
            name: "伊達牛舌本舗 本店",
            desc: "名掛丁牛舌老店，品質穩定",
            tags: ["🥩 牛舌", "✨ 老店"],
            hours: "11:00-22:00",
            coords: [38.2590, 140.8750]
        },
        {
            name: "牛たん料理 閣 名掛丁店",
            desc: "高級牛舌專門店，定食套餐豐富",
            tags: ["🥩 牛舌", "✨ 高級"],
            hours: "11:00-22:30",
            coords: [38.2592, 140.8752]
        }
    ],
    "day1_late_night": [
        {
            name: "いろり家 仙台駅前店",
            desc: "爐端燒居酒屋，新鮮海產炭火燒烤",
            tags: ["🍶 居酒屋", "🔥 爐端燒"],
            hours: "17:00-24:00",
            coords: [38.2605, 140.8810]
        },
        {
            name: "くるり 仙台駅前店",
            desc: "海鮮居酒屋，新鮮漁獲與地酒",
            tags: ["🍶 居酒屋", "🐟 海鮮"],
            hours: "17:00-24:00",
            coords: [38.2607, 140.8812]
        },
        {
            name: "鶏が好きだと酒びたい",
            desc: "雞肉串燒專門店，名掛丁人氣店",
            tags: ["🍶 居酒屋", "🍗 雞串"],
            hours: "18:00-01:00",
            coords: [38.2588, 140.8748]
        },
        {
            name: "北海三陸炭火焼 まるかん",
            desc: "北海道海鮮炭火燒烤",
            tags: ["🍶 居酒屋", "🦀 北海道"],
            hours: "17:00-23:30",
            coords: [38.2595, 140.8755]
        }
    ],
    "day2_shopping": [
        {
            name: "COMME des GARÇONS",
            desc: "川久保玲前衛時尚品牌，黑色系列經典",
            tags: ["👗 時尚", "✨ 設計師品牌"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "BAO BAO ISSEY MIYAKE",
            desc: "三宅一生經典包款，立體幾何設計獨特",
            tags: ["👜 包包", "✨ 設計師品牌"],
            hours: "10:00-20:00",
            coords: [38.2597, 140.8797]
        },
        {
            name: "CA4LA",
            desc: "日本帽子專賣店，款式豐富多樣",
            tags: ["🎩 帽子", "👒 配件"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "PARCO 吉伊卡哇專區",
            desc: "吉伊卡哇周邊商品專賣，粉絲必訪",
            tags: ["🎨 動漫", "🧸 吉伊卡哇"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8798]
        },
        {
            name: "PARCO 三麗鷗專區",
            desc: "Hello Kitty、美樂蒂等三麗鷗角色商品",
            tags: ["🎀 三麗鷗", "🛍️ 周邊"],
            hours: "10:00-20:00",
            coords: [38.2597, 140.8798]
        },
        {
            name: "Disney Store 仙台",
            desc: "迪士尼官方商品專賣店",
            tags: ["🏰 迪士尼", "🎁 周邊"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8799]
        }
    ],
    "day2_breakfast": [
        {
            name: "マルモ",
            desc: "仙台朝市人氣店家，新鮮海鮮料理",
            tags: ["🐟 海鮮", "⭐ 人氣"],
            hours: "07:00-15:00",
            coords: [38.2622, 140.8786]
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
    "day2_parco": [
        {
            name: "COMME des GARÇONS",
            desc: "川久保玲經典設計品牌，前衛時尚黑色系列",
            tags: ["👗 時尚", "✨ 設計師"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "CA4LA",
            desc: "日本帽子專賣店，從日常到正式場合款式齊全",
            tags: ["🎩 帽子", "👒 配件"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "吉伊卡哇專區",
            desc: "吉伊卡哇周邊商品專賣，粉絲必訪",
            tags: ["🎨 動漫", "🧸 吉伊卡哇"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8798]
        },
        {
            name: "三麗鷗專區",
            desc: "Hello Kitty、美樂蒂等三麗鷗角色商品",
            tags: ["🎀 三麗鷗", "🛍️ 周邊"],
            hours: "10:00-20:00",
            coords: [38.2597, 140.8798]
        },
        {
            name: "Disney Store",
            desc: "迪士尼官方商品專賣店",
            tags: ["🏰 迪士尼", "🎁 周邊"],
            hours: "10:00-20:00",
            coords: [38.2596, 140.8799]
        }
    ],
    "day2_parco2": [
        {
            name: "BAO BAO ISSEY MIYAKE",
            desc: "三宅一生經典包款，立體幾何設計獨特",
            tags: ["👜 包包", "✨ 設計師"],
            hours: "10:00-20:00",
            coords: [38.2597, 140.8797]
        },
        {
            name: "茅乃舍 PARCO 2 店",
            desc: "高湯包與調味料專賣店，伴手禮好選擇",
            tags: ["🎁 伴手禮", "🍲 調味料"],
            hours: "10:00-20:00",
            coords: [38.2595, 140.8797]
        }
    ],
    "day2_coffee": [
        {
            name: "ホシヤマ珈琲店 アエル店",
            desc: "仙台老牌咖啡店，經典咖啡與蛋糕",
            tags: ["☕ 咖啡", "🍰 甜點"],
            hours: "09:00-21:00",
            coords: [38.2610, 140.8825]
        },
        {
            name: "FLAT WHITE COFFEE FACTORY DOWNTOWN店",
            desc: "澳式咖啡專門店，扁平白咖啡必喝",
            tags: ["☕ 澳式", "🥐 輕食"],
            hours: "08:00-19:00",
            coords: [38.2585, 140.8750]
        },
        {
            name: "ベーカリー＆カフェ BABEL858",
            desc: "麵包咖啡廳，現烤麵包香氣迷人",
            tags: ["☕ 咖啡", "🥖 麵包"],
            hours: "07:30-19:00",
            coords: [38.2600, 140.8760]
        }
    ],
    "day2_lunch": [
        {
            name: "洋食 hachi",
            desc: "人氣洋食餐廳，漢堡排與蛋包飯必吃",
            tags: ["🍽️ 洋食", "⭐ 必吃"],
            hours: "11:30-21:00",
            coords: [38.2596, 140.8797]
        },
        {
            name: "蝦味拉麵 蝦助",
            desc: "名掛丁人氣拉麵，濃厚蝦湯令人難忘",
            tags: ["🍜 拉麵", "🦐 蝦湯"],
            hours: "11:00-22:00",
            coords: [38.2590, 140.8752]
        },
        {
            name: "ramen ONE",
            desc: "創意拉麵店，多種口味可選",
            tags: ["🍜 拉麵", "✨ 創意"],
            hours: "11:00-23:00",
            coords: [38.2595, 140.8755]
        },
        {
            name: "鶏白湯ラーメン 白鶏舎 マーブルロード店",
            desc: "雞白湯拉麵專門店，湯頭濃郁",
            tags: ["🍜 拉麵", "🐔 雞白湯"],
            hours: "11:00-22:00",
            coords: [38.2588, 140.8750]
        },
        {
            name: "油そば専門店はてな 一番町店",
            desc: "油拌麵專門店，濃郁醬汁與Q彈麵條",
            tags: ["🍜 油拌麵", "✨ 專門店"],
            hours: "11:00-23:00",
            coords: [38.2585, 140.8748]
        }
    ],
    "day2_dessert": [
        {
            name: "水果派 Qu'il fait bon",
            desc: "精緻水果塔專賣店，季節水果滿載",
            tags: ["🍰 水果塔", "✨ 精緻"],
            hours: "11:00-20:00",
            coords: [38.2598, 140.8765]
        },
        {
            name: "うす皮たい焼き 鯛きち 名掛丁本店",
            desc: "薄皮鯛魚燒，現烤酥脆外皮",
            tags: ["🐟 鯛魚燒", "⭐ 人氣"],
            hours: "10:00-19:00",
            coords: [38.2592, 140.8753]
        },
        {
            name: "NAKAO-定禅寺通り店",
            desc: "老牌和菓子店，傳統日式甜點",
            tags: ["🍡 和菓子", "✨ 老店"],
            hours: "09:00-19:00",
            coords: [38.2650, 140.8700]
        },
        {
            name: "黒墨クッキークラブ",
            desc: "手工餅乾咖啡廳，餅乾種類豐富",
            tags: ["🍪 餅乾", "☕ 咖啡"],
            hours: "11:00-19:00",
            coords: [38.2595, 140.8758]
        }
    ],
    "day2_dinner": [
        {
            name: "仙令鮨 仙台站1樓店",
            desc: "仙台站內高級壽司店，新鮮海產現做",
            tags: ["🍣 壽司", "✨ 高級"],
            hours: "11:00-22:00",
            coords: [38.2609, 140.8820]
        },
        {
            name: "鰻の成瀬 仙台一番町店",
            desc: "鰻魚飯專門店，肥美鰻魚入口即化",
            tags: ["🐟 鰻魚", "✨ 專門店"],
            hours: "11:00-21:00",
            coords: [38.2585, 140.8750]
        },
        {
            name: "仔虎 仙台駅前店",
            desc: "牛舌與美式料理複合店",
            tags: ["🥩 牛舌", "🍔 美式"],
            hours: "11:00-23:00",
            coords: [38.2608, 140.8815]
        }
    ],
    "day3_lunch": [
        {
            name: "松島魚市場",
            desc: "必吃牡蠣漢堡！水產市場直送的新鮮牡蠣",
            tags: ["🦪 牡蠣漢堡", "⭐ 必吃"],
            hours: "10:00-17:00",
            coords: [38.3683, 141.0612]
        },
        {
            name: "漁師的海鮮丼",
            desc: "推薦生牡蠣丼，食材由漁船直送，極度新鮮",
            tags: ["🦪 生牡蠣", "🐟 海鮮丼"],
            hours: "11:00-16:00",
            coords: [38.3690, 141.0612]
        },
        {
            name: "牡蠣屋フライ亭",
            desc: "2025 新開幕！招牌巨大爆彈炸牡蠣",
            tags: ["🦪 炸牡蠣", "🆕 新店"],
            hours: "11:30-18:00",
            coords: [38.3688, 141.0612]
        }
    ],
    "day3_snack": [
        {
            name: "松島牛肉包子 Pensee",
            desc: "除了牛肉包，牡蠣咖哩麵包也是排隊名店",
            tags: ["🥟 包子", "🍛 咖哩麵包"],
            hours: "10:00-17:00",
            coords: [38.3686, 141.0612]
        },
        {
            name: "Akapīman Fast Food",
            desc: "必點拉斯薯條，現炸Q彈口感",
            tags: ["🥔 薯條", "⭐ 必吃"],
            hours: "10:30-18:00",
            coords: [38.3689, 141.0612]
        },
        {
            name: "雪竹屋 Yukitakeya",
            desc: "必買現烤大仙貝與各種文創雜貨",
            tags: ["🍘 仙貝", "🎁 伴手禮"],
            hours: "09:00-17:30",
            coords: [38.3685, 141.0612]
        }
    ],
    "day3_dinner": [
        {
            name: "焼肉ホルモン食樂 国分町店",
            desc: "燒肉吃到飽，內臟料理豐富",
            tags: ["🥩 燒肉", "💰 吃到飽"],
            hours: "17:00-24:00",
            coords: [38.2625, 140.8740]
        },
        {
            name: "黒毛和牛一頭切り 焼肉 伊達哉",
            desc: "高級和牛燒肉，一頭買付保證品質",
            tags: ["🥩 和牛", "✨ 高級"],
            hours: "17:00-23:00",
            coords: [38.2598, 140.8765]
        },
        {
            name: "炭焼いちず",
            desc: "名掛丁炭火燒肉，炭香濃郁",
            tags: ["🥩 燒肉", "🔥 炭火"],
            hours: "17:00-23:00",
            coords: [38.2590, 140.8752]
        },
        {
            name: "焼肉・ホルモン伽樂(かぐら)",
            desc: "燒肉與內臟專門店，CP值高",
            tags: ["🥩 燒肉", "🍖 內臟"],
            hours: "17:00-24:00",
            coords: [38.2595, 140.8758]
        }
    ],
    "day4_dinner": [
        {
            name: "仙台牛ハンドレッドバーガー仙台駅１階",
            desc: "仙台牛漢堡專賣店，肉汁飽滿",
            tags: ["🍔 漢堡", "🥩 仙台牛"],
            hours: "10:00-22:00",
            coords: [38.2609, 140.8820]
        },
        {
            name: "らーめん堂仙台っ子仙台駅前店",
            desc: "仙台在地拉麵，濃厚味噌湯底",
            tags: ["🍜 拉麵", "✨ 在地"],
            hours: "11:00-23:00",
            coords: [38.2608, 140.8815]
        }
    ],
    "day5_breakfast": [
        {
            name: "ホシヤマ珈琲店 アエル店",
            desc: "仙台老牌咖啡店，早餐套餐",
            tags: ["☕ 咖啡", "🥐 早餐"],
            hours: "09:00-21:00",
            coords: [38.2610, 140.8825]
        },
        {
            name: "FLAT WHITE COFFEE FACTORY",
            desc: "澳式咖啡與輕食早餐",
            tags: ["☕ 咖啡", "🥐 輕食"],
            hours: "08:00-19:00",
            coords: [38.2585, 140.8750]
        }
    ],
    "day5_dessert": [
        {
            name: "黒墨クッキークラブ",
            desc: "手工餅乾咖啡廳，下午茶好選擇",
            tags: ["🍪 餅乾", "☕ 咖啡"],
            hours: "11:00-19:00",
            coords: [38.2595, 140.8758]
        },
        {
            name: "菓子時間ムギ",
            desc: "和菓子咖啡廳，精緻日式甜點",
            tags: ["🍡 和菓子", "☕ 咖啡"],
            hours: "10:00-18:00",
            coords: [38.2600, 140.8760]
        }
    ],
    "day5_dinner": [
        {
            name: "焼肉・ホルモン伽樂(かぐら)",
            desc: "燒肉與內臟專門店，廣瀨通附近",
            tags: ["🥩 燒肉", "🍖 內臟"],
            hours: "17:00-24:00",
            coords: [38.2595, 140.8758]
        },
        {
            name: "肉刺しとホルモン トラコ 仙台文化横丁店",
            desc: "生肉刺身與內臟料理，文化橫丁名店",
            tags: ["🍖 肉刺身", "🍶 居酒屋"],
            hours: "17:00-24:00",
            coords: [38.2593, 140.8755]
        },
        {
            name: "焼肉食べ放題 焼肉ダイニング ちからや",
            desc: "燒肉吃到飽，飲料暢飲",
            tags: ["🥩 燒肉", "💰 吃到飽"],
            hours: "17:00-24:00",
            coords: [38.2608, 140.8815]
        }
    ],
    "day6_lunch": [
        {
            name: "廻鮮寿司 塩釜港",
            desc: "鹽竈排隊第一名店，雖是迴轉壽司但有高級壽司店品質",
            tags: ["🍣 壽司", "⭐ 必吃"],
            hours: "11:00-21:00",
            coords: [38.3103, 141.0242]
        },
        {
            name: "塩竈まぐろ直売·食堂",
            desc: "鮪魚直賣食堂，超新鮮的鮪魚料理",
            tags: ["🐟 鮪魚", "💰 平價"],
            hours: "10:00-17:00",
            coords: [38.3105, 141.0240]
        },
        {
            name: "塩竈すし哲 本店",
            desc: "鹽竈老字號壽司店，職人手藝精湛",
            tags: ["🍣 壽司", "✨ 老店"],
            hours: "11:30-21:00",
            coords: [38.3108, 141.0245]
        },
        {
            name: "まぐろ専門店 がお",
            desc: "鮪魚專門店，鮪魚解體秀值得一看",
            tags: ["🐟 鮪魚", "👨‍🍳 專門店"],
            hours: "11:00-15:00",
            coords: [38.3110, 141.0238]
        },
        {
            name: "人と木",
            desc: "創意日式料理，結合在地食材的精緻餐點",
            tags: ["🍱 創意料理", "✨ 精緻"],
            hours: "11:30-14:30",
            coords: [38.3112, 141.0235]
        },
        {
            name: "otomo",
            desc: "現代日式餐廳，氣氛優雅，適合慢慢品嚐",
            tags: ["🍱 日式料理", "☕ 氣氛佳"],
            hours: "11:00-15:00",
            coords: [38.3115, 141.0232]
        }
    ],
    "day6_dessert": [
        {
            name: "くじらもなか本舗",
            desc: "鯨魚造型最中餅，仙台特色伴手禮",
            tags: ["🍡 最中", "🐋 特色"],
            hours: "10:00-19:00",
            coords: [38.2600, 140.8760]
        },
        {
            name: "菓子時間ムギ",
            desc: "和菓子咖啡廳，精緻日式甜點",
            tags: ["🍡 和菓子", "☕ 咖啡"],
            hours: "10:00-18:00",
            coords: [38.2600, 140.8760]
        },
        {
            name: "Hosoya's Sandwich",
            desc: "三明治咖啡廳，輕食與咖啡",
            tags: ["🥪 三明治", "☕ 咖啡"],
            hours: "08:00-18:00",
            coords: [38.2598, 140.8762]
        }
    ],
    "day6_dinner": [
        {
            name: "ajraroad (ヴァサラロード) 仙台アエル店",
            desc: "正宗印度料理，香料濃郁咖哩",
            tags: ["🍛 印度料理", "✨ 正宗"],
            hours: "11:00-22:00",
            coords: [38.2610, 140.8825]
        },
        {
            name: "牛たん けやき 仙台一番町本店",
            desc: "一番町牛舌名店，定食豐富",
            tags: ["🥩 牛舌", "✨ 名店"],
            hours: "11:00-22:00",
            coords: [38.2585, 140.8750]
        },
        {
            name: "仙台焼き鳥・串揚げ居酒屋 串屋 名掛丁店",
            desc: "串燒串炸專門店，種類豐富",
            tags: ["🍗 串燒", "🍤 串炸"],
            hours: "17:00-23:00",
            coords: [38.2590, 140.8752]
        }
    ],
    "day6_late_night": [
        {
            name: "銀座 縁 仙台エスパル店",
            desc: "S-PAL 內居酒屋，交通便利",
            tags: ["🍶 居酒屋", "🏪 站內"],
            hours: "17:00-23:00",
            coords: [38.2608, 140.8820]
        },
        {
            name: "めし&日本酒 汐谷",
            desc: "日本酒專門店，搭配精緻料理",
            tags: ["🍶 日本酒", "✨ 專門店"],
            hours: "17:00-24:00",
            coords: [38.2595, 140.8758]
        },
        {
            name: "手羽先とおでん５００円食べ放題 出汁政宗",
            desc: "雞翅關東煮吃到飽，僅500円超值",
            tags: ["🍢 關東煮", "🍗 雞翅", "💰 吃到飽"],
            hours: "17:00-24:00",
            coords: [38.2608, 140.8815]
        },
        {
            name: "居酒屋いごこち",
            desc: "溫馨居酒屋，氣氛輕鬆",
            tags: ["🍶 居酒屋", "☕ 氣氛佳"],
            hours: "17:00-24:00",
            coords: [38.2600, 140.8760]
        }
    ],
    "day7_breakfast": [
        {
            name: "SENDAI STATION BREWERY Fermenteria",
            desc: "站內精釀咖啡，早餐輕食",
            tags: ["☕ 咖啡", "🥐 輕食"],
            hours: "08:00-20:00",
            coords: [38.2609, 140.8820]
        },
        {
            name: "ホシヤマ珈琲店 アエル店",
            desc: "最後一次享用經典咖啡早餐",
            tags: ["☕ 咖啡", "🥐 早餐"],
            hours: "09:00-21:00",
            coords: [38.2610, 140.8825]
        },
        {
            name: "ベーカリー＆カフェ BABEL858",
            desc: "現烤麵包與咖啡",
            tags: ["☕ 咖啡", "🥖 麵包"],
            hours: "07:30-19:00",
            coords: [38.2600, 140.8760]
        }
    ],
    "day7_lunch": [
        {
            name: "仙台機場美食街",
            desc: "選擇多樣，離開前最後一餐",
            tags: ["🍽️ 機場", "✨ 推薦"],
            hours: "10:00-20:00",
            coords: [38.1397, 140.9169]
        }
    ]
};