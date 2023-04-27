
                                                /* Slider */
                                                
let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

let nbr_img = img_slider.length;

function enleverActiveImages() {
    for(let i = 0 ; i < nbr_img ; i++){
        img_slider[i].classList.remove('active');
    }
}
setInterval(function() {
    etape++;
    if(etape >= nbr_img){
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}, 5000)


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