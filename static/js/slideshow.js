
document.addEventListener('DOMContentLoaded', () => {

    const slides  = document.querySelectorAll('.blog-slideshow .slide');
    const prevBtn = document.querySelector('.blog-slideshow .prev');
    const nextBtn = document.querySelector('.blog-slideshow .next');
    const dotsBox = document.querySelector('.blog-slideshow .dots');

    if (!slides.length) return;

    // build dots
    slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => show(i);
    dotsBox.appendChild(dot);
    });
    const dots = dotsBox.children;

    let idx = 0;

    function show(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach(s => (s.style.display = 'none'));
    [...dots].forEach(d => d.classList.remove('active'));
    slides[idx].style.display = 'block';
    dots[idx].classList.add('active');
    }

    prevBtn.onclick = () => show(idx - 1);
    nextBtn.onclick = () => show(idx + 1);

    show(0);   // reveal first slide
});