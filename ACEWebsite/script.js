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
}