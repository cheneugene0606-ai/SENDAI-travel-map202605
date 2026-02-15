// 全局變數
let map;
let markers = [];
let supermarketMarkers = [], shoppingMarkers = [], souvenirMarkers = [];
let currentDay = 1, currentMealType = 'all';

function getSafeMapUrl(name) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderDaySelector();
    
    if (typeof supermarkets !== 'undefined') addPermanentMarkers(supermarkets, '#6ba985', '🛒', supermarketMarkers);
    if (typeof shoppingStores !== 'undefined') addPermanentMarkers(shoppingStores, '#c9a961', '🛍️', shoppingMarkers);
    if (typeof souvenirStores !== 'undefined') addPermanentMarkers(souvenirStores, '#daa65f', '🎁', souvenirMarkers);
    
    showDay(1);

    // 點擊面板外部關閉
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('tools-panel');
        if (panel && panel.classList.contains('active') && !panel.contains(e.target) && !e.target.closest('.tools-btn-pos')) {
            panel.classList.remove('active');
        }
    });
});

function initMap() {
    map = L.map('map').setView([38.2682, 140.8694], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

function showDay(day) {
    currentDay = day;
    document.querySelectorAll('.day-card').forEach((c, i) => c.classList.toggle('active', i + 1 === day));
    clearMarkers();
    const dayData = itineraryData[day];
    
    const hero = document.querySelector('.hero-section');
    if (hero && dayData.bgImage) {
        hero.style.backgroundImage = `url('${dayData.bgImage}')`;
    } else {
        hero.style.backgroundImage = 'none';
    }
    
    renderItinerary(dayData);
    addMapMarkers(dayData);
    
    setTimeout(() => {
        const container = document.getElementById('itinerary-container');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function renderItinerary(dayData) {
    let html = `<div class="day-header"><h2>${dayData.title}</h2><div class="day-meta">📅 ${dayData.date} | 📍 ${dayData.location}</div></div>`;
    
    if (dayData.hotel) {
        html += `
            <div class="hotel-card-inline fade-in">
                ${dayData.hotel.image ? `<img src="${dayData.hotel.image}" alt="${dayData.hotel.name}">` : ''}
                <div style="font-weight:700; font-size:1.1rem; color:var(--primary); margin-bottom:5px;">🏨 今晚住宿：${dayData.hotel.name}</div>
                <div style="color:var(--text-gray); font-size:0.9rem;">${dayData.hotel.location} ${dayData.hotel.checkIn ? `| Check-in: ${dayData.hotel.checkIn}` : ''}</div>
                <div class="hotel-features">${dayData.hotel.features ? dayData.hotel.features.map(f => `<span class="hotel-feature">${f}</span>`).join('') : ''}</div>
            </div>`;
    }

    const types = new Set(['all']);
    dayData.locations.forEach(l => { if (l.mealType) types.add(l.mealType); });
    
    if (types.size > 1) {
        html += `<div class="meal-filters">`;
        for (const [key, meal] of Object.entries(mealTypes)) {
            if (types.has(key)) html += `<button class="meal-btn ${currentMealType === key ? 'active' : ''}" onclick="filterByMeal('${key}')">${meal.icon} ${meal.label}</button>`;
        }
        html += `</div>`;
    }

    html += `<div class="timeline">`;
    dayData.locations.forEach((loc, i) => {
        if (currentMealType !== 'all' && loc.mealType !== currentMealType) return;
        const hasOpt = loc.mealType && restaurantOptions[`day${currentDay}_${loc.mealType}`];
        html += `
            <div class="timeline-item" ${hasOpt ? `onclick="showRestaurantOptions(${currentDay}, '${loc.mealType}')" style="cursor:pointer"` : ''}>
                <div class="timeline-dot">${i + 1}</div>
                <div class="timeline-time">${loc.time}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${loc.name} ${hasOpt ? '<span class="option-badge">📋 選項</span>' : ''}</div>
                    <div class="timeline-desc">${loc.desc}</div>
                    <div class="timeline-tags">${loc.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
            </div>`;
    });
    html += `</div>`;
    document.getElementById('itinerary-container').innerHTML = html;
}

function addMapMarkers(dayData) {
    dayData.locations.forEach((loc, i) => {
        if (currentMealType !== 'all' && loc.mealType !== currentMealType) return;
        const color = getCategoryColor(loc.category);
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;border:2px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3);">${i + 1}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14]
        });
        const m = L.marker(loc.coords, { icon }).addTo(map);
        m.bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
        markers.push(m);
    });
}

function addPermanentMarkers(data, color, char, arr) {
    data.forEach(item => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3);">${char}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14]
        });
        const m = L.marker(item.coords, { icon }).addTo(map);
        m.bindPopup(createStorePopup(item, color));
        arr.push(m);
    });
}

function createStorePopup(item, color) {
    return `<div style="min-width:200px;">
        <h4 style="color:${color};margin-bottom:5px;">${item.name}</h4>
        <p style="font-size:13px;margin:5px 0;color:#2d2d2d;">${item.desc}</p>
        <a href="${getSafeMapUrl(item.name)}" target="_blank" style="display:block;background:${color};color:white;text-align:center;padding:8px;border-radius:5px;text-decoration:none;margin-top:10px;font-weight:bold;">🗺️ Google 地圖</a>
    </div>`;
}

function showRestaurantOptions(day, mealType) {
    const opts = restaurantOptions[`day${day}_${mealType}`];
    if (!opts) return;
    const panel = document.getElementById('restaurant-options-panel');
    document.getElementById('restaurant-options-content').innerHTML = opts.map(o => `
        <div class="restaurant-option-card">
            <div style="font-weight:bold;color:var(--primary);font-size:1.1rem;">${o.name}</div>
            <p style="font-size:0.9rem;color:var(--text-gray);margin:5px 0;">${o.desc}</p>
            <div style="display:flex;gap:10px;margin-top:10px;">
                <button onclick="focusOn(${o.coords[0]},${o.coords[1]},'${o.name}')" style="padding:5px 10px;background:var(--primary);color:var(--bg-dark);border:none;border-radius:4px;font-weight:bold;cursor:pointer;">📍 定位</button>
                <a href="${getSafeMapUrl(o.name)}" target="_blank" style="color:var(--accent-gold);text-decoration:none;align-self:center;font-weight:bold;">🗺️ 地圖</a>
            </div>
        </div>`).join('');
    document.getElementById('restaurant-options-overlay').style.display = 'block';
    panel.classList.add('active');
}

function closeRestaurantOptions() {
    document.getElementById('restaurant-options-overlay').style.display = 'none';
    document.getElementById('restaurant-options-panel').classList.remove('active');
}

function showPermanentStores(type) {
    const list = document.getElementById('permanent-stores-list');
    document.querySelectorAll('.store-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.type === type));
    
    let stores = [];
    if (type === 'all' || type === 'supermarket') supermarkets.forEach(s => stores.push({...s, icon:'🛒'}));
    if (type === 'all' || type === 'shopping') shoppingStores.forEach(s => stores.push({...s, icon:'🛍️'}));
    if (type === 'all' || type === 'souvenir') souvenirStores.forEach(s => stores.push({...s, icon:'🎁'}));
    
    list.innerHTML = `<div class="stores-grid" style="grid-template-columns: 1fr;">${stores.map(s => `
        <div class="store-item">
            <div style="font-weight:bold;color:var(--primary);">${s.icon} ${s.name}</div>
            <div style="font-size:0.85rem;color:var(--text-gray);margin:5px 0;">${s.desc}</div>
            <button onclick="focusOn(${s.coords[0]},${s.coords[1]},'${s.name}')" style="width:100%;padding:8px;background:var(--bg-dark);color:var(--primary);border:1px solid var(--border-gold);border-radius:8px;cursor:pointer;font-weight:bold;margin-top:10px;">📍 定位</button>
        </div>`).join('')}</div>`;
}

function focusOn(lat, lng, name) {
    map.setView([lat, lng], 17);
    closeRestaurantOptions();
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toggleToolsPanel() { document.getElementById('tools-panel').classList.toggle('active'); }
function openCouponModal() { document.getElementById('coupon-overlay').style.display = 'block'; document.getElementById('coupon-modal').style.display = 'block'; }
function closeCouponModal() { document.getElementById('coupon-overlay').style.display = 'none'; document.getElementById('coupon-modal').style.display = 'none'; }
function filterByMeal(m) { currentMealType = m; showDay(currentDay); }
function clearMarkers() { markers.forEach(m => map.removeLayer(m)); markers = []; }
function getCategoryColor(c) { const colors = { attraction: '#8b6f47', restaurant: '#d47474', shopping: '#c9a961', specialty: '#a97c50', market: '#6ba985' }; return colors[c] || '#8b6f47'; }

function renderDaySelector() {
    const div = document.getElementById('day-selector');
    daysConfig.forEach(c => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `<div class="day-label">${c.label}</div><div class="day-date">${c.date}</div><div class="day-weather">${c.weather}</div>`;
        card.onclick = () => { currentMealType = 'all'; showDay(c.day); };
        div.appendChild(card);
    });
}
