
var myDiv = document.getElementById("cardImage");
let sliderNumber = 0;

function cardSlider(sliderNumber) {
    if (sliderNumber === 1) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0036/250x180R.jpg";
    }
    else if (sliderNumber === 2) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0037/250x180.jpg";
    }
    else if (sliderNumber === 3) {
        myDiv.src = "https://cdn.tatilsepeti.com/Files/Banner/0036/250x180_vizesizbalkan-R.jpg";
    }
}

setInterval(() => {
    if (sliderNumber < 3)
        sliderNumber++;
    else if (sliderNumber >= 3)
        sliderNumber = 1;

    cardSlider(sliderNumber);

}, 3000);

