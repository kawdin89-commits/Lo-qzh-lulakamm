/* 🤍 Continue Button */

function nextPage(){

window.location.href="letter.html";

}

/* 🌸 Floating Hearts */

const emojis=["🤍","🌸","💗","💕","💮","🎀"];

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.opacity=".9";

heart.style.pointerEvents="none";

heart.style.animation=`fall ${6+Math.random()*5}s linear forwards`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,700);

/* Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* 📸 Lightbox */

const images = document.querySelectorAll(".card img");

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "rgba(0,0,0,.85)";
overlay.style.display = "none";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";
overlay.style.cursor = "pointer";

const bigImage = document.createElement("img");

bigImage.style.maxWidth = "90%";
bigImage.style.maxHeight = "90%";
bigImage.style.borderRadius = "25px";
bigImage.style.boxShadow = "0 25px 60px rgba(0,0,0,.45)";
bigImage.style.transform = "scale(.8)";
bigImage.style.transition = ".35s";

overlay.appendChild(bigImage);

document.body.appendChild(overlay);

images.forEach(img=>{

img.addEventListener("click",()=>{

bigImage.src = img.src;

overlay.style.display = "flex";

setTimeout(()=>{

bigImage.style.transform="scale(1)";

},10);

});

});

overlay.addEventListener("click",()=>{

bigImage.style.transform="scale(.8)";

setTimeout(()=>{

overlay.style.display="none";

},250);

});

/* ✨ Cards Fade In */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s ease";

observer.observe(card);

});

/* 🌸 Subtitle Animation */

const subtitle=document.querySelector(".subtitle");

if(subtitle){

subtitle.animate(

[
{opacity:0,transform:"translateY(-20px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:1200,
fill:"forwards"
}

);

}
