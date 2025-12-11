// Home page specific JavaScript with enhanced animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero content on load
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTagline = document.querySelector('.hero-tagline');
    
    // Set initial state
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(20px)';
    heroTagline.style.opacity = '0';
    heroTagline.style.transform = 'translateY(20px)';
    
    // Animate elements with staggered delays
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        heroSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 500);
    
    setTimeout(() => {
        heroTagline.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroTagline.style.opacity = '1';
        heroTagline.style.transform = 'translateY(0)';
    }, 700);
});