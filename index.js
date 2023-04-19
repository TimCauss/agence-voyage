//on stock le header
const header = document.querySelector("header");
const logo = document.getElementsByClassName("svg-icon");

console.log(logo[0]);
console.log(logo[1]);

//on écoute le scroll
window.addEventListener("scroll", () => {
    //si le scroll est supérieur à 0
    if(window.scrollY > 0){
        //on ajoute la classe scroll au header
        header.classList.add("scroll");
        logo[0].classList.add("logo-scroll");
        logo[1].classList.add("logo-scroll");
    }else{
        //sinon on l'enlève
        header.classList.remove("scroll");
        logo[0].classList.remove("logo-scroll");
        logo[1].classList.remove("logo-scroll");
    }
});
