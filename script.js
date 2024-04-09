<<<<<<< HEAD
var currentIndex = 0;

function prevImage() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
}

function nextImage() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
=======
var currentIndex = 0;

function prevImage() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
}

function nextImage() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
>>>>>>> 86ff28cbf96ad51b2951dc35fa535c647b5b0f45
}