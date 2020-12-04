import typeWriter from '../typewriter.js';
import gsap from "../node_modules/gsap/dist/gsap";

// all dom elements
const circle = document.getElementById('circle');
const nav = document.getElementById('nav');
const mainHeading = document.getElementById('main-heading');
const mainPara = document.getElementById('main-para');
const typeText = mainPara.getAttribute('data-text');
const overlay = document.getElementById('overlay');
const slantEl = document.getElementById('slanted-div');

// menu animation
circle.addEventListener('click', () => {
  nav.classList.toggle('appear');
});

// main heading animation
const mainHeadingText = mainHeading.getAttribute('data-heading');
for (let i = 0; i < mainHeadingText.length; i++) {
  mainHeading.innerHTML += `<span>${mainHeadingText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  if (char < mainHeadingText.length) {
    document.querySelectorAll('span')[char].classList.add('fade-effect');
    char++;
  } else {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// typerWriter effect for main paragraph
typeWriter(mainPara, typeText, 70);

// scroll effect of the slant div
window.addEventListener('scroll', e => {
  let value = -7 + window.scrollY / 30;
  if (value <= 0) {
    slantEl.style.transform = `skewY(${value}deg)`;
  }
});

// spinner preloader
window.addEventListener('load', () => overlay.style.display = 'none');

// gsap animation