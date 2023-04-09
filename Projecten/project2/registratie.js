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
const knop = document.getElementById('verzenden')
knop.addEventListener("click",validateForm);

let errors = [];

function validateForm(){
    
    let naam = document.getElementById('naam').value;
    let voornaam = document.getElementById('voornaam').value;
    let gebruikersnaam = document.getElementById('gebruikersnaam').value;
    let email = document.getElementById('inputEmail4').value;
    let wachtwoord = document.getElementById('inputPassword4').value;
    let wachtwoord2 = document.getElementById('inputPassword42').value;
    let adres = document.getElementById('adres').value;
    let land = document.getElementById('land').value;
    let provincie = document.getElementById('provincie').value;
    let postcode = document.getElementById('postcode').value;

    checkEmptyField(naam, 'Het veld naam is vereist.');
    checkEmptyField(voornaam, 'Het veld voornaam is vereist.');
    checkEmptyField(gebruikersnaam, 'Het veld gebruikersnaam is vereist.');
    checkEmptyField(email, 'het veld email is vereist.');
    checkEmptyField(wachtwoord, 'Het veld wachtwoord is vereist.');
    checkEmptyField(wachtwoord2, 'Het veld herhaal wachtwoord is vereist.');
    checkEmptyField(land, 'Land is vereist.');
    checkEmptyField(adres, 'Adres is vereist.');
    checkEmptyField(provincie, 'Provincie is vereist.');
    checkEmptyField(postcode, 'Het veld postcode is vereist.');

    validateEmail(email);
    if (!validateEmail(email)){
      errors.push('E-mailaders is niet correct.')
    }

    if (wachtwoord.length < 8){
      errors.push('Je wachtwoord moet minstens 8 tekens lang zijn');
    }
    else if (wachtwoord != wachtwoord2){
      error.push('Je wachtwoorden komen niet overeen')
    }

    if (!getElementById('voorwaarden').checked){
      errors.push('Je moet de algemene voorwaarden accepteren.')
    }



    if (errors.length > 0){
      const errorElements = document.querySelectorAll('.error');
      errorElements.forEach(element => {
        element.textContent = errors.join('<br>');
        element.classList.remove('visually-hidden');
      });
    }
    else{
      let goed = document.getElementById(succes);
      document.getElementById('betalingswijze').classList.remove('visually-hidden');

      goed.classList.remove('visually-hidden');

    }

}

function checkEmptyField(veld, melding){
  if (veld == '' || veld == null){
    errors.push(melding)
    return 0;
  }

  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  function validateEmail(emailadres){
    let re = /\S+@\S+\.\S+/;
    return re.test(emailadres);
  }
}

function validatePayment(veld){
  
  let bool = false;

  for (let i=0;i=veld;i++){
    if (x[i].checked){
      bool = true;
    }
    else{
      bool = false;
    }
  }

  if (!bool){
    let bericht = 'je betalingswijze is ' + veld;
    //document.getElementById('methode').innerText = bericht;
    document.replaceChild(bericht, 'Aww')
    return true;
  }
}

function checkPC(veld){
  if (veld == '' || veld == null){
    errors.push('Het veld postcode is vereist');
    return 0;
  }
  else{
    if (veld >= 1000 && veld < 10000){
      return true;
    }
    else{
      errors.push('De waarde van postcode moet tussen 1000 en 9999 liggen');
    }
  }
}