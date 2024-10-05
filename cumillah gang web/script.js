document.querySelector('.cta-button').addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 6px 20px rgba(255, 78, 80, 0.7)';
});

document.querySelector('.cta-button').addEventListener('mouseleave', function() {
    this.style.boxShadow = '0 4px 15px rgba(255, 78, 80, 0.5)';
});

