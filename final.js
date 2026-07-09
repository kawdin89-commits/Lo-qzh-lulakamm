/* 🤍 Finish Button */

function finish(){

alert("Thank you for reading everything... 🤍");

}

/* 🌸 Floating Hearts */

const emojis=["🤍","🌸","💗","💕","💖","🎀","🐇"];

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.opacity=".9";

heart.style.animation=`fall ${6+Math.random()*4}s linear forwards`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,600);

/* ✨ Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-40px) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
