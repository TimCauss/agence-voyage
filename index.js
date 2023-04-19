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
