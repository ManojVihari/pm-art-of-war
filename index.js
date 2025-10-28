// Intersection Observer for Scroll Animations
const sections = document.querySelectorAll('.fade-in, .zoom-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
