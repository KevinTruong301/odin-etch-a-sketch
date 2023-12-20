function createDiv()
{
    let square = document.createElement('div');
    square.className = "square";

    containerDiv.appendChild(square);
}

const containerDiv = document.querySelector('#container');
createDiv();