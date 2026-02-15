let map, markers = [];
let currentDay = 1, currentMealType = 'all';

function getSafeMapUrl(name) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderDaySelector();
    showDay(1);
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
    renderItinerary(dayData);
    addMapMarkers(dayData);
}

function renderItinerary(dayData) {
    let html = `<div class="day-header"><h2>${dayData.title}</h2><div class="day-meta">📅 ${dayData.date} | 📍 ${dayData.location}</div></div>`;
    
    // 智慧活動篩選
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
                    <div class="timeline-title">${loc.name} ${hasOpt ? '<span style="color:var(--accent-gold); font-size:0.8rem;">📋 選項</span>' : ''}</div>
                    <div class="timeline-desc">${loc.desc}</div>
                    <div class="timeline-tags">${loc.tags.map(t => `<span class="tag" style="background:var(--bg-card); padding:2px 8px; border-radius:10px; font-size:0.7rem; margin-right:5px; border:1px solid #333;">${t}</span>`).join('')}</div>
                </div>
            </div>`;
    });
    html += `</div>`;
    document.getElementById('itinerary-container').innerHTML = html;
}

function addMapMarkers(dayData) {
    dayData.locations.forEach((loc, i) => {
        if (currentMealType !== 'all' && loc.mealType !== currentMealType) return;
        const icon = L.divIcon({
            html: `<div style="background:var(--primary); color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; border:2px solid white;">${i + 1}</div>`,
            iconSize: [28, 28], iconAnchor: [14, 14]
        });
        const m = L.marker(loc.coords, { icon }).addTo(map);
        markers.push(m);
    });
}

// 修復：方案選擇面板 UI 
function showRestaurantOptions(day, mealType) {
    const opts = restaurantOptions[`day${day}_${mealType}`];
    if (!opts) return;
    document.getElementById('restaurant-options-content').innerHTML = opts.map(o => `
        <div class="restaurant-option-card">
            <div style="font-weight:bold; color:var(--primary);">${o.name}</div>
            <p style="font-size:0.85rem; color:var(--text-gray);">${o.desc}</p>
            <button onclick="focusOn(${o.coords[0]},${o.coords[1]},'${o.name}')" style="margin-top:10px; padding:5px 10px; background:var(--primary); border:none; border-radius:5px; cursor:pointer;">📍 定位</button>
        </div>`).join('');
    document.getElementById('restaurant-options-overlay').style.display = 'block';
    document.getElementById('restaurant-options-panel').classList.add('active');
}

function closeRestaurantOptions() {
    document.getElementById('restaurant-options-overlay').style.display = 'none';
    document.getElementById('restaurant-options-panel').classList.remove('active');
}

function focusOn(lat, lng, name) {
    map.setView([lat, lng], 16);
    closeRestaurantOptions();
    L.popup().setLatLng([lat, lng]).setContent(`<b>${name}</b>`).openOn(map);
}

// 修復：優惠券解鎖 
function openCouponModal() { document.getElementById('coupon-overlay').style.display = 'block'; document.getElementById('coupon-modal').style.display = 'block'; }
function closeCouponModal() { document.getElementById('coupon-overlay').style.display = 'none'; document.getElementById('coupon-modal').style.display = 'none'; }
function toggleToolsPanel() { document.getElementById('tools-panel').classList.toggle('active'); }
function filterByMeal(m) { currentMealType = m; showDay(currentDay); }
function clearMarkers() { markers.forEach(m => map.removeLayer(m)); markers = []; }

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
