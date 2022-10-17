let joeyTag = document.getElementById("joeyTag");
let joeyAudio = new Audio('./assets/audio/joey.mp3')

joeyTag.addEventListener('mouseover', () => {
    let promiseJoeyPlay = joeyAudio.play();
}, false);

joeyTag.addEventListener('mouseleave',() => {
  joeyAudio.pause();
  joeyAudio.currentTime = 0;
}, false);


let phoebeTag = document.getElementById("phoebeTag");
let phoebeAudio = new Audio('./assets/audio/phoebe.mp3')

phoebeTag.addEventListener('mouseover', () => {
    let promiseJoeyPlay = phoebeAudio.play();
}, false);

phoebeTag.addEventListener('mouseleave',() => {
  phoebeAudio.pause();
  phoebeAudio.currentTime = 0;
}, false);




let monicabtn = document.getElementById("monicaTag");
let monicaLine = document.getElementById("monicaAudio");

monicabtn.addEventListener('mouseover', function() {
    monicaLine.play();
}, false);

monicabtn.addEventListener('mouseleave', function() {
  monicaLine.pause();
  monicaLine.currentTime = 0;
}, false);

