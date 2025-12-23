function showPanel(id){
  document.querySelectorAll('.panel').forEach(p=>{
    p.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  const hero = document.getElementById('heroCircle');
  hero.style.display = (id === 'home') ? 'block' : 'none';

  window.scrollTo({top:0,behavior:'smooth'});
}

function showPortfolio(id){
  document.querySelectorAll('.portfolio-section').forEach(s=>{
    s.style.display='none';
  });
  document.getElementById(id).style.display='flex';
}
