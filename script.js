const correctPassword = "my girl";

const funnyMessages = [
"شتێکت لەبیر چووە 😂",
"نەخێر، هێشتا نا 😭",
"پاسووردەکە خەوتووە 😴",
"هەوڵێکی تر بدە 🎀",
"ئەوە پاسوورد نییە 😂",
"ئەمجار نزیک بوویت... بەڵام نە 😂",
"ئایا دڵنیایت؟ 🤨",
"خۆت بیر بکەوە 😭",
"دەزانم دەتوانیت 💗",
"جارێکی تر هەوڵبدە 🌸",
"ئەمە زۆر ئاسانە 😏",
"تەنها یەک وشەیە 💕",
"ئاگاداربە، هەڵەت کرد 😂",
"هێشتا نە 😭",
"دەبێت باشتر بیر بکەیت 🎀",
"ئەمەش هەڵەیە 🥹",
"پێدەچێت لەبیرت چووە 😂",
"هێشتا چاوەڕوانم 💗",
"Almost... 😭",
"هەوڵی کۆتایی؟ 😂"
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
