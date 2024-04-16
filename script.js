import { addition, pi } from "./math.js";

/**
 * Cette fonction permet de récupérer les chiffres/nombres entré par l'utilisateur et les passer
 * en tant que paramètre dans la fonction addition() du fichier math.js
 */
function calcul() {
    const nombre1 = parseFloat(document.getElementById('nombre1').value);
    const nombre2 = parseFloat(document.getElementById('nombre2').value);

    const resultat = addition(nombre1, nombre2);
    afficherDonnees(resultat);
}

/**
 * Cette fonction permet d'afficher les données en passant en paramètre le résultat de la fonction
 * calcul()
 * @param {*} resultat 
 */
function afficherDonnees(resultat) {
    const affichageDonnees = document.getElementById('affichageDonnees');
    affichageDonnees.innerHTML = '';

    const resultatElement = document.createElement('p');
    resultatElement.innerHTML = `Le résultat est : ${resultat}<br> PI vaut : ${pi}`;

    affichageDonnees.appendChild(resultatElement);
}

document.getElementById('calcul').addEventListener('click', function (event) {
    event.preventDefault();
    calcul();
});