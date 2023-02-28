let size = 16;
maxContainerSize=640;
const gridContainer = document.getElementById("grid-container");
const createGridButton = document.querySelector('#create-grid-button');

createGridButton.addEventListener('click', ()=>{
    size = getGridSize();
    createGrid(size);
});
/*createGridButton.addEventListener('click', function(e) {
    numOfDivs=e.target.gridSize * e.target.gridSize;
    console.log(numOfDivs);
    for (let i=0; i<numOfDivs; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-element');
        gridSquare.textContent=i;
        gridContainer.appendChild(gridSquare);
    }

});*/
//createGridButton.gridSize=size;

function createGrid(size){
    clearCurrentGrid();
    let squareSize = Math.floor(maxContainerSize/size -2);
    for (let i=0;i<size;i++){
        const column = document.createElement('div');
        column.classList.add('grid-column');
        gridContainer.appendChild(column);
        for (let j=0;j<size;j++){
            const square = document.createElement('div');
            square.classList.add('grid-element');
            square.style.cssText = `width:${squareSize}px; height:${squareSize}px;`
            //square.textContent=(`${i}, ${j}`)
            square.addEventListener('mouseover', function(e){
                e.target.style.cssText = `background-color: red;width:${squareSize}px; height:${squareSize}px;`;
            });
            column.appendChild(square);
        }
    }
}

function clearCurrentGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function getGridSize(){
    let input = prompt('Please enter a new grid size (4-64)');
    while((input>64)||(input<4)){
        input=prompt('Please enter a new grid size (4-64)');
    }
    return input;
}
//createGrid(size);
