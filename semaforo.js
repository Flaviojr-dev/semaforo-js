const img = document.getElementById ('img');
const buttons = document.getElementById ('buttons');
let colorIndex = 0;
let intervalID = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalID);
}

const turnOn = {
    'red':      () => img.src = 'img/vermelho.png',
    'yellow':   () => img.src = 'img/amarelo.png',
    'green':    () => img.src = 'img/verde.png',
    'automatic': () => intervalID = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight)











































// const red = document.getElementById ('red');
// const yellow = document.getElementById ('yellow');
// const green = document.getElementById ('green');
// const img = document.getElementById ('img');

// function semaforored() {
//     img.src = 'img/vermelho.png'
// }

// function semaforogreen() {
//     img.src = 'img/verde.png'
// }

// function semaforoyellow() {
//     img.src = 'img/amarelo.png'
// }


// red.addEventListener ('click', semaforored);
// yellow.addEventListener ('click',semaforoyellow);
// green.addEventListener ('click', semaforogreen);