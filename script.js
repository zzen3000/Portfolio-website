//MOBILE MENU TOGGLE ((https://stackoverflow.com/questions/79672575/how-can-i-add-a-responsive-toggle-button-for-a-mobile-nav-menu-using-javascript))
const mobileBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

//for mobile toggle
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

//close sidebar when clicking outside (on main content)
if (mainContent) {
    mainContent.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
}


// #A 1 toggle draktheme
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;
const htmlElement = document.documentElement;

// local storage checking theme fot the current user default theme (https://stackoverflow.com/questions/70117921/how-can-i-use-localstorage-in-a-dark-mode-toggle)
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
        themeIcon.textContent = '☀'; //Sun icon for switching to light
    } else {
        themeIcon.textContent = '☾'; //Moon icon for switching to dark
    }
}


//active link highlight (https://stackoverflow.com/questions/38025517/how-to-highlight-active-links)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        //check if offset
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


//contaact section handling
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'SENDING...';
        btn.disabled = true;

        // api calling
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

// chaeck and year update
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
