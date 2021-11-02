const yellowDiv = document.querySelector('div');
console.log(yellowDiv);

function showLocation(e) {
    e.preventDefault();
    const posX = e.clientX;
    const posY = e.clientY;
    const location = `X: ${posX}, Y: ${posY}`
    yellowDiv.innerText = location;
}

yellowDiv.addEventListener('mouseover', showLocation);