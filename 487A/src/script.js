let slideIndex = 1;
var otp='$37';
var sns='$33.30';
document.getElementById('otp').innerHTML = otp;
document.getElementById('sns').innerHTML = sns;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captiontext = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n<1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captiontext.innerHTML = dots[slideIndex-1].alt;
}