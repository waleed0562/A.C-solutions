// ============================================
// A.C. SOLUTIONS - MAIN JAVASCRIPT
// ============================================

// Favicons + lighter navbar logo + AdSense meta (runs immediately)
(function initBranding() {
    var inBlog = window.location.pathname.indexOf('/blog/') !== -1;
    var base = inBlog ? '../assets/' : 'assets/';

    if (!document.querySelector('meta[name="google-adsense-account"]')) {
        var adsense = document.createElement('meta');
        adsense.setAttribute('name', 'google-adsense-account');
        adsense.setAttribute('content', 'ca-pub-9705985338526886');
        document.head.appendChild(adsense);
    }

    // Favicon links
    if (!document.querySelector('link[rel="icon"][sizes="32x32"]')) {
        var icons = [
            { rel: 'apple-touch-icon', sizes: '180x180', href: base + 'apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: base + 'favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: base + 'favicon-16x16.png' },
            { rel: 'shortcut icon', href: base + 'favicon.ico' },
            { rel: 'manifest', href: base + 'site.webmanifest' }
        ];
        icons.forEach(function (cfg) {
            var link = document.createElement('link');
            Object.keys(cfg).forEach(function (k) { link.setAttribute(k, cfg[k]); });
            document.head.appendChild(link);
        });
    }

    function swapLogos() {
        document.querySelectorAll('.logo img').forEach(function (img) {
            var src = img.getAttribute('src') || '';
            if (src.indexOf('ac-solutions-logo.png') !== -1) {
                img.setAttribute('src', src.replace('ac-solutions-logo.png', 'android-chrome-192x192.png'));
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', swapLogos);
    } else {
        swapLogos();
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initFormHandling();
    initPortfolioFilters();
    initBlogFilters();
    initSmoothScroll();
    initScrollAnimations();
    initCarouselNav();
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!menuToggle) return;
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
    document.querySelectorAll('.application-form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                return response.json().then(data => {
                    const message = (data && data.errors) ? data.errors.map(err => err.message).join(', ') : 'Something went wrong. Please try again.';
                    showNotification(message, 'error');
                });
            }
        })
        .catch(() => {
            showNotification('Unable to send message. Please check your connection and try again.', 'error');
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';
    }
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                showNotification('Thank you for subscribing!', 'success');
                form.reset();
            } else {
                showNotification('Something went wrong. Please try again.', 'error');
            }
        })
        .catch(() => {
            showNotification('Unable to subscribe. Please check your connection and try again.', 'error');
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `;
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification { position: fixed; bottom: 20px; right: 20px; max-width: 400px; background: linear-gradient(135deg, #2563EB, #22D3EE); color: white; padding: 1rem; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000; animation: slideUp 0.3s ease-out; }
            .notification-success { background: linear-gradient(135deg, #10b981, #22D3EE); }
            .notification-error { background: linear-gradient(135deg, #ef4444, #f87171); }
            .notification-content { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
            .notification-close { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0; width: 30px; height: 30px; }
            @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `;
        document.head.appendChild(style);
    }
    document.body.appendChild(notification);
    notification.querySelector('.notification-close').addEventListener('click', () => notification.remove());
    setTimeout(() => notification.remove(), 5000);
}

function initPortfolioFilters() {
    const portfolioSection = document.querySelector('.portfolio-section');
    if (!portfolioSection) return;
    const filterButtons = portfolioSection.querySelectorAll('.filter-btn');
    const portfolioCards = portfolioSection.querySelectorAll('.portfolio-card');
    if (filterButtons.length === 0) return;
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initBlogFilters() {
    const blogSection = document.querySelector('.blog-section');
    if (!blogSection) return;
    const filterButtons = blogSection.querySelectorAll('.filter-btn');
    const blogCards = blogSection.querySelectorAll('.blog-card');
    if (filterButtons.length === 0 || blogCards.length === 0) return;
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            blogCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('section, .card, .service-card').forEach(el => observer.observe(el));
}

function initCarouselNav() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => { carousel.scrollLeft += 300; });
        prevBtn.addEventListener('click', () => { carousel.scrollLeft -= 300; });
    }
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
setActiveNav();

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('A.C. SOLUTIONS Website Loaded Successfully');
