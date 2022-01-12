/*let compteur = 0;
function suivant() {
    compteur = compteur + 1;
    let v = document.getElementById("valeur");
    v.innerHTML = compteur;
}
*/
let b = document.getElementById("valeur");
b.addEventListener('click', function(){          // On écoute l'événement click
    alert("C'est cliqué !");               // On change le contenu de notre élément pour afficher "C'est cliqué !"
}
);