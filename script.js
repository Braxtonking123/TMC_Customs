

document.addEventListener('DOMContentLoaded', function(){
    const galleryButton = document.getElementById("gallery");
    const galleryContainer = document.getElementById("gallery-container");

    if(!galleryButton || !galleryContainer) {
        console.error('elements not found');
        return
    }

    galleryButton.addEventListener('click', function() {
        console.log('Button Clicked');
        galleryContainer.classList.toggle('visible');
    });
});
