var namen=["ogulcan", "dhino", "meli","khalid"]
let container = document.getElementById("namencontainer")



for(let i=0; i<namen.length; i++){
    console.log(namen[i]);
    var button = document.createElement("button");
    button.innerText= namen[i];
    button.addEventListener("click", buttonclicked)
    
    container.appendChild(button);

}

function buttonclicked(e){
    alert(e.target.innerText + "buttonclicked");
    e.target.remove();
}