document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("container");
    let isDrawing = false;

    let userNum = prompt("Enter number of squares per side.");

    userNum = parseInt(userNum);
    if (isNaN(userNum) || userNum <= 0) {
        userNum = 16;
        alert("Invalid input. Defaulting to 16 x 16.");
    } else if (userNum > 100) {
        userNum = 100;
        alert("Number too large. Capping at 100 x 100.");
    }

    function createGrid(num) {
        container.innerHTML = '';
        container.style.setProperty('--grid-columns', userNum);

        const totalSquares = num * num;
        for (let i = 0; i < totalSquares; i++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            container.appendChild(gridBox);

        }

    }
    createGrid(userNum);

    container.addEventListener('mousedown', (e) => {
        isDrawing = true;
        if (e.target.classList.contains('grid-box')) {
            e.target.style.backgroundColor = 'black';
        }
        e.preventDefault();
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        if (e.target.classList.contains('grid-box')) {
            e.target.style.backgroundColor = 'black';
        }
    });

    document.body.addEventListener('mouseup', (e) => {
        isDrawing = false;
    })

    document.createElement('button');
    document.appendChild('button');
});




