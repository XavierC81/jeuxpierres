// CrÃ©ation d'objet pierre1, pierre2 et pierre3
let pierre1 = new Pierre(Math.floor(Math.random() * 7) + 1, 1);
let pierre2 = new Pierre(Math.floor(Math.random() * 7) + 1, 2);
let pierre3 = new Pierre(Math.floor(Math.random() * 7) + 1, 3);
let pierreSelectionne;
const pierreArray = [pierre1, pierre2, pierre3];

//CrÃ©ation d'objet sac1, sac2 et sac3
let sac1 = new Sac(0, 1);
let sac2 = new Sac(0, 2);
let sac3 = new Sac(0, 3);
const sacArray = [sac1, sac2, sac3];
let sacSelectionne;

// CrÃ©arion de la variable points pour comptÃ© les points de l'utilisateur
let points = 0;

refreshPierre();

document.querySelector(".s1").textContent = sac1.poidsSac;
document.querySelector(".s2").textContent = sac2.poidsSac;
document.querySelector(".s3").textContent = sac3.poidsSac;

document.querySelector(".points").textContent =
  "Vous avez " + points + " points";

function selection(pierre) {
  // RÃ´le : Met en valeur une pierre et met son poids dans une variable
  // ParamÃ¨tre : La pierre qui Ã  Ã©tÃ© sÃ©lÃ©ctionnÃ© par l'utilisateur
  // Retour : aucun

  document.querySelector(".p1").classList.remove("scale");
  document.querySelector(".p2").classList.remove("scale");
  document.querySelector(".p3").classList.remove("scale");
  pierre.classList.add("scale");

  // Si la pierre sÃ©lÃ©ctionnÃ© est Ã©gal Ã  pierre 1, pierreSelectionne est Ã©gal au poids de pierre1
  if (pierre == document.querySelector(".p1")) {
    pierreSelectionne = pierre1;
  } else if (pierre == document.querySelector(".p2")) {
    // Sinon si la pierre sÃ©lÃ©ctionnÃ© est Ã©gal Ã  pierre 2, pierreSelectionne est Ã©gal au poids de pierre2
    pierreSelectionne = pierre2;
  } else {
    // Sinon la pierre sÃ©lÃ©ctionnÃ© est Ã©gal Ã  pierre 3, pierreSelectionne est Ã©gal au poids de pierre3
    pierreSelectionne = pierre3;
  }
}

function ajoutPoids(sac) {
  // RÃ´le : Ajoute le poids de la pierre sÃ©lÃ©ctionnÃ© au poids du sac choisi par l'utilisateur
  // ParamÃ¨tre : Le sac sÃ©lÃ©ctionnÃ© par l'utilisateur
  // Retour : nÃ©ant

  // Si le sac choisi est le sac 1, on ajoute le poids de la pierre sÃ©lÃ©ctionnÃ© au sac1
  if (sac == document.querySelector(".sac1")) {
    sac1.poidsSac += pierreSelectionne.poidsPierre;
    document.querySelector(".s1").textContent = sac1.poidsSac;
    const p = pierreArray.find(
      (p) => p.idPierre === pierreSelectionne.idPierre
    );
    p.poidsPierre = Math.floor(Math.random() * 7) + 1;
  } else if (sac == document.querySelector(".sac2")) {
    //Sinon si le sac choisi est le sac2, on ajoute le poids de la pierre sÃ©lÃ©ctionnÃ© au sac2
    sac = pierre.poidsPierre;
  } else {
    //Sinon si le sac choisi est le sac3, on ajoute le poids de la pierre sÃ©lÃ©ctionnÃ© au sac3
    sac = pierre.poidsPierre;
  }

  refreshPierre();
}

function refreshPierre() {
  document.querySelector(".pierre1").textContent = pierre1.poidsPierre;
  document.querySelector(".pierre2").textContent = pierre2.poidsPierre;
  document.querySelector(".pierre3").textContent = pierre3.poidsPierre;

  document.querySelector(".p1").classList.remove("scale");
  document.querySelector(".p2").classList.remove("scale");
  document.querySelector(".p3").classList.remove("scale");
}
