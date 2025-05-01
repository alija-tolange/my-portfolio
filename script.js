document.addEventListener('DOMContentLoaded', function() {
    // Typed.js for animated typing effect
    const typedName = new Typed('#typed-name', {
        strings: ['Your Name'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
        showCursor: false
    });
    
    const typedText = new Typed('#typed-text', {
        strings: ['Web Developer', 'Designer', 'Professional'],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13); // Replace with your coordinates
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add a marker (replace with your location)
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('My Location')
        .openPopup();
    
    // Certificate modal functionality
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-certificate');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Animate skill bars on scroll
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.9)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'white';
            navbar.style.padding = '20px 0';
        }
    });
});