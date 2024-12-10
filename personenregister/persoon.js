 var lijst =[{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 },
 {
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
 },
 {
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
 },
 {
    "voornaam": "Klaas",
    "achternaam": "Wever",
    "nationaliteit": "Nederlandse",
    "leeftijd": 73,
    "gewicht": 85
 },
 {
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
 },
 {
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
 },
 {
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
 }]
 
var x = document.getElementsByTagName("BODY")[0];

lijst.forEach(persoon =>  {
    var voornaam = document.createElement("p");
    var achternaam = document.createElement("p");
    var nationaliteit = document.createElement("p");
    var leeftijd = document.createElement("p");
    var gewicht = document.createElement("p");

    voornaam.innerHTML = persoon["voornaam"];
    achternaam.innerHTML = persoon["achternaam"];
    nationaliteit.innerHTML = persoon["nationaliteit"];
    leeftijd.innerHTML = persoon["leeftijd"];
    gewicht.innerHTML = persoon["gewicht"];

    x.append(voornaam);
    x.append(achternaam);
    x.append(nationaliteit);
    x.append(gewicht);

});



