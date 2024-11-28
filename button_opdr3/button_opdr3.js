
const totalButtons = 30; //aantal knoppen
const buttonsPerRow = 5; //knoppen per rij


const container = document.getElementById("container");


function createButtons(total, perRow) {
    container.classList.add("button-grid"); 

    for (let i = 1; i <= total; i++) {
        const button = document.createElement("button");


        button.textContent = i;
        button.classList.add("grid-button");

        button.addEventListener("click", () => {
            button.classList.toggle("red"); 
        });

        container.appendChild(button);
    }
}


createButtons(totalButtons, buttonsPerRow);
