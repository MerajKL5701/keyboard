// menu
// DOM elements 
// Supporting variables
// change animate based on width of the screen 
// this is used for css 
// pausing the timer 
// Starting the game 
//   pressign key 
// function starting
//   function for counting the time 
//   function for clicking the button 
//   function for key for ctl keys of audio 
//   function for audio of keypress 
// animating keypress 
// checking the input 
//   function for checking WPM 
//   checking accuracy 
// making that jumping text well jumping 
// words geeneration 
    // accruatcy for each thingy 
    //   cross platform checker 


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
const Button = document.getElementsByClassName("key");
const CtrlKeyacces = document.getElementsByClassName("CtrlKeyacces")

const variables = Array(26).fill(1);
const variableSupport = [8,1,3,4,13,2,2,6,6,1,1,4,2,1,7,2,1,6,6,9,3,1,2,1,2,1] 


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
 let ms = 0;
 let AnimateSupport = 0;


 let AnimateTranslateX = 300;
 let AnimateTranslateY = 300;

// change animate based on width of the screen 
if (window.innerWidth <  1300){
    AnimateTranslateX = 100
} 
 if (window.innerWidth < 960){
    AnimateTranslateY =100
}
// this is used for css 
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

// pausing the timer 
setInterval(() => {
    secondsSupport = 1
  }, 5000);
// Starting the game 
  window.addEventListener("keydown", ((e) => {
    Start(e)
   audioCtlShortcut(e)
  
  }))

//   pressign key 
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



// function starting
function Start(e){
    text.focus();
    volumeRange.value = volumer;
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
  
//   function for counting the time 
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
//   function for clicking the button 
function enter(E) {
    text.value = E;
    KeyPress();
    checkInput();
  }
//   function for key for ctl keys of audio 
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
//   function for audio of keypress 
function audioPlay(e)  {
    audio[e].volume = volumeRange.value / 100;
    audio[e].play();
  }
// animating keypress 
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
// checking the input 
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
      
      AlphaIncrease(checker.innerHTML.charAt(0),2,0)
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
      AlphaIncrease(checker.innerHTML.charAt(0),-1,1)
      animator();
      charIndex++;
      checker.innerHTML = checker.innerHTML.slice(1);
  
    }
    text.value = '';
  }
//   function for checking WPM 
function SpeedUpdater(){
    WPMS.push(pureSeconds)
    let SumWPMS = 0;
    for(i = 0; i < WPMS.length ;i++){
      SumWPMS = SumWPMS + WPMS[i] 
    }
    let AverageWPMS = SumWPMS / WPMS.length
    let AcutalsWPMS = Math.floor(60 / AverageWPMS)
    if (AcutalsWPMS < 100000000000000 && i > 0){

        WPM.innerHTML = AcutalsWPMS 
        title.innerHTML = AcutalsWPMS + "Words per min";
    }
    pureSeconds = 0
    // WPM = Min / Words (convert these seconds into minutes)
  
  }
//   checking accuracy 
function scorer() {
    idiot = Math.floor(100 - (Left / Right) * 100);
     Accurate.innerHTML = idiot + "%";
   }

// making that jumping text well jumping 
function animator() {
    const sakura = Array.from({ length: 40 }, (_, i) => i + 40);
    const kakashi = Array.from({ length: 19 }, (_, i) => i + 1);
    const naruto = Array.from({ length: AnimateTranslateX }, (_, i) => i + 300);
    const sasuke = Array.from({length: 300}, (_,i) => i - AnimateTranslateY)
    console.log(sasuke)
    let RandomIndexX = Math.floor(Math.random() * naruto.length);
    let randomIndexZ = Math.floor(Math.floor(RandomIndexX / sakura.length));
    let randomIndexY = Math.floor(Math.random() * sasuke.length);
    let randomIndexU = Math.floor(Math.floor(randomIndexY / kakashi.length));
    
    let narutoTose;
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

// words geeneration 
    function textGenerator() {
        let letter = "abcdefghijklmnopqrstuvwxyz"
        let Alphabet = []
        let index = Math.floor((Math.random() * 4))  + 3
        for (loop = 0; loop < letter.length ; loop++ ){
      
          for (loop2 = 0; loop2 < variables[loop] + variableSupport[loop];loop2++){
            Alphabet.push(letter.charAt(loop))
          }
        }
          // const innerHTML =/ checker.innerHTML + thisSupport.charAt(thisSupport2)
          for (loop = 0;loop < index; loop++){
      
            const innerHTML = checker.innerHTML + Alphabet[Math.floor(Math.random() * Alphabet.length)]
            
            checker.innerHTML =   innerHTML.toUpperCase() ;
          }
      
      
      
      }
    // accruatcy for each thingy 
    function AlphaIncrease(e, f,g) {
        e = e.toUpperCase(); // Convert e to uppercase to handle lowercase letters as well
        
        switch (e) {
          case "A":
            if (variables[0] > g) {
              variables[0] = variables[0] + f;
            }
            break;
          case "B":
            if (variables[1] > g) {
              variables[1] = variables[1] + f;
            }
            break;
          case "C":
            if (variables[2] > g) {
              variables[2] = variables[2] + f;
            }
            break;
          // Continue the switch cases for the remaining letters
          case "D":
            if (variables[3] > g) {
              variables[3] = variables[3] + f;
            }
            break;
          case "E":
            if (variables[4] > g) {
              variables[4] = variables[4] + f;
            }
            break;
          case "F":
            if (variables[5] > g) {
              variables[5] = variables[5] + f;
            }
            break;
          case "G":
            if (variables[6] > g) {
              variables[6] = variables[6] + f;
            }
            break;
          case "H":
            if (variables[7] > g) {
              variables[7] = variables[7] + f;
            }
            break;
          case "I":
            if (variables[8] > g) {
              variables[8] = variables[8] + f;
            }
            break;
          case "J":
            if (variables[9] > g) {
              variables[9] = variables[9] + f;
            }
            break;
          case "K":
            if (variables[10] > g) {
              variables[10] = variables[10] + f;
            }
            break;
          case "L":
            if (variables[11] > g) {
              variables[11] = variables[11] + f;
            }
            break;
          case "M":
            if (variables[12] > g) {
              variables[12] = variables[12] + f;
            }
            break;
          case "N":
            if (variables[13] > g) {
              variables[13] = variables[13] + f;
            }
            break;
          case "O":
            if (variables[14] > g) {
              variables[14] = variables[14] + f;
            }
            break;
          case "P":
            if (variables[15] > g) {
              variables[15] = variables[15] + f;
            }
            break;
          case "Q":
            if (variables[16] > g) {
              variables[16] = variables[16] + f;
            }
            break;
          case "R":
            if (variables[17] > g) {
              variables[17] = variables[17] + f;
            }
            break;
          case "S":
            if (variables[18] > g) {
              variables[18] = variables[18] + f;
            }
            break;
          case "T":
            if (variables[19] > g) {
              variables[19] = variables[19] + f;
            }
            break;
          case "U":
            if (variables[20] > g) {
              variables[20] = variables[20] + f;
            }
            break;
          case "V":
            if (variables[21] > g) {
              variables[21] = variables[21] + f;
            }
            break;
          case "W":
            if (variables[22] > g) {
              variables[22] = variables[22] + f;
            }
            break;
          case "X":
            if (variables[23] > g) {
              variables[23] = variables[23] + f;
            }
            break;
          case "Y":
            if (variables[24] > g) {
              variables[24] = variables[24] + f;
            }
            break;
          case "Z":
            if (variables[25] > g) {
              variables[25] = variables[25] + f;
            }
            break;
          default:
            break;
        }
      }

    //   cross platform checker 
      if (navigator.platform.includes('Win') || navigator.platform.includes('Win')) {
        // The user is on a Windows platform, where the Ctrl key is commonly available
        CtrlKeyacces[0].style.height = "auto"
        CtrlKeyacces[0].style.opacity = "1"
        CtrlKeyacces[1].style.height = "auto"
        CtrlKeyacces[1].style.opacity = "1"
        console.log('Ctrl key is support');
    } else {
          CtrlKeyacces[0].style.height = "0px"
          CtrlKeyacces[0].style.opacity = "0"
          CtrlKeyacces[1].style.height = "0px"
          CtrlKeyacces[1].style.opacity = "0px"
        // The user is on a platform where the availability of the Ctrl key may vary
        console.log('Ctrl key is maybe not support');
      }