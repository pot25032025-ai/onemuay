
function toggleMenu(){document.body.classList.toggle('menu-open')}
function searchCards(){
  const q=(document.getElementById('siteSearch')?.value||'').toLowerCase();
  document.querySelectorAll('[data-search]').forEach(el=>{
    el.style.display=el.dataset.search.toLowerCase().includes(q)?'block':'none';
  });
}


let currentSlide = 0;
function moveCarousel(direction){
  const track=document.querySelector('.carousel-track');
  const slides=document.querySelectorAll('.carousel-slide');
  if(!track||!slides.length)return;
  currentSlide=(currentSlide+direction+slides.length)%slides.length;
  track.style.transform=`translateX(-${currentSlide*100}%)`;
}
setInterval(()=>moveCarousel(1),5000);

function openLightbox(src,alt){
  const box=document.getElementById('lightbox');
  const img=document.getElementById('lightboxImage');
  if(!box||!img)return;
  img.src=src; img.alt=alt||'ภาพการแข่งขันมวย';
  box.classList.add('open');
}
function closeLightbox(){
  document.getElementById('lightbox')?.classList.remove('open');
}
