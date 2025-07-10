const container = document.getElementById("container");


// gridBox.classList.add("grid-box");
// container.appendChild(container.createElement(gridBox));

for (let i = 0; i < 16; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    container.appendChild(gridBox);
}

