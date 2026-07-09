const correctPassword = "my girl";

const funnyMessages = [
‎"شتێکت لەبیر چووە 😂",
‎"نەخێر، هێشتا نا 😭",
‎"پاسووردەکە خەوتووە 😴",
‎"هەوڵێکی تر بدە 🎀",
‎"ئەوە پاسوورد نییە 😂",
‎"ئەمجار نزیک بوویت... بەڵام نە 😂",
‎"ئایا دڵنیایت؟ 🤨",
‎"خۆت بیر بکەوە 😭",
‎"دەزانم دەتوانیت 💗",
‎"جارێکی تر هەوڵبدە 🌸",
‎"ئەمە زۆر ئاسانە 😏",
‎"تەنها یەک وشەیە 💕",
‎"ئاگاداربە، هەڵەت کرد 😂",
‎"هێشتا نە 😭",
‎"دەبێت باشتر بیر بکەیت 🎀",
‎"ئەمەش هەڵەیە 🥹",
‎"پێدەچێت لەبیرت چووە 😂",
‎"هێشتا چاوەڕوانم 💗",
"Almost... 😭",
‎"هەوڵی کۆتایی؟ 😂"
];

let tries = 0;

function checkPassword(){

const input = document.getElementById("password").value.trim();

const message = document.getElementById("message");

const box = document.querySelector(".login-box");

if(input === correctPassword){

message.style.color="#ff2f75";

message.innerHTML="ئەی بتخۆم شێرەکەم😭💗";

setTimeout(()=>{

window.location.href="home.html";

},2000);

return;

}

tries++;

box.classList.add("shake");

setTimeout(()=>{

box.classList.remove("shake");

},400);

message.style.color="#d60057";

message.innerHTML=funnyMessages[(tries-1)%funnyMessages.length];

}

/* ---------- Floating Hearts ---------- */

const heartContainer = document.querySelector(".background-hearts");

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML=["💗","💖","💕","💞","🌸","🎀"][Math.floor(Math.random()*6)];

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,500);


/* ---------- Enter Key ---------- */

document
.getElementById("password")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){
checkPassword();
}

});


/* ---------- Placeholder Animation ---------- */

const placeholders=[

"Type the password... 🎀",

"Think carefully... 💭",

"You know it... 💗",

"Don't rush... 🌸"

];

let p=0;

setInterval(()=>{

document.getElementById("password").placeholder=placeholders[p];

p++;

if(p>=placeholders.length){

p=0;

}

},2500);


/* ---------- Idle Message ---------- */

setTimeout(()=>{

const msg=document.getElementById("message");

if(msg.innerHTML===""){

msg.innerHTML="A little surprise is waiting... 🎀";

}

},5000);
