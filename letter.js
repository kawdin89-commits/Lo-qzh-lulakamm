const text = `

Kcha Gaurakam❤️🐇🌿

Maybe this is only a website...

But every little detail here
was made with love.

‎لەوانەیە ئەمە تەنها وێبسایتێک بێت...

‎بەڵام هەر دێڕێکی،
‎هەر دڵێکی،
‎هەر گوڵێکی،
‎هەر ئەنیمەیشنێکی ناوی...

‎بۆ تۆ دروست کراوە.

From the first day...

📅 26 / 02 / 2024

Everything became different.

Thank you...

For every smile.

For every memory.

For simply existing.

Mommy...

I hope this tiny surprise
can make you smile even a little.

❤️
`;

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,45);

}else{

document.getElementById("nextBtn").style.display="inline-block";

}

}

function openLetter(){

const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");

envelope.style.transform = "scale(0)";
envelope.style.opacity = "0";

setTimeout(()=>{

document.querySelector(".envelope-container").style.display="none";

letter.style.display="flex";

typeWriter();

},900);

}

function goGallery(){

window.location.href="story.html";

}


/* 🌸 Floating Hearts */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💗","💕","💖","🤍","🌸","🎀"][Math.floor(Math.random()*6)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(18+Math.random()*25)+"px";
heart.style.pointerEvents="none";
heart.style.animation="floatHeart 8s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);


/* ✨ Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
