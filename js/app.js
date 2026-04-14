/**
 * GREEK ISLES CRUISE COMPARISON
 * Application Logic
 */

/**
 * Format a number as USD currency
 * @param {number} num - The number to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
}

/**
 * Format expense label based on line item
 * @param {string} key - The key from estimatedTotalIn
 * @param {number} cruiseId - The cruise ID
 * @returns {string} Human-readable label
 */
function getExpenseLabel(key, cruiseId) {
  const labels = {
    cruise: 'Cruise fare',
    airfare: 'Round-trip airfare (×2)',
    hotel: cruiseId === 3 ? 'Athens + Rome hotels (3 nights)' : 'Rome hotel (2 nights)',
    addons: cruiseId === 1 ? 'Drinks / Wi-Fi / gratuities pkg' : 
            cruiseId === 2 ? 'Princess Plus package' :
            'Premium beverages / bar drinks',
    excursions: cruiseId === 3 ? 'Shore excursions (credit incl.)' : 'Shore excursions',
    dining: 'Specialty dining',
    total: 'Estimated total'
  };
  return labels[key] || key;
}

/**
 * Render all cruise option cards from cruiseData
 */
function renderCruiseCards() {
  const container = document.getElementById('cruiseCardsContainer');
  
  if (!container || !window.cruiseData) {
    console.error('Missing container or cruiseData');
    return;
  }

  const cruises = window.cruiseData.cruises;
  
  container.innerHTML = cruises.map(cruise => {
    const estimates = cruise.estimatedTotalIn;
    const featured = cruise.featured ? ' featured' : '';
    const optionNum = cruise.id;
    
    let cabinHtml = cruise.cabins.map(cabin => 
      `<div class="price-line"><span class="lbl">${cabin.type}</span><span class="val">${formatCurrency(cabin.price)}</span></div>`
    ).join('');
    
    let estimatesHtml = '';
    // Render each expense line (except total, which goes last)
    const expenseKeys = ['cruise', 'airfare', 'hotel', 'addons', 'excursions', 'dining'].filter(
      key => key in estimates && (estimates[key] !== 0 || key === 'addons' || key === 'excursions')
    );
    
    estimatesHtml = expenseKeys.map(key => {
      const value = estimates[key];
      const label = getExpenseLabel(key, cruise.id);
      const prefix = key === 'cruise' ? '' : '~';
      return `<div class="price-line"><span class="lbl">${label}</span><span class="val">${prefix}${formatCurrency(value)}</span></div>`;
    }).join('');
    
    // Add total line
    estimatesHtml += `<div class="total-line"><span>Estimated total</span><span>~${formatCurrency(estimates.total)}</span></div>`;
    
    return `
    <div class="option-card${featured}">
      <span class="option-badge">Option ${optionNum} · ${cruise.company}</span>
      <div class="option-ship">${cruise.ship}</div>
      <div class="option-line">${cruise.dates}</div>
      <div class="option-meta">${cruise.duration} · ${cruise.ports} ports · ${cruise.routeDesc}</div>

      <p class="section-label" style="margin-top:0.5rem">Cabin fares (per couple)</p>
      ${cabinHtml}

      <p class="section-label">Estimated total-in (${cruise.cabins[0].type.toLowerCase()})</p>
      ${estimatesHtml}
    </div>`;
  }).join('');
}

/**
 * Switch between tabs
 * @param {string} id - The panel ID to show
 * @param {HTMLElement} btn - The button that was clicked
 */
function showTab(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Convert inclusion status to HTML tag
 * @param {string} status - 'yes', 'partial', 'no'
 * @returns {string} HTML tag
 */
function getStatusTag(status) {
  if (status === 'yes') return '<span class="tag yes">Included</span>';
  if (status === 'partial') return '<span class="tag partial">Some included</span>';
  if (status === 'no') return '<span class="tag no">Extra charge</span>';
  return status;
}

/**
 * Convert amenity status to HTML
 * @param {string} status - 'included', 'fee', 'no'
 * @returns {string} HTML
 */
function getAmeniityStatus(status) {
  if (status === 'included') return '<span class="a-val yes">✓ Included</span>';
  if (status === 'fee') return '<span class="a-val note">Fee applies</span>';
  if (status === 'no') return '<span class="a-val no">Not the focus</span>';
  return '<span class="a-val yes">✓</span>';
}

// Initialize immediately since script is at bottom of page
renderCruiseCards();
