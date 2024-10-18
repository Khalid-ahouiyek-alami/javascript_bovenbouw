function verzamelNamen() {
    let aantal = document.getElementById('aantalNamen').value;
    if (aantal < 3) {
        alert("U moet minimaal 3 namen invoeren.");
        return;
    }

    
    let namenArray = [];
    for (let i = 0; i < aantal; i++) {
        let naam = prompt(`Voer naam ${i+1} in:`);
        namenArray.push(naam);
    }

    document.getElementById('namenOutput').textContent = namenArray.join(", ");
    document.getElementById('omgekeerdeNamenOutput').textContent = namenArray.reverse().join(", ");
}