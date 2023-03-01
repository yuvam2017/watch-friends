// Voice Play Over
// ##################### JOEY ########################
let joeyTag = document.getElementById("joeyTag");
let joeyAudio = new Audio('./assets/audio/joey.mp3')

joeyTag.addEventListener('mouseover', () => {
    let promiseJoeyPlay = joeyAudio.play();
}, false);

joeyTag.addEventListener('mouseleave',() => {
  joeyAudio.pause();
  joeyAudio.currentTime = 0;
}, false);



// ##################### PHEOBE ########################
let phoebeTag = document.getElementById("phoebeTag");
let phoebeAudio = new Audio('./assets/audio/phoebe.mp3')

phoebeTag.addEventListener('mouseover', () => {
    let promisePhoebePlay = phoebeAudio.play();
}, false);

phoebeTag.addEventListener('mouseleave',() => {
  phoebeAudio.pause();
  phoebeAudio.currentTime = 0;
}, false);



// ##################### MONICA ########################
let monicaTag = document.getElementById("monicaTag");
let monicaAudio = new Audio('./assets/audio/monica.mp3')

monicaTag.addEventListener('mouseover', () => {
    let promiseMonicaPlay = monicaAudio.play();
}, false);

monicaTag.addEventListener('mouseleave',() => {
  monicaAudio.pause();
  monicaAudio.currentTime = 0;
}, false);



// ##################### ROSS ########################
let rossTag = document.getElementById("rossTag");
let rossAudio = new Audio('./assets/audio/ross.mp3')

rossTag.addEventListener('mouseover', () => {
    let promiseRossPlay = rossAudio.play();
}, false);

rossTag.addEventListener('mouseleave',() => {
  rossAudio.pause();
  rossAudio.currentTime = 0;
}, false);


// ##################### Chandler ########################
let chandlerTag = document.getElementById("chandlerTag");
let chandlerAudio = new Audio('./assets/audio/chandler.mp3')

chandlerTag.addEventListener('mouseover', () => {
    let promiseChandlerPlay = chandlerAudio.play();
}, false);

chandlerTag.addEventListener('mouseleave',() => {
  chandlerAudio.pause();
  chandlerAudio.currentTime = 0;
}, false);



// ##################### RACHEL ########################
let rachelTag = document.getElementById("rachelTag");
let rachelAudio = new Audio('./assets/audio/rachel.mp3')

rachelTag.addEventListener('mouseover', () => {
    let promiseRachelPlay = rachelAudio.play();
}, false);

rachelTag.addEventListener('mouseleave',() => {
  rachelAudio.pause();
  rachelAudio.currentTime = 0;
}, false);
