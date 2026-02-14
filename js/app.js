// 全局變數
let map;
let markers = [];
let supermarketMarkers = [];  // 獨立的超市標記陣列
let shoppingMarkers = [];     // 獨立的購物店標記陣列
let souvenirMarkers = [];     // 獨立的伴手禮店標記陣列
let restaurantMarkers = [];   // 獨立的餐廳標記陣列
let currentDay = 1;
let currentCategory = 'all';
let currentMealType = 'all';

// --- 工具函數：處理 Google Maps 連結 ---
function getSafeMapUrl(name, url) {
    // 如果 url 存在且不是無效的暫存連結，就直接用
    if (url && !url.includes('googleusercontent.com')) {
        return url;
    }
    // 否則生成正確的 Google Maps 搜尋連結
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

// 初始化應用
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    renderDaySelector();
    
    // 設置初始背景圖
    const heroSection = document.querySelector('.hero-section');
    // 確保 itineraryData 存在且有 Day 1 數據
    if (typeof itineraryData !== 'undefined' && itineraryData[1]) {
        const day1Data = itineraryData[1];
        if (day1Data.bgImage) {
            heroSection.style.backgroundImage = `url('${day1Data.bgImage}')`;
        }
    }
    
    // 添加永久超市標記
    if (typeof supermarkets !== 'undefined') addSupermarketMarkers();
    
    // 添加永久購物店標記
    if (typeof shoppingStores !== 'undefined') addShoppingMarkers();
    
    // 添加永久伴手禮店標記
    if (typeof souvenirStores !== 'undefined') addSouvenirMarkers();
    
    // 添加餐廳標記
    if (typeof restaurants !== 'undefined') addRestaurantMarkers();
    
    showDay(1);
});

// 初始化地圖
function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap © CARTO',
        maxZoom: 19
    }).addTo(map);
}

// 渲染天數選擇器
function renderDaySelector() {
    const daySelectorDiv = document.getElementById('day-selector');
    if (!daySelectorDiv || typeof daysConfig === 'undefined') return;
    
    daysConfig.forEach(config => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        if (config.day === 1) {
            dayCard.classList.add('active');
        }
        
        dayCard.innerHTML = `
            <div class="day-label">${config.label}</div>
            <div class="day-date">${config.date}</div>
            <div class="day-weather">${config.weather}</div>
        `;
        
        dayCard.addEventListener('click', () => {
            currentCategory = 'all';
            currentMealType = 'all';
            showDay(config.day);
        });
        daySelectorDiv.appendChild(dayCard);
    });
}

// 顯示指定天數的行程
function showDay(day) {
    currentDay = day;
    
    // 更新天數卡片樣式
    const dayCards = document.querySelectorAll('.day-card');
    dayCards.forEach((card, index) => {
        card.classList.toggle('active', index + 1 === day);
    });

    // 清除舊標記
    clearMarkers();

    // 獲取當天行程數據
    if (typeof itineraryData === 'undefined') return;
    const dayData = itineraryData[day];
    
    // 更新 Hero Section 背景圖
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && dayData.bgImage) {
        heroSection.style.backgroundImage = `url('${dayData.bgImage}')`;
    }
    
    // 渲染行程
    renderItinerary(dayData);
    
    // 添加地圖標記
    addMapMarkers(dayData);
    
    // 滾動到行程內容
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) {
            container.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }
    }, 100);
}

// 渲染行程內容
function renderItinerary(dayData) {
    let html = `
        <div class="day-header fade-in">
            <h2>${dayData.title}</h2>
            <div class="day-meta">
                <div class="day-meta-item">📅 ${dayData.date}</div>
                <div class="day-meta-item">📍 ${dayData.location}</div>
            </div>
        </div>
    `;

    // 飯店資訊卡（如果有）
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

    // 分類篩選按鈕
    html += `<div class="category-filters">`;
    for (const [key, cat] of Object.entries(categories)) {
        const active = currentCategory === key ? 'active' : '';
        html += `
            <button class="category-btn ${active}" onclick="filterByCategory('${key}')">
                ${cat.icon} ${cat.label}
            </button>
        `;
    }
    html += `</div>`;

    // 用餐時段篩選按鈕（只在有餐廳的天數顯示）
    const hasRestaurants = dayData.locations.some(loc => loc.category === 'restaurant');
    if (hasRestaurants) {
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            const active = currentMealType === key ? 'active' : '';
            html += `
                <button class="meal-btn ${active}" onclick="filterByMeal('${key}')">
                    ${meal.icon} ${meal.label}
                </button>
            `;
        }
        html += `</div>`;
    }

    // 時間軸
    html += `<div class="timeline">`;
    dayData.locations.forEach((loc, index) => {
        const shouldShow = shouldShowLocation(loc);
        const hiddenClass = shouldShow ? '' : 'hidden';
        
        // 檢查是否有餐廳選項
        const hasOptions = loc.mealType && typeof restaurantOptions !== 'undefined' && restaurantOptions[`day${currentDay}_${loc.mealType}`];
        const clickHandler = hasOptions 
            ? `onclick="showRestaurantOptions(${currentDay}, '${loc.mealType}')" style="cursor: pointer;"` 
            : '';
        
        html += `
            <div class="timeline-item ${hiddenClass}" data-category="${loc.category}" data-meal="${loc.mealType || 'none'}" ${clickHandler}>
                <div class="timeline-dot">${index + 1}</div>
                <div class="timeline-time">${loc.time}</div>
                <div class="timeline-content">
                    <div class="timeline-title">
                        ${loc.name}
                        ${hasOptions ? '<span style="color: var(--primary); margin-left: 0.5rem; font-size: 0.9rem;">📋 點擊查看選項</span>' : ''}
                    </div>
                    <div class="timeline-desc">${loc.desc}</div>
                    <div class="timeline-tags">
                        ${loc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    html += `</div>`;

    const itineraryContainer = document.getElementById('itinerary-container');
    if (itineraryContainer) {
        itineraryContainer.innerHTML = html;
    }
}

// 判斷是否應該顯示該地點
function shouldShowLocation(location) {
    // 分類篩選
    if (currentCategory !== 'all' && location.category !== currentCategory) {
        return false;
    }
    
    // 用餐時段篩選
    if (currentMealType !== 'all') {
        if (location.mealType !== currentMealType) {
            return false;
        }
    }
    
    return true;
}

// 按分類篩選
function filterByCategory(category) {
    currentCategory = category;
    const dayData = itineraryData[currentDay];
    renderItinerary(dayData);
    updateMapMarkers(dayData);
}

// 更新地圖標記（根據篩選）
function updateMapMarkers(dayData) {
    clearMarkers();
    addMapMarkers(dayData);
}

// 清除地圖標記
function clearMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

// 添加地圖標記
function addMapMarkers(dayData) {
    const validLocations = dayData.locations.filter(loc => {
        return loc.coords && shouldShowLocation(loc);
    });
    
    if (validLocations.length === 0) return;
    
    validLocations.forEach((loc, index) => {
        // 根據分類選擇顏色
        const color = getCategoryColor(loc.category);
        
        // 創建自定義圖標
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background: ${color};
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 14px;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">${index + 1}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16] // 確保錨點在中心
        });
        
        const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);
        
        // 彈出窗口
        const categoryLabel = categories[loc.category].label;
        let popupContent = `
            <div style="font-family: 'Noto Sans TC', sans-serif; min-width: 200px;">
                <h4 style="color: ${color}; margin-bottom: 0.5rem; font-size: 1.1rem;">${loc.name}</h4>
                <p style="margin: 0; color: #6b6b6b; font-size: 0.85rem;">
                    <strong>${loc.time}</strong> | ${categoryLabel}
                </p>
                <p style="margin: 0.5rem 0 0; color: #2d2d2d; font-size: 0.9rem; line-height: 1.5;">
                    ${loc.desc}
                </p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        markers.push(marker);
    });
}

// 根據分類獲取顏色
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

// 添加永久超市標記
function addSupermarketMarkers() {
    supermarkets.forEach((market) => {
        const supermarketIcon = L.divIcon({
            className: 'custom-marker supermarket-marker',
            html: `<div style="
                background: #6ba985;
                color: white;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(0,0,0,0.4);
            ">🛒</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
        
        const marker = L.marker(market.coords, { icon: supermarketIcon }).addTo(map);
        const popupContent = createStorePopupWithGoogleMaps(market, '#6ba985');
        marker.bindPopup(popupContent);
        supermarketMarkers.push(marker);
    });
}

// 添加永久購物店標記
function addShoppingMarkers() {
    shoppingStores.forEach((store) => {
        const shoppingIcon = L.divIcon({
            className: 'custom-marker shopping-marker',
            html: `<div style="
                background: #c9a961;
                color: white;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(212, 165, 116, 0.5);
            ">🛍️</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
        
        const marker = L.marker(store.coords, { icon: shoppingIcon }).addTo(map);
        const popupContent = createStorePopupWithGoogleMaps(store, '#c9a961');
        marker.bindPopup(popupContent);
        shoppingMarkers.push(marker);
    });
}

// 添加永久伴手禮店標記
function addSouvenirMarkers() {
    souvenirStores.forEach((store) => {
        const souvenirIcon = L.divIcon({
            className: 'custom-marker souvenir-marker',
            html: `<div style="
                background: #daa65f;
                color: white;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(218, 166, 95, 0.5);
            ">🎁</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
        
        const marker = L.marker(store.coords, { icon: souvenirIcon }).addTo(map);
        const popupContent = createStorePopupWithGoogleMaps(store, '#daa65f');
        marker.bindPopup(popupContent);
        souvenirMarkers.push(marker);
    });
}

// 添加餐廳標記
function addRestaurantMarkers() {
    if (typeof restaurants === 'undefined') return;
    
    restaurants.forEach((store) => {
        const restaurantIcon = L.divIcon({
            className: 'custom-marker restaurant-marker',
            html: `<div style="
                background: #d47474;
                color: white;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(212, 116, 116, 0.5);
            ">🍽️</div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
        
        const marker = L.marker(store.coords, { icon: restaurantIcon }).addTo(map);
        const popupContent = createStorePopupWithGoogleMaps(store, '#d47474');
        marker.bindPopup(popupContent);
        restaurantMarkers.push(marker);
    });
}

// ==================== 店家清單功能 ====================

// 顯示永久店家清單
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
        supermarkets.forEach(store => stores.push({...store, icon: '🛒', type: '超市'}));
    }
    
    if (type === 'all' || type === 'shopping') {
        shoppingStores.forEach(store => stores.push({...store, icon: '🛍️', type: '購物店'}));
    }
    
    if (type === 'all' || type === 'souvenir') {
        souvenirStores.forEach(store => stores.push({...store, icon: '🎁', type: '伴手禮'}));
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
    
    // 滾動到清單位置 (如果列表不是空的)
    if (stores.length > 0) {
        listContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 聚焦到店家位置 (By Coords)
function focusOnStoreByCoords(lat, lng, name) {
    if (map) {
        map.setView([lat, lng], 16);
        // 找到對應的標記並打開彈出窗口
        const allMarkers = [...supermarketMarkers, ...shoppingMarkers, ...souvenirMarkers, ...restaurantMarkers, ...markers];
        
        allMarkers.forEach(marker => {
            const mLatLng = marker.getLatLng();
            // 簡單比對經緯度
            if (mLatLng.lat === lat && mLatLng.lng === lng) {
                marker.openPopup();
            }
        });
        
        // 滾動到地圖
        document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 切換旅行工具面板
function toggleToolsPanel() {
    const panel = document.getElementById('tools-panel');
    if (panel) panel.classList.toggle('active');
}

// 點擊面板外部關閉
document.addEventListener('click', function(event) {
    const panel = document.getElementById('tools-panel');
    const toggleBtn = document.querySelector('.tools-btn-pos');
    
    if (panel && panel.classList.contains('active')) {
        if (!panel.contains(event.target) && (toggleBtn && !toggleBtn.contains(event.target))) {
            panel.classList.remove('active');
        }
    }
});

// 為彈出窗口添加 Google 地圖連結的輔助函數
function createStorePopupWithGoogleMaps(store, color) {
    const googleMapsUrl = getSafeMapUrl(store.name, store.url);
    
    return `
        <div style="font-family: 'Noto Sans TC', sans-serif; min-width: 220px;">
            <h4 style="color: ${color}; margin-bottom: 0.5rem; font-size: 1.1rem;">${store.name}</h4>
            <p style="margin: 0.5rem 0; color: #2d2d2d; font-size: 0.9rem; line-height: 1.5;">
                ${store.desc}
            </p>
            ${store.hours ? `<p style="margin: 0.5rem 0; color: ${color}; font-size: 0.9rem; font-weight: 600;">⏰ ${store.hours}</p>` : ''}
            <div style="margin-top: 0.8rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
                ${store.tags.map(tag => `
                    <span style="background: #f5f1eb; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.8rem; border: 1px solid #e5dfd5;">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            <a href="${googleMapsUrl}" target="_blank" style="
                display: block;
                margin-top: 1rem;
                padding: 0.6rem 1rem;
                background: ${color};
                color: white;
                text-align: center;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.9rem;
                transition: opacity 0.3s;
            " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                🗺️ 在 Google 地圖中開啟
            </a>
        </div>
    `;
}

// ==================== 餐廳選項功能 ====================

// 顯示餐廳選項面板
function showRestaurantOptions(day, mealType) {
    const optionsKey = `day${day}_${mealType}`;
    const options = restaurantOptions[optionsKey];
    
    if (!options || options.length === 0) {
        // No restaurant options available
        return;
    }
    
    const panel = document.getElementById('restaurant-options-panel');
    const overlay = document.getElementById('restaurant-options-overlay');
    const title = document.getElementById('restaurant-options-title');
    const content = document.getElementById('restaurant-options-content');
    
    // 設定標題
    const mealTypeNames = {
        'breakfast': '早餐',
        'lunch': '午餐',
        'dinner': '晚餐',
        'snack': '宵夜'
    };
    title.textContent = `🍽️ Day ${day} ${mealTypeNames[mealType] || '用餐'} - 選擇餐廳`;
    
    // 生成餐廳卡片
    let html = '';
    options.forEach((restaurant, index) => {
        const googleMapsUrl = getSafeMapUrl(restaurant.name, null);
        
        html += `
            <div class="restaurant-option-card">
                <div class="restaurant-option-header">
                    <div class="restaurant-option-name">${restaurant.name}</div>
                    ${restaurant.hours ? `<div class="restaurant-option-hours">⏰ ${restaurant.hours}</div>` : ''}
                </div>
                <div class="restaurant-option-desc">${restaurant.desc}</div>
                <div class="restaurant-option-tags">
                    ${restaurant.tags.map(tag => `<span class="restaurant-option-tag">${tag}</span>`).join('')}
                </div>
                <div class="restaurant-option-actions">
                    <button class="restaurant-option-btn restaurant-option-btn-map" onclick="focusOnRestaurant(${restaurant.coords[0]}, ${restaurant.coords[1]}, '${restaurant.name}'); closeRestaurantOptions();">
                        📍 在地圖上查看
                    </button>
                    <a href="${googleMapsUrl}" target="_blank" class="restaurant-option-btn restaurant-option-btn-google" style="text-decoration: none; display: flex; align-items: center; justify-content: center;">
                        🗺️ Google 地圖
                    </a>
                </div>
            </div>
        `;
    });
    
    content.innerHTML = html;
    
    // 顯示面板和遮罩
    overlay.classList.add('active');
    panel.classList.add('active');
}

// 關閉餐廳選項面板
function closeRestaurantOptions() {
    const panel = document.getElementById('restaurant-options-panel');
    const overlay = document.getElementById('restaurant-options-overlay');
    
    if (panel) panel.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// 聚焦到餐廳位置
function focusOnRestaurant(lat, lng, name) {
    // 先滾動到地圖區域
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // 等待滾動完成後再聚焦地圖
    setTimeout(() => {
        if (map) {
            map.setView([lat, lng], 17);
            
            // 添加一個臨時標記
            const tempMarker = L.marker([lat, lng]).addTo(map);
            tempMarker.bindPopup(`<strong>${name}</strong>`).openPopup();
            
            // 3秒後移除臨時標記
            setTimeout(() => {
                map.removeLayer(tempMarker);
            }, 3000);
        }
    }, 500);
}

// ESC 鍵關閉面板
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeRestaurantOptions();
        // 如果有 closeStoreList 函數的話
        const storeList = document.getElementById('store-list-container');
        if (storeList) storeList.style.display = 'none';
        
        if (typeof closeCouponModal === 'function') closeCouponModal();
    }
});

// ==================== 餐點篩選功能 ====================

let currentMealFilter = 'all';

// 餐點篩選函數
function filterByMeal(mealType) {
    currentMealFilter = mealType;
    currentMealType = mealType; // 確保與全局變數同步
    
    // 更新按鈕狀態
    const buttons = document.querySelectorAll('.meal-filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.meal === mealType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 重新渲染行程以應用篩選
    const dayData = itineraryData[currentDay];
    renderItinerary(dayData);
    updateMapMarkers(dayData);
}

// ==================== 舊有代碼保留（防止錯誤） ====================
// 這些函數可能不再被使用，但為了避免 HTML 中仍有舊 onclick 呼叫導致報錯，予以保留
function toggleCategoryFilter(category) {
    // 轉接至新的 showPermanentStores
    showPermanentStores(category);
}

function focusOnStore(index, category) {
    // 根據分類找到對應陣列
    let stores = [];
    switch(category) {
        case 'shopping': stores = shoppingStores; break;
        case 'specialty': stores = souvenirStores; break;
        case 'market': stores = supermarkets; break;
    }
    if (stores[index]) {
        focusOnStoreByCoords(stores[index].coords[0], stores[index].coords[1], stores[index].name);
    }
}

function closeStoreList() {
    const container = document.getElementById('store-list-container');
    if (container) container.style.display = 'none';
}
// 優惠券模態框功能
function openCouponModal() {
    alert('暫無可用優惠券\n\n未來可以在這裡添加：\n• 店家優惠券\n• 交通票券優惠\n• 景點門票折扣');
}
