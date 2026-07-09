const memories = [

`🌷

Thank you...

For listening to me.

Sometimes...

I just needed someone
who wouldn't judge me.

You were that person.

🤍`,

`🌸

One thing
I'll never forget...

Your kindness.

It was never fake.

It was always real.

💗`,

`🌹

You always tried
to make me smile.

Even on the days
when smiling
felt impossible.

🌸`,

`🌼

You once said...

‎"باشبوونی تۆ
‎هەموو شتێکە لای من."

I don't think
you'll ever know...

how much
those words meant to me.

🤍`,

`💮

You accepted me...

On my good days...

On my bad days...

And even on the days
I couldn't accept myself.

❤️`,

`🌺

If someone asked me...

"What is the most beautiful memory?"

I wouldn't choose
a place...

I'd choose

meeting you.

🌷`

];

const flowers = document.querySelectorAll(".flower");

const memoryText = document.getElementById("memoryText");

const memoryBox = document.getElementById("memoryBox");

function showMemory(index){

memoryText.innerHTML = memories[index].replace(/\n/g,"<br>");

memoryBox.animate(

[
{opacity:0,transform:"scale(.9)"},
{opacity:1,transform:"scale(1)"}
],

{
duration:500,
fill:"forwards"
}

);

flowers[index].style.background="#ffd6e9";

flowers[index].style.transform="scale(1.15) rotate(10deg)";

}

/* 🌸 Floating Flowers */

const emojis=["🌸","💮","🌷","💗","💕","🎀"];

function createPetal(){

const petal=document.createElement("span");

petal.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-40px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.pointerEvents="none";

petal.style.opacity=".9";

petal.style.animation=`fall ${6+Math.random()*5}s linear forwards`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,650);

/* 🌸 Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

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

/* 🤍 Next Page */

function nextPage(){

window.location.href="gallery.html";

}
