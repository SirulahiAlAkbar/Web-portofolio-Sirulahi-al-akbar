/* ===== CONFIG: ubah data di sini ===== */
const CONFIG={email:"sirullahialakbar2006@mail.ugm.ac.id",linkedin:"https://linkedin.com/in/sirulahialakbar",github:"https://github.com/Karlfritz67",cvUrl:"", photo:"foto sirul.jpg"};
const INFO=[
 ["Bidang Minat","Elektronika, robotika, sensor, dan otomasi."],
 ["Teknologi yang Dipelajari","Arduino, Processing, dan Wokwi. Sedang belajar Python dasar dan berbagai alat ukur."],
 ["Proyek yang Pernah Dibuat","Empat prototipe sederhana: sensor air, radar, sensor api, dan mobil remote berbasis Arduino."],
 ["Fokus Pengembangan","Sistem tertanam, pemrograman, dan integrasi perangkat keras."]];
/* status: used = Pernah Digunakan, learning = Sedang Dipelajari. Sesuaikan dengan kondisi sebenarnya. */
const SKILLS=[
 ["Elektronika","Dasar Elektronika","⚡","used","Konsep tegangan, arus, dan komponen dasar.","var(--yel)"],
 ["Elektronika","Perakitan Rangkaian","🔧","used","Merangkai komponen pada breadboard atau papan prototipe.","var(--yel)"],
 ["Elektronika","Integrasi Sensor","📡","used","Menghubungkan sensor ke mikrokontroler dan membaca datanya.","var(--yel)"],
 ["Elektronika","Dasar Pemecahan Masalah Rangkaian","🔍","learning","Menelusuri penyebab rangkaian tidak bekerja.","var(--yel)"],
 ["Elektronika","Penggunaan Alat Ukur","📟","learning","Belajar memakai berbagai alat ukur listrik dan elektronika.","var(--yel)"],
 ["Mikrokontroler","Arduino Uno","🧩","used","Papan mikrokontroler untuk prototipe dan pembelajaran.","var(--mint)"],
 ["Mikrokontroler","HC-SR04","📏","used","Sensor ultrasonik pengukur jarak.","var(--mint)"],
 ["Mikrokontroler","RFID","💳","used","Pembaca kartu atau tag nirkabel.","var(--mint)"],
 ["Mikrokontroler","Sensor Hujan","🌧","used","Mendeteksi air pada permukaan sensor.","var(--mint)"],
 ["Mikrokontroler","Sensor Api","🔥","used","Mendeteksi indikasi cahaya api.","var(--mint)"],
 ["Mikrokontroler","Motor Servo","⚙","used","Aktuator dengan sudut putar terkontrol.","var(--mint)"],
 ["Pemrograman","Arduino C/C++","{ }","used","Bahasa pemrograman sketch Arduino.","var(--lav)"],
 ["Pemrograman","Dasar Python","🐍","learning","Bahasa pemrograman serbaguna; tahap dasar.","var(--lav)"],
 ["Pemrograman","Dasar Algoritma","🧠","learning","Logika dan alur penyelesaian masalah.","var(--lav)"],
 ["Perangkat Lunak","Arduino IDE","💻","used","Editor dan uploader program Arduino.","var(--cor)"],
 ["Perangkat Lunak","Wokwi","🧪","used","Simulator online untuk Arduino dan ESP32.","var(--cor)"],
 ["Perangkat Lunak","Processing","🎨","used","Lingkungan visualisasi untuk menampilkan data sensor.","var(--cor)"]];
const PROJECTS=[
 {id:"air",title:"Sensor Air Sederhana",icon:"💧",color:"var(--mint)",cats:["Arduino","Sensor"],
  sum:"Prototipe sederhana yang membaca keberadaan air dengan sensor dan memproses responsnya menggunakan Arduino.",
  tech:["Arduino","Sensor air"]},
 {id:"radar",title:"Radar Sederhana dengan Arduino",icon:"📡",color:"var(--blue)",cats:["Arduino","Sensor"],
  sum:"Prototipe radar sederhana untuk mendeteksi objek dalam jangkauan menggunakan Arduino Uno dan sensor ultrasonik.",
  tech:["Arduino Uno","HC-SR04","Servo","Processing"]},
 {id:"api",title:"Sensor Api Sederhana",icon:"🔥",color:"var(--cor)",cats:["Arduino","Sensor"],
  sum:"Prototipe sederhana untuk mendeteksi indikasi api menggunakan sensor api dan Arduino.",
  tech:["Arduino","Sensor api"]},
 {id:"rc",title:"Mobil Remote dengan Arduino Sederhana",icon:"🚗",color:"var(--yel)",cats:["Arduino","Elektronika"],
  sum:"Prototipe mobil kendali jarak jauh berbasis Arduino Uno untuk mempelajari kontrol motor dan integrasi perangkat keras.",
  tech:["Arduino Uno","Motor","Driver motor"]}];
const CATS=["Semua","Arduino","Sensor","Elektronika"];

/* ===== util ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2600)}

/* theme */
const root=document.documentElement;
function curDark(){const t=root.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
const saved=store.get("theme");if(saved)root.dataset.theme=saved;
$("#theme").onclick=()=>{const n=curDark()?"light":"dark";root.dataset.theme=n;store.set("theme",n);toast(n==="dark"?"Mode gelap aktif":"Mode terang aktif")};

/* nav */
const burger=$("#burger"),links=$("#links");
burger.onclick=()=>{const o=links.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
$$("a[href^='#']",links).forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");burger.setAttribute("aria-expanded","false")}));
const secs=["beranda","tentang","keahlian","proyek","kontak"];
function onScroll(){
 const h=document.documentElement.scrollHeight-innerHeight;
 $("#bar").style.width=(h>0?scrollY/h*100:0)+"%";
 $("#top").classList.toggle("show",scrollY>600);
 let cur="beranda";const y=scrollY+140;
 secs.forEach(id=>{const e=document.getElementById(id);if(e&&e.offsetTop<=y)cur=id});
 if(innerHeight+scrollY>=document.body.scrollHeight-4)cur="kontak";
 $$("a",links).forEach(a=>{const on=a.getAttribute("href")==="#"+cur;a.classList.toggle("on",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")});
}
addEventListener("scroll",onScroll,{passive:true});addEventListener("resize",onScroll);
$("#top").onclick=()=>scrollTo({top:0,behavior:reduce?"auto":"smooth"});

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});
$$(".rv").forEach(e=>io.observe(e));

/* hero parallax */
const vis=$("#vis");
if(!reduce&&matchMedia("(pointer:fine)").matches){
 addEventListener("pointermove",e=>{const r=vis.getBoundingClientRect(),x=(e.clientX-(r.left+r.width/2))/innerWidth,y=(e.clientY-(r.top+r.height/2))/innerHeight;
  $$("[data-d]",vis).forEach(n=>{const d=+n.dataset.d;n.style.transform=`translate(${x*d*3}px,${y*d*3}px)`})});
}

/* about + skills */
$("#infoCards").innerHTML=INFO.map(i=>`<div class="info"><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p></div>`).join("");
const SKC=["Semua",...new Set(SKILLS.map(s=>s[0]))];let skF="Semua";
function tabs(el,list,cur,fn){el.innerHTML=list.map(c=>`<button class="chip" aria-pressed="${c===cur}" data-c="${esc(c)}">${esc(c)}</button>`).join("");$$("button",el).forEach(b=>b.onclick=()=>fn(b.dataset.c))}
function renderSk(){
 tabs($("#skTabs"),SKC,skF,c=>{skF=c;renderSk()});
 $("#skills").innerHTML=SKILLS.filter(s=>skF==="Semua"||s[0]===skF).map(s=>`<div class="sk" tabindex="0"><i style="background:${s[5]}" aria-hidden="true">${s[2]}</i><div><b>${esc(s[1])}</b><small>${s[3]==="used"?"Pernah Digunakan":"Sedang Dipelajari"}</small></div><div class="tip" role="tooltip">${esc(s[4])}</div></div>`).join("");
}
renderSk();

/* projects */
let pF="Semua",pQ="",pV="grid";
function renderP(){
 tabs($("#pTabs"),CATS,pF,c=>{pF=c;renderP()});
 const q=pQ.trim().toLowerCase();
 const L=PROJECTS.filter(p=>(pF==="Semua"||p.cats.includes(pF))&&(!q||[p.title,p.sum,p.tech.join(" ")].join(" ").toLowerCase().includes(q)));
 const g=$("#pgrid");g.className="grid"+(pV==="list"?" list":"");
 $("#res").textContent=`${L.length} dari ${PROJECTS.length} proyek ditampilkan`;
 g.innerHTML=L.length?L.map(p=>`<article class="pc"><div class="thumb" style="background:${p.color}" aria-hidden="true">${p.icon}</div><div class="pb"><h3>${esc(p.title)}</h3><p>${esc(p.sum)}</p><div class="tech">${p.tech.map(t=>`<span>${esc(t)}</span>`).join("")}</div></div></article>`).join(""):`<div class="empty">Tidak ada proyek yang cocok. Ubah kata kunci atau pilih filter Semua.</div>`;
}
$("#q").oninput=e=>{pQ=e.target.value;renderP()};
$$(".view .chip").forEach(b=>b.onclick=()=>{pV=b.dataset.v;$$(".view .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));renderP()});
renderP();

/* radar */
const cv=$("#radar"),cx=cv.getContext("2d");
const W=cv.width,H=cv.height,OX=W/2,OY=H-26,R=H-46;
let run=!reduce,spd=1.5,ang=0,dir=1,last=0;
const objs=[{a:40,d:55,va:.5,vd:.25},{a:100,d:80,va:-.4,vd:-.3},{a:140,d:35,va:.3,vd:.35}].map(o=>({...o,seen:0}));
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n);
function draw(){
 cx.clearRect(0,0,W,H);cx.lineWidth=1.5;cx.strokeStyle="rgba(124,155,255,.35)";cx.fillStyle="rgba(234,240,255,.7)";cx.font="12px sans-serif";
 for(let i=1;i<=4;i++){cx.beginPath();cx.arc(OX,OY,R*i/4,Math.PI,0);cx.stroke();cx.fillText(i*25+" cm",OX+R*i/4-30,OY+16)}
 for(let a=0;a<=180;a+=30){const r=a*Math.PI/180;cx.beginPath();cx.moveTo(OX,OY);cx.lineTo(OX+R*Math.cos(r),OY-R*Math.sin(r));cx.stroke()}
 const r=ang*Math.PI/180;
 for(let k=0;k<26;k++){const rr=(ang-dir*k*1.2)*Math.PI/180;cx.strokeStyle=`rgba(79,209,165,${.38*(1-k/26)})`;cx.lineWidth=3;cx.beginPath();cx.moveTo(OX,OY);cx.lineTo(OX+R*Math.cos(rr),OY-R*Math.sin(rr));cx.stroke()}
 cx.strokeStyle="#4FD1A5";cx.lineWidth=2;cx.beginPath();cx.moveTo(OX,OY);cx.lineTo(OX+R*Math.cos(r),OY-R*Math.sin(r));cx.stroke();
 objs.forEach(o=>{const a=o.a*Math.PI/180,rr=o.d/100*R,al=Math.max(.18,o.seen);cx.fillStyle=`rgba(255,201,60,${al})`;cx.beginPath();cx.arc(OX+rr*Math.cos(a),OY-rr*Math.sin(a),6+al*3,0,7);cx.fill()});
}
function tick(t){
 const dt=Math.min(50,t-last||16);last=t;
 if(run){
  ang+=dir*spd*dt*.06;if(ang>=180){ang=180;dir=-1}if(ang<=0){ang=0;dir=1}
  let hit=null;
  objs.forEach(o=>{o.a+=o.va*spd*dt*.01;o.d+=o.vd*spd*dt*.01;if(o.a<15||o.a>165)o.va*=-1;if(o.d<20||o.d>95)o.vd*=-1;
   o.seen=Math.max(0,o.seen-dt*.0004*spd);if(Math.abs(o.a-ang)<3){o.seen=1;hit=o}});
  $("#rang").textContent="Sudut: "+Math.round(ang)+"°";$("#rdist").textContent=hit?"Jarak: "+Math.round(hit.d)+" cm (simulasi)":"Jarak: tidak ada objek";
 }
 draw();requestAnimationFrame(tick);
}
function setRun(v){run=v;const b=$("#rtoggle");b.textContent=v?"Hentikan":"Mulai";b.setAttribute("aria-pressed",v)}
$("#rtoggle").onclick=()=>setRun(!run);setRun(run);
$("#rspeed").oninput=e=>spd=+e.target.value;
requestAnimationFrame(tick);

/* contact + footer */
$("#mailTxt").textContent=CONFIG.email;
$("#mail").href="mailto:"+CONFIG.email;
$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(CONFIG.email);toast("Email disalin")}catch(e){const t=document.createElement("textarea");t.value=CONFIG.email;document.body.appendChild(t);t.select();let ok=false;try{ok=document.execCommand("copy")}catch(_){}t.remove();toast(ok?"Email disalin":"Salin manual: "+CONFIG.email)}};
function ext(a,url,label){if(url){a.href=url}else{a.removeAttribute("href");a.setAttribute("aria-disabled","true");a.setAttribute("role","link");a.title=label+" belum diisi";a.onclick=e=>{e.preventDefault();toast(label+" belum diisi. Ubah CONFIG di skrip.")}}}
ext($("#li"),CONFIG.linkedin,"LinkedIn");ext($("#gh"),CONFIG.github,"GitHub");
$("#fsoc").innerHTML=(CONFIG.linkedin?`<a href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`:"")+(CONFIG.github?`<a href="${esc(CONFIG.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`:"");

if(CONFIG.photo){const p=$(".photo");p.removeAttribute("role");p.style.cssText="border:none;padding:0;background:none;overflow:hidden";p.innerHTML=`<img src="${esc(CONFIG.photo)}" alt="Foto Sirulahi Al Akbar" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:28px">`}

onScroll();