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

// 初始化應用
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 初始化永久標記
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    
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

function showDay(day) {
    currentDay = day;
    document.querySelectorAll('.day-card').forEach((card, i) => card.classList.toggle('active', i + 1 === day));
    clearMarkers();
    const dayData = itineraryData[day];
    const hero = document.querySelector('.hero-section');
    if (hero && dayData.bgImage) hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    renderItinerary(dayData);
    addMapMarkers(dayData);
}

function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta"><span>📅 ${dayData.date}</span> | <span>📍 ${dayData.location}</span></div>
        </div>
    `;

    const dayMealTypes = new Set(['all']);
    dayData.locations.forEach(loc => { if (loc.mealType) dayMealTypes.add(loc.mealType); });

    if (dayMealTypes.size > 1) {
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            if (dayMealTypes.has(key)) {
                html += `<button class="meal-btn ${currentMealType === key ? 'active' : ''}" onclick="filterByMeal('${key}')">${meal.icon} ${meal.label}</button>`;
            }
        }
        html += `</div>`;
    }

    html += `<div class="timeline">`;
    dayData.locations.forEach((loc, index) => {
        if (!shouldShowLocation(loc)) return;
        const hasOptions = loc.mealType && restaurantOptions[`day${currentDay}_${loc.mealType}`];
        html += `
            <div class="timeline-item" ${hasOptions ? `onclick="showRestaurantOptions(${currentDay}, '${loc.mealType}')" style="cursor: pointer;"` : ''}>
                <div class="timeline-dot">${index + 1}</div>
                <div class="timeline-time">${loc.time}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${loc.name} ${hasOptions ? '<small class="option-badge">📋 選項</small>' : ''}</div>
                    <div class="timeline-desc">${loc.desc}</div>
                    <div class="timeline-tags">${loc.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    document.getElementById('itinerary-container').innerHTML = html;
}

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
    return `<div style="min-width:200px;"><h4>${item.name}</h4><p>${item.desc}</p><a href="${getSafeMapUrl(item.name)}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;">🗺️ Google 地圖</a></div>`;
}

function shouldShowLocation(loc) {
    if (currentCategory !== 'all' && loc.category !== currentCategory) return false;
    if (currentMealType !== 'all' && loc.mealType !== currentMealType) return false;
    return true;
}

function filterByMeal(meal) { currentMealType = meal; showDay(currentDay); }
function clearMarkers() { markers.forEach(m => map.removeLayer(m)); markers = []; }

function renderDaySelector() {
    const div = document.getElementById('day-selector');
    daysConfig.forEach(c => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `<div class="day-label">${c.label}</div><div class="day-date">${c.date}</div><div class="day-weather">${c.weather}</div>`;
        card.onclick = () => { currentCategory = 'all'; currentMealType = 'all'; showDay(c.day); };
        div.appendChild(card);
    });
}

// 方案彈窗
function showRestaurantOptions(day, mealType) {
    const options = restaurantOptions[`day${day}_${mealType}`];
    if (!options) return;
    const panel = document.getElementById('restaurant-options-panel');
    const content = document.getElementById('restaurant-options-content');
    document.getElementById('restaurant-options-title').innerText = `推薦方案`;
    content.innerHTML = options.map(opt => `
        <div class="restaurant-option-card" style="border:1px solid var(--border-gold);padding:15px;margin-bottom:10px;border-radius:12px;background:var(--bg-card-light);">
            <div style="font-weight:bold;color:var(--primary);">${opt.name}</div>
            <div style="font-size:0.9rem;color:var(--text-gray);">${opt.desc}</div>
            <div style="margin-top:10px;">
                <button onclick="focusOnStoreByCoords(${opt.coords[0]}, ${opt.coords[1]}, '${opt.name}')" style="background:var(--primary);color:var(--bg-dark);border:none;padding:5px 10px;border-radius:4px;font-weight:bold;">📍 定位</button>
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

// 旅行工具面板
function toggleToolsPanel() { document.getElementById('tools-panel').classList.toggle('active'); }

// 優惠券彈窗 (修正：移除鎖死捲動的邏輯)
function openCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'block';
    document.getElementById('coupon-modal').style.display = 'block';
    // 移除 document.body.style.overflow = 'hidden'; 防止鎖死
}

function closeCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'none';
    document.getElementById('coupon-modal').style.display = 'none';
}

function showPermanentStores(type) {
    const listContainer = document.getElementById('permanent-stores-list');
    let stores = [];
    if (type === 'all' || type === 'supermarket') supermarkets.forEach(s => stores.push({...s, icon: '🛒', type: '超市'}));
    if (type === 'all' || type === 'shopping') shoppingStores.forEach(s => stores.push({...s, icon: '🛍️', type: '購物'}));
    if (type === 'all' || type === 'souvenir') souvenirStores.forEach(s => stores.push({...s, icon: '🎁', type: '伴手禮'}));
    
    listContainer.innerHTML = `<div class="stores-grid">${stores.map(s => `
        <div class="store-item" style="background:var(--bg-card-light);border:1px solid var(--border-gold);padding:15px;border-radius:12px;">
            <div style="font-weight:bold;color:var(--primary);">${s.icon} ${s.name}</div>
            <div style="font-size:0.85rem;color:var(--text-gray);">${s.desc}</div>
            <button onclick="focusOnStoreByCoords(${s.coords[0]}, ${s.coords[1]}, '${s.name}')" style="margin-top:10px;width:100%;padding:8px;background:var(--bg-card);color:var(--primary);border:1px solid var(--border-gold);border-radius:8px;">📍 地圖定位</button>
        </div>
    `).join('')}</div>`;
    listContainer.classList.remove('hidden');
}

function focusOnStoreByCoords(lat, lng, name) {
    map.setView([lat, lng], 17);
    closeRestaurantOptions();
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
}

function getCategoryColor(cat) {
    const colors = { attraction: '#8b6f47', restaurant: '#d47474', shopping: '#c9a961', specialty: '#a97c50', market: '#6ba985' };
    return colors[cat] || '#8b6f47';
}
