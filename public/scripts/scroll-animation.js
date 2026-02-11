/**
 * Scroll Animation Module
 * @module scroll-animation
 */

/**
 * Initialize scroll animations for elements
 */
export function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));

    // Observe price items
    const priceItems = document.querySelectorAll('.price-item');
    priceItems.forEach(item => observer.observe(item));

    // Observe testimonials
    const testimonials = document.querySelectorAll('.testimonial-container');
    testimonials.forEach(testimonial => observer.observe(testimonial));

    console.log('✅ Scroll animations initialized');
}
