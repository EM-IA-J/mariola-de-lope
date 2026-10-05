const english=document.documentElement.lang==="en";
const gallery=document.querySelector('#gallery');
const lightbox=document.querySelector('#lightbox');
const photo=document.querySelector('#lightbox-image');
const more=document.querySelector('#load-more');
let category='book',shown=6,current=0;
// Galería: cada apartado lee las fotos de su carpeta en /assets (book, polas, analogico), en este orden.
const groups={
  book:Array.from({length:12},(_,i)=>`/assets/book/book-${String(i+1).padStart(2,'0')}.jpg`),
  polas:['pola-01.jpg','pola-02.jpg','pola-03.jpg','pola-04.jpg'].map(f=>`/assets/polas/${f}`),
  analog:Array.from({length:19},(_,i)=>`/assets/analogico/analogico-${String(i+1).padStart(2,'0')}.jpg`)
};
const seasons={}; // Add only confirmed photo seasons, e.g. cv: {es:'Verano 2026',en:'Summer 2026'}. 
const path=p=>p;
// Créditos bajo la galería: el trabajo analógico tiene su propio crédito; Book y Polas mantienen el del HTML.
const credit=document.querySelector('.photo-credit');const defaultCredit=credit.textContent;
const credits={analog:`${english?'Photography':'Fotografías'}: @lporluli`};
const label=()=>category==='polas'?'Pola':category==='analog'?(english?'Analog':'Analógico'):(english?'Portrait':'Retrato');
function render(){credit.textContent=credits[category]||defaultCredit;gallery.replaceChildren();groups[category].slice(0,shown).forEach((n,index)=>{const button=document.createElement('button');button.setAttribute('aria-label',`${english?'Enlarge photograph':'Ampliar fotografía'} ${index+1}`);const img=document.createElement('img');img.src=path(n);img.alt=`Mariola de Lope · ${label()} ${index+1}`;img.loading='lazy';button.append(img);const season=seasons[n]?.[english?'en':'es'];if(category==='polas'&&season){const label=document.createElement('span');label.className='season';label.textContent=season;button.append(label);button.setAttribute('aria-label',button.getAttribute('aria-label')+' · '+season);}button.addEventListener('click',()=>{current=index;update();lightbox.showModal();document.body.classList.add('modal-open')});gallery.append(button)});more.hidden=shown>=groups[category].length}
function update(){photo.src=path(groups[category][current]);photo.alt=`Mariola de Lope · ${label()} ${current+1}`;document.querySelector('#photo-count').textContent=`${String(current+1).padStart(2,'0')} / ${groups[category].length}`}
function move(delta){current=(current+delta+groups[category].length)%groups[category].length;update()}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;shown=6;document.querySelectorAll('[data-filter]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));render()}));
more.addEventListener('click',()=>{shown+=12;render()});document.querySelector('#close-lightbox').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('close',()=>document.body.classList.remove('modal-open'));document.querySelector('#previous-photo').addEventListener('click',()=>move(-1));document.querySelector('#next-photo').addEventListener('click',()=>move(1));lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)});lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
const links=[...document.querySelectorAll('nav > a')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)links.forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main>section').forEach(s=>observer.observe(s));document.querySelector('#year').textContent=new Date().getFullYear();render();
