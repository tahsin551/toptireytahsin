/* =====================================================================
   CART — shared across every page via localStorage.
   You usually don't need to edit this file.
   ===================================================================== */

const CART_KEY = 'toptire_cart';
const ORDER_KEY = 'toptire_last_order';

function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function money(n){ return '৳' + n.toLocaleString('en-BD'); }
function cartCount(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return getCart().reduce((s,i)=>s+i.qty*i.price,0); }

function addToCart(p, size, qty){
  const cart = getCart();
  const existing = cart.find(i => i.id === p.id && i.size === size);
  if(existing){ existing.qty += qty; }
  else { cart.push({ id:p.id, name:p.name, size, qty, price:p.price }); }
  saveCart(cart);
}
function cartChangeQty(idx, d){
  const cart = getCart();
  if(!cart[idx]) return;
  cart[idx].qty = Math.max(1, cart[idx].qty + d);
  saveCart(cart);
  if(typeof renderCart === 'function') renderCart();
}
function removeFromCart(idx){
  const cart = getCart();
  cart.splice(idx,1);
  saveCart(cart);
  if(typeof renderCart === 'function') renderCart();
}
function updateCartBadge(){
  const el = document.getElementById('cartCount');
  if(el) el.textContent = cartCount();
}

function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove('show'), 2600);
}

function quickAdd(id){
  const p = findProduct(id);
  if(!p) return;
  addToCart(p, p.sizes[0], 1);
  showToast(`${p.name} added to cart`);
}
