// ── Nav ──
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const mobileOverlay = document.querySelector('.mobile-overlay');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            if (navMenu.classList.contains('active')) toggleMobileMenu();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
            }
        }
    });
});

// ── Reduced motion ──
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// ── Reveal on scroll ──
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => el.classList.add('active'));

window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
            el.classList.add('active');
        }
    });
}, { passive: true });

// ── Skill card hover ──
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-4px) scale(1.02)'; });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── Screenshot image error handling ──
// Show placeholder when image fails to load
document.querySelectorAll('.gallery-slide img').forEach(img => {
    img.addEventListener('error', () => {
        img.setAttribute('data-failed', '1');
        img.style.display = 'none';
        // Show sibling placeholder
        const placeholder = img.nextElementSibling;
        if (placeholder && placeholder.classList.contains('gallery-placeholder')) {
            placeholder.style.display = 'flex';
        }
    });
    img.addEventListener('load', () => {
        // Hide placeholder on successful load
        const placeholder = img.nextElementSibling;
        if (placeholder && placeholder.classList.contains('gallery-placeholder')) {
            placeholder.style.display = 'none';
        }
    });
});

// ── Project Gallery ──
class ProjectGallery {
    constructor(el) {
        this.el = el;
        this.track = el.querySelector('.gallery-slides');
        this.slides = el.querySelectorAll('.gallery-slide');
        this.dots = el.querySelectorAll('.gallery-dot');
        this.counter = el.querySelector('.gallery-counter');
        this.current = 0;
        this.total = this.slides.length;
        this.autoPlayTimer = null;
        this.touchStartX = 0;

        this.init();
    }

    init() {
        this.el.querySelector('.gallery-prev')?.addEventListener('click', e => {
            e.stopPropagation();
            this.prev();
            this.resetAutoPlay();
        });

        this.el.querySelector('.gallery-next')?.addEventListener('click', e => {
            e.stopPropagation();
            this.next();
            this.resetAutoPlay();
        });

        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', e => {
                e.stopPropagation();
                this.goTo(i);
                this.resetAutoPlay();
            });
        });

        // Touch swipe
        this.el.addEventListener('touchstart', e => {
            this.touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        this.el.addEventListener('touchend', e => {
            const delta = this.touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 40) {
                delta > 0 ? this.next() : this.prev();
                this.resetAutoPlay();
            }
        }, { passive: true });

        // Pause auto-play on hover
        this.el.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.el.addEventListener('mouseleave', () => this.startAutoPlay());

        // Click to open lightbox (not on buttons)
        this.el.addEventListener('click', e => {
            if (!e.target.closest('.gallery-btn') && !e.target.closest('.gallery-dot')) {
                openLightbox(this);
            }
        });

        if (!prefersReducedMotion.matches) {
            this.startAutoPlay();
        }
    }

    goTo(index) {
        this.current = ((index % this.total) + this.total) % this.total;
        this.track.style.transform = `translateX(-${this.current * 100}%)`;
        this.dots.forEach((d, i) => d.classList.toggle('active', i === this.current));
        if (this.counter) this.counter.textContent = `${this.current + 1} / ${this.total}`;
    }

    next() { this.goTo(this.current + 1); }
    prev() { this.goTo(this.current - 1); }

    startAutoPlay() {
        if (prefersReducedMotion.matches) return;
        this.autoPlayTimer = setInterval(() => this.next(), 3200);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayTimer);
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    getImages() {
        return [...this.slides].map(slide => {
            const img = slide.querySelector('img');
            return {
                src: img?.getAttribute('src') || '',
                alt: img?.getAttribute('alt') || '',
                failed: img?.hasAttribute('data-failed'),
            };
        });
    }

    getProjectName() {
        return this.el.closest('.project-card')?.querySelector('h3')?.textContent || '';
    }
}

// Init all galleries
const galleries = [...document.querySelectorAll('.project-gallery')].map(el => new ProjectGallery(el));

// ── Lightbox ──
let lightboxGallery = null;

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxCounter = lightbox.querySelector('.lightbox-counter');
const lightboxName = lightbox.querySelector('.lightbox-project-name');

function openLightbox(gallery) {
    lightboxGallery = gallery;
    renderLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxImg.focus();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxGallery = null;
}

function renderLightboxImage() {
    if (!lightboxGallery) return;
    const images = lightboxGallery.getImages();
    const current = lightboxGallery.current;
    const item = images[current];

    lightboxName.textContent = lightboxGallery.getProjectName();
    lightboxCounter.textContent = `${current + 1} / ${images.length}`;

    lightboxImg.classList.add('loading');
    lightboxImg.alt = item.alt;
    lightboxImg.src = item.src;
    lightboxImg.onload = () => lightboxImg.classList.remove('loading');
    lightboxImg.onerror = () => lightboxImg.classList.remove('loading');
}

function lightboxNext() {
    if (!lightboxGallery) return;
    lightboxGallery.next();
    renderLightboxImage();
}

function lightboxPrev() {
    if (!lightboxGallery) return;
    lightboxGallery.prev();
    renderLightboxImage();
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-next').addEventListener('click', lightboxNext);
lightbox.querySelector('.lightbox-prev').addEventListener('click', lightboxPrev);
lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);

// Keyboard navigation
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
});
