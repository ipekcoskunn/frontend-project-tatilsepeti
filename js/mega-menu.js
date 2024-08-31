const menuOtel = document.getElementById("menuOtel");
const otelMegaMenu = document.getElementById("otelMegaMenu");
let sayi = 0;

menuOtel.addEventListener("mouseover", function () {
    sayi++;
    control();
});

otelMegaMenu.addEventListener("mouseover", function () {
    sayi++;
    control();
});

menuOtel.addEventListener("mouseout", function () {
    sayi--;
    control();
});

otelMegaMenu.addEventListener("mouseout", function () {
    sayi--;
    control();
});

function control() {
    if (sayi === 0)
        otelMegaMenu.style.display = "none";
    else
        otelMegaMenu.style.display = "flex";
}