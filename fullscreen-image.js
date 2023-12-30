document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', function() {
        const fullscreenDiv = document.getElementById('fullscreen');
        fullscreenDiv.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
        fullscreenDiv.style.display = 'flex';
    });
});

document.getElementById('fullscreen').addEventListener('click', function() {
    this.style.display = 'none';
});