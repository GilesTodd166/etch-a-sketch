let userInput = 16;
let cellsTotal = (userInput * userInput);

const grid = document.getElementById('grid');
    for (i = 0; i < cellsTotal; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    };

// Set hover affect to change background color when mouse over occurs.

const mouse = document.querySelectorAll('.cell');
mouse.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.background = '#ccc'
    });
});

/* Add button to ask for user prompt to enter new grid size to to 100x100 limit.
Reset grid to new size and refresh tiles.

*/

function gridPrompt() {
    userInput = prompt("Enter new dimensions for the grid, for example, enter 36 to generate a 36x36 grid.");
};

const btn = document.querySelector('#btn');

btn.addEventListener('click', gridPrompt);

