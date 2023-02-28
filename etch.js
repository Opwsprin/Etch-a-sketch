let size = 16;
let drawColor = 'black';
//let drawColors = ['red', 'yellow', 'blue', 'green', 'black'];
maxContainerSize=640;
const gridContainer = document.getElementById("grid-container");
const createGridButton = document.querySelector('#create-grid-button');
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const colorButtons = document.querySelectorAll(".color-select-button");

colorButtons.forEach((button)=>{
    button.addEventListener('click', function(e){
        drawColor = button.id;
    });
});

sliderValue.textContent=(`${slider.value} x ${slider.value}`);

createGridButton.addEventListener('click', ()=>{
    //size = getGridSize();
    size = slider.value;
    console.log(slider.value);
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
    let squareSize = maxContainerSize/size -2;
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
                if(mouseDown){
                    e.target.style.cssText = `background-color: ${drawColor};width:${squareSize}px; height:${squareSize}px;`;
                }
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
createGrid(size);

//let's try to see if we can only draw when the mouse button is pressed
let mouseDown=0;
/* this only works if mouseUp happens in the browser, otherwise mouse button state is lost
document.body.onmousedown = function(){
    ++mouseDown;
}
document.body.onmouseup = function(){
    console.log("mouse up")
    --mouseDown;
}*/
function setPrimaryButtonState(e){
    let flags = e.buttons !== undefined ? e.buttons : e.which;
    mouseDown = (flags & 1) === 1;
}

document.addEventListener('mousedown', setPrimaryButtonState);
document.addEventListener('mousemove', setPrimaryButtonState);
document.addEventListener('mouseup', setPrimaryButtonState);

//a slider, for fun
slider.oninput = function(){
    sliderValue.textContent = (`${slider.value} x ${slider.value}`);
};

