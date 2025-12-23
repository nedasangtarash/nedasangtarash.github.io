// ===== PANEL SWITCH =====
function showPanel(id){
  document.querySelectorAll('.panel').forEach(p=>{
    p.classList.remove('active');
  });
  const panel = document.getElementById(id);
  panel.classList.add('active');

  const hero = document.getElementById('heroCircle');
  hero.style.display = (id==='home') ? 'block' : 'none';

  window.scrollTo({top:0, behavior:'smooth'});
}

// ===== PORTFOLIO SWITCH =====
function showPortfolio(id){
  document.querySelectorAll('.portfolio-section').forEach(s=>{
    s.style.display='none';
  });
  document.getElementById(id).style.display='flex';
}

// ===== FULLSCREEN PORTFOLIO =====
function openFullscreen(card){
  const clone = card.cloneNode(true);
  clone.classList.add('fullscreen');
  document.body.appendChild(clone);

  clone.addEventListener('click', ()=>{
    document.body.removeChild(clone);
  });
}
