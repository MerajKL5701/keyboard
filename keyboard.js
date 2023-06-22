const text = document.getElementById("text");
const audio = document.getElementsByClassName("audio")
const key = document.getElementsByClassName("key")
const Accurate = document.querySelector(".Accurate")
const beep = document.getElementsByClassName("beep")[0]
const container = document.getElementsByClassName("container")[0]
const mm = document.getElementsByClassName("mm")[0]
const WPM = document.getElementsByClassName("WPM")[0]
const volumeRange = document.getElementsByClassName("volumeRange")[0]
let     startSupport = 1;
let minutes = 0;
let charIndex = 0;
let SpeedSupport = 0;
let seconds = 0;
const ss = document.getElementsByClassName("ss")[0]
let Right = 0;
const audioElement = document.getElementsByClassName("audio")[0];
let Left = 0;

let RandText = [
  "y","0", "kitagawa","Tiger","naruto","luffy","erenyeager", "yep"
];


let ms = 0;
// text.style.opacity = "0";

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
// text.focus();
window.addEventListener("keydown", ((e) => {
    // Accurate.style.opacity = "0"
    if (e.keyCode <= 90 && e.keyCode >= 60)
    text.focus();

   if (startSupport === 1) {  
        setInterval(timeCounter,1000)
      }    
  startSupport = 2

    
    
  }))
text.addEventListener("input", function () {
  KeyPress();

  setTimeout(() => {
    checkInput();
    scorer()
  }, 1);
  
});
function checkInput() {
  
  
  // text.value = "";
  const Textvalue = text.value.toUpperCase();
  Right++
  
  const checker = document.getElementById("checker");
  if (Textvalue !== checker.innerHTML.charAt(0))
  {
    checker.classList.add("error")
    setTimeout(() => {
      checker.classList.remove("error")
    },100)
    beep.volume = volumeRange.value / 100
    beep.play()
    Left++;
  
    
    
  }
  if (Textvalue === checker.innerHTML){
    CheckerGonnaCheck();
    
    SpeedSupport++
    } 

    if (Textvalue === checker.innerHTML.charAt(0)) {
 
      // prompt("yes");
      
      animator()
      charIndex++
      checker.innerHTML = checker.innerHTML.slice(1);
    }
 
    text.value = "";

  }
  let AnimateSupport = 0;
  function animator(){
    let sakura = []
    for (i = 40; i<60;i++){
      sakura.push(i)
    }
    let kakashi = []
    for (i = 1;i < 20;i++){
      kakashi.push(i)
    }
    let naruto = []
    for(i = 300;i<600;i++){
      naruto.push(i)
    }
    
    let narutoTose
    let negative = [1,-1]
    let negativeIndex = Math.floor(Math.random() * negative.length)
    let RandomIndexX = Math.floor(Math.random() * naruto.length)
    let randomIndexZ = Math.floor(Math.floor(RandomIndexX/sakura.length )) 
      narutoTose = naruto[RandomIndexX] * negative[negativeIndex]
      sakuraTose = sakura[randomIndexZ] * negative[negativeIndex] 
    
   
    let sasuke = []
    for(j = -200; j < 100;j++){
      sasuke.push(j)
    }
    // let randomIndexY = 10
    let randomIndexY = Math.floor(Math.random() * sasuke.length)
    let randomIndexU = Math.floor(Math.floor(randomIndexY/kakashi.length )) 
    let sasukeTose = sasuke[randomIndexY]
    // randomly generating an naruto
    let animaon = document.createElement("div");
    animaon.setAttribute("class","Animate");
    container.appendChild(animaon);
    const Animate = document.getElementsByClassName("Animate")[AnimateSupport]
    Animate[10]
    Animate.innerHTML = checker.innerHTML.charAt(0);
    setTimeout(() => {
      
      // Animate.style.translate = narutoTose + "% -"+ 200 + "% "
      Animate.style.translate = narutoTose + "% "+ sasukeTose + "% "
      Animate.style.transform = "perspective(5000px) rotateY(" + sakuraTose  + "deg)"
    }, 100);
    setTimeout(()=>{
      // Animate.style.translate = "600% -500%"
      Animate.style.translate = (narutoTose * 1.2) + "%" + 500 + "% "
      Animate.style.opacity = "0"
      
    }, 500)
   
   
    AnimateSupport++
  }
  function CheckerGonnaCheck(){
    
    
    // for (x = 0; x <5; i++)
  
    
      const RandTextIndex = Math.floor(Math.random() * RandText.length);
      checker.innerHTML = RandText[RandTextIndex].toUpperCase();
      
    } 
    function enter(E) {
      text.value = E;
      KeyPress();
      checkInput();
    }
    function KeyPress(){
      for (let i = 0; i < Button.length; i++) {
        const Textvalue = text.value.toUpperCase();
        if (Textvalue === Button[i].innerHTML.trim()) {
          Button[i].classList.add("highlighted");
          audioPlay(i,audio)
          setTimeout(function (index) {
            return function () {
              Button[index].classList.remove("highlighted");
            };
          }(i), 235);
          
        }
       
      }
    }
    function audioPlay(e){
      audio[e].volume = volumeRange.value / 100
      audio[e].play();
    }
    function timeCounter(){
      if (seconds < 59){

        seconds++;
      }
      else {
        seconds = 0
        minutes++
        
      }
      if (seconds < 10){
        seconds = "0" + seconds
      }
      speedy()
      ss.innerHTML = seconds;
      mm.innerHTML = minutes;
      // console.log()
    }
      function scorer(){
        let idiot = 100 -(Left/Right) * 100

        Accurate.innerHTML = idiot.toFixed(2) + "%"
        
      } 
      function speedy(){
        // if (minutes === 0){
        //   // minutes = 1
        // }
        // let WPMSpeed  =  charIndex
       
      }