let compteur = 0;
function suivant() {
    compteur = compteur + 1;
    let v = document.getElementById("valeur");
    v.innerHTML = compteur;
}
let b = document.getElementById("valeur");
b.addEventListener("click", suivant);