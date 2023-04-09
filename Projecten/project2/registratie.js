//hieronder veranderen de provincie opties aan de hand van welk land men selecteerd
const landField = document.getElementById("land");
const provinciesField = document.getElementById("provincie");

const provincies = {
  Nederland: ["Groningen", "Friesland", "Drenthe", "Overijssel", "Flevoland", "Gelderland", "Utrecht", "Noord-Holland", "Zuid-Holland", "Zeeland", "Noord-Brabant", "Limburg"],
  België: ["Antwerpen", "Henegouwen", "Limburg", "Luik", "Luxemburg", "Namen", "Oost-Vlaanderen", "Vlaams-Brabant", "Waals-Brabant", "West-Vlaanderen"],
  Duitsland: ["Baden-Württemberg", "Beieren", "Berlijn", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Voor-Pommeren", "Nedersaksen", "Noordrijn-Westfalen", "Rijnland-Palts", "Saarland", "Saksen", "Saksen-Anhalt", "Schleswig-Holstein", "Thüringen"],
  Frankrijk: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandië", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"],
  Luxemburg: ["Diekirch", "Grevenmacher", "Luxemburg"]
};

landField.addEventListener("change", function() {
  provinciesField.innerHTML = "<option value=''>Kies een provincie</option>";
  
  const selectedLand = landField.value;
  provincies[selectedLand].forEach(function(provincie) {
    const option = document.createElement("option");
    option.value = provincie;
    option.text = provincie;
    provinciesField.appendChild(option);
  });
});

//https://www.youtube.com/watch?v=CYlNJpltjMM&t=461s&ab_channel=JavaScriptAcademy
const form = document.getElementById('form');
const naam = document.getElementById("naam");
const voornaam = document.getElementById("voornaam");
const gebruikersnaam = document.getElementById("gebruikersnaam");
const email = document.getElementById("inputEmail4");
const wachtwoord = document.getElementById("inputPassword4");
const wachtwoordV = document.getElementById("inputPassword4");
const adres = document.getElementById("adres");
const land = document.getElementById("land");
const provincie = document.getElementById("provincie");
const postcode = document.getElementById("postcode");
const hoogte = document.getElementById("hoogte");
const betaling = document.getElementById("betaling");

//https://www.youtube.com/watch?v=msz6g62PimM&ab_channel=LearnCoding
//https://www.youtube.com/watch?v=35SxoozB6vQ&ab_channel=M-softTech
//https://stackoverflow.com/questions/13717648/how-to-display-multiple-error-messages-on-the-same-page-using-javascript
document.getElementById("submit-button").addEventListener("click",valideteForm);

let errors[];

function valideteForm(){
    let naam = document.getElementById('naam');
    let voornaam = document.getElementById('voornaam');
    let gebruikersnaam = document.getElementById('gebruikersnaam');
    let email = document.getElementById('inputEmail4');
    let wachtwoord = document.getElementById('inputPassword4');
    let wachtwoord2 = document.getElementById('inputPassword42');
    let adres = document.getElementById('adres');
    let land = document.getElementById('land');
    let provincie = document.getElementById('provincie');
    let postcode = document.getElementById('postcode');


}