/* =====================================================================
   COMMON — product card markup + nav behavior shared by every page.
   ===================================================================== */

function swatchHTML(product, tagText){
  if(product.image){
    return `<div class="swatch">
        <img src="${product.image}" alt="${product.name}">
        <span class="tag mono">${tagText}</span>
      </div>`;
  }
  const hue = Math.abs(product.id.split('').reduce((a,c)=>a+c.charCodeAt(0),0)) % 360;
  return `<div class="swatch" style="background:linear-gradient(135deg, var(--asphalt) 55%, hsl(${hue},40%,22%) 100%);">
      <span class="tag mono">${tagText}</span>
      <div class="glyph">${product.glyph.split('|').join('<br>')}</div>
    </div>`;
}

function productCard(p){
  return `<a class="card" href="product.html?id=${p.id}">
    ${swatchHTML(p, p.category.toUpperCase())}
    <div class="card-body">
      <div class="card-name">${p.name}</div>
      <div class="card-sub mono">SIZES: ${p.sizes.join('/')}</div>
      <div class="card-foot">
        <span class="price">${money(p.price)}</span>
        <button class="mini-add" onclick="event.preventDefault(); event.stopPropagation(); quickAdd('${p.id}')">+ Add</button>
      </div>
    </div>
  </a>`;
}

function initNav(){
  updateCartBadge();
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  // Highlight the current page in the nav based on body[data-page]
  const current = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === current);
  });
}

document.addEventListener('DOMContentLoaded', initNav);
