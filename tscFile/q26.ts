

const prompt = require('prompt-sync')();
// compare the string 
let alien_color = 'green';

let alienColorGues = prompt('Please enter the color of the alien');

if ( alien_color == alienColorGues) {
    console.log('You got 5 points')
} else{
    console.log('You got 10 points')
}