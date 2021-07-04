
//grid window and slider
const gridContainer = document.querySelector("#grid-container");
let slider = document.querySelector("#sliderRange");

const grayButton = document.querySelectorAll('.grayColor');
const rainbowButton = document.querySelectorAll('.rainbowColor');
const blackButton = document.querySelectorAll('.blackColor');
const eraser = document.querySelectorAll('.eraserButton');

var color = `rgb(0,0,0)`;


//DEFAULT GRID FUNCTION AND GRID CHANGER
window.addEventListener("load", setDefaultGrid);

function setDefaultGrid(){
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
  for (let i =0; i < size*size; i++){
    const gridElement = document.createElement("div");
    
    gridElement.addEventListener('mouseover',
      e => e.target.style.backgroundColor = color
      );    
    
    gridElement.classList = "grid-element";
    gridContainer.appendChild(gridElement);
  }
}

slider.oninput = function newSize(){
  let newSquares = gridContainer.querySelectorAll('div');
  newSquares.forEach(newSquare => newSquare.remove());
  setGridSize(slider.value);
  fillGrid(slider.value);
}

//COLOR CHANGE FUNCTIONS

function grayColor(event){
  color = `rgb(211,211,211)`;
};

function rainbowColor(event){
  color = `hsl(${Math.random() * 360}, 100%, 50%)`
};

function blackColor (event){
  color = `rgb(0,0,0)`;
}

function eraseColor (event){
  color = `rgb(255,255,255)`;
}

//BUTTONS FOR COLOR CHANGE FUNCTIONS

grayButton.forEach(grayButtons => grayButtons.addEventListener('click',grayColor));
rainbowButton.forEach(rainbowButtons => rainbowButtons.addEventListener('click',rainbowColor));
blackButton.forEach(blackButtons => blackButtons.addEventListener('click',blackColor));
eraser.forEach(eraserButton => eraserButton.addEventListener('click',eraseColor));