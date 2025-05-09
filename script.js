console.log("Script loaded!");

document.addEventListener('DOMContentLoaded', function() {
// Theme Toggle
const themeButton = document.getElementById('theme-button');
const body = document.body;

    if (themeButton) {
const themeIcon = themeButton.querySelector('i');

// Check if user has a theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' && themeIcon) {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeButton.querySelector('i');
    
            if (icon) {
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
                }
    }
});
    }

// Section Visibility
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

    if (sections.length > 0 && navLinks.length > 0) {
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-section');
            
            // Update active nav link
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
    }

// Typewriter Effect
const typedText = document.querySelector('.typed-text');
    const texts = ['Final Year BCA Student', 'Web Developer', 'Problem Solver', 'Data Analyst'];
    
    if (typedText) {
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

type();
    }

    // Experience Slider Functionality
    const slides = document.querySelectorAll('.experience-slide');
    const leftArrow = document.querySelector('.slider-arrow.left-arrow');
    const rightArrow = document.querySelector('.slider-arrow.right-arrow');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (leftArrow && rightArrow && slides.length > 0) {
        leftArrow.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
    });
        rightArrow.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        // Show the first slide initially
        showSlide(currentSlide);
}

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.querySelector('.success-popup');
    const closeSuccessPopup = document.querySelector('.close-success-popup');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (successPopup) {
                successPopup.classList.add('active');
                    contactForm.reset();
            }
        });
    }
    
    if (closeSuccessPopup && successPopup) {
        closeSuccessPopup.addEventListener('click', function() {
            successPopup.classList.remove('active');
        });
    }
});
