/**
 * PERSONAL PORTFOLIO SCRIPT
 * Features:
 * 1. Mobile Sidebar Toggle
 * 2. Theme Switcher (Dark/Light)
 * 3. Scroll Spy (Active Link Highlight)
 * 4. Contact Form Simulation
 */

// --- 1. MOBILE MENU TOGGLE ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Open/Close sidebar on mobile click
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside (on main content)
if (mainContent) {
    mainContent.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
}


// --- 2. THEME SWITCHER (Dark/Light) ---
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;
const htmlElement = document.documentElement;

// Check local storage for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
if(themeIcon) updateIcon(savedTheme);

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀'; // Sun icon for switching to light
    } else {
        themeIcon.textContent = '☾'; // Moon icon for switching to dark
    }
}


// --- 3. SCROLL SPY (Active Link Highlighting) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust offset for better accuracy
        if (pageYOffset >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// --- 4. CONTACT FORM HANDLING ---
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'SENDING...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            form.reset();
            feedback.classList.add('feedback-success');
            btn.innerText = originalText;
            btn.disabled = false;

            setTimeout(() => {
                feedback.classList.remove('feedback-success');
            }, 3000);
        }, 1500);
    });
}

// --- 5. YEAR UPDATE ---
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
