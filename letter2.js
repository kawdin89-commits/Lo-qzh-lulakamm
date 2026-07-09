function nextLetter(){

window.location.href="memories.html";

}

/* 🤍 Floating Hearts */

const container=document.querySelector(".background-hearts");

function createHeart(){

const heart=document.createElement("span");

const emojis=["🤍","💗","💕","💖","🌸","🎀"];

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(7+Math.random()*5)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,450);

/* ✨ Fade In Continue Button */

const button=document.querySelector("button");

if(button){

button.style.opacity="0";

button.style.transform="translateY(20px)";

setTimeout(()=>{

button.style.transition="all .8s ease";

button.style.opacity="1";

button.style.transform="translateY(0)";

},9000);

}
