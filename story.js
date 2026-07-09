const pages = document.querySelectorAll(".page");

let currentPage = 0;

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage >= pages.length) {

        window.location.href = "letter2.html";

        return;

    }

    pages[currentPage].classList.add("active");

}

/* 💗 Floating Hearts */

function createHeart() {

    const heart = document.createElement("span");

    const emojis = ["💗","💕","💖","🌸","🎀","🤍"];

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.pointerEvents = "none";

    heart.style.animation = "floatHeart 8s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);

/* 🌸 Animation */

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
