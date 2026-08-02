// ==============================
// PAYAL.exe Matrix Background
// ==============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789❤★PAYALJPS";

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i=0;i<columns;i++){

drops[i]=1;

}

function drawMatrix(){

ctx.fillStyle="rgba(5,7,13,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00e5ff";

ctx.font=fontSize+"px Consolas";

for(let i=0;i<drops.length;i++){

const text=
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(

text,

i*fontSize,

drops[i]*fontSize

);

if(

drops[i]*fontSize>canvas.height

&&

Math.random()>0.975

){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});