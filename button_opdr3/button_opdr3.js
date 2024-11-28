
const totalButtons = 30; // aantal knoppen
const buttonsPerRow = 5; // knoppen per rij

const container = document.getElementById("container");

function createButtons(total, perRow) {
    container.classList.add("button-grid");

    const colors = ["red", "purple", "blue", "black"]; // kleuren voor elke klik

    for (let i = 1; i <= total; i++) {
        const button = document.createElement("button");

        button.textContent = i;
        button.classList.add("grid-button");

        let clickCount = 0; // bijhouden hoe vaak er op de knop is geklikt

        button.addEventListener("click", () => {
            clickCount++; // verhoog het aantal klikken

            if (clickCount <= colors.length) {
                // Verander de kleur van de knop
                button.className = `grid-button ${colors[clickCount - 1]}`;
            } else {
                // Verwijder de knop na 5 klikken
                button.remove();
            }
        });

        container.appendChild(button);
    }
}

createButtons(totalButtons, buttonsPerRow);
