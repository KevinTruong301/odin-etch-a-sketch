function createDiv()
{
    let square = document.createElement('div');
    square.className = "square";
    let squareWidth = (containerDiv.offsetWidth * 1.0 / numSquares) - 2

    square.style.width = squareWidth + 'px';
    square.style.height = squareWidth + 'px';
    
    square.addEventListener('mouseover', function(e){
        e.target.style.background = 'black';
    });

    containerDiv.appendChild(square);
}

let numSquares = 16;
const containerDiv = document.querySelector('#container');

for(let i = 0; i < numSquares*numSquares; i++)
{
    createDiv();
}