
var myDiv = document.getElementById("cardImage");
let sliderNumber = 0;

function cardSlider(sliderNumber) {
    if (sliderNumber === 1) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0293/suenobelek850x2009.jpg";
    }
    else if (sliderNumber === 2) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0293/Nirvana-Hotels-23.08.24.jpg";
    }
    else if (sliderNumber === 3) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0388/765x240sn-1.jpg";
    }                                             
}                                     

setInterval(() => {
    if (sliderNumber < 3)
        sliderNumber++;
    else if (sliderNumber >= 3)
        sliderNumber = 1;

    cardSlider(sliderNumber);

}, 3000);



//var AllImages = document.querySelector(".cards-images");
//var imageWidth = document.querySelector(".timed-slider-cards").clientWidth;

//// the index value of current page
//var i = 0;

////placeholder for our setInterval function
//var timer = 0;

//// start timer function
//function Start() {

//    timer = setInterval(function () {
//        if (i < AllImages.children.length) {
//            i++;
//            AllImages.style.transform = "translateX(" + (-imageWidth * i) + "px)";
//            if (i >= AllImages.children.length) {
//                AllImages.style.transform = "translateX(0px)";
//                i = 0;
//            }
//        }
//    }, 3000);
//}

//// starting the timer
//Start();

////stop the timer
//function Stop() {
//    clearInterval(timer);
//}