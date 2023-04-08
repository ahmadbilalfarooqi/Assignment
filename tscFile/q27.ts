
const prompt = require('prompt-sync')();

let alien_color = prompt('Please enter the color of the alien');

if (alien_color == 'green') {
    console.log(`The Alien is ${alien_color} you got 5 points.`);
} else if (alien_color == 'yellow') {
    console.log(`The Alien is ${alien_color} you got 10 points.`)
} else if (alien_color == 'red') {
    console.log(`The Alien is ${alien_color} you got 15 points.`)
}