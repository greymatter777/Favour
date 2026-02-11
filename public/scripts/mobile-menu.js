/**
 * Mobile Menu Module
 * @module mobile-menu
 */

/**
 * Initialize mobile menu toggle
 */
export function initMobileMenu() {
    const nav = document.querySelector('nav');
    
    // Create menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    // Insert toggle button at the beginning of nav
    if (window.innerWidth <= 768) {
        nav.insertBefore(menuToggle, nav.firstChild);
    }
    
    // Toggle menu on click
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-open');
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('menu-open');
            const existingToggle = nav.querySelector('.menu-toggle');
            if (existingToggle) {
                existingToggle.remove();
            }
        } else if (!nav.querySelector('.menu-toggle')) {
            nav.insertBefore(menuToggle, nav.firstChild);
        }
    });

    console.log('✅ Mobile menu initialized');
}
