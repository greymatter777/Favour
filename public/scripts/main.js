/**
 * Favour Afro Hair-Cut - Main JavaScript Module
 * @module main
 */

import { initSmoothScroll } from './smooth-scroll.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initMobileMenu } from './mobile-menu.js';
import { initScrollToTop } from './scroll-to-top.js';

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Favour Afro Hair-Cut - Initializing...');

    // Initialize modules
    initSmoothScroll();
    initScrollAnimation();
    initMobileMenu();
    initScrollToTop();

    console.log('✅ Tous les modules chargés avec succès!');
});
