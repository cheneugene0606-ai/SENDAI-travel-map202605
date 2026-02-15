const itineraryData = {
    1: { title: "Day 1: 抵達仙台", date: "5/20", weather: "☀️", location: "仙台", bgImage: "images/day1.jpg", locations: [/* ... */] },
    2: {
        title: "Day 2: 市區探索", date: "5/21", weather: "🌤️", location: "仙台",
        locations: [
            { time: "08:30", name: "仙台朝市", desc: "新鮮海鮮早餐", category: "market", mealType: "breakfast", tags: ["🐟 海鮮"], coords: [38.2622, 140.8786] },
            { time: "10:00", name: "PARCO 購物", desc: "動漫、生活雜貨、時尚", category: "shopping", mealType: "parco", tags: ["🛍️ 購物"], coords: [38.2596, 140.8797] },
            { time: "11:30", name: "PARCO 2 精品", desc: "BAO BAO、Aesop 等精品", category: "shopping", mealType: "parco2", tags: ["👜 精品"], coords: [38.2597, 140.8797] },
            { time: "12:30", name: "洋食 hachi", desc: "經典蛋包飯", category: "restaurant", mealType: "lunch", tags: ["🍳 蛋包飯"], coords: [38.2596, 140.8797] }
        ]
    },
    // ... 其他天數 (Day 3-7)
};

const mealTypes = {
    all: { label: "全部", icon: "📍" },
    sightseeing: { label: "景點", icon: "🏯" },
    breakfast: { label: "早餐", icon: "🍳" },
    lunch: { label: "午餐", icon: "🍱" },
    dinner: { label: "晚餐", icon: "🍽️" },
    parco: { label: "PARCO", icon: "🛍️" },
    parco2: { label: "PARCO 2", icon: "👜" }
};

const restaurantOptions = {
    "day2_parco": [{ name: "LOFT 仙台店", desc: "文具、美妝、雜貨", tags: ["✏️ 文具"], coords: [38.2596, 140.8797] }],
    "day2_parco2": [{ name: "Aesop PARCO 2", desc: "頂級香氛保養", tags: ["🧴 保養"], coords: [38.2597, 140.8797] }]
};

const daysConfig = [{ day: 1, label: "DAY 1", date: "05/20", weather: "☀️" }, { day: 2, label: "DAY 2", date: "05/21", weather: "🌤️" }, /* ... */];
const supermarkets = []; const shoppingStores = []; const souvenirStores = [];
