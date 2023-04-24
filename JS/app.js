
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