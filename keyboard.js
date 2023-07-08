// DOM elements 
const text = document.getElementById("text");
const audio = document.getElementsByClassName("audio");
const key = document.getElementsByClassName("key");
const Accurate = document.querySelector(".Accurate");
const beep = document.getElementsByClassName("beep")[0];
const container = document.getElementsByClassName("container")[0];
const mm = document.getElementsByClassName("mm")[0];
const ss = document.getElementsByClassName("ss")[0];
const WPM = document.getElementsByClassName("WPM")[0];
const volumeRange = document.getElementsByClassName("volumeRange")[0];
const endscorecs = document.getElementsByClassName("endscorecs")[0];
const title = document.querySelector("title")

// Supporting variables 
let startSupport = 1;
let errorsupport = 1;
let secondsSupport = 0;
let minutes = 0;
let WPMS = [];
let charIndex = 0;
let SpeedSupport = 0;
let seconds = 0;
let pureSeconds = 0;
let Right = 0;
let Left = 0;
let idiot = 0;
let volumer = 75;
let oldVolumer;
 
volumeRange.value = volumer;
setInterval(() => {
  secondsSupport = 1
}, 50000);
window.addEventListener("keydown", ((e) => {
  Start(e)
 audioCtlShortcut(e)

}))
function Start(e){
  text.focus();
     if (e.keyCode >= 65 && e.keyCode <= 90) {
      secondsSupport = 0
  if (startSupport === 1) {
    
    setInterval(timeCounter, 1000);
   setInterval(() => {
    if (secondsSupport === 0){

      pureSeconds++
    }

   }, 1000);
  }
  startSupport = 2;}

}
function audioCtlShortcut(e){
  if (e.ctrlKey && e.key === 'ArrowUp'){
    volumer = volumer + 2
    
  }
  else if (e.ctrlKey && e.key === 'ArrowDown'){
    volumer = volumer - 2
    
  } else if (e.ctrlKey && e.key === 'Enter'){
    if (volumer > 0){
      oldVolumer = volumer
      volumer = 0
    } else {
      volumer = oldVolumer
    }
  }
  volumeRange.value = volumer;
}


const variables = Array(26).fill(1); 
let ms = 0;
const Button = document.getElementsByClassName("key");
for (let i = 0; i < Button.length; i++) {
  Button[i].classList.add(Button[i].innerHTML.trim());
  if (parseFloat(getComputedStyle(Button[i]).gridRow) === 1) {
    Button[i].classList.add("First");
  } else if (parseFloat(getComputedStyle(Button[i]).gridRow) === 2) {
    Button[i].classList.add("Second");
  } else if (parseFloat(getComputedStyle(Button[i]).gridRow) === 3) {
    Button[i].classList.add("Third");
  }
}



text.addEventListener("input", function () {
  KeyPress();
  setTimeout(() => {
    if (errorsupport < 2) {
      checkInput();
    }
    text.value = ""
    scorer();
  }, 10);
});

function checkInput() {
  const Textvalue = text.value.toUpperCase();
  Right++;

  const checker = document.getElementById("checker");
  const FirstChar = checker.innerHTML.charAt(0)
  let negatives;
  if (Textvalue !== checker.innerHTML.charAt(0)) {
    
    document.documentElement.style.setProperty("--sliver", "0, 100%, 50%");
    document.documentElement.style.setProperty("--keycolor","0,0%,100%")
    checker.classList.add("error");
    errorsupport = 2;
    
    AlphaIncrease(checker.innerHTML.charAt(0),1)
    text.value = '';
    setTimeout(() => {
      
      errorsupport = 1;
    }, 1000);
    setTimeout(() => {
      document.documentElement.style.setProperty("--sliver", "0, 0%, 75%");
      document.documentElement.style.setProperty("--keycolor", "180, 100%, 10%");
      
      checker.classList.remove("error");
    }, 1000);
    beep.volume = volumeRange.value / 4 / 100;
    beep.play();
    Left++;
  }
  if (Textvalue === checker.innerHTML) {
    textGenerator();
    SpeedUpdater()
    SpeedSupport++;
  }
  if (Textvalue === checker.innerHTML.charAt(0)) {
    animator();
    charIndex++;
    checker.innerHTML = checker.innerHTML.slice(1);

  }
  text.value = '';
}

let AnimateSupport = 0;

function animator() {
const sakura = Array.from({ length: 40 }, (_, i) => i + 40);
const kakashi = Array.from({ length: 19 }, (_, i) => i + 1);
const naruto = Array.from({ length: 300 }, (_, i) => i + 300);
const sasuke = Array.from({length: 300}, (_,i) => i - 200)
// const rotateXer = Array.from({length:40}, (_,i) => i + 1--)
  let narutoTose;
  
  let RandomIndexX = Math.floor(Math.random() * naruto.length);
  let randomIndexZ = Math.floor(Math.floor(RandomIndexX / sakura.length));
  
  // let sasuke = [];
  // for (let j = -200; j < 100; j++) {
  //   sasuke.push(j);
  // }
  let randomIndexY = Math.floor(Math.random() * sasuke.length);
  let randomIndexU = Math.floor(Math.floor(randomIndexY / kakashi.length));
  let sasukeTose = sasuke[randomIndexY];
  
  let animaon = document.createElement("div");
  animaon.setAttribute("class", "Animate");
  container.appendChild(animaon);
  const Animate = document.getElementsByClassName("Animate")[AnimateSupport];
  Animate.innerHTML = checker.innerHTML.charAt(0);
  setTimeout(() => {
    let negative = [1, -1];
    let negativeIndex = Math.floor(Math.random() * negative.length);
    narutoTose = naruto[RandomIndexX] * negative[negativeIndex];
    sakuraTose = sakura[randomIndexZ] * negative[negativeIndex];
    Animate.style.translate = narutoTose + "% " + sasukeTose + "% ";
    Animate.style.transform = "perspective(5000px) rotateX(40deg) rotateY(" + sakuraTose + "deg)";
  }, 50);
  setTimeout(() => {
    Animate.style.translate = (narutoTose * 1.2) + "%" + 500 + "% ";
    Animate.style.opacity = "0";
  }, 1000);

  AnimateSupport++;
}

function textGenerator() {
  let letter = "abcdefghijklmnopq"
  let Alphabet = []
  let index = Math.floor((Math.random() * 8))  + 1
  for (loop = 0; loop < letter.length ; loop++ ){

    for (loop2 = 0; loop2 < variables[loop];loop2++){
      Alphabet.push(letter.charAt(loop))
    }
  }
  console.log("alphabet " + Alphabet + " variables " + variables)
    // const innerHTML =/ checker.innerHTML + thisSupport.charAt(thisSupport2)
    for (loop = 0;loop < index; loop++){

      const innerHTML = checker.innerHTML + Alphabet[Math.floor(Math.random() * Alphabet.length)]
      
      checker.innerHTML =   innerHTML.toUpperCase() ;
    }



}

function KeyPress() {
  for (let i = 0; i < Button.length; i++) {
    const Textvalue = text.value.toUpperCase();
    if (Textvalue === Button[i].innerHTML.trim()) {
      Button[i].classList.add("highlighted");
      audioPlay(i, audio);
      setTimeout(function (index) {
        return function () {
          Button[index].classList.remove("highlighted");
        };
      }(i), 235);
    }
  }
}

function audioPlay(e)  {
  audio[e].volume = volumeRange.value / 100;
  audio[e].play();
}

function timeCounter() {
  if (secondsSupport === 0){
  if (seconds < 59) {

    seconds++;
  } else  {
    seconds = 0;
    minutes++;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  
  ss.innerHTML = seconds;
  mm.innerHTML = minutes;
}}



function scorer() {
 idiot = Math.floor(100 - (Left / Right) * 100);
  Accurate.innerHTML = idiot + "%";
}

volumeRange.addEventListener("input", () => {
  beep.volume = volumeRange.value / 100;
});


function enter(E) {
  text.value = E;
  KeyPress();
  checkInput();
}
function AlphaIncrease(e,f){




  switch (e) {
    case "A":
      variables[0] = variables[0] + f;
      break;
    case "B":
      variables[1]  = variables[1] + f;
      break;
    case "C":
      variables[2] = variables[2]+ + f; 
      break;
    // Continue the switch cases for the remaining letters
    case "D":
      variables[3] = variables[3]+ + f; 
      break;
    case "E":
      variables[4] = variables[4]+ + f; 
      break;
    case "F":
      variables[5] = variables[5]+ + f; 
      break;
    case "G":
      variables[6] = variables[6]+ + f; 
      break;
    case "H":
      variables[7] = variables[7]+ + f; 
      break;
    case "I":
      variables[8] = variables[8]+ + f; 
      break;
    case "J":
      variables[9] = variables[9]+ + f; 
      break;
    case "K":
      variables[10] = variables[10] + f; ;
      break;
    case "L":
      variables[11] = variables[11] + f; ;
      break;
    case "M":
      variables[12] = variables[12] + f; ;
      break;
    case "N":
      variables[13] = variables[13] + f; ;
      break;
    case "O":
      variables[14] = variables[14] + f; ;
      break;
    case "P":
      variables[15] = variables[15] + f; ;
      break;
    case "Q":
      variables[16] = variables[16] + f; ;
      break;
    case "R":
      variables[17] = variables[17] + f; ;
      break;
    case "S":
      variables[18] = variables[18] + f; ;
      break;
    case "T":
      variables[19] = variables[19] + f; ;
      break;
    case "U":
      variables[20] = variables[20] + f; ;
      break;
    case "V":
      variables[21] = variables[21] + f; ;
      break;
    case "W":
      variables[22] = variables[22] + f; ;
      break;
    case "X":
      variables[23] = variables[23] + f; ;
      break;
    case "Y":
      variables[24] = variables[24] + f; ;
      break;
    case "Z":
      variables[25] = variables[25] + f;
      break;
    default:
      break;
  }
}
function SpeedUpdater(){
  WPMS.push(pureSeconds)
  let SumWPMS = 0;
  for(i = 0; i < WPMS.length ;i++){
    SumWPMS = SumWPMS + WPMS[i] 
  }
  let AverageWPMS = SumWPMS / WPMS.length
  let AcutalsWPMS = Math.floor(60 / AverageWPMS)
  WPM.innerHTML = AcutalsWPMS 
  title.innerHTML = AcutalsWPMS + "Words per min";
  pureSeconds = 0
  // WPM = Min / Words (convert these seconds into minutes)

}