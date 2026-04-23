document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero image
    const heroImage = document.getElementById('heroImage');
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        heroImage.style.transform = `translateY(${scrollValue * 0.3}px) scale(${1 + scrollValue * 0.0002})`;
    });

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll for internal links if any (anchor tags)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple console log to confirm load
    console.log("Memory initialized. Time is flowing.");
});
