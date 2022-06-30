// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// * Funzioni
function createNewCell() {
    const newcell = document.createElement('div');
    newcell.classList.add('cell');
    return newcell;
}


// * Recupero dal DOM gli elementi che mi servono
const grid = document.getElementById('grid');
const button = document.getElementById('play-btn');


// * Imposto righe e celle
const rows = 10;
const cells = 10;
const gridCells = rows * cells;

// * Al click sul bottone, si genera la griglia
button.addEventListener('click', function() {
    for(let i = 0; i < gridCells; i++) {
        const cell = createNewCell();
        grid.appendChild(cell);
    }
})
