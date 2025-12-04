// --- JS FEATURE 1: Mobile Navigation Toggle ---
// Selects the hamburger icon and the nav links list
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    // Toggles the 'active' class which slides the menu in/out via CSS
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// --- JS FEATURE 2: Active Scroll Highlighting (Scroll Spy) ---
// Highlights the nav link corresponding to the current section
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    // Check which section is currently in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // 60px offset for the fixed header
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Add 'active' class to matching nav link
    navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});


// --- JS FEATURE 3: Contact Form Handling ---
// Prevents page reload and simulates a successful submission
const contactForm = document.getElementById('contactForm');
const feedbackMsg = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from actually sending data (Front-end only)
    
    // Basic validation check (inputs have 'required' attribute in HTML)
    const name = document.getElementById('name').value;
    
    // Simulate sending delay
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Reset form and show success message
        contactForm.reset();
        feedbackMsg.innerHTML = `Thanks ${name}! I'll get back to you soon.`;
        feedbackMsg.classList.add('feedback-success');
        
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            feedbackMsg.classList.remove('feedback-success');
        }, 5000);
    }, 1500);
});


// --- JS FEATURE 4: Dynamic Copyright Year ---
// Automatically updates the footer year
document.getElementById('year').textContent = new Date().getFullYear();
