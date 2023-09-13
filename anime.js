let circle = document.querySelector(".circle");
let box = document.querySelector(".box");

let containers = document.querySelectorAll(".container");
circle.addEventListener("dragstart", (e) => {
  circle.addEventListener("dragend", (e) => {
    anime({
      targets: circle,
      scale: [1.3, 0, 1],
      duration: 1000,
      easing: "easeInOutElastic",
    });
  });
});

containers.forEach((div) => {
  div.addEventListener("dragover", (e) => {
    e.preventDefault();
    let circle = document.querySelector(".circle");
    div.appendChild(circle);
    circle.style.marginBlock = "50px";
  });
});

let section = document.querySelector("section");
section.addEventListener("dragover", (e) => {
  e.preventDefault();
  section.appendChild(circle);
  circle.style.marginBlock = "0";
});

let card = document.querySelector(".card");
let words = document.querySelector(".words");

card.addEventListener("mouseover", (e) => {
  anime({
    targets: words,
    width: "100%",
    easing: "easeInOutCirc",
  });
});

card.addEventListener("mouseout", (e) => {
  anime({
    targets: words,
    width: "0",
    easing: "easeInOutCirc",
  });
});

let carded = document.querySelector(".carded");
let span = document.querySelector(".empty-span");

carded.addEventListener("mouseover", () => {
  anime({
    targets: ".empty-span",
    translateX: 800,
    // width: "0",
    easing: "easeInOutCirc",
    duration: 1000,
  });
});

carded.addEventListener("mouseout", () => {
  anime({
    targets: ".empty-span",
    translateX: 0,
    // width: "100%",
    easing: "easeInOutQuad",
    duration: 1000,
  });
});

let clock = document.querySelector(".clock");
let timeSpan = document.querySelector(".time");
let startBTn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");

let time = 25 * 60000;
timeSpan.textContent = millisToMinutesAndSeconds(time);
function millisToMinutesAndSeconds(millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

let main = millisToMinutesAndSeconds(time);

function timetoZero() {
  time -= 1000;
  if (time >= 0) {
    timeSpan.textContent = millisToMinutesAndSeconds(time);
  } else clearInterval;
}

startBTn.addEventListener("click", () => {
  setInterval(timetoZero, 1000);
});

let testingDiv = document.querySelector(".testing-div");
let nameInput = document.querySelector(".name-input");
let randomInput;
let submit = document.querySelector(".submit");
let spanWrapper = document.querySelector(".span-wrapper");
let duration = 1000;
submit.addEventListener("click", (e) => {
  randomInput = nameInput.value;
  e.preventDefault();
  let nameValue = nameInput.value.split("");
  let divContent = document.createElement("div");
  divContent.classList.add("span-wrapper");
  testingDiv.appendChild(divContent);
  nameValue.forEach((char) => {
    let span = document.createElement("span");
    divContent.appendChild(span);
    span.textContent = char;
    span.classList.add("span-char");
  });
  nameInput.value = "";
  let spanChar = document.querySelectorAll(".span-char");

  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: duration,
    targets: spanChar,
    color: function (el, i, l) {
      colors = ["#4A192C", " #79553D", "#308446", "#20214F", " #999950"];
      return colors[i];
    },
  });
  tl.add({
    scale: 3,
    delay: function (el, i, l) {
      return i * 100;
    },
  });

  tl.add({
    translateX: 500,
    delay: function (el, i, l) {
      return i * 100;
    },
  });

  let spanWrapper = document.querySelector(".span-wrapper");
  setTimeout(() => {
    spanWrapper.remove();
    nameInput.value = randomInput;
  }, duration * 3);
});
