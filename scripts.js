function updateGridSize(userInput) {
    let cellsTotal = (userInput * userInput);
    const grid = document.getElementById('grid');
        for (i = 0; i < cellsTotal; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = 'white';
            cell.style.width = `${640/ userInput}px`;
            cell.style.height = `${640/ userInput}px`;
        
            grid.appendChild(cell);

            cell.addEventListener('mouseover', (e) => {
                
                function randomColor() {
                    var red= " ";
                    var green = '';
                    var blue = '';
                    var rgbColor = " ";
            
                    red = Math.floor(Math.random() * 256 );
                    green = Math.floor(Math.random() * 256 );
                    blue = Math.floor(Math.random() * 256 );
                    
                    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
                    return rgbColor;
                }
                    e.target.style.background = randomColor();
            });
    };
};

updateGridSize(16);

function gridPrompt() {
    let userInput = prompt("Enter new dimensions for the grid, for example, enter 36 to generate a 36x36 grid.");
        while (isNaN(userInput) || userInput > 100 || userInput < 1) {
            userInput = prompt("Enter new dimensions between 1 and 100.");
        }
    grid.innerHTML = '';
    updateGridSize(userInput);
};

const btn = document.querySelector('#btn');

btn.addEventListener('click', gridPrompt);