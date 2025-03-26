// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Navbar change on scroll
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Animation pour les éléments au scroll
    const animateOnScroll = function() {
        // Change navbar style on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('bg-light');
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.add('bg-light');
            navbar.classList.remove('shadow');
        }
        
        // Highlight current section in navbar
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Animation des éléments au scroll
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Animation initiale
    animateOnScroll();
    
    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Si menu mobile est ouvert, le fermer après clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
    
    // Ajouter la classe pour l'animation au scroll
    document.querySelectorAll('.project-card, .skill-item, #about p, .certification-card , .contact-info').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Animation pour le texte du hero
    const animateHeroText = () => {
        const heroElements = document.querySelectorAll('#hero h1, #hero h2, #hero p, #hero .btn');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 * index);
        });
    };
    
    // Initialiser les styles pour l'animation
    document.querySelectorAll('#hero h1, #hero h2, #hero p, #hero .btn').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Déclencher l'animation après un court délai
    setTimeout(animateHeroText, 500);
});

// Ajouter la classe 'animated' aux éléments animés au scroll
document.addEventListener('scroll', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
});

// Style CSS supplémentaire pour les animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);
