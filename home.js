const messages = [

"🌸 ئەم وێبسایتە تەنها بۆ تۆ دروست کراوە.",

"💗 لەوانەیە تۆ نەزانیت، بەڵام هەموو دێڕێکی ئەم وێبسایتە بە خۆشەویستی نووسراوە.",

"🎀 هەر کلیکێک بکە، سورپرایزێکی نوێ چاوەڕێت دەکات.",

"🌷 هەموو دڵێک لەم شاشەیەدا تەنها بۆ تۆ دەدات.",

"😭 ئەی بتخۆم شێرەکەم.",

"💖 هێشتا تەواو نەبوو... هێشتا زۆر شت ماوە."

];

let current = 0;

function nextMessage(){

current++;

if(current >= messages.length){

current = 0;

}

document.getElementById("randomText").innerHTML = messages[current];

}


/* Floating Hearts */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💗","💕","💖","🌸","🎀"][Math.floor(Math.random()*5)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="fly 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,600);


/* Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:translateY(0);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
