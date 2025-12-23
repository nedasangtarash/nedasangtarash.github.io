function showPanel(id){
  document.querySelectorAll('.panel').forEach(p=>{
    p.classList.remove('active');
  });

  const target = document.getElementById(id);
  if(target) target.classList.add('active');

  // show / hide hero video
  const hero = document.getElementById('heroBlob');
  if(id === 'home'){
    hero.style.display = 'block';
  } else {
    hero.style.display = 'none';
  }

  window.scrollTo({top:0,behavior:'smooth'});
}

/* ===== Portfolio data ===== */
const works = {
  animation:[
    {title:'Animation 01'},
    {title:'Animation 02'}
  ],
  illustration:[
    {title:'Illustration 01',img:'images/ill1.jpg'},
    {title:'Illustration 02',img:'images/ill2.jpg'},
    {title:'Illustration 03',img:'images/ill3.jpg'}
  ],
  handicraft:[
    {title:'Handicraft 01'},
    {title:'Handicraft 02'}
  ]
};

function setWorks(type){
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML='';

  works[type].forEach(item=>{
    const card=document.createElement('div');
    card.className='card';

    if(item.img){
      card.innerHTML=`
        <img src="${item.img}" alt="${item.title}">
        <span>${item.title}</span>
      `;
    }else{
      card.innerHTML=`<span>${item.title}</span>`;
    }

    grid.appendChild(card);
  });
}

setWorks('animation');
