// create a grid based around 16x16
const gridContainer = document.querySelector('.grid-container');
const startButton = document.querySelector('#grid-creator');
let canvasSize = '';

startButton.addEventListener('click', () => canvasSize = prompt('Canvas Size: '));



// Create a button that prompts the user for a number for grid size