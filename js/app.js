// 全局變數
let map;
let markers = [];
let supermarketMarkers = [];
let shoppingMarkers = [];
let souvenirMarkers = [];
let restaurantMarkers = [];
let currentDay = 1;
let currentCategory = 'all';
let currentMealType = 'all';

// --- 工具函數 ---
function getSafeMapUrl(name) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 初始化永久標記
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    
    // 預設顯示第一天
    showDay(1);

    // 點擊面板外部關閉工具面板
    document.addEventListener('click', function(event) {
        const panel = document.getElementById('tools-panel');
        const toggleBtn = document.querySelector('.tools-btn-pos');
        if (panel && panel.classList.contains('active')) {
            if (!panel.contains(event.target) && !toggleBtn.contains(event.target)) {
                panel.classList.remove('active');
            }
        }
    });
});

function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(map);
}

// 顯示指定天數
function showDay(day) {
    currentDay = day;
    document.querySelectorAll('.day-card').forEach((card, i) => card.classList.toggle('active', i + 1 === day));

    clearMarkers();
    const dayData = itineraryData[day];
    
    const hero = document.querySelector('.hero-section');
    if (hero && dayData.bgImage) hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    
    renderItinerary(dayData);
    addMapMarkers(dayData);
    
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// 渲染行程 (移除分類篩選，保留智慧型時段按鈕)
function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta">
                <span>📅 ${dayData.date}</span> | <span>📍 ${dayData.location}</span>
            </div>
        </div>
    `;

    // 智慧型時段/活動按鈕
    const dayMealTypes = new Set(['all']);
    dayData.locations.forEach(loc => { if (loc.mealType) dayMealTypes.add(loc.mealType); });

    if (dayMealTypes.size > 1) {
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            if (dayMealTypes.has(key)) {
                html += `<button class="meal-btn ${currentMealType === key ? 'active' : ''}" onclick="filterByMeal('${key}')">
                    ${meal.icon} ${meal.label}
                </button>`;
            }
        }
        html += `</div>`;
    }

    // 時間軸
    html += `<div class="timeline">`;
    dayData.locations.forEach((loc, index) => {
        if (!shouldShowLocation(loc)) return;
        const hasOptions = loc.mealType && restaurantOptions[`day${currentDay}_${loc.mealType}`];
        
        html += `
            <div class="timeline-item" ${hasOptions ? `onclick="showRestaurantOptions(${currentDay}, '${loc.mealType}')" style="cursor: pointer;"` : ''}>
                <div class="timeline-dot">${index + 1}</div>
                <div class="timeline-time">${loc.time}</div>
                <div class="timeline-content">
                    <div class="timeline-title">
                        ${loc.name} 
                        ${hasOptions ? '<span class="option-badge">📋 點擊查看選項</span>' : ''}
                    </div>
                    <div class="timeline-desc">${loc.desc}</div>
                    <div class="timeline-tags">
                        ${loc.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    html += `</div>`;

    document.getElementById('itinerary-container').innerHTML = html;
}

// 地圖標記邏輯
function addMapMarkers(dayData) {
    dayData.locations.filter(loc => loc.coords && shouldShowLocation(loc)).forEach((loc, i) => {
        const color = getCategoryColor(loc.category);
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${i + 1}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14]
        });
        const marker = L.marker(loc.coords, { icon }).addTo(map);
        marker.bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
        markers.push(marker);
    });
}

function addPermanentMarkers(data, color, char, markerArray) {
    data.forEach(item => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4);">${char}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14]
        });
        const marker = L.marker(item.coords, { icon }).addTo(map);
        marker.bindPopup(createStorePopup(item, color));
        markerArray.push(marker);
    });
}

function createStorePopup(item, color) {
    return `
        <div style="min-width:200px; font-family: 'Noto Sans TC', sans-serif;">
            <h4 style="color:${color};margin-bottom:5px;">${item.name}</h4>
            <p style="font-size:13px;margin:5px 0;color:#666;">${item.desc}</p>
            ${item.hours ? `<p style="font-size:12px;color:${color};">⏰ ${item.hours}</p>` : ''}
            <a href="${getSafeMapUrl(item.name)}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;font-weight:600;">🗺️ Google 地圖</a>
        </div>
    `;
}

// 篩選與工具邏輯
function shouldShowLocation(loc) {
    if (currentCategory !== 'all' && loc.category !== currentCategory) return false;
    if (currentMealType !== 'all' && loc.mealType !== currentMealType) return false;
    return true;
}

function filterByMeal(meal) {
    currentMealType = meal;
    const dayData = itineraryData[currentDay];
    renderItinerary(dayData);
    addMapMarkers(dayData);
}

function clearMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
}

function renderDaySelector() {
    const div = document.getElementById('day-selector');
    daysConfig.forEach(c => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `<div class="day-label">${c.label}</div><div class="day-date">${c.date}</div>`;
        card.onclick = () => { currentCategory = 'all'; currentMealType = 'all'; showDay(c.day); };
        div.appendChild(card);
    });
}

// --- 美化後的方案選擇面板 ---
function showRestaurantOptions(day, mealType) {
    const options = restaurantOptions[`day${day}_${mealType}`];
    if (!options) return;
    
    const panel = document.getElementById('restaurant-options-panel');
    const content = document.getElementById('restaurant-options-content');
    const titleNames = { 'breakfast': '早餐', 'lunch': '午餐', 'dinner': '晚餐', 'snack': '點心/宵夜', 'sightseeing': '景點巡禮', 'parco': 'PARCO 購物', 'parco2': 'PARCO 2 購物' };
    
    document.getElementById('restaurant-options-title').innerText = `🍽️ Day ${day} ${titleNames[mealType] || '推薦選項'}`;
    
    content.innerHTML = options.map(opt => `
        <div class="restaurant-option-card">
            <div class="restaurant-option-header">
                <div class="restaurant-option-name">${opt.name}</div>
                ${opt.hours ? `<div class="restaurant-option-hours">⏰ ${opt.hours}</div>` : ''}
            </div>
            <div class="restaurant-option-desc">${opt.desc}</div>
            <div class="restaurant-option-tags">
                ${opt.tags.map(tag => `<span class="restaurant-option-tag">${tag}</span>`).join('')}
            </div>
            <div class="restaurant-option-actions">
                <button class="restaurant-option-btn restaurant-option-btn-map" onclick="focusOnStoreByCoords(${opt.coords[0]}, ${opt.coords[1]}, '${opt.name}')">📍 定位標記</button>
                <a href="${getSafeMapUrl(opt.name)}" target="_blank" class="restaurant-option-btn restaurant-option-btn-google">🗺️ Google 地圖</a>
            </div>
        </div>
    `).join('');
    
    document.getElementById('restaurant-options-overlay').classList.add('active');
    panel.classList.add('active');
}

function closeRestaurantOptions() {
    document.getElementById('restaurant-options-panel').classList.remove('active');
    document.getElementById('restaurant-options-overlay').classList.remove('active');
}

// 工具面板控制
function toggleToolsPanel() {
    document.getElementById('tools-panel').classList.toggle('active');
}

// 永久店家清單顯示
function showPermanentStores(type) {
    const listContainer = document.getElementById('permanent-stores-list');
    let stores = [];
    
    if (type === 'all' || type === 'supermarket') supermarkets.forEach(s => stores.push({...s, icon: '🛒', type: '超市'}));
    if (type === 'all' || type === 'shopping') shoppingStores.forEach(s => stores.push({...s, icon: '🛍️', type: '購物店'}));
    if (type === 'all' || type === 'souvenir') souvenirStores.forEach(s => stores.push({...s, icon: '🎁', type: '伴手禮'}));
    
    let html = '<div class="stores-grid">';
    stores.forEach(store => {
        html += `
            <div class="store-item">
                <div class="store-item-header">
                    <span class="store-icon">${store.icon}</span>
                    <h4 class="store-name">${store.name}</h4>
                </div>
                <div class="store-type-badge">${store.type}</div>
                <div class="store-desc">${store.desc}</div>
                <div class="store-actions">
                    <button class="store-map-btn" onclick="focusOnStoreByCoords(${store.coords[0]}, ${store.coords[1]}, '${store.name}')">📍 定位</button>
                    <a href="${getSafeMapUrl(store.name)}" target="_blank" class="store-google-btn">🗺️ 地圖</a>
                </div>
            </div>
        `;
    });
    html += '</div>';
    listContainer.innerHTML = html;
    listContainer.classList.remove('hidden');
    listContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function focusOnStoreByCoords(lat, lng, name) {
    map.setView([lat, lng], 17);
    closeRestaurantOptions();
    // 閃爍一下目標位置或打開 Popup
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
}

function getCategoryColor(category) {
    const colors = { attraction: '#8b6f47', restaurant: '#d47474', shopping: '#c9a961', specialty: '#a97c50', market: '#6ba985' };
    return colors[category] || '#8b6f47';
}
