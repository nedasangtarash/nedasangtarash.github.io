function showPanel(id){
  document.querySelectorAll('.panel').forEach(panel=>{
    panel.classList.remove('active');
  });

  const target = document.getElementById(id);
  if(target){
    target.classList.add('active');
  }

  window.scrollTo({ top:0, behavior:'smooth' });
}

/* ===== Portfolio data ===== */
const works = {
  animation: [
    'Animation Film 01',
    'Animation Film 02',
    'Animation Film 03'
  ],
  illustration: [
    'Illustration 01',
    'Illustration 02'
  ],
  handicraft: [
    'Handicraft Object 01',
    'Handicraft Object 02'
  ]
};

/* ===== Render portfolio ===== */
function setWorks(type){
  const grid = document.getElementById('portfolioGrid');
  if(!grid) return;

  grid.innerHTML = '';

  works[type].forEach(title=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<span>${title}</span>`;
    grid.appendChild(card);
  });
}

/* default */
setWorks('animation');
