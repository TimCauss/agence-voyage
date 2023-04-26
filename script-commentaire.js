// script.js
let commentaireCourant = 1;

// Fonction pour afficher le commentaire suivant
function afficherCommentaireSuivant() {
    let commentaireActuel = document.getElementById(`commentaire${commentaireCourant}`);
    commentaireActuel.style.display = 'none';
    commentaireCourant++;
    if (commentaireCourant > 9) {
        commentaireCourant = 1;
    }
    let commentaireSuivant = document.getElementById(`commentaire${commentaireCourant}`);
    commentaireSuivant.style.display = 'block';
}

// Appeler la fonction pour afficher le premier commentaire
afficherCommentaireSuivant();

// Définir un intervalle pour afficher automatiquement les commentaires toutes les 3 secondes
setInterval(afficherCommentaireSuivant, 15000);