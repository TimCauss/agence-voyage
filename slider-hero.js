//On récupère les figures du slider
let img_slider_hero = document.getElementsByClassName('img-slider-hero');

console.log(img_slider_hero);
//on déclare une variable pour les étapes du slider
let etape = 0;
//on déclare une variable pour le nombre d'images du slider
let nb_img_slider_hero = img_slider_hero.length;


//On déclare une fonction pour "nettoyer" le style de l'image active
function enleverActiveImage(){
    for(let i = 0; i < nb_img_slider_hero; i++){
        img_slider_hero[i].classList.remove('active-hero');
    }
}

setInterval(function(){
    etape++;
    if(etape >= nb_img_slider_hero){
        etape = 0;
    }
    enleverActiveImage();
    img_slider_hero[etape].classList.add('active-hero');
}, 5000);