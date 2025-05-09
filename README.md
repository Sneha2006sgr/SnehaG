# Sneha Gond's Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, experience, and achievements. The website features a clean design with smooth animations, dark/light theme toggle, and interactive elements.

## 🌟 Features

### 1. Theme Toggle
- Smooth transition between light and dark themes
- Theme preference saved in localStorage
- Custom color variables for both themes

```javascript
// Theme Toggle Implementation
const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeButton.querySelector('i');
    
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
```

### 2. Navigation
- Fixed side navigation
- Smooth scrolling to sections
- Active section highlighting
- Responsive design for mobile devices

```css
/* Navigation Styles */
nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 100;
}

nav ul li a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    position: relative;
    transition: var(--transition);
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
}
```

### 3. Animations and Effects
- Glitch effect on name
- Typewriter effect for roles
- Smooth scroll animations
- Hover effects on cards and buttons
- Floating shapes in about section

```javascript
// Typewriter Effect
const typedText = document.querySelector('.typed-text');
const texts = ['Web Developer', 'Problem Solver', 'AI Intern', 'Data Analyst'];

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
```

### 4. Sections
1. **Home**
   - Animated name with glitch effect
   - Typewriter effect for roles
   - Profile image with hover effect
   - Scroll indicator

2. **About**
   - Personal information
   - Academic achievements
   - Certifications
   - Currently learning

3. **Projects**
   - Project cards with hover effects
   - Technology stack tags
   - Source code and live demo links
   - Project images with zoom effect

4. **Experience**
   - Timeline layout
   - Company logos
   - Role descriptions
   - Technology used

5. **Skills**
   - Categorized skill cards
   - Interactive hover effects
   - Progress indicators
   - Responsive grid layout

6. **Education**
   - Timeline design
   - Academic achievements
   - Institution details
   - Year indicators

7. **Achievements**
   - Card-based layout
   - Category-wise organization
   - Interactive elements
   - Responsive design

8. **Contact**
   - Contact form with validation
   - Social media links
   - Success popup
   - Direct contact information

## 🛠️ Technologies Used

- **HTML5**
  - Semantic markup
  - Responsive design
  - Accessibility features

- **CSS3**
  - CSS Variables for theming
  - Flexbox and Grid layouts
  - Animations and transitions
  - Media queries for responsiveness

- **JavaScript**
  - DOM manipulation
  - Event handling
  - LocalStorage for theme preference
  - Intersection Observer API
  - Form validation

- **Libraries**
  - Font Awesome for icons
  - Google Fonts (Poppins)
  - CDN resources

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- 1200px for large screens
- 768px for tablets
- 480px for mobile devices

```css
@media screen and (max-width: 768px) {
    header {
        width: 100%;
        height: auto;
        bottom: 0;
        top: auto;
    }

    nav ul {
        flex-direction: row;
        justify-content: space-around;
        background-color: var(--card);
        padding: 10px 0;
    }
}
```

## 🎨 Theme System

The website uses CSS variables for theming:

```css
:root {
    --primary: #5b6ee1;
    --secondary: #ff85a1;
    --text: #232946;
    --bg: #f4f7fa;
    --card: #ffffff;
    --shadow: rgba(91, 110, 225, 0.07);
}

body.dark-theme {
    --primary: #8f88ff;
    --secondary: #ff85a1;
    --text: #f3f3f3;
    --bg: #181f2a;
    --card: #232346;
    --shadow: rgba(143, 136, 255, 0.10);
}
```

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Explore the different sections
4. Try the theme toggle
5. Test the contact form

## 📝 Notes

- The website uses modern CSS features like CSS Grid and Flexbox
- JavaScript is used for interactive features and animations
- All images are optimized for web use
- The code is well-commented for easy understanding
- The website follows accessibility guidelines

## 🔧 Future Improvements

- Add more interactive animations
- Implement a blog section
- Add a project filter system
- Integrate a backend for the contact form
- Add more language support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Sneha Gond
- LinkedIn: [Sneha Gond](https://www.linkedin.com/in/sneha-gond/)
- GitHub: [Sneha2006sgr](https://github.com/Sneha2006sgr)
- Email: snehasgr1675@gmail.com 