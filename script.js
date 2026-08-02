// ==============================
// PAYAL.exe | Script.js (Part 1)
// ==============================

const boot = document.querySelector(".boot-screen");

const welcome = document.getElementById("welcome");
const childhood = document.getElementById("childhood");
const gallery = document.getElementById("gallery");
const terminal = document.getElementById("terminal");
const letter = document.getElementById("letter");
const programmer = document.getElementById("programmer");
const finalScreen = document.getElementById("final");

setTimeout(() => {

    boot.style.display = "none";
    welcome.style.display = "flex";

}, 3500);

// ==============================
// Welcome Button
// ==============================

document.getElementById("startBtn").onclick = function () {
const music = document.getElementById("bgMusic");

music.play().catch(()=>{});
    welcome.style.display = "none";

    childhood.style.display = "flex";

    setTimeout(() => {

        childhood.style.display = "none";

        gallery.style.display = "flex";

        startGallery();

    }, 4000);

};

// ==============================
// Photo Gallery
// ==============================

const photos = [

"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg",
"photos/photo5.jpg",
"photos/photo6.jpg",
"photos/photo7.jpg",
"photos/photo8.jpg",
"photos/photo9.jpg"

];

let index = 0;

function startGallery(){

const img = document.getElementById("galleryImage");

const txt = document.getElementById("galleryText");

const captions = [

"Your Beautiful Smile ❤️",

"Beautiful Memories ✨",

"Cute Moments 💙",

"Forever Special 🌸",

"Keep Smiling 😊",

"Beautiful Soul 🤍",

"Always Shine ✨",

"Happiness Looks Good On You ❤️",

"Best Wishes Forever 💐"

];

const timer = setInterval(()=>{

img.src = photos[index];

txt.innerHTML = captions[index];

index++;

if(index >= photos.length){

clearInterval(timer);

setTimeout(()=>{

gallery.style.display="none";

terminal.style.display="flex";

typeTerminal();

},2500);

}

},2500);

}

// ==============================
// Terminal Animation
// ==============================

function typeTerminal(){

const lines=[

"C:\\Users\\Bhavesh> birthday.exe",

"Loading Memories...",

"Checking Feelings...",

"Preparing Surprise...",

"Done ✔"

];

const terminalText = document.getElementById("terminalTyping");

terminalText.innerHTML="";

let i=0;

const timer=setInterval(()=>{

terminalText.innerHTML += lines[i]+"<br>";

i++;

if(i>=lines.length){

clearInterval(timer);

setTimeout(()=>{

terminal.style.display="none";

letter.style.display="flex";

typeLetter();

},2000);

}

},900);
}
// ==============================
// Birthday Letter
// ==============================

const message = `

Wish you many many happy returns of the day! ❤️

Sabse pehle...
meri zindagi ka hissa banne aur itni achhi dosti dene ke liye tahe dil se shukriya.

Dil se dua karta hoon ki tumhara ye naya saal ek naye utsaah aur khushiyon ke saath guzre. Tumhare chehre ki muskaan hamesha bani rahe. Tumhe woh sab mile jiska tum besabri se intezaar kar rahi ho. Khuda tumhe duniya ki har woh khushi de jo tumhare chehre par muskaan le aaye.

Kehte hain ki raaste chahe kitne bhi badal jaayein, baatein chahe kitni bhi kam ho jaayein... jo log dil ke kareeb hote hain, woh hamesha dil mein rehte hain. Mere dil mein tumhare liye jo respect pehle thi, woh aaj bhi bilkul waisi hi hai.

Aur haan... ek baat ke liye sorry.
Ho sakta hai meri mohabbat ki wajah se hamari dosti mein daraar aayi ho. Lekin mere liye tum aaj bhi wahi dost ho jise main hamesha izzat deta hoon. Tum jahan bhi raho, jiske saath bhi raho... bas hamesha khush raho. Yehi meri dua rahegi.

Agar kabhi meri kisi baat ne tumhe takleef di ho, ya jaane-anjaane maine tumhara dil dukhaya ho, to uske liye dil se maafi chahta hoon.

Aur haan... ek programmer hone ke naate shayad main itna hi samajhta hoon ki koi bhi code pehli baar mein perfect nahi hota. Har naye version ke saath woh aur behtar banta hai.

Bas dil se dua karta hoon ki tumhari zindagi bhi har naye saal ke saath aur khoobsurat hoti jaaye.

Jo bhi pareshaniyan ya "bugs" aayen, waqt unhe dheere-dheere theek kar de.

Tumhari muskaan kabhi kam na ho,
tumhari himmat kabhi tootne na paaye,
aur tumhari khushiyon ka server kabhi down na ho.

Har naya saal tumhari zindagi mein naye khwaab,
naye mauke aur bahut saari khushiyan add karta rahe. 💙

Chahe hamari baatein ho ya na ho,
bas itna hamesha yaad rakhna ki is duniya mein ek insaan aisa bhi hai jo bina kisi matlab ke tumhari khushi ki dua karta rahega.

Bas...

Khush rehna.
Apna khayal rakhna.
Aur hamesha muskurati rehna. 🤍

Once again...

Happy Birthday, Jigyansa (Payal)! 🎂🎉

ILYAAF... ❤️

`;

function typeLetter(){

    const box = document.getElementById("letterText");

    box.innerHTML = "";

    document.getElementById("nextProgrammer").style.display = "none";

    let i = 0;

    const timer = setInterval(()=>{

        box.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(timer);

            document.getElementById("nextProgrammer").style.display="inline-block";

        }

    },25);

}

// ==============================
// Next Button
// ==============================

document.getElementById("nextProgrammer").onclick=function(){

    letter.style.display="none";

    programmer.style.display="flex";

    document.getElementById("finishBtn").style.display="inline-block";

};

// ==============================
// Finish Button
// ==============================

document.getElementById("finishBtn").onclick=function(){

    programmer.style.display="none";

    finalScreen.style.display="flex";

    celebrate();

};
function celebrate(){

    confetti({
        particleCount:180,
        spread:120,
        origin:{ y:0.6 }
    });

}