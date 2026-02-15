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

// 工具函數
function getSafeMapUrl(name, customUrl) {
    if (customUrl) return customUrl;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 設置初始背景圖
    const heroSection = document.querySelector('.hero-section');
    if (typeof itineraryData !== 'undefined' && itineraryData[1]) {
        const day1Data = itineraryData[1];
        if (day1Data.bgImage && heroSection) {
            heroSection.style.backgroundImage = `url('${day1Data.bgImage}')`;
        }
    }
    
    // 添加永久標記
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    if (typeof restaurants !== 'undefined') addPermanentMarkers(restaurants, '#d47474', '🍽️', restaurantMarkers);
    
    showDay(1);
    
    // 點擊外部關閉工具面板
    document.addEventListener('click', function(event) {
        const panel = document.getElementById('tools-panel');
        const toolsBtn = document.querySelector('.tools-btn-pos');
        if (panel && !panel.contains(event.target) && event.target !== toolsBtn) {
            panel.classList.remove('active');
        }
    });
});

function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 12);
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
    if (hero && dayData.bgImage) {
        hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    }
    
    renderItinerary(dayData);
    addMapMarkers(dayData);
    
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta">
                <span>📅 ${dayData.date}</span> | <span>📍 ${dayData.location}</span>
            </div>
        </div>
    `;

    // 顯示旅館資訊（如果有）
    if (dayData.hotel) {
        html += `
            <div class="hotel-card-inline fade-in" style="background: var(--bg-card-light); padding: 1.5rem; margin: 1.5rem; border-radius: 12px; border-left: 4px solid var(--accent-gold);">
                <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 0.5rem;">🏨 今晚住宿</h4>
                <div style="font-weight: 700; font-size: 1.1rem; margin: 0.5rem 0; color: var(--text-light);">${dayData.hotel.name}</div>
                <div style="color: var(--text-gray); margin-bottom: 0.5rem;">
                    📍 ${dayData.hotel.location} | Check-in: ${dayData.hotel.checkIn}
                    ${dayData.hotel.dates ? `<br>📅 住宿期間: ${dayData.hotel.dates}` : ''}
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.8rem;">
                    ${dayData.hotel.features.map(f => `<div style="font-size: 0.85rem; color: var(--text-gray);">${f}</div>`).join('')}
                </div>
            </div>
        `;
    }

    // 智慧型時段按鈕
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
                    <div class="timeline-title">${loc.name} ${hasOptions ? '<small>📋 選項</small>' : ''}</div>
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
    const googleMapsUrl = getSafeMapUrl(item.name, item.url);
    return `
        <div style="min-width:200px;">
            <h4 style="color:${color};margin-bottom:5px;">${item.name}</h4>
            <p style="font-size:13px;margin:5px 0;">${item.desc}</p>
            <a href="${googleMapsUrl}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;">🗺️ Google 地圖</a>
        </div>
    `;
}

function shouldShowLocation(loc) {
    if (currentCategory !== 'all' && loc.category !== currentCategory) return false;
    if (currentMealType !== 'all' && loc.mealType !== currentMealType) return false;
    return true;
}

function filterByCategory(cat) { currentCategory = cat; showDay(currentDay); }
function filterByMeal(meal) { currentMealType = meal; showDay(currentDay); }
function clearMarkers() { markers.forEach(m => map.removeLayer(m)); markers = []; }

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

function showRestaurantOptions(day, mealType) {
    const options = restaurantOptions[`day${day}_${mealType}`];
    if (!options) return;
    const panel = document.getElementById('restaurant-options-panel');
    const content = document.getElementById('restaurant-options-content');
    document.getElementById('restaurant-options-title').innerText = `方案選擇`;
    
    content.innerHTML = options.map(opt => `
        <div class="restaurant-option-card" style="border:1px solid #eee;padding:15px;margin-bottom:10px;border-radius:8px;">
            <div style="font-weight:bold;font-size:1.1rem;">${opt.name}</div>
            <div style="font-size:0.9rem;color:#666;">${opt.desc}</div>
            <div style="margin-top:10px;">
                <button onclick="focusOnStoreByCoords(${opt.coords[0]}, ${opt.coords[1]}, '${opt.name}')" style="background:#8b6f47;color:white;border:none;padding:5px 10px;border-radius:4px;">📍 定位</button>
                <a href="${getSafeMapUrl(opt.name)}" target="_blank" style="text-decoration:none;color:#d47474;margin-left:10px;">🗺️ 地圖</a>
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

function focusOnStoreByCoords(lat, lng, name) {
    if (map) {
        map.setView([lat, lng], 17);
        
        // 找到對應的標記並打開彈出窗口
        const allMarkers = [...supermarketMarkers, ...shoppingMarkers, ...souvenirMarkers, ...restaurantMarkers, ...markers];
        
        allMarkers.forEach(marker => {
            const mLatLng = marker.getLatLng();
            // 簡單比對經緯度
            if (Math.abs(mLatLng.lat - lat) < 0.0001 && Math.abs(mLatLng.lng - lng) < 0.0001) {
                marker.openPopup();
            }
        });
        
        // 滾動到地圖
        document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showPermanentStores(type) {
    const listContainer = document.getElementById('permanent-stores-list');
    const buttons = document.querySelectorAll('.store-filter-btn');
    
    // 更新按鈕狀態
    buttons.forEach(btn => {
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 收集要顯示的店家
    let stores = [];
    
    if (type === 'all' || type === 'supermarket') {
        if (typeof supermarkets !== 'undefined') {
            supermarkets.forEach(store => stores.push({...store, icon: '🛒', type: '超市'}));
        }
    }
    
    if (type === 'all' || type === 'shopping') {
        if (typeof shoppingStores !== 'undefined') {
            shoppingStores.forEach(store => stores.push({...store, icon: '🛍️', type: '購物店'}));
        }
    }
    
    if (type === 'all' || type === 'souvenir') {
        if (typeof souvenirStores !== 'undefined') {
            souvenirStores.forEach(store => stores.push({...store, icon: '🎁', type: '伴手禮'}));
        }
    }
    
    if (type === 'all' || type === 'restaurant') {
        if (typeof restaurants !== 'undefined') {
            restaurants.forEach(store => stores.push({...store, icon: '🍽️', type: '餐廳'}));
        }
    }
    
    // 生成 HTML
    if (stores.length === 0) {
        listContainer.innerHTML = '<div style="text-align: center; color: var(--text-gray); padding: 2rem;">沒有店家資料</div>';
        listContainer.classList.remove('hidden');
        return;
    }
    
    let html = '<div class="stores-grid">';
    
    stores.forEach(store => {
        const googleMapsUrl = getSafeMapUrl(store.name, store.url);
        
        html += `
            <div class="store-item">
                <div class="store-item-header">
                    <span class="store-icon">${store.icon}</span>
                    <h4 class="store-name">${store.name}</h4>
                </div>
                <div class="store-type-badge">${store.type}</div>
                <div class="store-desc">${store.desc}</div>
                ${store.hours ? `<div style="color: var(--primary); font-size: 0.9rem; margin-bottom: 0.5rem;">⏰ ${store.hours}</div>` : ''}
                <div class="store-tags">
                    ${store.tags.map(tag => `<span class="store-tag">${tag}</span>`).join('')}
                </div>
                <div class="store-actions">
                    <button class="store-map-btn" onclick="focusOnStoreByCoords(${store.coords[0]}, ${store.coords[1]}, '${store.name}')">
                        📍 在地圖上查看
                    </button>
                    <a href="${googleMapsUrl}" target="_blank" class="store-google-btn" onclick="event.stopPropagation();">
                        🗺️ Google 地圖
                    </a>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    listContainer.innerHTML = html;
    listContainer.classList.remove('hidden');
    
    // 滾動到清單位置
    if (stores.length > 0) {
        listContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function toggleToolsPanel() {
    document.getElementById('tools-panel').classList.toggle('active');
}

function openCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'block';
    document.getElementById('coupon-modal').style.display = 'block';
}

function closeCouponModal() {
    document.getElementById('coupon-overlay').style.display = 'none';
    document.getElementById('coupon-modal').style.display = 'none';
}

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
