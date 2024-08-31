const otel = document.getElementById("otel");
const tur = document.getElementById("tur");
const ucak = document.getElementById("ucak");

const otelPanel = document.getElementById("otelPanel");
const turPanel = document.getElementById("turPanel");
const ucakPanel = document.getElementById("ucakPanel");

otel.addEventListener("click", function () {
    otel.style.backgroundColor = "#ffc652";
    tur.style.backgroundColor = "#e5e5e5";
    ucak.style.backgroundColor = "#e5e5e5";

    otelPanel.style.display = "block";
    turPanel.style.display = "none";
    ucakPanel.style.display = "none";
});

tur.addEventListener("click", function () {
    tur.style.backgroundColor = "#ffc652";
    otel.style.backgroundColor = "#e5e5e5";
    ucak.style.backgroundColor = "#e5e5e5";

    turPanel.style.display = "block";
    ucakPanel.style.display = "none";
    otelPanel.style.display = "none";
});

ucak.addEventListener("click", function () {
    ucak.style.backgroundColor = "#ffc652";
    tur.style.backgroundColor = "#e5e5e5";
    otel.style.backgroundColor = "#e5e5e5";

    ucakPanel.style.display = "block";
    otelPanel.style.display = "none";
    turPanel.style.display = "none";
});