var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
    for (i = 0; i < metas.length; i++) {
        if (metas[i].name == "viewport") {
            metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        }
    }
    document.addEventListener("gesturestart", gestureStart, false);
}

function gestureStart() {
    for (i = 0; i < metas.length; i++) {
        if (metas[i].name == "viewport") {
            metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
        }
    }
}

window.onload = function() {
    var content = document.getElementById("content");
    var tables = content.getElementsByTagName("table");
    if (tables.length >= 0) {
        for (var i = 0; i < tables.length; i++) {
            tables[i].outerHTML = "<div class='table-container'>" + tables[i].outerHTML + "</div>"
        }
    }
}

temas_array = ["dccerro", "tarreo"];
temas = {}

temas_array.forEach(tema => {
    temas[tema] = 1
    showSlides(temas[tema], tema);
});


// Next/previous controls
function plusSlides(n, imagen) {
    showSlides(temas[imagen] += n, imagen);
}

// Thumbnail image controls
function currentSlide(n, imagen) {
    showSlides(temas[imagen] = n, imagen);
}

function showSlides(n, imagen) {
    var i;
    var slides = document.getElementsByClassName("mySlides "+ imagen);

    console.log(slides);

    if (n > slides.length) {temas[imagen] = 1}
    if (n < 1) {temas[imagen] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[temas[imagen]-1].style.display = "block";
}