// Create a grid based around 16x16
const gridContainer = document.querySelector('.grid-container');
const startButton = document.querySelector('#grid-creator');
const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
gridContainer.appendChild(mainContainer);
let isMouseDown = false;

// Create a button that prompts the user for a number for grid size
startButton.addEventListener('click', () => { 
    let canvasSize = 0;
    while (canvasSize > 100 || canvasSize <= 0) {
        canvasSize = prompt('Canvas Size: ');
    };

    // Delete all elements inside container
    mainContainer.replaceChildren();

// Create 2d div grid
    for (let i = 0; i < canvasSize; i++) {
        let divRow = document.createElement('div')
        divRow.classList.add('divRow');
        // Create canvasSize more divs to put in newDiv
        for (let j = 0; j < canvasSize; j++) {
            let divCell = document.createElement('div');
            divCell.classList.add('divCell');

            divRow.appendChild(divCell); 
        };

        // Add newDiv to grid container
        mainContainer.appendChild(divRow);
    };

    // Add event listeners for drawing
    const cells = document.querySelectorAll('.divCell');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            isMouseDown = true;
            cell.style.backgroundColor = '#000';
        });
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.style.backgroundColor = '#000';
            }
        });
        cell.addEventListener('mouseup', () => isMouseDown = false);
    });
});