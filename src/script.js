import typeWriter from '../typewriter.js'


// all dom elements
const circle = document.getElementById('circle')
const nav = document.getElementById('nav')
const eyes = document.querySelectorAll('.eyes')
const mainHeading = document.getElementById('main-heading')
const mainPara = document.getElementById('main-para')
const typeText = mainPara.getAttribute('data-text')
const overlay = document.getElementById('overlay')
const slantEl = document.getElementById('slanted-div')


// menu animation
circle.addEventListener('click', () =>{
  eyes.forEach(eye => eye.classList.toggle('cross'))
  nav.classList.toggle('appear')
})


// main heading animation
const mainHeadingText = mainHeading.getAttribute('data-heading')
for(let i=0;i<mainHeadingText.length;i++){
  mainHeading.innerHTML += `<span>${mainHeadingText[i]}</span>`
}

let char = 0
let timer = setInterval(onTick, 50)

function onTick(){
  if(char < mainHeadingText.length){
    document.querySelectorAll('span')[char].classList.add('fade-effect')
    char++
  }else{
    complete()
    return;
  }
}

function complete(){
  clearInterval(timer)
  timer = null;
}


// typerWriter effect for main paragraph
typeWriter(mainPara,typeText,70);


// scroll effect of the slant div
window.addEventListener('scroll',e => {
  let value = -7 + window.scrollY/30
  if(value <= 0){
    slantEl.style.transform = `skewY(${value}deg)`
  }
})  

// spinner preloader
window.addEventListener('load',() => {
  overlay.style.display = 'none';
  $("body").css("overflow", "auto");
})


// smooth scrolling
$('.nav li a').on('click', function(event) {

  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash; 
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 120
      },
      400
    );
  }
});


// gsap animation
gsap.registerPlugin(ScrollTrigger)


gsap.to('#para-1',{
  scrollTrigger: {
    trigger: '#para-1',
    toggleActions: 'restart pause resume none'
  },
  duration: 1,
  x: 0,
  opacity: 1
})

gsap.to('#para-2',{
  scrollTrigger: {
    trigger: '#para-2',
    toggleActions: 'restart pause resume none'
  },
  duration: 1,
  x: 0,
  opacity: 1
})

// gsap animation for skill progress bar
gsap.from('.progress-bar',{
  scrollTrigger: {
    trigger: '.progress-bar',
    toggleActions: 'restart pause resume none'
  },
  duration: .8,
  width: 0
})