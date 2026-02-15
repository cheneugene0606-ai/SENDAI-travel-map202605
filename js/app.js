// ==================== 1. 全局變數定義 ====================
let map;
let markers = [];
let supermarketMarkers = [];
let shoppingMarkers = [];
let souvenirMarkers = [];
let restaurantMarkers = [];
let currentDay = 1;
let currentCategory = 'all';
let currentMealType = 'all';

// ==================== 2. 工具函數 ====================

// 產生安全的 Google Maps 搜尋連結
function getSafeMapUrl(name) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

// 取得分類對應顏色
function getCategoryColor(category) {
    const colors = {
        attraction: '#8b6f47',
        restaurant: '#d47474',
        shopping: '#c9a961',
        specialty: '#a97c50',
        market: '#6ba985'
    };
    return colors[category] || '#8b6f47';
}

// ==================== 3. 初始化邏輯 ====================
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 初始化地圖上的永久標記 (超市、購物、伴手禮)
    // 檢查變數是否存在以避免報錯
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    
    // 預設顯示第一天行程
    showDay(1);

    // 監聽：點擊面板外部自動關閉工具面板
    document.addEventListener('click', function(event) {
        const panel = document.getElementById('tools-panel');
        const toggleBtn = document.querySelector('.tools-btn-pos');
        // 如果面板打開，且點擊的不是面板本身，也不是開關按鈕
        if (panel && panel.classList.contains('active')) {
            if (!panel.contains(event.target) && !toggleBtn.contains(event.target)) {
                panel.classList.remove('active');
            }
        }
    });
});

// 初始化 Leaflet 地圖
function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 12); // 預設視角：仙台市中心
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(map);
}

// ==================== 4. 核心行程功能 ====================

// 切換天數
function showDay(day) {
    currentDay = day;
    
    // 更新頂部天數按鈕的樣式
    document.querySelectorAll('.day-card').forEach((card, i) => {
        card.classList.toggle('active', i + 1 === day);
    });

    clearMarkers(); // 清除地圖上的行程標記
    
    const dayData = itineraryData[day];
    if (!dayData) return;

    // 切換 Hero 背景圖
    const hero = document.querySelector('.hero-section');
    if (hero && dayData.bgImage) {
        hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    }
    
    renderItinerary(dayData); // 渲染列表
    addMapMarkers(dayData);   // 渲染地圖標記
    
    // 自動捲動到行程區域 (提升體驗)
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

// 渲染行程列表 HTML
function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta">
                <span>📅 ${dayData.date}</span> | <span>📍 ${dayData.location}</span>
            </div>
        </div>
    `;

    // --- 智慧型時段按鈕邏輯 ---
    // 自動偵測這一天有哪些 mealType，只顯示有的按鈕
    const dayMealTypes = new Set(['all']);
    dayData.locations.forEach(loc => { 
        if (loc.mealType) dayMealTypes.add(loc.mealType); 
    });

    if (dayMealTypes.size > 1) { // 如果只有 'all' 就不顯示篩選器
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            if (dayMealTypes.has(key)) {
                const active = currentMealType === key ? 'active' : '';
                html += `
                    <button class="meal-btn ${active}" onclick="filterByMeal('${key}')">
                        ${meal.icon} ${meal.label}
                    </button>`;
            }
        }
        html += `</div>`;
    }

    // --- 渲染時間軸列表 ---
    html += `<div class="timeline">`;
    dayData.locations.forEach((loc, index) => {
        // 篩選判斷：如果不符合當前篩選，則不顯示
        if (!shouldShowLocation(loc)) return;
        
        // 檢查是否有「方案選擇」 (例如 Parco 購物、午餐選擇)
        const hasOptions = loc.mealType && restaurantOptions[`day${currentDay}_${loc.mealType}`];
        const clickAttr = hasOptions ? `onclick="showRestaurantOptions(${currentDay}, '${loc.mealType}')" style="cursor: pointer;"` : '';
        
        html += `
            <div class="timeline-item" ${clickAttr}>
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

// 渲染地圖上的數字標記
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

// 判斷是否應該顯示該地點 (配合篩選器)
function shouldShowLocation(loc) {
    if (currentMealType !== 'all' && loc.mealType !== currentMealType) return false;
    return true;
}

// 按下篩選按鈕觸發
function filterByMeal(meal) {
    currentMealType = meal;
    const dayData = itineraryData[currentDay];
    renderItinerary(dayData); // 重繪列表
    clearMarkers();           // 清除舊標記
    addMapMarkers(dayData);   // 重繪標記
}

function clearMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
}

// 渲染天數選擇按鈕 (上方的一排 Day 1, Day 2...)
function renderDaySelector() {
    const div = document.getElementById('day-selector');
    if (!div) return;
    
    daysConfig.forEach(c => {
        const card = document.createElement('div');
        card.className = (c.day === currentDay) ? 'day-card active' : 'day-card';
        card.innerHTML = `
            <div class="day-label">${c.label}</div>
            <div class="day-date">${c.date}</div>
            <div class="day-weather">${c.weather}</div>
        `;
        card.onclick = () => { 
            currentMealType = 'all'; // 切換天數時重置篩選
            showDay(c.day); 
        };
        div.appendChild(card);
    });
}

// ==================== 5. 永久店家標記邏輯 ====================

// 在地圖上添加永久標記 (不會隨天數消失)
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

// 產生店家彈出視窗內容
function createStorePopup(item, color) {
    return `
        <div style="min-width:200px; font-family: 'Noto Sans TC', sans-serif;">
            <h4 style="color:${color};margin-bottom:5px;">${item.name}</h4>
            <p style="font-size:13px;margin:5px 0;color:#2d2d2d;">${item.desc}</p>
            <a href="${getSafeMapUrl(item.name)}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;font-weight:600;">🗺️ Google 地圖</a>
        </div>
    `;
}

// 顯示永久店家清單 (點擊資訊區的按鈕)
function showPermanentStores(type) {
    const listContainer = document.getElementById('permanent-stores-list');
    const buttons = document.querySelectorAll('.store-filter-btn');
    
    // 更新按鈕狀態
    buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.type === type));
    
    // 篩選店家
    let stores = [];
    if (type === 'all' || type === 'supermarket') supermarkets.forEach(s => stores.push({...s, icon: '🛒', type: '超市'}));
    if (type === 'all' || type === 'shopping') shoppingStores.forEach(s => stores.push({...s, icon: '🛍️', type: '購物店'}));
    if (type === 'all' || type === 'souvenir') souvenirStores.forEach(s => stores.push({...s, icon: '🎁', type: '伴手禮'}));
    
    // 生成 HTML
    let html = '<div class="stores-grid" style="display:grid; grid-template-columns:1fr; gap:10px;">';
    stores.forEach(store => {
        html += `
            <div class="store-item" style="background:var(--bg-card-light); border:1px solid var(--border-gold); padding:15px; border-radius:12px;">
                <div class="store-item-header" style="display:flex; align-items:center; gap:10px; margin-bottom:5px;">
                    <span style="font-size:1.2rem;">${store.icon}</span>
                    <h4 style="color:var(--primary); margin:0;">${store.name}</h4>
                </div>
                <div style="font-size:0.9rem; color:var(--text-gray); margin-bottom:10px;">${store.desc}</div>
                <button onclick="focusOnStoreByCoords(${store.coords[0]}, ${store.coords[1]}, '${store.name}')" 
                    style="width:100%; padding:8px; background:var(--bg-card); color:var(--primary); border:1px solid var(--border-gold); border-radius:8px; cursor:pointer; font-weight:bold;">
                    📍 在地圖上查看
                </button>
            </div>
        `;
    });
    html += '</div>';
    
    listContainer.innerHTML = html;
    listContainer.classList.remove('hidden');
    listContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== 6. 互動面板與彈窗 ====================

// 顯示方案選擇面板
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
    
    // 生成選項卡片 (確保這裡有 class="restaurant-option-card")
    content.innerHTML = options.map(opt => `
        <div class="restaurant-option-card">
            <div style="font-weight:bold; color:var(--primary); font-size:1.1rem; margin-bottom:5px;">${opt.name}</div>
            <div style="font-size:0.9rem; color:var(--text-gray); margin-bottom:10px;">${opt.desc}</div>
            <div style="display:flex; gap:10px;">
                <button style="padding:6px 12px; font-size:0.85rem; border-radius:6px; border:none; background:var(--primary); color:var(--bg-dark); font-weight:bold; cursor:pointer;" 
                    onclick="focusOnStoreByCoords(${opt.coords[0]}, ${opt.coords[1]}, '${opt.name}')">📍 定位標記</button>
                <a href="${getSafeMapUrl(opt.name)}" target="_blank" 
                   style="text-decoration:none; color:var(--accent-gold); font-size:0.85rem; align-self:center; font-weight:bold;">🗺️ Google 地圖</a>
            </div>
        </div>
    `).join('');
    
    document.getElementById('restaurant-options-overlay').style.display = 'block';
    panel.classList.add('active');
}

function closeRestaurantOptions() {
    document.getElementById('restaurant-options-overlay').style.display = 'none';
    document.getElementById('restaurant-options-panel').classList.remove('active');
}

// 地圖聚焦並打開 Popup
function focusOnStoreByCoords(lat, lng, name) {
    map.setView([lat, lng], 17);
    closeRestaurantOptions();
    // 建立臨時 Popup 提示位置
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- 旅行工具面板開關 ---
function toggleToolsPanel() {
    document.getElementById('tools-panel').classList.toggle('active');
}

// --- 優惠券彈窗 (修復：移除鎖死捲動) ---
function openCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'block';
    document.getElementById('coupon-modal').style.display = 'block';
    // 注意：這裡移除了 document.body.style.overflow = 'hidden'，解決手機版鎖死問題
}

function closeCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'none';
    document.getElementById('coupon-modal').style.display = 'none';
}
