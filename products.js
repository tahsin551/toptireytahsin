/* =====================================================================
   PRODUCTS — edit this file to add/remove products or change images.
   =====================================================================
   To use a real photo instead of the plain color swatch:
     1. Drop your image file into the /images folder
        (e.g. images/tt-tee-blk.jpg)
     2. Set "image: 'images/tt-tee-blk.jpg'" on that product below.
   Leave image as null to keep the default tread-pattern color swatch.
   ===================================================================== */

const PRODUCTS = [
  { id:'tt-tee-blk',    name:'Tread Tee — Black',               category:'Tees',        price:650,  sizes:['S','M','L','XL'],   glyph:'TREAD|TEE',     image:'images/me.jpeg',desc:'Our core heavyweight tee, 240 GSM cotton, boxy fit with a tread-stripe hem tag. The everyday base layer of the whole line.', spec:{Fabric:'240 GSM Cotton', Fit:'Boxy', Care:'Machine wash cold'} },
  { id:'tt-tee-wht',    name:'Tread Tee — Off-White',            category:'Tees',        price:650,  sizes:['S','M','L','XL'],   glyph:'TREAD|TEE',      image:'images/tt-tee-wht.jpg', desc:'Same heavyweight build as the black tee, in a chalky off-white that wears in, not out.', spec:{Fabric:'240 GSM Cotton', Fit:'Boxy', Care:'Machine wash cold'} },
  { id:'tt-hood-char',  name:'Grip Hoodie — Charcoal',            category:'Hoodies',     price:1450, sizes:['S','M','L','XL'],   glyph:'GRIP|HOODIE',    image:'images/hoodie.jpg', desc:'Brushed-fleece hoodie with a double-layer hood and kangaroo pocket. Heavy enough for Chattogram winters.', spec:{Fabric:'320 GSM Fleece', Fit:'Relaxed', Care:'Machine wash cold'} },
  { id:'tt-hood-yel',   name:'Grip Hoodie — Hazard Yellow',       category:'Hoodies',     price:1500, sizes:['S','M','L','XL'],   glyph:'GRIP|HOODIE',    image:null, desc:'The loudest piece in the lineup. Same 320 GSM fleece build, dyed in our signature hazard yellow.', spec:{Fabric:'320 GSM Fleece', Fit:'Relaxed', Care:'Machine wash cold'} },
  { id:'tt-jogger-blk', name:'Asphalt Joggers — Black',           category:'Bottoms',     price:1100, sizes:['S','M','L','XL'],   glyph:'ASPHALT|JOGGER', image:null, desc:'Tapered joggers with ribbed cuffs and a zip side-pocket. Built for movement, not just standing still.', spec:{Fabric:'French Terry', Fit:'Tapered', Care:'Machine wash cold'} },
  { id:'tt-cap',        name:'Pit Crew Cap',                      category:'Accessories', price:450,  sizes:['One Size'],         glyph:'PIT CREW|CAP',   image:null, desc:'Structured 6-panel cap with an embroidered tread-stripe and adjustable strap.', spec:{Fabric:'Cotton Twill', Fit:'Adjustable', Care:'Spot clean'} },
  { id:'tt-jacket',     name:'Overpass Jacket — Concrete Grey',   category:'Outerwear',   price:2200, sizes:['S','M','L','XL'],   glyph:'OVERPASS|JACKET', image:null, desc:'Water-resistant shell jacket with taped seams and a tread-pattern lining. Our heaviest piece.', spec:{Fabric:'Ripstop Shell', Fit:'Regular', Care:'Wipe clean'} },
  { id:'tt-socks',      name:'Lug Nut Socks (3-Pack)',            category:'Accessories', price:350,  sizes:['One Size'],         glyph:'LUG NUT|SOCKS',  image:null, desc:'Three pairs of cushioned crew socks with a reinforced heel. The small detail that finishes the fit.', spec:{Fabric:'Cotton Blend', Fit:'Crew', Care:'Machine wash'} }
];

function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
