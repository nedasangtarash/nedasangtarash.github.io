/* ===== Panel switching ===== */
function showPanel(id){
  document.querySelectorAll('.panel').forEach(p=>{
    p.classList.remove('active');
  });
  const panel=document.getElementById(id);
  if(panel) panel.classList.add('active');

  const hero=document.getElementById('heroCircle');
  hero.style.display=(id==='home')?'flex':'none';

  window.scrollTo({top:0,behavior:'smooth'});
}

/* ===== Portfolio data ===== */
const works={
  animation:['Animation Film 01','Animation Film 02','Animation Film 03'],
  illustration:['Illustration 01','Illustration 02','Illustration 03'],
  handicraft:['Handicraft Object 01','Handicraft Object 02']
};

/* ===== Render portfolio ===== */
function setWorks(type){
  const grid=document.getElementById('portfolioGrid');
  if(!grid) return;
  grid.innerHTML='';

  works[type].forEach(title=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<span>${title}</span>`;
    card.onclick=()=>openFullscreen(title);
    grid.appendChild(card);
  });
}

/* ===== Fullscreen overlay ===== */
function openFullscreen(title){
  const fs=document.createElement('div');
  fs.className='fullscreen';
  fs.innerHTML=`<span>${title}</span>`;
  fs.onclick=()=>fs.remove();
  document.body.appendChild(fs);
}

/* default */
setWorks('animation');
