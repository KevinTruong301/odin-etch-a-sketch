function createDiv()
{
    let square = document.createElement('div');
    square.className = "square";

    containerDiv.appendChild(square);
}

const containerDiv = document.querySelector('#container');

for(let i = 0; i < 16*16; i++)
{
    createDiv();
}