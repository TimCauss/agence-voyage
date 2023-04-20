//on stock le header
const header = document.querySelector("header");
//on stock les elements svg-icon
const logo = document.getElementsByClassName("svg-icon");

//on écoute le scroll
window.addEventListener("scroll", () => {
  //si le scroll est supérieur à 0
  if (window.scrollY > 0) {
    //on ajoute la classe scroll au header
    header.classList.add("scroll");
    //on parcourt le tableau logo
    for (let i = 0; i < logo.length; i++) {
      //on ajoute la classe logo-scroll aux éléments du tableau logo
      logo[i].classList.add("logo-scroll");
    }
  } else {
    //sinon on l'enlève
    header.classList.remove("scroll");
    //on parcourt le tableau logo
    for (let item = 0; item < logo.length; item++) {
      //on enlève la classe logo-scroll aux éléments du tableau logo
      logo[item].classList.remove("logo-scroll");
    }
  }
});

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