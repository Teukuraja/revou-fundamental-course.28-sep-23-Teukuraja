document.getElementById("button").addEventListener("click", function () {
    let name = document.getElementById("your-name").value;
    let email = document.getElementById("email").value;
    let errorDiv = document.getElementById("error-message");
    errorDiv.innerHTML = "";
    if (name.trim() === "") {
        errorDiv.innerHTML += "Nama harus diisi.<br>";
   
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorDiv.innerHTML += "Email tidak valid.<br>";
    }


    if (errorDiv.innerHTML !== "") {
        event.preventDefault();
    }
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Ubah gambar setiap 2 detik
    }
});

const textElement = ['Shop In Indonesia ', ' Everyday with the best ingredients'];
let count = 0;
let textindex = 0;
let currenttext = '';
let words = '';
 
(function ngetik(){

    if(count == textElement.length){
        count = 0;
    }

    currenttext = textElement [count];

    words = currenttext.slice (0, ++textindex);
    document.querySelector ('.efek-ngetik').textContent = words;

    if (words.length == currenttext.length){
        count++;
        textindex = 0;
    }

    setTimeout(ngetik, 300);
    


})();
