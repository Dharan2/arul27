const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Get elements
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Event listener for clicks on images
gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.classList.add('active');
    }
});

// Close lightbox when close button or outside the image is clicked
closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
