document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('#main-nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
      }
    });
  });
  
  // Product details toggle
  const productTitles = document.querySelectorAll('.product-info h3');
  productTitles.forEach(title => {
    title.addEventListener('click', function() {
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
    });
  });
  
  // Product card details toggle
  const productCardTitles = document.querySelectorAll('.product-card h3');
  productCardTitles.forEach(title => {
    title.addEventListener('click', function() {
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
    });
  });
  
  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Header scroll effect
  const header = document.getElementById('main-header');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.getElementById('main-header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
