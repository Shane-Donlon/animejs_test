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
