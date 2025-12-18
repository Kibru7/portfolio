document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  // Mobile menu toggle
  hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.setAttribute(
      'aria-expanded',
      navMenu.classList.contains('active')
    );
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll with active link update
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Update active class
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  const onScroll = () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 25, 47, 0.98)';
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.background = 'rgba(10, 25, 47, 0.95)';
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // Initialize
});