// 全局變數定義 [cite: 1, 2]
let map;
let markers = [];
let supermarketMarkers = [];
let shoppingMarkers = [];
let souvenirMarkers = [];
let restaurantMarkers = [];
let currentDay = 1;
let currentCategory = 'all'; // 保留邏輯變數，但已從 UI 移除分類篩選按鈕
let currentMealType = 'all';

// --- 工具函數：確保 Google Maps 連結正確 --- 
function getSafeMapUrl(name) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

// 初始化應用 [cite: 3, 4]
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 初始化地圖上的永久標記 (超市、購物、伴手禮) [cite: 51, 54, 75]
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    
    // 預設顯示第一天行程 [cite: 15]
    showDay(1);

    // 點擊面板外部自動關閉工具面板 [cite: 111]
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

// 初始化 Leaflet 地圖 [cite: 4, 5]
function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(map);
}

// 顯示指定天數行程 [cite: 9, 10, 11, 14]
function showDay(day) {
    currentDay = day;
    // 更新天數按鈕狀態 [cite: 10]
    document.querySelectorAll('.day-card').forEach((card, i) => {
        card.classList.toggle('active', i + 1 === day);
    });

    clearMarkers(); // 清除舊標記 [cite: 38, 39]
    const dayData = itineraryData[day];
    
    // 切換 Hero 背景圖 [cite: 12, 13]
    const hero = document.querySelector('.hero-section');
    if (hero && dayData.bgImage) {
        hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    }
    
    renderItinerary(dayData);
    addMapMarkers(dayData);
    
    // 自動捲動到行程區域 [cite: 15]
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

// 渲染行程列表 [cite: 16, 17, 21]
function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta">
                <span>📅 ${dayData.date}</span> | <span>📍 ${dayData.location}</span>
            </div>
        </div>
    `;

    // 飯店資訊 (如果有) [cite: 17, 18, 20]
    if (dayData.hotel) {
        html += `
            <div class="hotel-card-inline fade-in">
                ${dayData.hotel.image ? `<img src="${dayData.hotel.image}" alt="${dayData.hotel.name}">` : ''}
                <h4>🏨 今晚住宿</h4>
                <div style="font-weight: 700; font-size: 1.1rem; margin: 0.5rem 0;">${dayData.hotel.name}</div>
                <div style="color: var(--text-gray); margin-bottom: 0.5rem;">
                    📍 ${dayData.hotel.location} | Check-in: ${dayData.hotel.checkIn}
                    ${dayData.hotel.dates ? `<br>📅 住宿期間: ${dayData.hotel.dates}` : ''}
                </div>
                <div class="hotel-features">
                    ${dayData.hotel.features.map(f => `<div class="hotel-feature">${f}</div>`).join('')}
                </div>
            </div>
        `;
    }

    // 智慧型時段按鈕邏輯：自動偵測當天有的活動類型 
    const dayMealTypes = new Set(['all']);
    dayData.locations.forEach(loc => { if (loc.mealType) dayMealTypes.add(loc.mealType); });

    if (dayMealTypes.size > 1) {
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            if (dayMealTypes.has(key)) {
                const active = currentMealType === key ? 'active' : '';
                html += `<button class="meal-btn ${active}" onclick="filterByMeal('${key}')">
                    ${meal.icon} ${meal.label}
                </button>`;
            }
        }
        html += `</div>`;
    }

    // 時間軸行程卡片 [cite: 29, 30, 31, 32]
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

// 地圖標記標註 [cite: 40, 41, 42, 43]
function addMapMarkers(dayData) {
    const validLocations = dayData.locations.filter(loc => loc.coords && shouldShowLocation(loc));
    validLocations.forEach((loc, i) => {
        const color = getCategoryColor(loc.category);
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${i + 1}</div>`,
            iconSize: [28, 28], 
            iconAnchor: [14, 14]
        });
        const marker = L.marker(loc.coords, { icon }).addTo(map);
        marker.bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
        markers.push(marker);
    });
}

// 繪製永久店家標記 (超市、購物、伴手禮) [cite: 51, 52, 53, 112]
function addPermanentMarkers(data, color, char, markerArray) {
    data.forEach(item => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4);">${char}</div>`,
            iconSize: [28, 28], 
            iconAnchor: [14, 14]
        });
        const marker = L.marker(item.coords, { icon }).addTo(map);
        marker.bindPopup(createStorePopup(item, color));
        markerArray.push(marker);
    });
}

// 生成標記彈出內容 [cite: 113, 114, 117]
function createStorePopup(item, color) {
    return `
        <div style="min-width:200px; font-family: 'Noto Sans TC', sans-serif;">
            <h4 style="color:${color};margin-bottom:5px;">${item.name}</h4>
            <p style="font-size:13px;margin:5px 0;color:#2d2d2d;">${item.desc}</p>
            ${item.hours ? `<p style="font-size:12px;color:${color};font-weight:bold;">⏰ ${item.hours}</p>` : ''}
            <a href="${getSafeMapUrl(item.name)}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;font-weight:600;">🗺️ Google 地圖</a>
        </div>
    `;
}

// 篩選判斷 [cite: 33, 34, 35]
function shouldShowLocation(loc) {
    if (currentCategory !== 'all' && loc.category !== currentCategory) return false;
    if (currentMealType !== 'all' && loc.mealType !== currentMealType) return false;
    return true;
}

// 執行篩選 [cite: 37]
function filterByMeal(meal) {
    currentMealType = meal;
    const dayData = itineraryData[currentDay];
    renderItinerary(dayData);
    clearMarkers();
    addMapMarkers(dayData);
}

function clearMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
}

// 渲染天數選擇器 [cite: 6, 7, 8]
function renderDaySelector() {
    const div = document.getElementById('day-selector');
    daysConfig.forEach(c => {
        const card = document.createElement('div');
        card.className = (c.day === currentDay) ? 'day-card active' : 'day-card';
        card.innerHTML = `
            <div class="day-label">${c.label}</div>
            <div class="day-date">${c.date}</div>
            <div class="day-weather">${c.weather}</div>
        `;
        card.onclick = () => { 
            currentCategory = 'all'; 
            currentMealType = 'all'; 
            showDay(c.day); 
        };
        div.appendChild(card);
    });
}

// --- 方案選擇面板 (修復 UI 框框結構) --- [cite: 112, 113, 114]
function showRestaurantOptions(day, mealType) {
    const options = restaurantOptions[`day${day}_${mealType}`];
    if (!options) return;
    
    const panel = document.getElementById('restaurant-options-panel');
    const content = document.getElementById('restaurant-options-content');
    const titleNames = { 
        'breakfast': '早餐', 'lunch': '午餐', 'dinner': '晚餐', 
        'snack': '點心/宵夜', 'sightseeing': '景點巡禮', 
        'parco': 'PARCO 購物', 'parco2': 'PARCO 2 購物' 
    };
    
    document.getElementById('restaurant-options-title').innerText = `🍽️ Day ${day} ${titleNames[mealType] || '推薦選項'}`;
    
    content.innerHTML = options.map(opt => `
        <div class="restaurant-option-card">
            <div style="font-weight:bold; color:var(--primary); font-size:1.1rem; margin-bottom:5px;">${opt.name}</div>
            <div style="font-size:0.9rem; color:var(--text-gray); margin-bottom:10px;">${opt.desc}</div>
            <div style="display:flex; gap:10px;">
                <button class="meal-btn active" style="padding:5px 15px; font-size:0.8rem; border-radius:5px; border:none; background:var(--primary); color:var(--bg-dark); font-weight:bold; cursor:pointer;" 
                    onclick="focusOnStoreByCoords(${opt.coords[0]}, ${opt.coords[1]}, '${opt.name}')">📍 定位標記</button>
                <a href="${getSafeMapUrl(opt.name)}" target="_blank" 
                   style="text-decoration:none; color:var(--accent-gold); font-size:0.8rem; align-self:center; font-weight:bold;">🗺️ Google地圖</a>
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

// --- 工具面板與優惠券功能 (修復捲動鎖死) --- [cite: 110, 112]
function toggleToolsPanel() {
    document.getElementById('tools-panel').classList.toggle('active');
}

function openCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'block';
    document.getElementById('coupon-modal').style.display = 'block';
    // 修復：絕對不要在這邊寫 document.body.style.overflow = 'hidden'，否則會鎖死捲動
}

function closeCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'none';
    document.getElementById('coupon-modal').style.display = 'none';
}

// 永久店家清單渲染 [cite: 103, 105, 107]
function showPermanentStores(type) {
    const listContainer = document.getElementById('permanent-stores-list');
    const buttons = document.querySelectorAll('.store-filter-btn');
    
    buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.type === type));
    
    let stores = [];
    if (type === 'all' || type === 'supermarket') supermarkets.forEach(s => stores.push({...s, icon: '🛒', type: '超市'}));
    if (type === 'all' || type === 'shopping') shoppingStores.forEach(s => stores.push({...s, icon: '🛍️', type: '購物店'}));
    if (type === 'all' || type === 'souvenir') souvenirStores.forEach(s => stores.push({...s, icon: '🎁', type: '伴手禮'}));
    
    let html = '<div class="stores-grid">';
    stores.forEach(store => {
        html += `
            <div class="store-item">
                <div style="font-weight:bold; color:var(--primary); margin-bottom:5px;">${store.icon} ${store.name}</div>
                <div style="font-size:0.85rem; color:var(--text-gray); margin-bottom:10px;">${store.desc}</div>
                <button onclick="focusOnStoreByCoords(${store.coords[0]}, ${store.coords[1]}, '${store.name}')" 
                    style="width:100%; padding:8px; background:var(--bg-dark); color:var(--primary); border:1px solid var(--border-gold); border-radius:8px; cursor:pointer; font-weight:bold;">📍 在地圖上查看</button>
            </div>
        `;
    });
    html += '</div>';
    listContainer.innerHTML = html;
    listContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 地圖聚焦函數 [cite: 108, 109, 110]
function focusOnStoreByCoords(lat, lng, name) {
    map.setView([lat, lng], 17);
    closeRestaurantOptions();
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 分類顏色對照表 [cite: 49, 50]
function getCategoryColor(category) {
    const colors = { attraction: '#8b6f47', restaurant: '#d47474', shopping: '#c9a961', specialty: '#a97c50', market: '#6ba985' };
    return colors[category] || '#8b6f47';
}
