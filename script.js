document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("container");
    const changeGridBtn = document.getElementById("change-grid");
    const shakeBtn = document.getElementById("shake-btn");
    const overlay = document.getElementById("pop-up-overlay");
    const popUp = document.getElementById("pop-up");
    const cancelBtn = document.getElementById("cancel-btn");
    const submitBtn = document.getElementById("submit-btn");
    const inputField = document.getElementById("input-field");
    let isDrawing = false;
    defaultGrid = 57;

    function createGrid(num) {
        container.innerHTML = '';
        container.style.setProperty('--grid-columns', num);

        const totalSquares = num * num;
        for (let i = 0; i < totalSquares; i++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            container.appendChild(gridBox);

        };
    };
    createGrid(defaultGrid);



    changeGridBtn.addEventListener('click', (e) => {
        overlay.style.display = "block";
        popUp.style.display = "block";
        inputField.focus();
    });

    function closePopUp() {
        overlay.style.display = "none";
        popUp.style.display = "none";
        inputField.value = "";

    };

    cancelBtn.addEventListener('click', closePopUp);

    submitBtn.addEventListener('click', (e) => {
        let userNum = inputField.value.trim();
        if (isNaN(userNum) || userNum <= 0) {
            userNum = 16;
            alert("Invalid input. Defaulting to 16 x 16.");
        } else if (userNum > 100) {
            userNum = 100;
            alert("Number too large. Capping at 100 x 100.");
        } else {
            createGrid(userNum);
        }
        closePopUp();
    });


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
        };
    });

    document.body.addEventListener('mouseup', (e) => {
        isDrawing = false;
    });

    shakeBtn.addEventListener('click', (e) => {
        const gridBoxes = document.querySelectorAll('.grid-box');
        gridBoxes.forEach(box => {
            box.style.backgroundColor = 'white';
        })
    });
});