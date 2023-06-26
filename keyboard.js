const text = document.getElementById("text");
const audio = document.getElementsByClassName("audio");
const key = document.getElementsByClassName("key");
const Accurate = document.querySelector(".Accurate");
const beep = document.getElementsByClassName("beep")[0];
const container = document.getElementsByClassName("container")[0];
const mm = document.getElementsByClassName("mm")[0];
const WPM = document.getElementsByClassName("WPM")[0];
const volumeRange = document.getElementsByClassName("volumeRange")[0];
const upperopition = document.getElementById("upperopition")
let startSupport = 1;
let errorsupport = 1;
let minutes = 0;
let WPMS = [];
let charIndex = 0;
let SpeedSupport = 0;
let seconds = 0;
let pureSeconds = 0;
const ss = document.getElementsByClassName("ss")[0];
let Right = 0;
const audioElement = document.getElementsByClassName("audio")[0];
let Left = 0;

let RandText = [
  "kitagawa", "Tiger", "naruto", "luffy", "erenyeager", "yep", "aqua", "ruby", "zoro", "sasuke", "saitama", "marinKitagawa",
  "itachi", "madara", "shinobu", "ai", "light", "garou", "akane", "Mikasa", "zenitsu"
];

let ms = 0;
volumeRange.value = 100;
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

window.addEventListener("keydown", ((e) => {
  text.focus();
  if (startSupport === 1) {
    setInterval(timeCounter, 1000);
    setInterval(() => {
      pureSeconds++;
    }, 1);
  }
  startSupport = 2;
}));

text.addEventListener("input", function () {
  KeyPress();
  setTimeout(() => {
    if (errorsupport < 2) {
      checkInput();
    }
    text.value = ""
    scorer();
  }, 1);
});

function checkInput() {
  console.log(upperopition.checked ? upperopition.value : "")
  const Textvalue = text.value.toUpperCase();
  Right++;

  const checker = document.getElementById("checker");
  if (Textvalue !== checker.innerHTML.charAt(0)) {
    document.documentElement.style.setProperty("--sliver", "0, 100%, 50%");
    document.documentElement.style.setProperty("--keycolor","0,0%,100%")
    checker.classList.add("error");
    errorsupport = 2;
    setInterval(() => {
      console.log(errorsupport)
    }, 1);
    text.value = '';
    setTimeout(() => {
      errorsupport = 1;
    }, 1000);
    setTimeout(() => {
      document.documentElement.style.setProperty("--sliver", "0, 0%, 75%");
      document.documentElement.style.setProperty("--keycolor", "180, 100%, 10%");

      checker.classList.remove("error");
    }, 1000);
    beep.volume = volumeRange.value / 100;

    beep.play();
    Left++;
  }
  if (Textvalue === checker.innerHTML) {
    CheckerGonnaCheck();
    speedChecker2();
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
  let sakura = [];
  for (let i = 40; i < 80; i++) {
    sakura.push(i);
  }
  let kakashi = [];
  for (let i = 1; i < 20; i++) {
    kakashi.push(i);
  }
  let naruto = [];
  for (let i = 300; i < 600; i++) {
    naruto.push(i);
  }

  let narutoTose;
  let negative = [1, -1];
  let negativeIndex = Math.floor(Math.random() * negative.length);
  let RandomIndexX = Math.floor(Math.random() * naruto.length);
  let randomIndexZ = Math.floor(Math.floor(RandomIndexX / sakura.length));
  narutoTose = naruto[RandomIndexX] * negative[negativeIndex];
  sakuraTose = sakura[randomIndexZ] * negative[negativeIndex];

  let sasuke = [];
  for (let j = -200; j < 100; j++) {
    sasuke.push(j);
  }
  let randomIndexY = Math.floor(Math.random() * sasuke.length);
  let randomIndexU = Math.floor(Math.floor(randomIndexY / kakashi.length));
  let sasukeTose = sasuke[randomIndexY];

  let animaon = document.createElement("div");
  animaon.setAttribute("class", "Animate");
  container.appendChild(animaon);
  const Animate = document.getElementsByClassName("Animate")[AnimateSupport];
  Animate.innerHTML = checker.innerHTML.charAt(0);
  setTimeout(() => {
    Animate.style.translate = narutoTose + "% " + sasukeTose + "% ";
    Animate.style.transform = "perspective(5000px) rotateY(" + sakuraTose + "deg)";
  }, 100);
  setTimeout(() => {
    Animate.style.translate = (narutoTose * 1.2) + "%" + 500 + "% ";
    Animate.style.opacity = "0";
  }, 500);

  AnimateSupport++;
}

function CheckerGonnaCheck() {
  const RandTextIndex = Math.floor(Math.random() * RandText.length);
  checker.innerHTML = RandText[RandTextIndex].toUpperCase();
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

function audioPlay(e) {
  audio[e].volume = volumeRange.value / 100;
  audio[e].play();
}

function timeCounter() {
  if (seconds < 59) {
    seconds++;
  } else {
    seconds = 0;
    minutes++;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  ss.innerHTML = seconds;
  mm.innerHTML = minutes;
}

function speedChecker2() {
  WPMS.push(pureSeconds / 100);
  let speedster = 0;
  for (let loop = 0; loop < WPMS.length; loop++) {
    speedster = speedster + WPMS[loop];
  }
  speedster = speedster / WPMS.length;
  speedster = 60 / speedster;
  pureSeconds = 0;
  WPM.innerHTML = Math.floor(speedster);
}

function scorer() {
  let idiot = 100 - (Left / Right) * 100;
  Accurate.innerHTML = Math.floor(idiot) + "%";
}

volumeRange.addEventListener("input", () => {
  audioElement.volume = volumeRange.value / 100;
});


function enter(E) {
  text.value = E;
  KeyPress();
  checkInput();
}