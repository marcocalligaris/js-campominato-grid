function createNewCell(content) {
    const newcell = document.createElement('div');
    newcell.classList.add('cell');
    newcell.innerText = content;
    return newcell;
}

const grid = document.getElementById('grid');
const button = document.getElementById('play-btn');
const rows = 10;
const cells = 10;
const gridCells = rows * cells;

button.addEventListener('click', function() {
    for(let i = 1; i <= gridCells; i++) {
        const cell = createNewCell(i);
        grid.appendChild(cell);

        cell.addEventListener('click', function () {
            console.log('Hai cliccato la cella numero ' + [i])
            cell.classList.add('clicked');
        })
    } 
})



