const randomColor = () => {
    if (document.querySelector("#black").checked) {
        return "black";
    }
    const deg = Math.round(Math.random()*1000) + "deg";
    const randomColor1 = ((1<<24)*Math.random() | 0).toString(16);
    const randomColor2 = ((1<<24)*Math.random() | 0).toString(16);
    return `linear-gradient(${deg},#${randomColor1},#${randomColor2})`;
}

const createSquare = () => {
    let box = document.createElement("div");
    box.style.height = "50px";
    box.style.width  = "50px";
    box.style.background = "silver"; 
    box.style.border = "1px solid white";
    box.onmouseenter = () => {
        box.style.background = randomColor();
    }; 
    return box;
};

let row = (width) => {
    let rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    while (width > rowContainer.children.length) {
        rowContainer.appendChild(createSquare());
    }
    return rowContainer;
};

const prepareTheGrid = () => {
    const main = document.querySelector("main");

    const wantedHeight = document.querySelector("#height").value;
    const wantedWidth = document.querySelector("#width").value;

    while (wantedHeight > main.children.length) {
        main.appendChild(row(wantedWidth));
    }
}



const updateGrid = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    prepareTheGrid();
}

const heightInput = document.querySelector("#sizeInput"); 
heightInput.defaultValue = "20";

const widthInput = document.querySelector("#width");
widthInput.defaultValue = "20";

prepareTheGrid();
