// Liste der Bild-URLs
const images = [
    "./img/bild1.JPG",
    "./img/bild4.JPG",
    "./img/bild5.JPG",
    "./img/bild6.JPEG",
    "./img/bild7.JPEG",
    "./img/bild8.jpg",
    "./img/bild9.jpg",
    "./img/bild10.jpg",
    "./img/bild11.jpg",
    "./img/bild12.JPG"
];

let gallery = document.getElementById("gallery");
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton");
let currentImg = document.getElementById("selectedImg");
let closeButton = document.getElementById("closeButton");
let overlay = document.getElementById("overlay");
let currentImgNumber = document.getElementById("currentImageNumber");
let totalImgNumber = document.getElementById("totalImageNumber");


let currentIndex = 0;
totalImgNumber.innerText = images.length;

function toggleOverlay() {
    overlay.classList.toggle("d_none");
}

function renderImages() {
    images.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Bild";
        img.classList.add("gallery-img");
        gallery.appendChild(img);
        img.addEventListener("click", () => {
            toggleOverlay();
            selectedImg(url, index);
        });
    });
}

function selectedImg(url, index) {
    currentImg.src = url;
    currentIndex = index;
    currentImgNumber.innerText = currentIndex + 1;
}

// Event Listener für Buttons
closeButton.addEventListener("click", toggleOverlay);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        toggleOverlay();
    }
});

previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentImg.src = images[currentIndex];
    currentImgNumber.innerText = currentIndex + 1;
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    currentImg.src = images[currentIndex];
    currentImgNumber.innerText = currentIndex + 1;
});

// Bilder beim Laden rendern
document.addEventListener("DOMContentLoaded", renderImages);
