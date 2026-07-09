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
