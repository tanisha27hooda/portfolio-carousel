const images=[
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176598/1_zz6iie.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176606/2_rl6833.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176605/3_m9fbgq.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176604/4_zgkcor.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176603/5_wdzvyk.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176605/6_edc4u1.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176611/7_cdlvil.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176618/8_xgdvpf.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176618/9_welplm.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176619/10_afiyfp.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176620/11_d6yxhg.png",
"https://res.cloudinary.com/bk0rirvt/image/upload/v1783176620/12_wt5qkv.png"
];
const track=document.getElementById("track");
const dots=document.getElementById("dots");
let current=0;

images.forEach((src,i)=>{
 const s=document.createElement("div");
 s.className="slide";
 const img=document.createElement("img");
 img.src=src;
 img.loading="lazy";
 s.appendChild(img);
 track.appendChild(s);

 const d=document.createElement("div");
 d.className="dot"+(i===0?" active":"");
 d.onclick=()=>go(i);
 dots.appendChild(d);
});

function render(){
 track.style.transform=`translateX(-${current*100}%)`;
 [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===current));
}
function go(i){
 current=(i+images.length)%images.length;
 render();
}
document.querySelector(".next").onclick=()=>go(current+1);
document.querySelector(".prev").onclick=()=>go(current-1);

let startX=0;
track.addEventListener("touchstart",e=>startX=e.touches[0].clientX,{passive:true});
track.addEventListener("touchend",e=>{
 const dx=e.changedTouches[0].clientX-startX;
 if(Math.abs(dx)>50){ dx<0?go(current+1):go(current-1);}
});
document.addEventListener("keydown",e=>{
 if(e.key==="ArrowRight")go(current+1);
 if(e.key==="ArrowLeft")go(current-1);
});
