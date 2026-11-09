const lb=document.getElementById('lb');
document.querySelectorAll('.it').forEach(a=>a.onclick=e=>{e.preventDefault();lb.querySelector('img').src=a.href;document.getElementById('lbc').textContent=a.dataset.cap||'';lb.hidden=false});
lb.onclick=()=>lb.hidden=true;addEventListener('keydown',e=>e.key==='Escape'&&(lb.hidden=true));
const bg=document.querySelector('.burger'),mn=document.getElementById('menu');
bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}));
