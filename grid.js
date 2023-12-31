function createDiv(containerDiv, squareWidth)
{
    let square = document.createElement('div');
    square.className = "square";
    square.style.width = squareWidth + 'px';
    square.style.height = squareWidth + 'px';
    
    square.addEventListener('mouseover', function(e){
        e.target.style.background = 'black';
    });

    containerDiv.appendChild(square);
}

function CreateGrid()
{
    // const containerDiv = document.createElement('div');
    // containerDiv.id = "container";

    // document.body.appendChild(containerDiv);

    const containerDiv = document.querySelector("#container");
    //get div width * by 1.0 to make float Add 2 for the border
    let squareWidth = (containerDiv.offsetWidth * 1.0 / numSquares) -2;
    for(let i = 0; i < numSquares*numSquares; i++)
    {
        createDiv(containerDiv, squareWidth);
    }
}

//Make a button that asks for the grid numbs
function ChangeGrid(num)
{
    numSquares = num;
    
    //clear previous grid
    const containerDiv = document.querySelector("#container");
    containerDiv.innerHTML = "";

    CreateGrid();
}


let numSquares = 16;

CreateGrid(); //Creates initial grid

const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener('click', () => {
    let num = prompt("ENTER NUMBER FOR GRID", 16);
    if(num == null || num == "")
    {
        ChangeGrid(16);
    }
    else
    {
        ChangeGrid(num);
    }
});